import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Image Placeholder */}
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-4xl overflow-hidden shadow-xl border-4 border-surface shadow-primary/10 bg-primary-light flex items-center justify-center group">
          {/* Note: Drop an image named 'about-image.jpg' into your public folder and uncomment the Image tag below! A photo of a family eating or someone cooking would look great here. */}
          

          
      <Image src="/about-image.png" alt="Family cooking healthy meal" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /> 
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
            From Scrolling to <span className="text-primary">Serving.</span>
          </h2>
          <p className="text-lg text-body mb-6 leading-relaxed">
            Families face a daily burden: they want to eat healthy, try exciting recipes they see online, and control their spending. We built NovaNutri to bridge the gap between inspiration and execution.
          </p>
          <p className="text-lg text-body mb-10 leading-relaxed">
            Whether you are following clinical dietary recommendations or just trying to use up the ingredients left in your fridge, our AI handles the heavy lifting of planning and budgeting, so you can focus on enjoying the meal.
          </p>
          
          {/* Quick Stats/Badges */}
          <div className="flex gap-8">
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-heading">7+</span>
                <span className="text-sm text-muted font-bold uppercase tracking-wider mt-1">Languages</span>
             </div>
             <div className="w-px bg-muted/30"></div>
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-heading">100%</span>
                <span className="text-sm text-muted font-bold uppercase tracking-wider mt-1">Zero Waste</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}