"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { isSiteLang } from "@/lib/i18n/locales";

/** Legal-page language link that also stores the site preference. */
export default function PersistLangLink({
  lang,
  href,
  hrefLang,
  className,
  children,
  current,
}: {
  lang: string;
  href: string;
  hrefLang: string;
  className: string;
  children: React.ReactNode;
  current?: boolean;
}) {
  const { setLang } = useLanguage();
  return (
    <Link
      href={href}
      hrefLang={hrefLang}
      className={className}
      aria-current={current ? "page" : undefined}
      onClick={() => {
        if (isSiteLang(lang)) setLang(lang);
      }}
    >
      {children}
    </Link>
  );
}
