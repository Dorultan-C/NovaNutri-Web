"use client";

import { useCallback, useEffect, useState } from "react";
import { readSiteLangCookie, writeSiteLangCookie } from "@/lib/language-adapter";
import type { SiteLanguageCode } from "@/lib/site-language";

/**
 * What the flag menu calls.
 * Today this reads and writes the `riov_lang` cookie.
 * After PR #12 merges, swap the body for `useLanguage()` —
 * see the note at the top of lib/language-adapter.ts.
 */
export function useSiteLanguage() {
  const [language, setLanguageState] = useState<SiteLanguageCode>("en");

  useEffect(() => {
    const stored = readSiteLangCookie();
    if (stored) setLanguageState(stored);
  }, []);

  const setLanguage = useCallback((code: SiteLanguageCode) => {
    setLanguageState(code);
    writeSiteLangCookie(code);
  }, []);

  return { language, setLanguage };
}
