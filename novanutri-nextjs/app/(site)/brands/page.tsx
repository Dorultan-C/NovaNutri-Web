import type { Metadata } from "next";
import BrandsView from "@/components/BrandsView";
import en from "@/content/brands/en";
import { brandsAlternates, brandsCanonical } from "@/lib/brands";

export const metadata: Metadata = {
  title: `${en.metaTitle} | Riov`,
  description: en.metaDescription,
  alternates: {
    canonical: brandsCanonical(en),
    languages: brandsAlternates(),
  },
};

export default function BrandsPage() {
  return <BrandsView copy={en} />;
}
