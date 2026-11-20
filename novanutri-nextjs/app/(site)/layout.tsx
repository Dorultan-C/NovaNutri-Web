import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import { getSiteMessages } from "@/content/site";
import { getSiteLang } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getSiteLang();
  const t = getSiteMessages(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
