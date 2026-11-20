"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getSiteMessages, type SiteMessages } from "@/content/site";
import {
  documentLangFromPath,
  htmlLangFor,
  normalizePath,
  writeSiteLangCookie,
  type SiteLang,
} from "@/lib/i18n/locales";

type LanguageContextValue = {
  lang: SiteLang;
  setLang: (lang: SiteLang) => void;
  messages: SiteMessages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: SiteLang;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Optimistic choice so the UI updates before the server render catches up.
  // Cleared only once the server agrees, so a slower response cannot roll it back.
  const [pending, setPending] = useState<SiteLang | null>(null);
  const lang = pending ?? initialLang;
  const messages = getSiteMessages(lang);

  useEffect(() => {
    if (pending && initialLang === pending) setPending(null);
  }, [initialLang, pending]);

  const setLang = useCallback((next: SiteLang) => {
    writeSiteLangCookie(next);
    setPending(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, messages }),
    [lang, setLang, messages],
  );

  useEffect(() => {
    const path = normalizePath(pathname || "/");
    const documentLang = documentLangFromPath(path);
    if (documentLang) {
      document.documentElement.lang = documentLang;
      return;
    }
    document.documentElement.lang = htmlLangFor(lang);
    if (path === "/") document.title = messages.meta.title;
    else if (path === "/license") document.title = messages.license.metaTitle;
  }, [lang, messages, pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return value;
}

/** Client pages and sections read the active language's copy from here. */
export function useSiteMessages(): SiteMessages {
  return useLanguage().messages;
}
