"use client";

import Image from "next/image";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function About() {
  const t = useSiteMessages().about;

  return (
    <section id="about" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-75 md:h-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image
            src="/about-image.png"
            alt={t.imageAlt}
            fill
            sizes="1048px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
            {t.mission}
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            {t.headlineLead}<span className="text-indigo-500">{t.headlineHighlight}</span>{t.headlineTail}
          </h2>

          <p className="text-lg text-body mb-6 leading-relaxed">
            {t.paragraph1}
          </p>

          <p className="text-lg text-body mb-10 leading-relaxed">
            {t.paragraph2}
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl mb-10">
            <p className="text-sm text-heading font-medium italic">
              &quot;{t.quote}&quot;
            </p>
            <p className="text-xs text-muted mt-2 font-bold uppercase tracking-wider">— {t.attribution}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full border-t border-muted/10 pt-8 mt-2">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-heading mb-1">7+</span>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">{t.statLanguages}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-heading mb-1">{t.statLive}</span>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">{t.statBudget}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-heading mb-1">{t.statMinimal}</span>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">{t.statWaste}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
