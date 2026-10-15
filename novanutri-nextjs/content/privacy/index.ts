import type { PrivacyLocale } from '@/lib/privacy';
import en from './en';
import es from './es';
import ca from './ca';
import fr from './fr';
import it from './it';
import ro from './ro';
import da from './da';

export const PRIVACY_LOCALES: Record<string, PrivacyLocale> = { en, es, ca, fr, it, ro, da };
export const TRANSLATED_LANGS = ['ca', 'es', 'fr', 'it', 'ro', 'da'] as const;
export type TranslatedLang = (typeof TRANSLATED_LANGS)[number];
export function getPrivacyLocale(lang: string): PrivacyLocale | undefined {
  return PRIVACY_LOCALES[lang];
}
