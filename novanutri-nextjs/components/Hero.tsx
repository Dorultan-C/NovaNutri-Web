"use client";

import Image from "next/image";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function Hero() {
  const t = useSiteMessages().hero;
  const shots = [
    { src: "/hero-mockup.png", alt: t.mockupAlt, caption: t.shotIntake },
    { src: "/feature-2.png", alt: t.shotRecipes, caption: t.shotRecipes },
    { src: "/feature-3.png", alt: t.shotPlan, caption: t.shotPlan },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="shot-row" aria-label={t.mockupAlt}>
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
              {t.badge}
            </div>

            <h1>
              {t.line1}
              <br />
              <span className="text-accent">{t.line2}</span>
              <br />
              {t.line3}
            </h1>

            <p className="hero-lead">{t.body}</p>

            <div className="hero-cta">
              <div className="store-col">
                <a
                  href="https://play.google.com/store/apps/details?id=com.riov.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <Image src="/google-play-badge.png" alt={t.googlePlayAlt} fill sizes="192px" className="object-contain" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/riov-mediterranean-meal-plan/id6770679057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <Image src="/app-store-badge.svg" alt={t.appStoreAlt} fill sizes="192px" className="object-contain" />
                </a>
              </div>

              <div className="qr-block">
                <div className="relative size-36 shrink-0 rounded-2xl bg-white p-2 shadow-md">
                  <Image src="/qr-code.svg" alt={t.qrAlt} fill sizes="144px" className="object-contain" />
                </div>
                <span className="max-w-24 text-sm font-bold uppercase tracking-wider text-muted">{t.scan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
