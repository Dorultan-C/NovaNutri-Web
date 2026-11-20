import Image from "next/image";
import Link from "next/link";
import LanguageMenu from "@/components/LanguageMenu";
import ThemeToggle from "@/components/ThemeToggle";

type HeaderProps = {
  /** Localized brands URL. Defaults to /brands, which PR #10 adds. */
  brandsHref?: string;
  brandsLabel?: string;
  brandsActive?: boolean;
};

export default function Header({
  brandsHref = "/brands",
  brandsLabel = "For brands",
  brandsActive = false,
}: HeaderProps) {
  const links = [
    { href: "/#hero", label: "Get the app" },
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About" },
    { href: "/#investors", label: "Investors" },
    { href: brandsHref, label: brandsLabel, current: brandsActive },
  ];

  return (
    <header className="site-header">
      <a href="#content" className="skip-link">
        Skip to content
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
              Contact us
            </Link>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.label}
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
