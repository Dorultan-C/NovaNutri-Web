"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Flag } from "@/components/flags";
import { localizedLegalPath } from "@/lib/language-adapter";
import { SITE_LANGUAGES, type SiteLanguage, type SiteLanguageCode } from "@/lib/site-language";
import { useSiteLanguage } from "@/lib/use-site-language";

function fold(value: string) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function matches(language: SiteLanguage, query: string) {
  if (!query) return true;
  const haystack = fold(`${language.label} ${language.englishName} ${language.short} ${language.code}`);
  return haystack.includes(fold(query.trim()));
}

export default function LanguageMenu() {
  const { language, setLanguage } = useSiteLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const current = SITE_LANGUAGES.find((item) => item.code === language) ?? SITE_LANGUAGES[0];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const filtered = useMemo(
    () => SITE_LANGUAGES.filter((item) => matches(item, query)),
    [query],
  );

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => searchRef.current?.focus());
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const item = filtered[active];
    if (!item) return;
    document.getElementById(`${listId}-${item.code}`)?.scrollIntoView({ block: "nearest" });
  }, [active, filtered, listId, open]);

  const close = (restoreFocus = true) => {
    setOpen(false);
    setQuery("");
    if (restoreFocus) triggerRef.current?.focus();
  };

  const choose = (code: SiteLanguageCode) => {
    setLanguage(code);
    const dest = localizedLegalPath(pathname || "/", code);
    close();
    if (dest && dest !== (pathname || "/")) router.push(dest);
  };

  const onSearchKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(filtered.length - 1, index + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(0, index - 1));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(Math.max(0, filtered.length - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = filtered[active];
      if (item) choose(item.code);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Tab") {
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div className="lang-picker" ref={rootRef}>
      <button
        type="button"
        ref={triggerRef}
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`Language: ${current.label}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <Flag id={current.flag} />
        <span className="lang-short">{current.short}</span>
        <svg className={`lang-chevron${open ? " is-open" : ""}`} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.2 4.2 L6 8 L9.8 4.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <div className="lang-menu">
          <input
            ref={searchRef}
            className="lang-search"
            type="search"
            value={query}
            placeholder="Search languages"
            aria-label="Search languages"
            aria-autocomplete="list"
            aria-controls={listId}
            aria-activedescendant={filtered[active] ? `${listId}-${filtered[active].code}` : undefined}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onSearchKeyDown}
          />
          <ul id={listId} className="lang-list" role="listbox" aria-label="Languages">
            {filtered.length === 0 ? (
              <li className="lang-empty">No languages</li>
            ) : (
              filtered.map((item, index) => {
                const selected = item.code === language;
                return (
                  <li
                    key={item.code}
                    id={`${listId}-${item.code}`}
                    role="option"
                    aria-selected={selected}
                    className={`lang-row${index === active ? " is-active" : ""}`}
                    onMouseEnter={() => setActive(index)}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => choose(item.code)}
                  >
                    <Flag id={item.flag} />
                    <span className="lang-name">{item.label}</span>
                    {selected ? <span className="lang-check" aria-hidden="true">✓</span> : null}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
