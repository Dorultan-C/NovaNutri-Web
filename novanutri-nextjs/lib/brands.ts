import { SITE_ORIGIN } from "@/lib/privacy";

export type BrandsListRow = {
  name: string;
  sponsored?: boolean;
};

export type BrandsPoint = {
  title: string;
  body: string;
};

export type BrandsCopy = {
  lang: string;
  htmlLang: string;
  /** Empty for English (/brands); otherwise the /brands/[lang] segment. */
  path: string;
  languageName: string;
  switcherLabel: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  how: string;
  ctaPricing: string;
  ctaContact: string;
  listCaption: string;
  listNote: string;
  listBadge: string;
  listLink: string;
  listProduct: string;
  listRows: BrandsListRow[];
  visibilityTitle: string;
  visibilityIntro: string;
  visibility: BrandsPoint[];
  pricingTitle: string;
  price: string;
  priceUnit: string;
  clicks: string;
  perThousand: string;
  notASale: string;
  volume: string;
  volumeLink: string;
  estimateLabel: string;
  estimateBody: string;
  billingTitle: string;
  billingBody: string;
  contactHeading: string;
  contactIntro: string;
  subjectLabel: string;
  subject: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  defaultMessage: string;
  submitLabel: string;
  sendingLabel: string;
  successTitle: string;
  successBody: string;
  anotherLabel: string;
  errorGeneric: string;
  errorCaptcha: string;
};

export function brandsHref(copy: Pick<BrandsCopy, "path">): string {
  return copy.path ? `/brands/${copy.path}` : "/brands";
}

export function brandsCanonical(copy: Pick<BrandsCopy, "path">): string {
  return `${SITE_ORIGIN}${brandsHref(copy)}`;
}

export function brandsAlternates(): Record<string, string> {
  return {
    en: `${SITE_ORIGIN}/brands`,
    es: `${SITE_ORIGIN}/brands/es`,
    ca: `${SITE_ORIGIN}/brands/ca`,
    fr: `${SITE_ORIGIN}/brands/fr`,
    it: `${SITE_ORIGIN}/brands/it`,
    ro: `${SITE_ORIGIN}/brands/ro`,
    da: `${SITE_ORIGIN}/brands/da`,
    "x-default": `${SITE_ORIGIN}/brands`,
  };
}
