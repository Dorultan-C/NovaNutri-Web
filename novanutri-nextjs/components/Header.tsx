"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageMenu from "@/components/LanguageMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { useSiteMessages } from "@/components/LanguageProvider";

type HeaderProps = {
  /** Localized brands URL. Defaults to /brands, which PR #10 adds. */
  brandsHref?: string;
  brandsLabel?: string;
  brandsActive?: boolean;
};

export default function Header({
  brandsHref = "/brands",
  brandsLabel,
  brandsActive = false,
}: HeaderProps) {
  const t = useSiteMessages();
  const links = [
    { href: "/#hero", label: t.nav.getApp },
    { href: "/#features", label: t.nav.features },
    { href: "/#about", label: t.nav.about },
    { href: "/#investors", label: t.nav.investors },
    { href: brandsHref, label: brandsLabel ?? t.nav.forBrands, current: brandsActive },
  ];

  return (
    <header className="site-header">
      <a href="#content" className="skip-link">
        {t.nav.skip}
      </a>
      <div className="site-header-inner">
        <div className="topbar">
          <Link href="/" className="brand">
            <span className="logo-mark">
              <Image
                src="/logo.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <span className="wordmark">Riov</span>
          </Link>

          <div className="topbar-tools">
            <LanguageMenu />
            <ThemeToggle />
            <Link href="/#contact" className="btn btn-sm contact-top">
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <nav className="main-nav" aria-label={t.nav.primary}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
