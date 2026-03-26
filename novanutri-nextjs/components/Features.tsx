import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-60 aspect-1/2 rounded-4xl overflow-hidden shadow-2xl mb-8 border-4 border-surface shadow-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <Image src="/feature-1.png" alt="AI Magic Import App Screen" fill sizes="(max-width: 768px) 100vw, 240px" priority className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-3">AI Magic Import</h3>
            <p className="text-body leading-relaxed">Paste a link from TikTok or YouTube, and our AI instantly extracts the full recipe, ingredients, steps, and clinical nutritional data.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-60 aspect-1/2 rounded-4xl overflow-hidden shadow-2xl mb-8 border-4 border-surface shadow-amber-500/10 hover:-translate-y-2 transition-transform duration-300">
              <Image src="/feature-2.png" alt="Live Price Monitoring App Screen" fill sizes="(max-width: 768px) 100vw, 240px" priority className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-3">Live Price Monitoring</h3>
            <p className="text-body leading-relaxed">Our integrated database tracks real grocery prices to calculate your exact &quot;Cost Per Person&quot; before you even step in the store.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-60 aspect-1/2 rounded-4xl overflow-hidden shadow-2xl mb-8 border-4 border-surface shadow-cyan-500/10 hover:-translate-y-2 transition-transform duration-300">
              <Image src="/feature-3.png" alt="Virtual Fridge App Screen" fill sizes="(max-width: 768px) 100vw, 240px" priority className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-3">The Virtual Fridge</h3>
            <p className="text-body leading-relaxed">Zero food waste. Our auto-slotting system tracks your leftover portions and seamlessly schedules them into future meal plans.</p>
          </div>

        </div>
      </div>
    </section>
  );
}