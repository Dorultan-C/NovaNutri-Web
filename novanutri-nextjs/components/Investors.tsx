"use client";

import { useSiteMessages } from "@/components/LanguageProvider";

function withLink(template: string, linkText: string) {
  const [before, after = ""] = template.split("{link}");
  return (
    <>
      {before}
      <a href="/#contact" className="text-primary font-semibold underline">{linkText}</a>
      {after}
    </>
  );
}

export default function Investors() {
  const t = useSiteMessages().investors;

  return (
    <section id="investors" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3 block">
            {t.kicker}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
            {t.headlineLead}<span className="text-indigo-500">{t.headlineHighlight}</span>
          </h2>
          <p className="text-lg text-body leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white border border-muted/10 p-8 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
              🚀
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4">{t.tractionTitle}</h3>
            <p className="text-body mb-4">
              {t.tractionBody}
            </p>
            <ul className="space-y-3 text-body">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>{t.traction1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>{t.traction2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>{t.traction3}</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
              📈
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4">{t.fundingTitle}</h3>
            <p className="text-body mb-4">
              {t.fundingBody}
            </p>
            <p className="text-body mb-4">
              {withLink(t.fundingDetails, t.fundingLink)}
            </p>
            <h4 className="font-bold text-heading mb-3 text-sm uppercase tracking-wider">{t.allocationTitle}</h4>
            <ul className="space-y-3 text-body">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>{t.allocation1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>{t.allocation2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>{t.allocation3}</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="/#contact" className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95">
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
