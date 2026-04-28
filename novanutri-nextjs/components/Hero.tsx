import Image from "next/image";

export default function Hero() {
  return (
    <main className="grow flex items-center justify-center px-6 py-12 md:py-24 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 shadow-sm">
            <span className="text-lg">🚀</span>
            Now Live on Google Play
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            Plan smarter.<br/>
            <span className="text-primary">Eat better.</span><br/>
            Spend less.
          </h1>
          
          <p className="text-lg text-body mb-10 max-w-lg leading-relaxed">
            Drop a link to any viral cooking video, and our AI instantly converts it into a step-by-step recipe. Riov automatically builds your weekly meal plan, tracks your nutrients, and organizes your grocery list to save you time and money.
          </p>

{/* NEW: Download CTA & QR Code */}
<div className="w-full max-w-lg flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-in fade-in duration-700 delay-200">
            
            {/* Google Play Button */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.riov.app&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="active:scale-95 transition-transform hover:opacity-90 shrink-0"
            >
              <div className="relative w-48 h-14">
                <Image 
                  src="/google-play-badge.png" 
                  alt="Get it on Google Play" 
                  fill 
                  className="object-contain"
                />
              </div>
            </a>

            {/* Desktop QR Code (Hidden on small screens) */}
            <div className="hidden sm:flex items-center gap-4 pl-8 border-l border-muted/20">
              {/* Increased size from w-16 h-16 to w-24 h-24 and padding to p-2 */}
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-muted/10 relative w-50 h-50 shrink-0">
                <Image 
                  src="/qr-code.png" 
                  alt="Scan to download Riov" 
                  fill 
                  className="object-cover rounded-xl"
                />
              </div>
              {/* Increased text size and max-width for better proportions */}
              <span className="text-sm font-bold text-muted uppercase tracking-wider max-w-[100px] leading-tight">
                Scan to Download
              </span>
            </div>

          </div>

          {/* Web App Secondary CTA */}
          <div className="mt-8 pt-6 border-t border-muted/10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 w-full max-w-md animate-in fade-in duration-700 delay-300">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-bold text-heading mb-0.5">Don&apos;t have Android?</p>
              <p className="text-xs text-muted">You can still experience the web beta.</p>
            </div>
            <a 
              href="https://riov.dorultan.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl border-2 border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
            >
              Try Web App <span className="text-lg">🌐</span>
            </a>
          </div>

        </div>

        {/* Right Image/App Preview Content */}
        <div className="relative w-full flex items-center justify-center lg:justify-end animate-in fade-in zoom-in duration-700 delay-200 lg:pl-10">
           {/* Smartphone Frame Container */}
           <div className="relative w-75 sm:w-85 aspect-9/19.5">
               <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-primary/5 rounded-[3rem] -rotate-3 scale-105 -z-10 translate-x-2 translate-y-4"></div>
               <div className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl border-[6px] sm:border-8 border-white overflow-hidden relative ring-1 ring-black/5">
                  <Image 
                    src="/hero-mockup.png"
                    alt="Riov App Interface"
                    fill
                    className="object-cover object-top" 
                    priority 
                  />
               </div>
           </div>
        </div>

      </div>
    </main>
  );
}