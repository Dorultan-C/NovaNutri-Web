import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
      
      {/* Updated Logo Section */}
      <div className="flex flex-col items-center gap-1">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm">
          <Image 
            src="/logo.png" 
            alt="Riov Logo" 
            fill 
            sizes="80px"
            className="object-cover"
          />
        </div>
        <span className=" text-xl font-medium text-black tracking-wide">Riov</span>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex gap-8 text-body font-medium items-center">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#investors" className="hover:text-primary transition-colors">Investors</a>
        <a href="#contact" className="text-primary font-semibold hover:text-primary-dark transition-colors">
          Contact Us
        </a>
      </nav>
      
    </header>
  );
}