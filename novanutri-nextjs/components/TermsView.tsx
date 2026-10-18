import Link from "next/link";
import type { TermsLocale } from "@/lib/terms";
import { TERMS_LOCALES, termsHref } from "@/content/terms-helpers";

const CONTENT_CLASS =
  "text-body leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-heading [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-heading [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_ol]:space-y-2 [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold [&_strong]:text-heading [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4 [&_table]:w-full [&_table]:text-sm [&_table]:my-4 [&_table]:border-collapse [&_th]:text-left [&_th]:font-semibold [&_th]:text-heading [&_th]:border [&_th]:border-muted/20 [&_th]:p-2 [&_th]:bg-white [&_td]:border [&_td]:border-muted/20 [&_td]:p-2 [&_td]:align-top";

export default function TermsView({ locale }: { locale: TermsLocale }) {
  const langs = Object.values(TERMS_LOCALES);
  return (
    <main lang={locale.htmlLang} className="w-full bg-surface min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <nav aria-label={locale.switcherLabel} className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted font-medium mr-1">{locale.switcherLabel}:</span>
          {langs.map((l) => {
            const active = l.lang === locale.lang;
            return (
              <Link
                key={l.lang}
                href={termsHref(l)}
                hrefLang={l.htmlLang}
                className={
                  active
                    ? "px-3 py-1 rounded-full bg-primary text-white font-semibold"
                    : "px-3 py-1 rounded-full border border-muted/20 text-body hover:border-primary hover:text-primary transition-colors"
                }
                aria-current={active ? "page" : undefined}
              >
                {l.languageName}
              </Link>
            );
          })}
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">
          {locale.title}
        </h1>
        <div
          className="text-muted mb-12 font-medium"
          dangerouslySetInnerHTML={{ __html: locale.metaHtml }}
        />
        <div
          className={CONTENT_CLASS}
          dangerouslySetInnerHTML={{ __html: locale.contentHtml }}
        />
      </div>
    </main>
  );
}
