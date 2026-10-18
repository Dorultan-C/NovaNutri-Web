import RootShell from "@/components/RootShell";
import { TRANSLATED_LANGS, getTermsLocale } from "@/content/terms-helpers";

// Root layout for the translated Terms pages, so <html lang> matches the page language.
export default async function TermsLangRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const htmlLang = (TRANSLATED_LANGS as readonly string[]).includes(lang)
    ? getTermsLocale(lang)?.htmlLang ?? "en"
    : "en";
  return <RootShell lang={htmlLang}>{children}</RootShell>;
}
