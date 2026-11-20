/**
 * Site language preference for the header wheel.
 *
 * Isolated on purpose. No site-wide translation branch was available when this
 * landed. A later i18n change should keep this storage key and these codes
 * (`en`, `es`, `ca`, `fr`, `it`, `ro`, `da` — the legal-page locales) and can
 * replace `readStoredLanguage` / `writeStoredLanguage`, or listen for the
 * `riov-language-change` event.
 *
 * This module does not translate copy and does not change `<html lang>`,
 * so a legal page keeps the language of its URL.
 */

export const SITE_LANGUAGE_STORAGE_KEY = "riov-language";

export const SITE_LANGUAGE_EVENT = "riov-language-change";

export const SITE_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ca", label: "Català" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "ro", label: "Română" },
  { code: "da", label: "Dansk" },
] as const;

export type SiteLanguageCode = (typeof SITE_LANGUAGES)[number]["code"];

export function isSiteLanguage(value: string | null | undefined): value is SiteLanguageCode {
  return !!value && SITE_LANGUAGES.some((language) => language.code === value);
}

export function readStoredLanguage(): SiteLanguageCode | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(SITE_LANGUAGE_STORAGE_KEY);
    return isSiteLanguage(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeStoredLanguage(code: SiteLanguageCode) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SITE_LANGUAGE_STORAGE_KEY, code);
  } catch {
    /* Private browsing can block storage. The wheel still updates in memory. */
  }
  document.documentElement.setAttribute("data-lang", code);
  window.dispatchEvent(new CustomEvent(SITE_LANGUAGE_EVENT, { detail: code }));
}
