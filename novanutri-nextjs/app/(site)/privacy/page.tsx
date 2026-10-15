import type { Metadata } from "next";
import PrivacyPolicyView from "@/components/PrivacyPolicyView";
import { getPrivacyLocale, privacyAlternates, privacyCanonical } from "@/content/privacy-helpers";

const locale = getPrivacyLocale("en")!;

export const metadata: Metadata = {
  title: `${locale.title} | Riov`,
  description: locale.policyTitle,
  alternates: {
    canonical: privacyCanonical(locale),
    languages: privacyAlternates(),
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView locale={locale} />;
}
