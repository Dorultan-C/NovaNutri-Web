export default function Investors() {
    return (
      <section id="investors" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3 block">
              Partner With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
              Investors & <span className="text-indigo-500">Collaborations</span>
            </h2>
            <p className="text-lg text-body leading-relaxed">
              Riov is a fully developed, AI-powered smart meal planner designed to seamlessly bridge the gap between culinary inspiration and kitchen execution. We are looking for strategic partners to help us scale.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: The Traction & MVP */}
            <div className="bg-white border border-muted/10 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">Current Traction & MVP</h3>
              <p className="text-body mb-4">
                Unlike many early-stage startups seeking consultation, the Riov MVP is already fully coded and operational. 
              </p>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Built on a scalable architecture using React Native for the frontend and Firebase/Google Cloud Functions for the backend.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Integrates advanced AI APIs (OpenAI) for extraction and dynamic macronutrient calculation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Independently architected, designed, and programmed by a founder with over 10 years of professional experience as a Chef.</span>
                </li>
              </ul>
            </div>
  
            {/* Right Column: The Ask & Capital Allocation */}
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                📈
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">The Funding Goal</h3>
              <p className="text-body mb-4">
                We are structuring a funding strategy to raise between €50,000 and €150,000. Acquiring a critical mass of active users and expanding a heavy-API infrastructure requires strategic capital.
              </p>
              <h4 className="font-bold text-heading mb-3 text-sm uppercase tracking-wider">How Capital Will Be Allocated:</h4>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Scaling server and API infrastructure efficiently.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Executing our immediate go-to-market (GTM) strategy focused on frugal living, meal-prepping, and Mediterranean health communities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Making key hires, including domain experts like nutritionists, health advisors, and a compliance officer to ensure regulatory adherence.</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95">
                  Request Pitch Deck
                </a>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }