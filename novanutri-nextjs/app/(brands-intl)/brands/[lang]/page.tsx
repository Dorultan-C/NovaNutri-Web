import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandsView from "@/components/BrandsView";
import {
  TRANSLATED_LANGS,
  brandsAlternates,
  brandsCanonical,
  getBrandsLocale,
  type TranslatedLang,
} from "@/content/brands-helpers";

export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const copy = getBrandsLocale(lang);
  if (!copy || !(TRANSLATED_LANGS as readonly string[]).includes(lang)) {
    return {};
  }
  return {
    title: `${copy.metaTitle} | Riov`,
    description: copy.metaDescription,
    alternates: {
      canonical: brandsCanonical(copy),
      languages: brandsAlternates(),
    },
  };
}

export default async function BrandsLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(TRANSLATED_LANGS as readonly string[]).includes(lang)) {
    notFound();
  }
  const copy = getBrandsLocale(lang as TranslatedLang);
  if (!copy) notFound();
  return <BrandsView copy={copy} />;
}
