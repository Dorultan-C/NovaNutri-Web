import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BRANDS_LOCALES } from "@/content/brands/index";
import { brandsHref, type BrandsCopy } from "@/lib/brands";

function ExampleList({ copy }: { copy: BrandsCopy }) {
  return (
    <figure className="mx-auto w-full max-w-sm bg-white border border-muted/10 rounded-3xl shadow-sm p-6">
      <figcaption className="text-sm font-bold text-heading mb-1">{copy.listCaption}</figcaption>
      <p className="text-xs text-muted mb-5">{copy.listNote}</p>
      <ul className="flex flex-col">
        {copy.listRows.map((row) => (
          <li
            key={row.name}
            className={
              row.sponsored
                ? "rounded-2xl bg-primary/5 border border-primary/20 px-4 py-3"
                : "px-4 py-3"
            }
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-1 h-4 w-4 rounded-full border border-muted/40 shrink-0"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-heading">{row.name}</p>
                {row.sponsored ? (
                  <p className="text-sm text-body mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="whitespace-nowrap">{copy.listProduct}</span>
                    <span className="text-muted" aria-hidden="true">·</span>
                    <span className="whitespace-nowrap text-primary-dark font-semibold">{copy.listBadge}</span>
                    <span className="text-muted" aria-hidden="true">·</span>
                    <span className="whitespace-nowrap text-primary font-semibold">{copy.listLink}</span>
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export default function BrandsView({ copy }: { copy: BrandsCopy }) {
  const locales = Object.values(BRANDS_LOCALES);
  const pageHref = brandsHref(copy);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary-light selection:text-primary-dark">
      <Header brandsHref={pageHref} brandsLabel={copy.navLabel} brandsActive />
      <main>
        <section className="w-full px-6 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <nav aria-label={copy.switcherLabel} className="mb-10 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted font-medium mr-1">{copy.switcherLabel}:</span>
              {locales.map((locale) => {
                const active = locale.lang === copy.lang;
                return (
                  <Link
                    key={locale.lang}
                    href={brandsHref(locale)}
                    hrefLang={locale.htmlLang}
                    className={
                      active
                        ? "px-3 py-1 rounded-full bg-primary text-white font-semibold"
                        : "px-3 py-1 rounded-full border border-muted/20 text-body hover:border-primary hover:text-primary transition-colors"
                    }
                    aria-current={active ? "page" : undefined}
                  >
                    {locale.languageName}
                  </Link>
                );
              })}
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3 block">
                  {copy.eyebrow}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
                  {copy.title}
                </h1>
                <p className="text-lg text-body leading-relaxed mb-4">{copy.lede}</p>
                <p className="text-lg text-body leading-relaxed mb-8">{copy.how}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#pricing"
                    className="inline-flex justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95"
                  >
                    {copy.ctaPricing}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex justify-center border border-muted/30 hover:border-primary hover:text-primary text-heading px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    {copy.ctaContact}
                  </a>
                </div>
              </div>
              <ExampleList copy={copy} />
            </div>
          </div>
        </section>

        <section className="w-full bg-surface border-t border-muted/10 px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading tracking-tight mb-3">
              {copy.visibilityTitle}
            </h2>
            <p className="text-lg text-body mb-10">{copy.visibilityIntro}</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.visibility.map((point) => (
                <li
                  key={point.title}
                  className="bg-white border border-muted/10 rounded-3xl p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-heading mb-3">{point.title}</h3>
                  <p className="text-body leading-relaxed">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="w-full px-6 py-16 md:py-24 scroll-mt-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
              {copy.pricingTitle}
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-heading tracking-tight">{copy.price}</h2>
            <p className="text-xl text-heading font-semibold mt-4">{copy.priceUnit}</p>
            <p className="text-lg text-heading font-semibold mt-3">{copy.clicks}</p>
            <p className="text-lg text-body mt-2">{copy.perThousand}</p>
            <p className="text-body mt-4">{copy.notASale}</p>
            <p className="text-lg text-body leading-relaxed mt-8">
              {copy.volume}{" "}
              <a href="#contact" className="text-primary font-semibold underline underline-offset-2">
                {copy.volumeLink}
              </a>
            </p>
            <div className="mt-10 bg-white border border-muted/10 rounded-3xl p-6 md:p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                {copy.estimateLabel}
              </p>
              <p className="text-body leading-relaxed">{copy.estimateBody}</p>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface border-t border-muted/10 px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading tracking-tight mb-4">
              {copy.billingTitle}
            </h2>
            <p className="text-lg text-body leading-relaxed">{copy.billingBody}</p>
          </div>
        </section>

        <Contact
          id="contact"
          heading={copy.contactHeading}
          intro={copy.contactIntro}
          subjectLabel={copy.subjectLabel}
          subject={copy.subject}
          nameLabel={copy.nameLabel}
          emailLabel={copy.emailLabel}
          messageLabel={copy.messageLabel}
          namePlaceholder={copy.namePlaceholder}
          emailPlaceholder={copy.emailPlaceholder}
          messagePlaceholder={copy.messagePlaceholder}
          defaultMessage={copy.defaultMessage}
          submitLabel={copy.submitLabel}
          sendingLabel={copy.sendingLabel}
          successTitle={copy.successTitle}
          successBody={copy.successBody}
          anotherLabel={copy.anotherLabel}
          errorGeneric={copy.errorGeneric}
          errorCaptcha={copy.errorCaptcha}
        />
      </main>
      <Footer brandsHref={pageHref} brandsLabel={copy.navLabel} />
    </div>
  );
}
