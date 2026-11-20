"use client";

import Image from "next/image";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function About() {
  const t = useSiteMessages().about;

  return (
    <section id="about" className="w-full bg-surface py-20 md:py-24 px-6 border-t border-line">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl">
          <Image
            src="/about-image.png"
            alt={t.imageAlt}
            fill
            sizes="1048px"
            className="object-cover"
            quality={60}
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3">
            {t.mission}
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            {t.headlineLead}<span className="text-accent">{t.headlineHighlight}</span>{t.headlineTail}
          </h2>

          <p className="text-lg text-body mb-6 leading-relaxed">
            {t.paragraph1}
          </p>

          <p className="text-lg text-body mb-10 leading-relaxed">
            {t.paragraph2}
          </p>

          <div className="bg-surface-muted border-l-4 border-accent p-4 rounded-r-xl mb-10">
            <p className="text-sm text-heading font-medium italic">
              &quot;{t.quote}&quot;
            </p>
            <p className="text-xs text-muted mt-2 font-bold uppercase tracking-wider">— {t.attribution}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full border-t border-line pt-8">
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
