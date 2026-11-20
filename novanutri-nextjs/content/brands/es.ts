import type { BrandsCopy } from "@/lib/brands";

const copy: BrandsCopy = {
  lang: "es",
  htmlLang: "es",
  path: "es",
  languageName: "Español",
  switcherLabel: "Idioma",
  navLabel: "Para marcas",
  metaTitle: "Colaboraciones de marca",
  metaDescription:
    "Patrocina un ingrediente en las listas de la compra de Riov. 0,01 € por aparición. Los clics no se cobran. Para marcas de alimentación y productores locales.",
  eyebrow: "Para marcas de alimentación y productores locales",
  title: "Tu producto, en la lista de la compra.",
  lede: "Riov es una app que genera un menú mediterráneo para la semana y lo convierte en una lista de la compra.",
  how: "Tu producto aparece en esa lista como ingrediente patrocinado, claramente marcado, con un enlace al producto.",
  ctaPricing: "Ver el precio",
  ctaContact: "Escríbenos",
  listCaption: "En una lista de la compra",
  listNote: "Solo un ejemplo. Las líneas patrocinadas van marcadas.",
  listBadge: "Patrocinado",
  listLink: "Ver producto",
  listProduct: "Tu producto",
  listRows: [
    { name: "Calabacines" },
    { name: "Aceite de oliva virgen extra", sponsored: true },
    { name: "Garbanzos" },
    { name: "Limones" },
  ],
  visibilityTitle: "Quién ve un artículo patrocinado",
  visibilityIntro: "Depende del plan de la persona y de sus ajustes.",
  visibility: [
    {
      title: "Plan gratuito",
      body: "Quien usa el plan gratuito ve los artículos patrocinados.",
    },
    {
      title: "Premium",
      body: "Quien usa el plan premium no los ve, salvo que los active.",
    },
    {
      title: "Filtro",
      body: "Cualquiera puede ocultar los artículos patrocinados.",
    },
  ],
  pricingTitle: "Precio",
  price: "0,01 €",
  priceUnit: "por aparición y por artículo en una lista de la compra.",
  clicks: "Los clics en el enlace no se cobran.",
  perThousand: "Unos 10 € por cada 1.000 apariciones.",
  notASale: "Una aparición significa que el artículo entró en una lista. No es una compra.",
  volume:
    "Las marcas más grandes y los supermercados regionales pueden negociar un precio por volumen según el tamaño de su mercado. La tarifa se acuerda en una reunión.",
  volumeLink: "Pedir una reunión",
  estimateLabel: "Estimación",
  estimateBody:
    "Una marca con 10 artículos, ante unas 1.000 personas activas de su zona, vería unas 43.000 apariciones al mes: unos 430 €. Es una estimación, no una previsión ni un gasto mínimo.",
  billingTitle: "Facturación",
  billingBody:
    "Enviamos una factura al mes. Incluye el recuento de apariciones de ese periodo. De momento no hay un panel en vivo para las marcas.",
  contactHeading: "Escríbenos",
  contactIntro: "Cuéntanos qué marca eres y qué productos quieres colocar. Te responderemos con los siguientes pasos.",
  subjectLabel: "Asunto",
  subject: "Colaboración de marca",
  nameLabel: "Nombre",
  emailLabel: "Correo electrónico",
  messageLabel: "Mensaje",
  namePlaceholder: "Ana García",
  emailPlaceholder: "ana@ejemplo.com",
  messagePlaceholder: "¿En qué podemos ayudarte?",
  defaultMessage:
    "Hola,\n\nMe gustaría hablar de una colaboración de marca.\n\nMarca:\nProductos:\nDónde vendemos:\n",
  submitLabel: "Enviar mensaje",
  sendingLabel: "Enviando...",
  successTitle: "Mensaje recibido",
  successBody: "Gracias por escribirnos. Te responderemos pronto.",
  anotherLabel: "Enviar otro mensaje",
  errorGeneric: "Algo ha fallado. Inténtalo de nuevo.",
  errorCaptcha: "reCAPTCHA aún se está cargando. Espera un momento e inténtalo de nuevo.",
};

export default copy;
