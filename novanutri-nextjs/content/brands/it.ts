import type { BrandsCopy } from "@/lib/brands";

const copy: BrandsCopy = {
  lang: "it",
  htmlLang: "it",
  path: "it",
  languageName: "Italiano",
  switcherLabel: "Lingua",
  navLabel: "Per i marchi",
  metaTitle: "Collaborazioni con i marchi",
  metaDescription:
    "Sponsorizza un ingrediente nelle liste della spesa di Riov. 0,01 € per apparizione. I clic non si pagano. Per marchi alimentari e produttori locali.",
  eyebrow: "Per marchi alimentari e produttori locali",
  title: "Il tuo prodotto, nella lista della spesa.",
  lede: "Riov è un'app che genera un menu mediterraneo per la settimana e lo trasforma in una lista della spesa.",
  how: "Il tuo prodotto compare in quella lista come ingrediente sponsorizzato, chiaramente indicato, con un link al prodotto.",
  ctaPricing: "Vedi il prezzo",
  ctaContact: "Scrivici",
  listCaption: "In una lista della spesa",
  listNote: "Solo un esempio. Le righe sponsorizzate sono indicate.",
  listBadge: "Sponsorizzato",
  listLink: "Vedi il prodotto",
  listProduct: "Il tuo prodotto",
  listRows: [
    { name: "Zucchine" },
    { name: "Olio extravergine di oliva", sponsored: true },
    { name: "Ceci" },
    { name: "Limoni" },
  ],
  visibilityTitle: "Chi vede un articolo sponsorizzato",
  visibilityIntro: "Dipende dal piano della persona e dalle sue impostazioni.",
  visibility: [
    {
      title: "Piano gratuito",
      body: "Chi usa il piano gratuito vede gli articoli sponsorizzati.",
    },
    {
      title: "Premium",
      body: "Chi usa il piano premium non li vede, salvo che li attivi.",
    },
    {
      title: "Filtro",
      body: "Chiunque può nascondere gli articoli sponsorizzati.",
    },
  ],
  pricingTitle: "Prezzo",
  price: "0,01 €",
  priceUnit: "per apparizione e per articolo su una lista della spesa.",
  clicks: "I clic sul link non si pagano.",
  perThousand: "Circa 10 € ogni 1.000 apparizioni.",
  notASale: "Un'apparizione significa che l'articolo era nella lista. Non è un acquisto.",
  volume:
    "I marchi più grandi e i supermercati regionali possono negoziare un prezzo a volume in base alla dimensione del loro mercato. La tariffa si concorda in un incontro.",
  volumeLink: "Chiedere un incontro",
  estimateLabel: "Stima",
  estimateBody:
    "Un marchio con 10 articoli, presso circa 1.000 persone attive della sua zona, vedrebbe circa 43.000 apparizioni al mese: circa 430 €. È una stima, non una previsione né una spesa minima.",
  billingTitle: "Fatturazione",
  billingBody:
    "Inviamo una fattura al mese. Include il conteggio delle apparizioni di quel periodo. Per ora non c'è un pannello in tempo reale per i marchi.",
  contactHeading: "Scrivici",
  contactIntro: "Raccontaci il tuo marchio e i prodotti che vorresti inserire. Ti risponderemo con i passi successivi.",
  subjectLabel: "Oggetto",
  subject: "Collaborazione con un marchio",
  nameLabel: "Nome",
  emailLabel: "Email",
  messageLabel: "Messaggio",
  namePlaceholder: "Giulia Rossi",
  emailPlaceholder: "giulia@esempio.it",
  messagePlaceholder: "Come possiamo aiutarti?",
  defaultMessage:
    "Ciao,\n\nVorrei parlare di una collaborazione con il mio marchio.\n\nMarchio:\nProdotti:\nDove vendiamo:\n",
  submitLabel: "Invia il messaggio",
  sendingLabel: "Invio...",
  successTitle: "Messaggio ricevuto",
  successBody: "Grazie per averci scritto. Ti risponderemo presto.",
  anotherLabel: "Invia un altro messaggio",
  errorGeneric: "Qualcosa è andato storto. Riprova.",
  errorCaptcha: "reCAPTCHA è ancora in caricamento. Attendi un momento e riprova.",
};

export default copy;
