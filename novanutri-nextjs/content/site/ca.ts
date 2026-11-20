// Machine-drafted marketing copy for review. Privacy Policy and Terms bodies are not in this file.
import type { SiteMessages } from "./en";

const messages = {
  meta: {
    title: "Riov | Planifica millor. Menja millor. Gasta menys.",
    description:
      "El planificador d'àpats intel·ligent amb IA que crea menús setmanals saludables i econòmics, controla la teva nutrició i organitza la llista de la compra.",
  },
  nav: {
    logoAlt: "Logotip de Riov",
    primary: "Principal",
    getApp: "Aconsegueix l'app",
    features: "Funcions",
    about: "Nosaltres",
    investors: "Inversors",
    contact: "Contacta'ns",
    forBrands: "Per a marques",
    skip: "Ves al contingut",
    darkMode: "Mode fosc",
    searchLanguages: "Cerca idiomes",
    noLanguages: "Cap idioma",
  },
  hero: {
    badge: "Ja disponible a iOS i Android",
    line1: "Planifica millor.",
    line2: "Menja millor.",
    line3: "Gasta menys.",
    body: "Riov crea automàticament el teu pla d'àpats setmanal, controla els teus nutrients i organitza la llista de la compra perquè estalviïs temps i diners.",
    googlePlayAlt: "Aconsegueix-la a Google Play",
    appStoreAlt: "Descarrega-la a l'App Store",
    qrAlt: "Escaneja per descarregar Riov",
    scan: "Escaneja per descarregar",
    mockupAlt: "Interfície de l'app Riov",
    shotIntake: "La ingesta d'avui",
    shotRecipes: "Receptes, amb preu",
    shotPlan: "El pla setmanal",
  },
  features: {
    headlineLead: "Tot el que necessites en ",
    headlineEmphasis: "una sola app.",
    intro:
      "Riov substitueix l'app de notes, el comptador de calories i el control de despeses per un únic ecosistema amb IA.",
    cook: {
      category: "Cuina i comparteix",
      scannerTitle: "Escàner d'aliments amb IA",
      scannerBody:
        "No saps què cuinar? Escaneja els ingredients de la cuina i generarem l'àpat perfecte amb exactament el que tens.",
      pdfTitle: "Exporta el pla i la llista en PDF",
      pdfBody:
        "Converteix el pla setmanal o la llista de la compra en un PDF net i comparteix-lo des del mòbil, o copia la llista com a text per enganxar-la a WhatsApp o Messenger.",
    },
    organize: {
      category: "Organització intel·ligent",
      plannerTitle: "Planificador d'àpats i Nevera virtual",
      plannerBody:
        "Planifica tota la setmana en segons. Controla què hi ha a la Nevera virtual per reduir de debò el malbaratament d'aliments.",
      shoppingTitle: "Organitzador de la compra intel·ligent",
      shoppingBody:
        "El pla d'àpats genera automàticament una llista de la compra molt ordenada, classificada pels passadissos del supermercat per estalviar-te temps.",
    },
    health: {
      category: "Salut, butxaca i seguretat",
      mediterraneanTitle: "Plans mediterranis i nutrició",
      mediterraneanBody:
        "Genera menús setmanals segons les pautes clíniques de la dieta mediterrània (prioritzant verdures, llegums i proteïnes magres) mentre controles els macros diaris.",
      allergyTitle: "Control clínic de dietes i al·lèrgies",
      allergyBody:
        "Consulta les receptes amb seguretat. Indica al·lèrgies alimentàries estrictes (com el gluten o els làctics) o ingredients que no t'agraden, i Riov filtrarà els àpats automàticament.",
    },
  },
  about: {
    imageAlt: "Una família gaudint d'un àpat saludable",
    mission: "La nostra missió",
    headlineLead: "De ",
    headlineHighlight: "desplaçar",
    headlineTail: " a servir.",
    paragraph1:
      "Creiem que alimentar la família no hauria de semblar una segona feina. Entre l'augment del preu de la compra, l'estrès de planificar els àpats i la culpa de llençar menjar oblidat, el sopar s'ha tornat innecessàriament complicat.",
    paragraph2:
      "Riov es va crear per canviar això. En combinar el nostre escàner de receptes amb IA amb eines pràctiques per a la llar —com la Nevera virtual i el control del pressupost—, t'ajudem a aprofitar els ingredients que ja tens, descobrir noves cuines i tornar l'alegria a la cuina.",
    quote:
      "Després de 10 anys com a xef i cap de cuina, em vaig adonar que a casa faltaven les eines que fem servir al sector: un control estricte del cost del menjar, el compliment dels al·lèrgens i una logística de zero residus. Vaig crear Riov per portar aquesta eficiència professional a la cuina de la teva família.",
    attribution: "Cristian Dorultan, fundador i enginyer principal",
    statLanguages: "Llengües",
    statLive: "Actiu",
    statBudget: "Control del pressupost",
    statMinimal: "Mínim",
    statWaste: "Malbaratament d'aliments",
  },
  investors: {
    kicker: "Col·labora amb nosaltres",
    headlineLead: "Inversors i ",
    headlineHighlight: "col·laboracions",
    intro:
      "Riov és un planificador d'àpats intel·ligent, totalment desenvolupat i amb IA, pensat per unir sense fricció la inspiració culinària i l'execució a la cuina. Busquem socis estratègics que ens ajudin a créixer.",
    tractionTitle: "Tracció actual i MVP",
    tractionBody:
      "A diferència de moltes startups en fase inicial que busquen assessorament, el MVP de Riov ja està completament programat i en funcionament.",
    traction1:
      "Construït sobre una arquitectura escalable, amb React Native al frontend i Firebase/Google Cloud Functions al backend.",
    traction2: "Integra APIs d'IA avançades (OpenAI) per al càlcul dinàmic de macronutrients.",
    traction3:
      "Arquitectura, disseny i programació fets de manera independent per un fundador amb més de 10 anys d'experiència professional com a xef.",
    fundingTitle: "L'objectiu de finançament",
    fundingBody:
      "Estem estructurant una estratègia de finançament per a la següent etapa de creixement. Aconseguir una massa crítica d'usuaris actius i ampliar una infraestructura intensiva en APIs requereix capital estratègic.",
    fundingDetails: "Per a l'import del finançament i tots els detalls, {link}.",
    fundingLink: "demana'ns la presentació per a inversors",
    allocationTitle: "Com s'assignarà el capital:",
    allocation1: "Escalar de manera eficient la infraestructura de servidors i APIs.",
    allocation2:
      "Executar de seguida la nostra estratègia de sortida al mercat (GTM), centrada en la vida frugal, el meal prep i les comunitats de salut mediterrània.",
    allocation3:
      "Fer contractacions clau, inclosos experts de domini com nutricionistes, assessors de salut i un responsable de compliment, per garantir el respecte de la normativa.",
    cta: "Demanar la presentació",
  },
  contact: {
    title: "Escriu-nos",
    intro:
      "Tens una pregunta sobre l'app, necessites ajuda o vols col·laborar amb nosaltres? Envia'ns un missatge i l'equip et respondrà aviat.",
    receivedTitle: "Missatge rebut!",
    receivedBody: "Gràcies per escriure'ns. Et respondrem aviat.",
    sendAnother: "Enviar un altre missatge",
    name: "Nom",
    namePlaceholder: "Anna Garcia",
    email: "Correu electrònic",
    emailPlaceholder: "anna@exemple.com",
    message: "Missatge",
    messagePlaceholder: "Com et podem ajudar?",
    sending: "Enviant...",
    submit: "Enviar el missatge",
    captchaLoading: "reCAPTCHA encara s'està carregant. Torna-ho a provar d'aquí a un moment.",
    error: "Alguna cosa ha anat malament. Torna-ho a provar.",
  },
  footer: {
    communityTitle: "Uneix-te a la comunitat",
    communityBody:
      "Segueix-nos per a trucs de receptes econòmiques, novetats de l'app i el dia a dia de com la construïm.",
    rights: "Tots els drets reservats.",
    terms: "Termes i condicions",
    privacy: "Política de privadesa",
    license: "Llicència",
  },
  license: {
    metaTitle: "Llicència de programari | Riov",
    metaDescription: "Llicència propietària i de codi tancat del programari de Riov.",
    title: "Llicència de programari",
    copyright: "Copyright © 2026 Riov. Tots els drets reservats.",
    kicker: "Llicència propietària i de codi tancat",
    ownershipLabel: "1. Titularitat:",
    ownershipBody:
      "Tot el codi font, la documentació, els dissenys d'UI/UX, els algoritmes i els fitxers associats continguts en aquest repositori són propietat exclusiva de Riov.",
    restrictionsLabel: "2. Restriccions:",
    restrictionA:
      "No pots copiar, reproduir, distribuir, publicar, mostrar, executar, modificar, crear obres derivades, transmetre ni explotar de cap manera aquest contingut, ni distribuir cap part d'aquest contingut a través de cap xarxa, inclosa una xarxa d'àrea local, vendre'l o oferir-lo a la venda, ni utilitzar aquest contingut per construir cap mena de base de dades.",
    restrictionB: "No pots fer enginyeria inversa, descompilar ni desassemblar el programari.",
    restrictionC:
      "No pots utilitzar el codi font ni el programari amb finalitats comercials sense el permís explícit i per escrit del titular.",
    warrantyLabel: "3. Sense garantia:",
    warrantyBody:
      "Aquest programari es proporciona pels titulars dels drets d'autor i els col·laboradors «tal qual», i es rebutja qualsevol garantia expressa o implícita, incloses, entre d'altres, les garanties implícites de comercialitat i d'adequació a una finalitat concreta.",
    liability:
      "En cap cas el titular dels drets d'autor o els col·laboradors seran responsables de cap dany directe, indirecte, incidental, especial, exemplar o conseqüent.",
    closing:
      "L'ús no autoritzat d'aquest codi està estrictament prohibit i constitueix una infracció de la llei de drets d'autor.",
  },
} satisfies SiteMessages;

export default messages;
