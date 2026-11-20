import RootShell from "@/components/RootShell";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getSiteLang } from "@/lib/i18n/server";
import { htmlLangFor } from "@/lib/i18n/locales";

/**
 * Shared chrome for every route group: language preference, header selector, footer.
 * Pass `htmlLang` for a legal document so `<html lang>` follows the document, not the UI preference.
 */
export default async function AppShell({
  htmlLang,
  children,
}: {
  htmlLang?: string;
  children: React.ReactNode;
}) {
  const lang = await getSiteLang();
  return (
    <RootShell lang={htmlLang ?? htmlLangFor(lang)}>
      <LanguageProvider initialLang={lang}>
        <Header />
        {children}
        <Footer />
      </LanguageProvider>
    </RootShell>
  );
}
