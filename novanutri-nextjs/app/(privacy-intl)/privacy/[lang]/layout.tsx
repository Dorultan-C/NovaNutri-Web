import AppShell from "@/components/AppShell";
import { TRANSLATED_LANGS, getPrivacyLocale } from "@/content/privacy-helpers";

// Root layout for the translated privacy pages, so <html lang> matches the document language.
export default async function PrivacyLangRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const htmlLang = (TRANSLATED_LANGS as readonly string[]).includes(lang)
    ? getPrivacyLocale(lang)?.htmlLang ?? "en"
    : "en";
  return <AppShell htmlLang={htmlLang}>{children}</AppShell>;
}
