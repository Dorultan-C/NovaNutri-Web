import type { BrandsCopy } from "@/lib/brands";
import en from "./en";
import es from "./es";
import ca from "./ca";
import fr from "./fr";
import it from "./it";
import ro from "./ro";
import da from "./da";

/** Spanish, Catalan, French, Italian, Romanian and Danish are machine-drafted. */
export const BRANDS_LOCALES: Record<string, BrandsCopy> = { en, es, ca, fr, it, ro, da };
export const TRANSLATED_LANGS = ["ca", "es", "fr", "it", "ro", "da"] as const;
export type TranslatedLang = (typeof TRANSLATED_LANGS)[number];

export function getBrandsLocale(lang: string): BrandsCopy | undefined {
  return BRANDS_LOCALES[lang];
}
