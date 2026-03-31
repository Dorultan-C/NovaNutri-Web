import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm">
          <Image 
            src="/logo.png" 
            alt="Riov Logo" 
            fill 
            sizes="40px"
            className="object-cover"
          />
        </div>
        <span className="text-2xl font-bold text-heading tracking-tight">Riov</span>
      </div>
      <nav className="hidden md:flex gap-8 text-body font-medium">
      <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#contact" className="text-primary font-semibold hover:text-primary-dark transition-colors">
          Contact Us
        </a>
      </nav>
    </header>
  );
}