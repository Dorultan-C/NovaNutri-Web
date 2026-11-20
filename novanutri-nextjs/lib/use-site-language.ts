"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  readStoredLanguage,
  SITE_LANGUAGE_EVENT,
  writeStoredLanguage,
  type SiteLanguageCode,
} from "@/lib/site-language";

/**
 * React binding for `lib/site-language.ts`.
 * Swap this hook's body if site-wide i18n later owns the same storage key.
 */
export function useSiteLanguage() {
  const [language, setLanguageState] = useState<SiteLanguageCode>("en");
  const languageRef = useRef<SiteLanguageCode>(language);

  useEffect(() => {
    const stored = readStoredLanguage();
    if (stored) {
      languageRef.current = stored;
      setLanguageState(stored);
    }

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<SiteLanguageCode>).detail;
      if (!detail || detail === languageRef.current) return;
      languageRef.current = detail;
      setLanguageState(detail);
    };

    window.addEventListener(SITE_LANGUAGE_EVENT, onChange);
    return () => window.removeEventListener(SITE_LANGUAGE_EVENT, onChange);
  }, []);

  const setLanguage = useCallback((code: SiteLanguageCode) => {
    if (languageRef.current === code) return;
    languageRef.current = code;
    setLanguageState(code);
    writeStoredLanguage(code);
  }, []);

  return { language, setLanguage };
}
