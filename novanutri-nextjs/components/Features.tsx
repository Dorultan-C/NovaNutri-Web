import Reveal from "@/components/Reveal";

export default function Features() {
  const features = [
    {
      category: "Cook & Share",
      items: [
        {
          title: "AI Food Scanner",
          description: "Not sure what to cook? Scan the ingredients in your kitchen, and we'll generate the perfect meal using exactly what you have.",
          icon: "📸",
        },
        {
          title: "Export Your Plan & List as PDF",
          description: "Turn your weekly meal plan or shopping list into a clean PDF and share it from your phone, or copy your list as text to paste into WhatsApp or Messenger.",
          icon: "📄",
        },
      ],
    },
    {
      category: "Smart Organization",
      items: [
        {
          title: "Meal Planner & Virtual Fridge",
          description: "Plan your entire week in seconds. Keep track of what's inside your Virtual Fridge to drastically reduce food waste.",
          icon: "📅",
        },
        {
          title: "Smart Shopping Organizer",
          description: "Your meal plan automatically generates a highly organized shopping list, categorized by supermarket aisles to save you time.",
          icon: "🛒",
        },
      ],
    },
    {
      category: "Health, Wallet & Safety",
      items: [
        {
          title: "Mediterranean Plans & Nutrition",
          description: "Generate weekly menus based on clinical Mediterranean guidelines (prioritizing vegetables, legumes, and lean proteins) while tracking your daily macros.",
          icon: "🥑",
        },
        {
          title: "Clinical Dietary & Allergy Control",
          description: "Navigate recipes safely. Set strict food allergies (like gluten or dairy) or list disliked ingredients, and Riov will automatically filter your meals.",
          icon: "🛡️",
        },
      ],
    },
  ];

  return (
    <section id="features" className="w-full bg-background py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
              Everything you need in <span className="text-accent">one app.</span>
            </h2>
            <p className="text-lg text-body">
              Riov replaces your notes app, your calorie counter, and your budget tracker with a single, AI-powered ecosystem.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((section) => (
              <div key={section.category} className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-soft text-accent border border-line">
                    {section.category}
                  </span>
                  <div className="h-px bg-line flex-1" />
                </div>

                {section.items.map((item) => (
                  <div key={item.title} className="card flex-1 flex flex-col p-7">
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
        </Reveal>
      </div>
    </section>
  );
}
