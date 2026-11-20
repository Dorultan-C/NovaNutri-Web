import type { Metadata } from "next";
import LicenseView from "@/components/LicenseView";
import { getSiteMessages } from "@/content/site";
import { getSiteLang } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getSiteLang();
  const t = getSiteMessages(lang);
  return {
    title: t.license.metaTitle,
    description: t.license.metaDescription,
  };
}

export default function LicensePage() {
  return <LicenseView />;
}
