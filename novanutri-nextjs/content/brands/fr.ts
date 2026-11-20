import type { BrandsCopy } from "@/lib/brands";

const copy: BrandsCopy = {
  lang: "fr",
  htmlLang: "fr",
  path: "fr",
  languageName: "Français",
  switcherLabel: "Langue",
  navLabel: "Pour les marques",
  metaTitle: "Partenariats de marque",
  metaDescription:
    "Sponsorisez un ingrédient sur les listes de courses Riov. 0,01 € par apparition. Les clics ne sont pas facturés. Pour les marques alimentaires et les producteurs régionaux.",
  eyebrow: "Pour les marques alimentaires et les producteurs régionaux",
  title: "Votre produit, sur la liste de courses.",
  lede: "Riov est une application qui compose un menu méditerranéen pour la semaine et le transforme en liste de courses.",
  how: "Votre produit apparaît sur cette liste comme ingrédient sponsorisé, clairement indiqué, avec un lien vers le produit.",
  ctaPricing: "Voir le tarif",
  ctaContact: "Nous écrire",
  listCaption: "Sur une liste de courses",
  listNote: "Exemple seulement. Les lignes sponsorisées sont indiquées.",
  listBadge: "Sponsorisé",
  listLink: "Voir le produit",
  listProduct: "Votre produit",
  listRows: [
    { name: "Courgettes" },
    { name: "Huile d'olive vierge extra", sponsored: true },
    { name: "Pois chiches" },
    { name: "Citrons" },
  ],
  visibilityTitle: "Qui voit un article sponsorisé",
  visibilityIntro: "Cela dépend de l'offre de la personne et de ses réglages.",
  visibility: [
    {
      title: "Offre gratuite",
      body: "Les personnes sur l'offre gratuite voient les articles sponsorisés.",
    },
    {
      title: "Premium",
      body: "Les personnes sur l'offre premium ne les voient pas, sauf si elles les activent.",
    },
    {
      title: "Filtre",
      body: "Chacun peut masquer les articles sponsorisés.",
    },
  ],
  pricingTitle: "Tarif",
  price: "0,01 €",
  priceUnit: "par apparition et par article sur une liste de courses.",
  clicks: "Les clics sur le lien ne sont pas facturés.",
  perThousand: "Environ 10 € pour 1 000 apparitions.",
  notASale: "Une apparition signifie que l'article figurait sur une liste. Ce n'est pas un achat.",
  volume:
    "Les marques plus importantes et les supermarchés régionaux peuvent négocier un tarif au volume selon la taille de leur marché. Le tarif est convenu lors d'un rendez-vous.",
  volumeLink: "Demander un rendez-vous",
  estimateLabel: "Estimation",
  estimateBody:
    "Une marque avec 10 articles, auprès d'environ 1 000 personnes actives de sa zone, verrait environ 43 000 apparitions par mois, soit environ 430 €. C'est une estimation, pas une prévision ni un minimum.",
  billingTitle: "Facturation",
  billingBody:
    "Nous envoyons une facture par mois. Elle inclut le nombre d'apparitions de la période. Il n'y a pas, à ce stade, de tableau de bord en direct pour les marques.",
  contactHeading: "Nous écrire",
  contactIntro: "Présentez votre marque et les produits que vous souhaitez placer. Nous vous répondrons avec la suite.",
  subjectLabel: "Objet",
  subject: "Partenariat de marque",
  nameLabel: "Nom",
  emailLabel: "Adresse e-mail",
  messageLabel: "Message",
  namePlaceholder: "Camille Martin",
  emailPlaceholder: "camille@exemple.fr",
  messagePlaceholder: "Comment pouvons-nous vous aider ?",
  defaultMessage:
    "Bonjour,\n\nJe souhaite parler d'un partenariat de marque.\n\nMarque :\nProduits :\nOù nous vendons :\n",
  submitLabel: "Envoyer le message",
  sendingLabel: "Envoi...",
  successTitle: "Message reçu",
  successBody: "Merci de nous avoir écrit. Nous vous répondrons bientôt.",
  anotherLabel: "Envoyer un autre message",
  errorGeneric: "Une erreur s'est produite. Veuillez réessayer.",
  errorCaptcha: "reCAPTCHA est encore en cours de chargement. Réessayez dans un instant.",
};

export default copy;
