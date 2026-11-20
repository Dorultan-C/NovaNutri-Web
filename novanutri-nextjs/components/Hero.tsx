"use client";

import Image from "next/image";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function Hero() {
  const t = useSiteMessages().hero;

  return (
    <main id="hero" className="grow flex items-center justify-center px-6 py-12 md:py-24 overflow-hidden relative" >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 shadow-sm">
            <span className="text-lg">🚀</span>
            {t.badge}
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            {t.line1}<br/>
            <span className="text-primary">{t.line2}</span><br/>
            {t.line3}
          </h1>

          <p className="text-lg text-body mb-10 max-w-lg leading-relaxed">
            {t.body}
          </p>

          <div className="w-full max-w-xl flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-in fade-in duration-700 delay-200">
            <div className="flex flex-col gap-4 shrink-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.riov.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="active:scale-95 transition-transform hover:opacity-90 shrink-0"
              >
                <div className="relative w-48 h-14">
                  <Image
                    src="/google-play-badge.png"
                    alt={t.googlePlayAlt}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              </a>

              <a
                href="https://apps.apple.com/us/app/riov-mediterranean-meal-plan/id6770679057"
                target="_blank"
                rel="noopener noreferrer"
                className="active:scale-95 transition-transform hover:opacity-90 shrink-0"
              >
                <div className="relative w-48 h-14">
                  <Image
                    src="/app-store-badge.svg"
                    alt={t.appStoreAlt}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-4 pl-8 border-l border-muted/20">
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-muted/10 relative w-50 h-50 shrink-0">
                <Image
                  src="/qr-code.svg"
                  alt={t.qrAlt}
                  fill
                  sizes="200px"
                  className="object-cover rounded-xl"
                />
              </div>
              <span className="text-sm font-bold text-muted uppercase tracking-wider max-w-25 leading-tight">
                {t.scan}
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center lg:justify-end animate-in fade-in zoom-in duration-700 delay-200 lg:pl-10">
           <div className="relative w-75 sm:w-85 aspect-9/19.5">
               <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-primary/5 rounded-[3rem] -rotate-3 scale-105 -z-10 translate-x-2 translate-y-4"></div>
               <div className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl border-[6px] sm:border-8 border-white overflow-hidden relative ring-1 ring-black/5">
                  <Image
                    src="/hero-mockup.png"
                    alt={t.mockupAlt}
                    fill
                    sizes="1048px"
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
