"use client";

import { useSiteMessages } from "@/components/LanguageProvider";

export default function Features() {
  const copy = useSiteMessages().features;
  const features = [
    {
      category: copy.cook.category,
      items: [
        {
          title: copy.cook.scannerTitle,
          description: copy.cook.scannerBody,
          icon: "📸",
        },
        {
          title: copy.cook.pdfTitle,
          description: copy.cook.pdfBody,
          icon: "📄",
        },
      ],
    },
    {
      category: copy.organize.category,
      items: [
        {
          title: copy.organize.plannerTitle,
          description: copy.organize.plannerBody,
          icon: "📅",
        },
        {
          title: copy.organize.shoppingTitle,
          description: copy.organize.shoppingBody,
          icon: "🛒",
        },
      ],
    },
    {
      category: copy.health.category,
      items: [
        {
          title: copy.health.mediterraneanTitle,
          description: copy.health.mediterraneanBody,
          icon: "🥑",
        },
        {
          title: copy.health.allergyTitle,
          description: copy.health.allergyBody,
          icon: "🛡️",
        },
      ],
    },
  ];

  return (
    <section id="features" className="w-full bg-background py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
            {copy.headlineLead}<span className="text-accent">{copy.headlineEmphasis}</span>
          </h2>
          <p className="text-lg text-body">
            {copy.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((section) => (
            <div key={section.category} className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-soft text-accent border border-line">
                  {section.category}
                </span>
                <div className="h-px bg-line flex-1"></div>
              </div>

              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="card flex-1 flex flex-col p-7"
                >
                  <div className="icon-tile mb-5" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">{item.title}</h3>
                  <p className="text-body leading-relaxed grow">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
