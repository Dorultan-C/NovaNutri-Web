import type { Metadata } from "next";
import TermsView from "@/components/TermsView";
import { getTermsLocale, termsAlternates, termsCanonical } from "@/content/terms-helpers";

const locale = getTermsLocale("en")!;

export const metadata: Metadata = {
  title: `${locale.title} | Riov`,
  description: locale.termsTitle,
  alternates: {
    canonical: termsCanonical(locale),
    languages: termsAlternates(),
  },
};

export default function TermsPage() {
  return <TermsView locale={locale} />;
}
