import type { TermsLocale } from '@/lib/terms';
import en from './en';
import es from './es';
import ca from './ca';
import fr from './fr';
import it from './it';
import ro from './ro';
import da from './da';

export const TERMS_LOCALES: Record<string, TermsLocale> = { en, es, ca, fr, it, ro, da };
export const TRANSLATED_LANGS = ['ca', 'es', 'fr', 'it', 'ro', 'da'] as const;
export type TranslatedLang = (typeof TRANSLATED_LANGS)[number];
export function getTermsLocale(lang: string): TermsLocale | undefined {
  return TERMS_LOCALES[lang];
}
