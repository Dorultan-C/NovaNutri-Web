export default function Features() {
  const features = [
    {
      category: "The AI Magic",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      items: [
        {
          title: "AI Video & Image to Recipe",
          description: "Saw a viral recipe on TikTok or Instagram? Just upload the video or image, and our AI instantly converts it into a full, step-by-step recipe.",
          icon: "🪄"
        },
        {
          title: "AI Food Scanner",
          description: "Not sure what to cook? Scan the ingredients in your kitchen, and we'll generate the perfect meal using exactly what you have.",
          icon: "📸"
        }
      ]
    },
    {
      category: "Smart Organization",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      items: [
        {
          title: "Meal Planner & Virtual Fridge",
          description: "Plan your entire week in seconds. Keep track of what's inside your Virtual Fridge to drastically reduce food waste.",
          icon: "📅"
        },
        {
          title: "Smart Shopping Organizer",
          description: "Your meal plan automatically generates a highly organized shopping list, categorized by supermarket aisles to save you time.",
          icon: "🛒"
        }
      ]
    },
    {
      category: "Health, Wallet & Community",
      badgeColor: "bg-green-100 text-green-700 border-green-200",
      items: [
        {
          title: "Budget & Nutrient Tracking",
          description: "Total budget transparency before you hit the store. Track macros and micronutrients to ensure your family is eating healthy.",
          icon: "🥑"
        },
        {
          title: "Global Cooking Guide & Rewards",
          description: "Interactive cooking guides in 7 different languages. Earn rewards as you cook, interact with the community, and master new cuisines.",
          icon: "🌍"
        }
      ]
    }
  ];

  return (
    <section id="features" className="w-full bg-white py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-125 h-125 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-150 h-150 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
            Everything you need in <span className="text-primary">one app.</span>
          </h2>
          <p className="text-lg text-body">
            NovaNutri replaces your notes app, your calorie counter, your budget tracker, and your messy recipe links with a single, AI-powered ecosystem.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((section, sectionIdx) => (
            <div key={sectionIdx} className="flex flex-col gap-6">
              
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${section.badgeColor}`}>
                  {section.category}
                </span>
                <div className="h-px bg-muted/20 flex-1"></div>
              </div>

              {/* Feature Cards */}
              {section.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-surface border border-muted/10 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-muted/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-muted/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">{item.title}</h3>
                  <p className="text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}