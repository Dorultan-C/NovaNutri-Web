// Machine-drafted marketing copy for review. Privacy Policy and Terms bodies are not in this file.
import type { SiteMessages } from "./en";

const messages = {
  meta: {
    title: "Riov | Planifica mejor. Come mejor. Gasta menos.",
    description:
      "El planificador de comidas inteligente con IA que crea menús semanales saludables y económicos, controla tu nutrición y organiza la lista de la compra.",
  },
  nav: {
    logoAlt: "Logotipo de Riov",
    primary: "Principal",
    getApp: "Consigue la app",
    features: "Funciones",
    about: "Nosotros",
    investors: "Inversores",
    contact: "Contáctanos",
    forBrands: "Para marcas",
    skip: "Saltar al contenido",
    darkMode: "Modo oscuro",
    searchLanguages: "Buscar idiomas",
    noLanguages: "Ningún idioma",
  },
  hero: {
    badge: "Ya disponible en iOS y Android",
    line1: "Planifica mejor.",
    line2: "Come mejor.",
    line3: "Gasta menos.",
    body: "Riov crea automáticamente tu plan de comidas semanal, controla tus nutrientes y organiza la lista de la compra para que ahorres tiempo y dinero.",
    googlePlayAlt: "Consíguela en Google Play",
    appStoreAlt: "Descárgala en el App Store",
    qrAlt: "Escanea para descargar Riov",
    scan: "Escanea para descargar",
    mockupAlt: "Interfaz de la app Riov",
    shotIntake: "La ingesta de hoy",
    shotRecipes: "Recetas, con precio",
    shotPlan: "El plan semanal",
  },
  features: {
    headlineLead: "Todo lo que necesitas en ",
    headlineEmphasis: "una sola app.",
    intro:
      "Riov sustituye tu app de notas, tu contador de calorías y tu control de gastos por un único ecosistema con IA.",
    cook: {
      category: "Cocina y comparte",
      scannerTitle: "Escáner de comida con IA",
      scannerBody:
        "¿No sabes qué cocinar? Escanea los ingredientes de tu cocina y generaremos la comida perfecta con exactamente lo que tienes.",
      pdfTitle: "Exporta tu plan y tu lista en PDF",
      pdfBody:
        "Convierte tu plan semanal o tu lista de la compra en un PDF claro y compártelo desde el móvil, o copia la lista como texto para pegarla en WhatsApp o Messenger.",
    },
    organize: {
      category: "Organización inteligente",
      plannerTitle: "Planificador de comidas y Nevera virtual",
      plannerBody:
        "Planifica toda la semana en segundos. Lleva el control de lo que hay en tu Nevera virtual para reducir de verdad el desperdicio de comida.",
      shoppingTitle: "Organizador de la compra inteligente",
      shoppingBody:
        "Tu plan de comidas genera automáticamente una lista de la compra muy ordenada, clasificada por pasillos del supermercado para ahorrarte tiempo.",
    },
    health: {
      category: "Salud, bolsillo y seguridad",
      mediterraneanTitle: "Planes mediterráneos y nutrición",
      mediterraneanBody:
        "Genera menús semanales según las pautas clínicas de la dieta mediterránea (priorizando verduras, legumbres y proteínas magras) mientras controlas tus macros diarios.",
      allergyTitle: "Control clínico de dietas y alergias",
      allergyBody:
        "Consulta las recetas con seguridad. Indica alergias alimentarias estrictas (como el gluten o los lácteos) o ingredientes que no te gustan, y Riov filtrará tus comidas automáticamente.",
    },
  },
  about: {
    imageAlt: "Una familia disfrutando de una comida sana",
    mission: "Nuestra misión",
    headlineLead: "De ",
    headlineHighlight: "deslizar",
    headlineTail: " a servir.",
    paragraph1:
      "Creemos que alimentar a tu familia no debería parecer un segundo trabajo. Entre el aumento del precio de la compra, el estrés de planificar las comidas y la culpa de tirar comida olvidada, la cena se ha vuelto innecesariamente complicada.",
    paragraph2:
      "Riov nació para cambiar eso. Al combinar nuestro escáner de recetas con IA con herramientas prácticas para casa —como la Nevera virtual y el control del presupuesto—, te ayudamos a aprovechar los ingredientes que ya tienes, descubrir nuevas cocinas y devolver la alegría a la cocina.",
    quote:
      "Después de 10 años como chef y jefe de cocina, me di cuenta de que en casa faltaban las herramientas que usamos en el sector: un control estricto del coste de la comida, el cumplimiento de los alérgenos y una logística de cero desperdicio. Creé Riov para llevar esa eficiencia profesional a la cocina de tu familia.",
    attribution: "Cristian Dorultan, fundador e ingeniero principal",
    statLanguages: "Idiomas",
    statLive: "Activo",
    statBudget: "Control del presupuesto",
    statMinimal: "Mínimo",
    statWaste: "Desperdicio de comida",
  },
  investors: {
    kicker: "Colabora con nosotros",
    headlineLead: "Inversores y ",
    headlineHighlight: "colaboraciones",
    intro:
      "Riov es un planificador de comidas inteligente, completamente desarrollado y con IA, pensado para unir sin fricción la inspiración culinaria y la ejecución en la cocina. Buscamos socios estratégicos que nos ayuden a crecer.",
    tractionTitle: "Tracción actual y MVP",
    tractionBody:
      "A diferencia de muchas startups en fase inicial que buscan asesoramiento, el MVP de Riov ya está completamente programado y en funcionamiento.",
    traction1:
      "Construido sobre una arquitectura escalable, con React Native en el frontend y Firebase/Google Cloud Functions en el backend.",
    traction2: "Integra APIs de IA avanzadas (OpenAI) para el cálculo dinámico de macronutrientes.",
    traction3:
      "Arquitectura, diseño y programación realizados de forma independiente por un fundador con más de 10 años de experiencia profesional como chef.",
    fundingTitle: "El objetivo de financiación",
    fundingBody:
      "Estamos estructurando una estrategia de financiación para la siguiente etapa de crecimiento. Conseguir una masa crítica de usuarios activos y ampliar una infraestructura intensiva en APIs requiere capital estratégico.",
    fundingDetails: "Para el importe de la financiación y todos los detalles, {link}.",
    fundingLink: "pídenos la presentación para inversores",
    allocationTitle: "Cómo se asignará el capital:",
    allocation1: "Escalar de forma eficiente la infraestructura de servidores y APIs.",
    allocation2:
      "Ejecutar de inmediato nuestra estrategia de salida al mercado (GTM), centrada en la vida frugal, el meal prep y las comunidades de salud mediterránea.",
    allocation3:
      "Hacer contrataciones clave, incluidos expertos de dominio como nutricionistas, asesores de salud y un responsable de cumplimiento, para garantizar el respeto de la normativa.",
    cta: "Pedir la presentación",
  },
  contact: {
    title: "Escríbenos",
    intro:
      "¿Tienes una pregunta sobre la app, necesitas ayuda o quieres colaborar con nosotros? Envíanos un mensaje y el equipo te responderá en breve.",
    receivedTitle: "¡Mensaje recibido!",
    receivedBody: "Gracias por escribirnos. Te responderemos pronto.",
    sendAnother: "Enviar otro mensaje",
    name: "Nombre",
    namePlaceholder: "Ana García",
    email: "Correo electrónico",
    emailPlaceholder: "ana@ejemplo.com",
    message: "Mensaje",
    messagePlaceholder: "¿Cómo podemos ayudarte?",
    sending: "Enviando...",
    submit: "Enviar mensaje",
    captchaLoading: "reCAPTCHA todavía se está cargando. Inténtalo de nuevo en un momento.",
    error: "Algo ha salido mal. Inténtalo de nuevo.",
  },
  footer: {
    communityTitle: "Únete a la comunidad",
    communityBody:
      "Síguenos para trucos de recetas económicas, novedades de la app y el día a día de cómo la construimos.",
    rights: "Todos los derechos reservados.",
    terms: "Términos y Condiciones",
    privacy: "Política de privacidad",
    license: "Licencia",
  },
  license: {
    metaTitle: "Licencia de software | Riov",
    metaDescription: "Licencia propietaria y de código cerrado del software de Riov.",
    title: "Licencia de software",
    copyright: "Copyright © 2026 Riov. Todos los derechos reservados.",
    kicker: "Licencia propietaria y de código cerrado",
    ownershipLabel: "1. Titularidad:",
    ownershipBody:
      "Todo el código fuente, la documentación, los diseños de UI/UX, los algoritmos y los archivos asociados contenidos en este repositorio son propiedad exclusiva de Riov.",
    restrictionsLabel: "2. Restricciones:",
    restrictionA:
      "No puedes copiar, reproducir, distribuir, publicar, mostrar, ejecutar, modificar, crear obras derivadas, transmitir ni explotar de ningún modo dicho contenido, ni distribuir ninguna parte de este contenido a través de ninguna red, incluida una red de área local, venderlo u ofrecerlo a la venta, ni utilizar dicho contenido para construir ningún tipo de base de datos.",
    restrictionB: "No puedes realizar ingeniería inversa, descompilar ni desensamblar el software.",
    restrictionC:
      "No puedes utilizar el código fuente ni el software con fines comerciales sin el permiso explícito y por escrito del titular.",
    warrantyLabel: "3. Sin garantía:",
    warrantyBody:
      "Este software se proporciona por los titulares de los derechos de autor y los colaboradores «tal cual», y se rechaza cualquier garantía expresa o implícita, incluidas, entre otras, las garantías implícitas de comerciabilidad e idoneidad para un fin determinado.",
    liability:
      "En ningún caso el titular de los derechos de autor o los colaboradores serán responsables de ningún daño directo, indirecto, incidental, especial, ejemplar o consecuente.",
    closing:
      "El uso no autorizado de este código está estrictamente prohibido y constituye una violación de la ley de derechos de autor.",
  },
} satisfies SiteMessages;

export default messages;
