import Reveal from "@/components/Reveal";

export default function Investors() {
  return (
    <section id="investors" className="w-full bg-background py-20 md:py-24 px-6 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">
              Partner With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
              Investors & <span className="text-accent">Collaborations</span>
            </h2>
            <p className="text-lg text-body leading-relaxed">
              Riov is a fully developed, AI-powered smart meal planner designed to seamlessly bridge the gap between culinary inspiration and kitchen execution. We are looking for strategic partners to help us scale.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="card p-8">
              <div className="icon-tile mb-6" aria-hidden="true">🚀</div>
              <h3 className="text-2xl font-bold text-heading mb-4">Current Traction & MVP</h3>
              <p className="text-body mb-4">
                Unlike many early-stage startups seeking consultation, the Riov MVP is already fully coded and operational.
              </p>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <span className="text-ok mt-0.5" aria-hidden="true">✓</span>
                  <span>Built on a scalable architecture using React Native for the frontend and Firebase/Google Cloud Functions for the backend.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ok mt-0.5" aria-hidden="true">✓</span>
                  <span>Integrates advanced AI APIs (OpenAI) for dynamic macronutrient calculation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ok mt-0.5" aria-hidden="true">✓</span>
                  <span>Independently architected, designed, and programmed by a founder with over 10 years of professional experience as a Chef.</span>
                </li>
              </ul>
            </div>

            <div className="card tint p-8">
              <div className="icon-tile mb-6" aria-hidden="true">📈</div>
              <h3 className="text-2xl font-bold text-heading mb-4">The Funding Goal</h3>
              <p className="text-body mb-4">
                We are structuring a funding strategy to support our next stage of growth. Acquiring a critical mass of active users and expanding a heavy-API infrastructure requires strategic capital.
              </p>
              <p className="text-body mb-4">
                For the funding amount and full details,{" "}
                <a href="#contact" className="text-accent font-semibold underline underline-offset-2">request our pitch deck</a>.
              </p>
              <h4 className="font-bold text-heading mb-3 text-sm uppercase tracking-wider">How Capital Will Be Allocated:</h4>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                  <span>Scaling server and API infrastructure efficiently.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                  <span>Executing our immediate go-to-market (GTM) strategy focused on frugal living, meal-prepping, and Mediterranean health communities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                  <span>Making key hires, including domain experts like nutritionists, health advisors, and a compliance officer to ensure regulatory adherence.</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="btn">
                  Request Pitch Deck
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
