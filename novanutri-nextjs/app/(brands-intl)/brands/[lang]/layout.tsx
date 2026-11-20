import RootShell from "@/components/RootShell";
import { TRANSLATED_LANGS, getBrandsLocale } from "@/content/brands-helpers";

// Root layout for translated brand pages, so <html lang> matches the page language.
export default async function BrandsLangRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const htmlLang = (TRANSLATED_LANGS as readonly string[]).includes(lang)
    ? getBrandsLocale(lang)?.htmlLang ?? "en"
    : "en";
  return <RootShell lang={htmlLang}>{children}</RootShell>;
}
