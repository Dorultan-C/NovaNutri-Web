/**
 * The seven languages Riov ships in.
 * Same set as the Privacy Policy / Terms locales in this repo and as
 * `RESOURCES` in the app (`Riov/src/i18n/index.ts`).
 * Order matches the existing legal-page switchers.
 */
export const SITE_LANGS = ["en", "es", "ca", "fr", "it", "ro", "da"] as const;

export type SiteLang = (typeof SITE_LANGS)[number];

export const DEFAULT_SITE_LANG: SiteLang = "en";

/**
 * First-party, strictly functional preference cookie.
 * Stores only a language code. No Domain attribute (host-only).
 * Not HttpOnly, because the selector sets it in the browser; there is no backend.
 */
export const SITE_LANG_COOKIE = "riov_lang";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export type SiteLocale = {
  code: SiteLang;
  /** BCP 47 tag used on `<html lang>`. Matches the legal locale files. */
  htmlLang: string;
  /** Native name, same string as the legal-page switcher. */
  name: string;
  /** Accessible label for the switcher, same string as the legal pages. */
  switcherLabel: string;
};

export const SITE_LOCALES: readonly SiteLocale[] = [
  { code: "en", htmlLang: "en", name: "English", switcherLabel: "Language" },
  { code: "es", htmlLang: "es", name: "Español", switcherLabel: "Idioma" },
  { code: "ca", htmlLang: "ca", name: "Català", switcherLabel: "Idioma" },
  { code: "fr", htmlLang: "fr", name: "Français", switcherLabel: "Langue" },
  { code: "it", htmlLang: "it", name: "Italiano", switcherLabel: "Lingua" },
  { code: "ro", htmlLang: "ro", name: "Română", switcherLabel: "Limbă" },
  { code: "da", htmlLang: "da", name: "Dansk", switcherLabel: "Sprog" },
];

export function isSiteLang(value: string | null | undefined): value is SiteLang {
  return !!value && (SITE_LANGS as readonly string[]).includes(value);
}

export function localeByCode(code: SiteLang): SiteLocale {
  const match = SITE_LOCALES.find((locale) => locale.code === code);
  return match ?? SITE_LOCALES[0];
}

export function htmlLangFor(code: SiteLang): string {
  return localeByCode(code).htmlLang;
}

export function normalizePath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0].replace(/\/$/, "");
  return path || "/";
}

export function privacyPath(lang: SiteLang): string {
  return lang === "en" ? "/privacy" : `/privacy/${lang}`;
}

export function termsPath(lang: SiteLang): string {
  return lang === "en" ? "/terms" : `/terms/${lang}`;
}

const LEGAL_ROOTS = ["privacy", "terms"] as const;

/**
 * When the visitor is on a privacy or terms URL, the header selector
 * navigates to that same document in the newly chosen language.
 * Returns null on every other page (the copy re-renders in place).
 */
export function localizedLegalPath(pathname: string, lang: SiteLang): string | null {
  const path = normalizePath(pathname);
  for (const root of LEGAL_ROOTS) {
    if (path === `/${root}`) return lang === "en" ? `/${root}` : `/${root}/${lang}`;
    const prefix = `/${root}/`;
    if (!path.startsWith(prefix)) continue;
    const segment = path.slice(prefix.length);
    if (!isSiteLang(segment)) return null;
    return lang === "en" ? `/${root}` : `/${root}/${lang}`;
  }
  return null;
}

/** Language of the legal document at this URL, if it is a privacy or terms page. */
export function documentLangFromPath(pathname: string): string | null {
  const path = normalizePath(pathname);
  for (const root of LEGAL_ROOTS) {
    if (path === `/${root}`) return "en";
    const prefix = `/${root}/`;
    if (!path.startsWith(prefix)) continue;
    const segment = path.slice(prefix.length);
    if (!isSiteLang(segment)) return null;
    return htmlLangFor(segment);
  }
  return null;
}

export function writeSiteLangCookie(lang: SiteLang): void {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${SITE_LANG_COOKIE}=${encodeURIComponent(lang)}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}
