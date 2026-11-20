/**
 * Language rows for the header menu.
 *
 * Persistence lives in lib/language-adapter.ts (cookie `riov_lang`, the same
 * cookie as PR #12). This list does not translate the page.
 *
 * Adding a language is data: one entry here, plus a flag in
 * `components/flags.tsx` for its `flag` id. `label` is the native name.
 * `englishName` is the other string the search box matches.
 */

export const SITE_LANGUAGES = [
  { code: "en", label: "English", englishName: "English", short: "EN", flag: "uk" },
  { code: "es", label: "Español", englishName: "Spanish", short: "ES", flag: "es" },
  { code: "ca", label: "Català", englishName: "Catalan", short: "CA", flag: "catalonia" },
  { code: "fr", label: "Français", englishName: "French", short: "FR", flag: "fr" },
  { code: "it", label: "Italiano", englishName: "Italian", short: "IT", flag: "it" },
  { code: "ro", label: "Română", englishName: "Romanian", short: "RO", flag: "ro" },
  { code: "da", label: "Dansk", englishName: "Danish", short: "DA", flag: "dk" },
] as const;

export type SiteLanguage = (typeof SITE_LANGUAGES)[number];
export type SiteLanguageCode = SiteLanguage["code"];

export function isSiteLanguage(value: string | null | undefined): value is SiteLanguageCode {
  return !!value && SITE_LANGUAGES.some((language) => language.code === value);
}
