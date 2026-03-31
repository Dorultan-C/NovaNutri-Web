import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image 
            src="/about-image.png"
            alt="Family enjoying a healthy meal together" 
            fill 
            className="object-cover"
          /> 
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="flex flex-col items-start text-left">
          
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
            Our Mission
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            From <span className="text-indigo-500">Scrolling</span> to Serving.
          </h2>
          
          <p className="text-lg text-body mb-6 leading-relaxed">
            We believe feeding your family shouldn&apos;t feel like a second job. Between rising grocery costs, the stress of meal planning, and the guilt of throwing away forgotten food, dinner time has become unnecessarily complicated.
          </p>
          
          <p className="text-lg text-body mb-10 leading-relaxed">
            Riov was built to change that. By combining our AI recipe scanner with practical household tools—like the Virtual Fridge and budget tracking—we help you maximize the ingredients you already have, discover new cuisines, and bring the joy back to the kitchen.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full border-t border-muted/10 pt-8 mt-2">
            
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-heading mb-1">7+</span>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">Languages</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-heading mb-1">Live</span>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">Budget Tracking</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-heading mb-1">Minimal</span>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">Food Waste</span>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}