"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function Header() {
  const t = useSiteMessages();

  return (
    <header className="relative z-40 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto gap-4">
      <Link href="/" className="flex flex-col items-center gap-1 shrink-0">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/logo.png"
            alt={t.nav.logoAlt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <span className="text-xl font-medium text-black tracking-wide">Riov</span>
      </Link>

      <div className="flex items-center gap-3 md:gap-6">
        <nav className="hidden md:flex gap-5 lg:gap-8 text-body font-medium items-center" aria-label={t.nav.primary}>
          <Link
            href="/#hero"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95"
          >
            {t.nav.getApp}
          </Link>
          <Link href="/#features" className="hover:text-primary transition-colors">{t.nav.features}</Link>
          <Link href="/#about" className="hover:text-primary transition-colors">{t.nav.about}</Link>
          <Link href="/#investors" className="hover:text-primary transition-colors">{t.nav.investors}</Link>
          <Link href="/#contact" className="text-primary font-semibold hover:text-primary-dark transition-colors">
            {t.nav.contact}
          </Link>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}
