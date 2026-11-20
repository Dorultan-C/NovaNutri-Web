// Machine-drafted marketing copy for review. Privacy Policy and Terms bodies are not in this file.
import type { SiteMessages } from "./en";

const messages = {
  meta: {
    title: "Riov | Pianifica meglio. Mangia meglio. Spendi meno.",
    description:
      "Il pianificatore di pasti intelligente con IA che crea menu settimanali sani e convenienti, segue la tua nutrizione e organizza la lista della spesa.",
  },
  nav: {
    logoAlt: "Logo di Riov",
    primary: "Principale",
    getApp: "Scarica l'app",
    features: "Funzioni",
    about: "Chi siamo",
    investors: "Investitori",
    contact: "Contattaci",
    forBrands: "Per i marchi",
    skip: "Vai al contenuto",
    darkMode: "Modalità scura",
    searchLanguages: "Cerca lingue",
    noLanguages: "Nessuna lingua",
  },
  hero: {
    badge: "Disponibile su iOS e Android",
    line1: "Pianifica meglio.",
    line2: "Mangia meglio.",
    line3: "Spendi meno.",
    body: "Riov crea automaticamente il tuo piano pasti settimanale, segue i nutrienti e organizza la lista della spesa per farti risparmiare tempo e denaro.",
    googlePlayAlt: "Disponibile su Google Play",
    appStoreAlt: "Scarica sull'App Store",
    qrAlt: "Scansiona per scaricare Riov",
    scan: "Scansiona per scaricare",
    mockupAlt: "Interfaccia dell'app Riov",
    shotIntake: "L'apporto di oggi",
    shotRecipes: "Ricette, con i prezzi",
    shotPlan: "Il piano settimanale",
  },
  features: {
    headlineLead: "Tutto ciò che ti serve in ",
    headlineEmphasis: "un'unica app.",
    intro:
      "Riov sostituisce l'app delle note, il contatore di calorie e il monitoraggio del budget con un unico ecosistema basato sull'IA.",
    cook: {
      category: "Cucina e condividi",
      scannerTitle: "Scanner alimentare con IA",
      scannerBody:
        "Non sai cosa cucinare? Scansiona gli ingredienti in cucina e genereremo il pasto perfetto usando esattamente quello che hai.",
      pdfTitle: "Esporta piano e lista in PDF",
      pdfBody:
        "Trasforma il piano pasti o la lista della spesa in un PDF chiaro e condividilo dal telefono, oppure copia la lista come testo da incollare in WhatsApp o Messenger.",
    },
    organize: {
      category: "Organizzazione intelligente",
      plannerTitle: "Pianificatore pasti e Frigorifero virtuale",
      plannerBody:
        "Pianifica l'intera settimana in pochi secondi. Tieni sotto controllo ciò che c'è nel Frigorifero virtuale per ridurre davvero lo spreco di cibo.",
      shoppingTitle: "Organizzatore della spesa intelligente",
      shoppingBody:
        "Il piano pasti genera automaticamente una lista della spesa molto ordinata, suddivisa per corsie del supermercato per farti risparmiare tempo.",
    },
    health: {
      category: "Salute, portafoglio e sicurezza",
      mediterraneanTitle: "Piani mediterranei e nutrizione",
      mediterraneanBody:
        "Genera menu settimanali secondo le linee guida cliniche della dieta mediterranea (dando priorità a verdure, legumi e proteine magre) mentre segui i macro giornalieri.",
      allergyTitle: "Controllo clinico di diete e allergie",
      allergyBody:
        "Consulta le ricette in sicurezza. Imposta allergie alimentari rigide (come glutine o latticini) o gli ingredienti che non ti piacciono, e Riov filtrerà i pasti automaticamente.",
    },
  },
  about: {
    imageAlt: "Una famiglia che condivide un pasto sano",
    mission: "La nostra missione",
    headlineLead: "Dallo ",
    headlineHighlight: "scorrere",
    headlineTail: " al servire.",
    paragraph1:
      "Crediamo che nutrire la famiglia non dovrebbe sembrare un secondo lavoro. Tra l'aumento dei prezzi della spesa, lo stress di pianificare i pasti e il senso di colpa nel buttare cibo dimenticato, la cena è diventata inutilmente complicata.",
    paragraph2:
      "Riov è nato per cambiare questo. Unendo il nostro scanner di ricette con IA a strumenti pratici per la casa — come il Frigorifero virtuale e il controllo del budget — ti aiutiamo a sfruttare gli ingredienti che hai già, a scoprire nuove cucine e a riportare la gioia in cucina.",
    quote:
      "Dopo 10 anni come chef e responsabile di cucina, ho capito che in casa mancavano gli strumenti che usiamo nel settore: un controllo rigoroso del food cost, il rispetto degli allergeni e una logistica a zero sprechi. Ho creato Riov per portare quell'efficienza professionale nella cucina della tua famiglia.",
    attribution: "Cristian Dorultan, fondatore e ingegnere principale",
    statLanguages: "Lingue",
    statLive: "Attivo",
    statBudget: "Controllo del budget",
    statMinimal: "Minimo",
    statWaste: "Spreco alimentare",
  },
  investors: {
    kicker: "Collabora con noi",
    headlineLead: "Investitori e ",
    headlineHighlight: "collaborazioni",
    intro:
      "Riov è un pianificatore di pasti intelligente, completamente sviluppato e basato sull'IA, pensato per unire senza attrito l'ispirazione culinaria e l'esecuzione in cucina. Cerchiamo partner strategici che ci aiutino a crescere.",
    tractionTitle: "Trazione attuale e MVP",
    tractionBody:
      "A differenza di molte startup in fase iniziale che cercano ancora consulenza, l'MVP di Riov è già completamente programmato e operativo.",
    traction1:
      "Costruito su un'architettura scalabile, con React Native per il frontend e Firebase/Google Cloud Functions per il backend.",
    traction2: "Integra API di IA avanzate (OpenAI) per il calcolo dinamico dei macronutrienti.",
    traction3:
      "Architettura, design e programmazione realizzati in modo indipendente da un fondatore con oltre 10 anni di esperienza professionale come chef.",
    fundingTitle: "L'obiettivo di finanziamento",
    fundingBody:
      "Stiamo strutturando una strategia di finanziamento per la prossima fase di crescita. Raggiungere una massa critica di utenti attivi e ampliare un'infrastruttura ad alto uso di API richiede capitale strategico.",
    fundingDetails: "Per l'importo del finanziamento e tutti i dettagli, {link}.",
    fundingLink: "chiedici la presentazione per gli investitori",
    allocationTitle: "Come verrà allocato il capitale:",
    allocation1: "Scalare in modo efficiente l'infrastruttura di server e API.",
    allocation2:
      "Eseguire subito la nostra strategia di go-to-market (GTM), incentrata sulla vita frugale, sul meal prep e sulle comunità di salute mediterranea.",
    allocation3:
      "Fare assunzioni chiave, inclusi esperti di dominio come nutrizionisti, consulenti sanitari e un responsabile della conformità, per garantire il rispetto delle norme.",
    cta: "Richiedi la presentazione",
  },
  contact: {
    title: "Scrivici",
    intro:
      "Hai una domanda sull'app, ti serve assistenza o vuoi collaborare con noi? Inviaci un messaggio e il team ti risponderà a breve.",
    receivedTitle: "Messaggio ricevuto!",
    receivedBody: "Grazie per averci scritto. Ti risponderemo presto.",
    sendAnother: "Invia un altro messaggio",
    name: "Nome",
    namePlaceholder: "Giulia Rossi",
    email: "Indirizzo email",
    emailPlaceholder: "giulia@esempio.it",
    message: "Messaggio",
    messagePlaceholder: "Come possiamo aiutarti?",
    sending: "Invio...",
    submit: "Invia il messaggio",
    captchaLoading: "reCAPTCHA è ancora in caricamento. Riprova tra un momento.",
    error: "Qualcosa è andato storto. Riprova.",
  },
  footer: {
    communityTitle: "Unisciti alla community",
    communityBody:
      "Seguici per trucchi di ricette economiche, novità dell'app e il dietro le quinte di come la costruiamo.",
    rights: "Tutti i diritti riservati.",
    terms: "Termini e condizioni",
    privacy: "Informativa sulla privacy",
    license: "Licenza",
  },
  license: {
    metaTitle: "Licenza software | Riov",
    metaDescription: "Licenza proprietaria e closed source del software Riov.",
    title: "Licenza software",
    copyright: "Copyright © 2026 Riov. Tutti i diritti riservati.",
    kicker: "Licenza proprietaria e closed source",
    ownershipLabel: "1. Titolarità:",
    ownershipBody:
      "Tutto il codice sorgente, la documentazione, i design UI/UX, gli algoritmi e i file associati contenuti in questo repository sono proprietà esclusiva di Riov.",
    restrictionsLabel: "2. Restrizioni:",
    restrictionA:
      "Non puoi copiare, riprodurre, distribuire, pubblicare, mostrare, eseguire, modificare, creare opere derivate, trasmettere o sfruttare in alcun modo tali contenuti, né distribuire alcuna parte di questi contenuti su qualsiasi rete, inclusa una rete locale, venderli o offrirli in vendita, né usare tali contenuti per costruire alcun tipo di database.",
    restrictionB: "Non puoi fare reverse engineering, decompilare o disassemblare il software.",
    restrictionC:
      "Non puoi usare il codice sorgente o il software per scopi commerciali senza l'autorizzazione esplicita e scritta del titolare.",
    warrantyLabel: "3. Nessuna garanzia:",
    warrantyBody:
      "Questo software è fornito dai titolari del copyright e dai collaboratori «così com'è», e si esclude qualsiasi garanzia espressa o implicita, incluse, a titolo esemplificativo, le garanzie implicite di commerciabilità e di idoneità a uno scopo particolare.",
    liability:
      "In nessun caso il titolare del copyright o i collaboratori saranno responsabili per danni diretti, indiretti, incidentali, speciali, esemplari o consequenziali.",
    closing:
      "L'uso non autorizzato di questo codice è severamente vietato e costituisce una violazione della legge sul diritto d'autore.",
  },
} satisfies SiteMessages;

export default messages;
