import { SITE_ORIGIN } from "@/lib/privacy";

export type TermsLocale = {
  lang: string;
  htmlLang: string;
  title: string;
  termsTitle: string;
  metaHtml: string;
  contentHtml: string;
  switcherLabel: string;
  languageName: string;
  /** Empty for English (/terms); otherwise the /terms/[lang] segment. */
  path: string;
};

export function termsHref(locale: TermsLocale): string {
  return locale.path ? `/terms/${locale.path}` : "/terms";
}

export function termsCanonical(locale: TermsLocale): string {
  return `${SITE_ORIGIN}${termsHref(locale)}`;
}

export function termsAlternates(): Record<string, string> {
  return {
    en: `${SITE_ORIGIN}/terms`,
    es: `${SITE_ORIGIN}/terms/es`,
    ca: `${SITE_ORIGIN}/terms/ca`,
    fr: `${SITE_ORIGIN}/terms/fr`,
    it: `${SITE_ORIGIN}/terms/it`,
    ro: `${SITE_ORIGIN}/terms/ro`,
    da: `${SITE_ORIGIN}/terms/da`,
    "x-default": `${SITE_ORIGIN}/terms`,
  };
}
