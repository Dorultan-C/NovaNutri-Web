"use client";

import { useSiteMessages } from "@/components/LanguageProvider";

export default function LicenseView() {
  const t = useSiteMessages().license;

  return (
    <main className="w-full bg-surface min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">{t.title}</h1>
        <p className="text-muted mb-12 font-medium">{t.copyright}</p>

        <div className="text-body space-y-6 leading-relaxed bg-white p-8 rounded-3xl border border-muted/10 shadow-sm">
          <p className="font-bold uppercase tracking-wider text-heading text-sm mb-6 pb-4 border-b border-muted/10">
            {t.kicker}
          </p>

          <p>
            <strong className="text-heading">{t.ownershipLabel}</strong> {t.ownershipBody}
          </p>

          <div>
            <strong className="text-heading">{t.restrictionsLabel}</strong>
            <ol className="list-[lower-alpha] pl-5 mt-3 space-y-3">
              <li>{t.restrictionA}</li>
              <li>{t.restrictionB}</li>
              <li>{t.restrictionC}</li>
            </ol>
          </div>

          <p className="uppercase text-sm font-semibold mt-8">
            <strong className="text-heading">{t.warrantyLabel}</strong> {t.warrantyBody}
          </p>

          <p className="uppercase text-sm font-semibold">
            {t.liability}
          </p>

          <p className="pt-6 border-t border-muted/10 font-medium text-heading">
            {t.closing}
          </p>
        </div>
      </div>
    </main>
  );
}
