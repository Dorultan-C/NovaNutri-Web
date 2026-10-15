export type PrivacyLocale = {
  lang: string;
  htmlLang: string;
  title: string;
  policyTitle: string;
  metaHtml: string;
  contentHtml: string;
  switcherLabel: string;
  languageName: string;
  /** Empty for English (/privacy); otherwise the /privacy/[lang] segment. */
  path: string;
};

export const SITE_ORIGIN = "https://www.riov.app";

export function privacyHref(locale: PrivacyLocale): string {
  return locale.path ? `/privacy/${locale.path}` : "/privacy";
}

export function privacyCanonical(locale: PrivacyLocale): string {
  return `${SITE_ORIGIN}${privacyHref(locale)}`;
}

export function privacyAlternates(): Record<string, string> {
  return {
    en: `${SITE_ORIGIN}/privacy`,
    es: `${SITE_ORIGIN}/privacy/es`,
    ca: `${SITE_ORIGIN}/privacy/ca`,
    fr: `${SITE_ORIGIN}/privacy/fr`,
    it: `${SITE_ORIGIN}/privacy/it`,
    ro: `${SITE_ORIGIN}/privacy/ro`,
    da: `${SITE_ORIGIN}/privacy/da`,
    "x-default": `${SITE_ORIGIN}/privacy`,
  };
}
