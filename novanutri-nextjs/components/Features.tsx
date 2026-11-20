"use client";

import { useSiteMessages } from "@/components/LanguageProvider";

export default function Features() {
  const copy = useSiteMessages().features;
  const features = [
    {
      category: copy.cook.category,
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
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
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
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
      badgeColor: "bg-green-100 text-green-700 border-green-200",
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
    <section id="features" className="w-full bg-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-125 h-125 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-150 h-150 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
            {copy.headlineLead}<span className="text-primary">{copy.headlineEmphasis}</span>
          </h2>
          <p className="text-lg text-body">
            {copy.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((section) => (
            <div key={section.category} className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${section.badgeColor}`}>
                  {section.category}
                </span>
                <div className="h-px bg-muted/20 flex-1"></div>
              </div>

              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="flex-1 flex flex-col bg-surface border border-muted/10 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-muted/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-muted/10">
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
