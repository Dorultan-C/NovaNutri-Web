"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Flag, type FlagId } from "@/components/flags";
import { useLanguage, useSiteMessages } from "@/components/LanguageProvider";
import { SITE_LOCALES, localizedLegalPath, localeByCode, type SiteLang } from "@/lib/i18n/locales";

const LANG_UI: Record<SiteLang, { short: string; englishName: string; flag: FlagId }> = {
  en: { short: "EN", englishName: "English", flag: "uk" },
  es: { short: "ES", englishName: "Spanish", flag: "es" },
  ca: { short: "CA", englishName: "Catalan", flag: "catalonia" },
  fr: { short: "FR", englishName: "French", flag: "fr" },
  it: { short: "IT", englishName: "Italian", flag: "it" },
  ro: { short: "RO", englishName: "Romanian", flag: "ro" },
  da: { short: "DA", englishName: "Danish", flag: "dk" },
};

function fold(value: string) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

export default function LanguageMenu() {
  const { lang, setLang } = useLanguage();
  const t = useSiteMessages();
  const pathname = usePathname();
  const router = useRouter();
  const current = localeByCode(lang);
  const currentUi = LANG_UI[lang];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const filtered = useMemo(() => {
    const needle = fold(query.trim());
    if (!needle) return SITE_LOCALES;
    return SITE_LOCALES.filter((locale) => {
      const extra = LANG_UI[locale.code];
      const haystack = fold(`${locale.name} ${extra.englishName} ${extra.short} ${locale.code}`);
      return haystack.includes(needle);
    });
  }, [query]);

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

  const choose = (next: SiteLang) => {
    const dest = localizedLegalPath(pathname || "/", next);
    close();
    if (next !== lang) setLang(next);
    if (dest && dest !== (pathname || "/")) {
      router.push(dest);
      return;
    }
    if (next !== lang) router.refresh();
  };

  const onSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(Math.max(filtered.length - 1, 0), index + 1));
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
        aria-label={`${current.switcherLabel}: ${current.name}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <Flag id={currentUi.flag} />
        <span className="lang-short">{currentUi.short}</span>
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
            placeholder={t.nav.searchLanguages}
            aria-label={t.nav.searchLanguages}
            aria-autocomplete="list"
            aria-controls={listId}
            aria-activedescendant={filtered[active] ? `${listId}-${filtered[active].code}` : undefined}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onSearchKeyDown}
          />
          <ul id={listId} className="lang-list" role="listbox" aria-label={current.switcherLabel}>
            {filtered.length === 0 ? (
              <li className="lang-empty">{t.nav.noLanguages}</li>
            ) : (
              filtered.map((item, index) => {
                const selected = item.code === lang;
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
                    <Flag id={LANG_UI[item.code].flag} />
                    <span className="lang-name">{item.name}</span>
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
