import type { SiteLang } from "@/lib/i18n/locales";
import en, { type SiteMessages } from "./en";
import es from "./es";
import ca from "./ca";
import fr from "./fr";
import it from "./it";
import ro from "./ro";
import da from "./da";

export type { SiteMessages };

/**
 * Marketing-site copy, one module per language, same shape as `en.ts`.
 * A new page (including the in-progress brands page) should add its keys
 * here and read them with `getSiteMessages` or `useSiteMessages`.
 * The header selector and the saved language apply without further wiring
 * on any route rendered through `AppShell`.
 */
const MESSAGES: Record<SiteLang, SiteMessages> = { en, es, ca, fr, it, ro, da };

export function getSiteMessages(lang: SiteLang): SiteMessages {
  return MESSAGES[lang];
}
