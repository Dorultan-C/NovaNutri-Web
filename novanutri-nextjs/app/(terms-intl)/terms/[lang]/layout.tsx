import AppShell from "@/components/AppShell";
import { TRANSLATED_LANGS, getTermsLocale } from "@/content/terms-helpers";

// Root layout for the translated Terms pages, so <html lang> matches the document language.
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
  return <AppShell htmlLang={htmlLang}>{children}</AppShell>;
}
