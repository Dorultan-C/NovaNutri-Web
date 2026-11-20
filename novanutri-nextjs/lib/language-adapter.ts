/**
 * Boundary between the flag menu and site language.
 *
 * Matches PR #12 (branch cursor/site-language-selector-f7e8):
 * https://github.com/Dorultan-C/NovaNutri-Web/pull/12
 *
 * That PR owns translation. This branch does not import it.
 * The menu only calls this adapter.
 *
 * Shared contract, copied to stay compatible until one branch rebases:
 * - Cookie name `riov_lang` (`SITE_LANG_COOKIE` in lib/i18n/locales.ts)
 * - `writeSiteLangCookie`: Path=/, Max-Age=1 year, SameSite=Lax, Secure on https
 * - Codes: en, es, ca, fr, it, ro, da
 * - `localizedLegalPath`: privacy/terms URLs change with the language;
 *   every other path returns null
 *
 * After #12 is on this branch, replace `useSiteLanguage` with the provider
 * and delete the cookie helpers here so there is one writer:
 *
 *   import { useLanguage } from "@/components/LanguageProvider";
 *   export function useSiteLanguage() {
 *     const { lang, setLang } = useLanguage();
 *     return { language: lang, setLanguage: setLang };
 *   }
 *
 * `setLang` already writes `riov_lang`. In the menu's choose handler, keep
 * `localizedLegalPath` (import it from lib/i18n/locales.ts) and, when it
 * returns null, call `router.refresh()` so `useSiteMessages()` re-renders.
 * `getSiteLang()` in AppShell already supplies `initialLang` from this cookie.
 */

import { isSiteLanguage, type SiteLanguageCode } from "@/lib/site-language";

export const SITE_LANG_COOKIE = "riov_lang";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function writeSiteLangCookie(lang: SiteLanguageCode): void {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${SITE_LANG_COOKIE}=${encodeURIComponent(lang)}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function readSiteLangCookie(): SiteLanguageCode | null {
  if (typeof document === "undefined") return null;
  const pieces = document.cookie ? document.cookie.split("; ") : [];
  for (const piece of pieces) {
    const eq = piece.indexOf("=");
    if (eq === -1) continue;
    if (piece.slice(0, eq) !== SITE_LANG_COOKIE) continue;
    let value = piece.slice(eq + 1);
    try {
      value = decodeURIComponent(value);
    } catch {
      /* Keep the raw value. */
    }
    const code = value.toLowerCase();
    return isSiteLanguage(code) ? code : null;
  }
  return null;
}

function normalizePath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0].replace(/\/$/, "");
  return path || "/";
}

/** Same rules as `localizedLegalPath` in PR #12's lib/i18n/locales.ts. */
export function localizedLegalPath(pathname: string, lang: SiteLanguageCode): string | null {
  const path = normalizePath(pathname);
  for (const root of ["privacy", "terms"] as const) {
    if (path === `/${root}`) return lang === "en" ? `/${root}` : `/${root}/${lang}`;
    const prefix = `/${root}/`;
    if (!path.startsWith(prefix)) continue;
    const segment = path.slice(prefix.length);
    if (!isSiteLanguage(segment)) return null;
    return lang === "en" ? `/${root}` : `/${root}/${lang}`;
  }
  return null;
}
