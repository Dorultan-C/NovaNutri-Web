"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import {
  SITE_LOCALES,
  localeByCode,
  localizedLegalPath,
  type SiteLang,
} from "@/lib/i18n/locales";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const current = localeByCode(lang);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const listId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: SiteLang) {
    setOpen(false);
    if (next === lang) return;
    setLang(next);
    const dest = localizedLegalPath(pathname || "/", next);
    if (dest && dest !== pathname) {
      router.push(dest);
      return;
    }
    router.refresh();
  }

  return (
    <div ref={rootRef} className="relative shrink-0" data-site-lang={lang}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${current.switcherLabel}: ${current.name}`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-xl border border-muted/30 bg-white px-3 py-2 text-sm font-semibold text-heading shadow-sm hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{current.name}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={current.switcherLabel}
          className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-muted/20 bg-white py-1 shadow-xl"
        >
          {SITE_LOCALES.map((locale) => {
            const selected = locale.code === lang;
            return (
              <li key={locale.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  lang={locale.htmlLang}
                  onClick={() => choose(locale.code)}
                  className={
                    selected
                      ? "flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold text-primary bg-primary/10"
                      : "flex w-full items-center px-4 py-2.5 text-left text-sm font-medium text-heading hover:bg-primary/5 hover:text-primary"
                  }
                >
                  {locale.name}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
