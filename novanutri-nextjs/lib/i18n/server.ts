import { cache } from "react";
import { cookies } from "next/headers";
import { DEFAULT_SITE_LANG, SITE_LANG_COOKIE, isSiteLang, type SiteLang } from "@/lib/i18n/locales";

/**
 * Language for this request.
 * English when the visitor has no valid `riov_lang` cookie.
 * The marketing site does not read Accept-Language. The Riov app does guess
 * from the device; this website intentionally does not.
 */
export const getSiteLang = cache(async (): Promise<SiteLang> => {
  const jar = await cookies();
  const value = jar.get(SITE_LANG_COOKIE)?.value?.toLowerCase();
  return isSiteLang(value) ? value : DEFAULT_SITE_LANG;
});
