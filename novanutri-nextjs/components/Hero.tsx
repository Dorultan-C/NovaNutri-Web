import Image from "next/image";

const shots = [
  {
    src: "/hero-mockup.png",
    alt: "Riov home screen showing today's calorie and macro intake",
    caption: "Today's intake",
  },
  {
    src: "/feature-2.png",
    alt: "Riov recipe list with a price on each dish",
    caption: "Recipes, with prices",
  },
  {
    src: "/feature-3.png",
    alt: "Riov weekly meal plan with breakfast, lunch, and dinner",
    caption: "The weekly plan",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="shot-row" aria-label="App screenshots">
            {shots.map((shot, index) => (
              <figure className="shot" key={shot.src}>
                <div className="shot-frame">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 960px) 220px, 68vw"
                    className="object-cover object-top"
                    priority={index === 0}
                    quality={60}
                  />
                </div>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="hero-copy">
            <div className="hero-badge">
              <span aria-hidden="true">🚀</span>
              Now Live on iOS & Android
            </div>

            <h1>
              Plan smarter.
              <br />
              <span className="text-accent">Eat better.</span>
              <br />
              Spend less.
            </h1>

            <p className="hero-lead">
              Riov automatically builds your weekly meal plan, tracks your nutrients, and organizes your grocery list to save you time and money.
            </p>

            <div className="hero-cta">
              <div className="store-col">
                <a
                  href="https://play.google.com/store/apps/details?id=com.riov.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/riov-mediterranean-meal-plan/id6770679057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </a>
              </div>

              <div className="qr-block">
                <div className="relative size-36 shrink-0 rounded-2xl bg-white p-2 shadow-md">
                  <Image
                    src="/qr-code.svg"
                    alt="Scan to download Riov"
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
                <span className="max-w-24 text-sm font-bold uppercase tracking-wider text-muted">
                  Scan to Download
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
