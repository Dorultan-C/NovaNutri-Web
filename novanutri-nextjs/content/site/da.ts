// Machine-drafted marketing copy for review. Privacy Policy and Terms bodies are not in this file.
import type { SiteMessages } from "./en";

const messages = {
  meta: {
    title: "Riov | Planlæg klogere. Spis bedre. Brug færre penge.",
    description:
      "Den AI-drevne smarte madplanlægger, der laver sunde og budgetvenlige ugeplaner, følger din ernæring og organiserer din indkøbsliste.",
  },
  nav: {
    logoAlt: "Riov-logo",
    primary: "Hovedmenu",
    getApp: "Hent appen",
    features: "Funktioner",
    about: "Om os",
    investors: "Investorer",
    contact: "Kontakt os",
  },
  hero: {
    badge: "Ude nu til iOS og Android",
    line1: "Planlæg klogere.",
    line2: "Spis bedre.",
    line3: "Brug færre penge.",
    body: "Riov laver automatisk din ugentlige madplan, følger dine næringsstoffer og organiserer din indkøbsliste, så du sparer tid og penge.",
    googlePlayAlt: "Hent den på Google Play",
    appStoreAlt: "Hent den i App Store",
    qrAlt: "Scan for at hente Riov",
    scan: "Scan for at hente",
    mockupAlt: "Riov-appens brugerflade",
  },
  features: {
    headlineLead: "Alt det, du har brug for, i ",
    headlineEmphasis: "én app.",
    intro:
      "Riov erstatter din noteapp, din kalorietæller og din budgetopfølgning med ét samlet, AI-drevet system.",
    cook: {
      category: "Lav mad og del",
      scannerTitle: "AI-madscanner",
      scannerBody:
        "Er du i tvivl om, hvad du skal lave? Scan ingredienserne i køkkenet, så laver vi det rette måltid ud fra præcis det, du har.",
      pdfTitle: "Eksportér plan og liste som PDF",
      pdfBody:
        "Gør din ugentlige madplan eller indkøbsliste til en overskuelig PDF, og del den fra telefonen, eller kopiér listen som tekst til WhatsApp eller Messenger.",
    },
    organize: {
      category: "Smart organisering",
      plannerTitle: "Madplanlægger og virtuelt køleskab",
      plannerBody:
        "Planlæg hele ugen på få sekunder. Hold styr på, hvad der er i dit virtuelle køleskab, så du mindsker madspild markant.",
      shoppingTitle: "Smart indkøbsorganisator",
      shoppingBody:
        "Din madplan laver automatisk en velorganiseret indkøbsliste, sorteret efter supermarkedets gange, så du sparer tid.",
    },
    health: {
      category: "Sundhed, pengepung og sikkerhed",
      mediterraneanTitle: "Middelhavsplaner og ernæring",
      mediterraneanBody:
        "Lav ugemenuer ud fra kliniske middelhavsanbefalinger (med vægt på grøntsager, bælgfrugter og magre proteiner), mens du følger dine daglige makroer.",
      allergyTitle: "Klinisk styring af kost og allergi",
      allergyBody:
        "Find opskrifter sikkert. Angiv strenge fødevareallergier (som gluten eller mejeri) eller ingredienser, du ikke kan lide, så filtrerer Riov dine måltider automatisk.",
    },
  },
  about: {
    imageAlt: "En familie, der nyder et sundt måltid sammen",
    mission: "Vores mission",
    headlineLead: "Fra ",
    headlineHighlight: "scrolling",
    headlineTail: " til servering.",
    paragraph1:
      "Vi mener ikke, at det at mætte familien skal føles som et ekstra arbejde. Mellem stigende indkøbspriser, stresset ved madplanlægning og skylden over at smide glemt mad ud er aftensmaden blevet unødigt kompliceret.",
    paragraph2:
      "Riov er bygget for at ændre det. Ved at kombinere vores AI-opskriftsscanner med praktiske redskaber til hjemmet — som det virtuelle køleskab og budgetopfølgning — hjælper vi dig med at få mest muligt ud af de ingredienser, du allerede har, opdage nye køkkener og bringe glæden tilbage i køkkenet.",
    quote:
      "Efter 10 år som professionel kok og køkkenchef indså jeg, at husholdninger manglede de redskaber, vi bruger i branchen: stram styring af madomkostninger, overholdelse af allergener og logistik uden spild. Jeg byggede Riov for at bringe den professionelle effektivitet ind i familiens køkken.",
    attribution: "Cristian Dorultan, stifter og ledende ingeniør",
    statLanguages: "Sprog",
    statLive: "Aktiv",
    statBudget: "Budgetopfølgning",
    statMinimal: "Minimalt",
    statWaste: "Madspild",
  },
  investors: {
    kicker: "Bliv partner",
    headlineLead: "Investorer og ",
    headlineHighlight: "samarbejder",
    intro:
      "Riov er en færdigudviklet, AI-drevet smart madplanlægger, skabt til at forbinde kulinarisk inspiration med det, der faktisk sker i køkkenet. Vi leder efter strategiske partnere, der kan hjælpe os med at vokse.",
    tractionTitle: "Nuværende traction og MVP",
    tractionBody:
      "I modsætning til mange tidlige startups, der stadig søger rådgivning, er Riovs MVP allerede fuldt programmeret og i drift.",
    traction1:
      "Bygget på en skalerbar arkitektur med React Native i frontend og Firebase/Google Cloud Functions i backend.",
    traction2: "Integrerer avancerede AI-API'er (OpenAI) til dynamisk beregning af makronæringsstoffer.",
    traction3:
      "Arkitektur, design og programmering er lavet selvstændigt af en stifter med over 10 års professionel erfaring som kok.",
    fundingTitle: "Finansieringsmålet",
    fundingBody:
      "Vi lægger en finansieringsstrategi for næste vækstfase. At nå en kritisk masse af aktive brugere og udvide en API-tung infrastruktur kræver strategisk kapital.",
    fundingDetails: "For beløbet og alle detaljer, {link}.",
    fundingLink: "bed om vores pitch-deck",
    allocationTitle: "Sådan fordeles kapitalen:",
    allocation1: "Effektiv skalering af server- og API-infrastruktur.",
    allocation2:
      "Straks at gennemføre vores go-to-market-strategi (GTM) med fokus på nøjsom livsstil, meal prep og middelhavssundhed.",
    allocation3:
      "Ansætte nøglepersoner, herunder fageksperter som ernæringseksperter, sundhedsrådgivere og en compliance-ansvarlig, så reglerne overholdes.",
    cta: "Bed om pitch-decket",
  },
  contact: {
    title: "Skriv til os",
    intro:
      "Har du et spørgsmål om appen, brug for hjælp eller lyst til at samarbejde? Send os en besked, så vender teamet tilbage hurtigt.",
    receivedTitle: "Besked modtaget!",
    receivedBody: "Tak, fordi du skrev. Vi vender tilbage snart.",
    sendAnother: "Send en ny besked",
    name: "Navn",
    namePlaceholder: "Anna Jensen",
    email: "E-mailadresse",
    emailPlaceholder: "anna@eksempel.dk",
    message: "Besked",
    messagePlaceholder: "Hvordan kan vi hjælpe?",
    sending: "Sender...",
    submit: "Send besked",
    captchaLoading: "reCAPTCHA indlæses stadig. Prøv igen om et øjeblik.",
    error: "Noget gik galt. Prøv igen.",
  },
  footer: {
    communityTitle: "Bliv en del af fællesskabet",
    communityBody:
      "Følg os for budgetvenlige opskriftstips, nyheder om appen og et kig bag kulisserne.",
    rights: "Alle rettigheder forbeholdes.",
    terms: "Vilkår og betingelser",
    privacy: "Privatlivspolitik",
    license: "Licens",
  },
  license: {
    metaTitle: "Softwarelicens | Riov",
    metaDescription: "Proprietær closed source-licens til Riov-softwaren.",
    title: "Softwarelicens",
    copyright: "Copyright © 2026 Riov. Alle rettigheder forbeholdes.",
    kicker: "Proprietær closed source-licens",
    ownershipLabel: "1. Ejerskab:",
    ownershipBody:
      "Al kildekode, dokumentation, UI/UX-design, algoritmer og tilhørende filer i dette repository er Riovs eksklusive ejendom.",
    restrictionsLabel: "2. Begrænsninger:",
    restrictionA:
      "Du må ikke kopiere, reproducere, distribuere, udgive, vise, opføre, ændre, skabe afledte værker, overføre eller på nogen måde udnytte sådant indhold, og du må heller ikke distribuere nogen del af indholdet over noget netværk, herunder et lokalnet, sælge eller udbyde det til salg eller bruge indholdet til at opbygge nogen form for database.",
    restrictionB: "Du må ikke reverse engineere, dekompilere eller adskille softwaren.",
    restrictionC:
      "Du må ikke bruge kildekoden eller softwaren til kommercielle formål uden udtrykkelig skriftlig tilladelse fra ejeren.",
    warrantyLabel: "3. Ingen garanti:",
    warrantyBody:
      "Denne software leveres af rettighedshaverne og bidragyderne \"som den er\", og alle udtrykkelige eller underforståede garantier, herunder, men ikke begrænset til, underforståede garantier for salgbarhed og egnethed til et bestemt formål, fraskrives.",
    liability:
      "Under ingen omstændigheder hæfter rettighedshaveren eller bidragyderne for direkte, indirekte, hændelige, særlige, eksemplariske eller følgeskader.",
    closing:
      "Uautoriseret brug af denne kode er strengt forbudt og udgør en krænkelse af ophavsretsloven.",
  },
} satisfies SiteMessages;

export default messages;
