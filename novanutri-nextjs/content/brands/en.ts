import type { BrandsCopy } from "@/lib/brands";

const copy: BrandsCopy = {
  lang: "en",
  htmlLang: "en",
  path: "",
  languageName: "English",
  switcherLabel: "Language",
  navLabel: "For brands",
  metaTitle: "Brand partnerships",
  metaDescription:
    "Sponsor an ingredient on Riov shopping lists. €0.01 per appearance. Link clicks are not charged. For food brands and regional producers.",
  eyebrow: "For food brands and regional producers",
  title: "Your product, on the shopping list.",
  lede: "Riov is an app that generates a Mediterranean meal plan for the week and turns it into a shopping list.",
  how: "Your product is shown on that list as a sponsored ingredient, clearly marked, with a link to the product.",
  ctaPricing: "See pricing",
  ctaContact: "Talk to us",
  listCaption: "On a shopping list",
  listNote: "Example only. Sponsored lines are labeled.",
  listBadge: "Sponsored",
  listLink: "View product",
  listProduct: "Your product",
  listRows: [
    { name: "Courgettes" },
    { name: "Extra virgin olive oil", sponsored: true },
    { name: "Chickpeas" },
    { name: "Lemons" },
  ],
  visibilityTitle: "Who sees a sponsored item",
  visibilityIntro: "It depends on the person's plan and settings.",
  visibility: [
    {
      title: "Free plan",
      body: "People on the free plan see sponsored items.",
    },
    {
      title: "Premium",
      body: "People on the premium plan do not, unless they opt in.",
    },
    {
      title: "Filter",
      body: "Anyone can filter sponsored items out of the list.",
    },
  ],
  pricingTitle: "Pricing",
  price: "€0.01",
  priceUnit: "per appearance, per item, on a shopping list.",
  clicks: "Link clicks are not charged.",
  perThousand: "About €10 per 1,000 appearances.",
  notASale: "An appearance means the item was included on a list. It is not a purchase.",
  volume:
    "Larger brands and regional supermarkets can negotiate volume pricing depending on their market size. The rate is agreed in a meeting.",
  volumeLink: "Request a meeting",
  estimateLabel: "Estimate",
  estimateBody:
    "A brand with 10 items, across about 1,000 active local users, sees roughly 43,000 appearances a month — about €430. This is an estimate, not a forecast or a minimum spend.",
  billingTitle: "Billing",
  billingBody:
    "We send one invoice a month. It includes the appearance counts for that period. There is no live dashboard for brands at this stage.",
  contactHeading: "Talk to us",
  contactIntro: "Tell us about your brand and the products you want to place. We will reply with next steps.",
  subjectLabel: "Subject",
  subject: "Brand partnership",
  nameLabel: "Name",
  emailLabel: "Email Address",
  messageLabel: "Message",
  namePlaceholder: "John Doe",
  emailPlaceholder: "john@example.com",
  messagePlaceholder: "How can we help you?",
  defaultMessage:
    "Hello,\n\nI would like to discuss a brand partnership.\n\nBrand:\nProducts:\nWhere we sell:\n",
  submitLabel: "Send Message",
  sendingLabel: "Sending...",
  successTitle: "Message Received!",
  successBody: "Thanks for reaching out. We'll get back to you soon.",
  anotherLabel: "Send another message",
  errorGeneric: "Something went wrong. Please try again.",
  errorCaptcha: "reCAPTCHA is still loading. Please try again in a moment.",
};

export default copy;
