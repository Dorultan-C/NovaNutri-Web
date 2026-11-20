import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  brandsHref?: string;
  brandsLabel?: string;
  brandsActive?: boolean;
};

export default function Header({
  brandsHref = "/brands",
  brandsLabel = "For brands",
  brandsActive = false,
}: HeaderProps) {
  const brandsClass = brandsActive
    ? "text-primary font-semibold"
    : "hover:text-primary transition-colors";

  return (
    <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto gap-4">
      <Link href="/" className="flex flex-col items-center gap-1 shrink-0">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/logo.png"
            alt="Riov Logo"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <span className="text-xl font-medium text-black tracking-wide">Riov</span>
      </Link>

      <Link
        href={brandsHref}
        className={`md:hidden text-sm font-semibold text-primary ${brandsActive ? "" : "hover:text-primary-dark"} transition-colors`}
        aria-current={brandsActive ? "page" : undefined}
      >
        {brandsLabel}
      </Link>

      <nav className="hidden md:flex flex-wrap justify-end gap-x-5 xl:gap-x-8 text-body font-medium items-center">
        <Link
          href="/#hero"
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95"
        >
          Get the App
        </Link>
        <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
        <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/#investors" className="hover:text-primary transition-colors">Investors</Link>
        <Link
          href={brandsHref}
          className={brandsClass}
          aria-current={brandsActive ? "page" : undefined}
        >
          {brandsLabel}
        </Link>
        <Link href="/#contact" className="text-primary font-semibold hover:text-primary-dark transition-colors">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
