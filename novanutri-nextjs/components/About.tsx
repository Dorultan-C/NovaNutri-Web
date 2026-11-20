import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="w-full bg-surface py-20 md:py-24 px-6 border-t border-line">
      <Reveal className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl">
          <Image
            src="/about-image.png"
            alt="Family enjoying a healthy meal together"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            quality={60}
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3">
            Our Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            From <span className="text-accent">Scrolling</span> to Serving.
          </h2>

          <p className="text-lg text-body mb-6 leading-relaxed">
            We believe feeding your family shouldn&apos;t feel like a second job. Between rising grocery costs, the stress of meal planning, and the guilt of throwing away forgotten food, dinner time has become unnecessarily complicated.
          </p>

          <p className="text-lg text-body mb-10 leading-relaxed">
            Riov was built to change that. By combining our AI recipe scanner with practical household tools—like the Virtual Fridge and budget tracking—we help you maximize the ingredients you already have, discover new cuisines, and bring the joy back to the kitchen.
          </p>

          <div className="bg-surface-muted border-l-4 border-accent p-4 rounded-r-xl mb-10">
            <p className="text-sm text-heading font-medium italic">
              &quot;After 10 years working as a professional Chef and Kitchen Manager, I realized households were missing the tools we use in the industry: strict food cost control, allergen compliance, and zero-waste logistics. I built Riov to bring that professional efficiency into your family kitchen.&quot;
            </p>
            <p className="text-xs text-muted mt-2 font-bold uppercase tracking-wider">— Cristian Dorultan, Founder & Lead Engineer</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full border-t border-line pt-8">
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
      </Reveal>
    </section>
  );
}
