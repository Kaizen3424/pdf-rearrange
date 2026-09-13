import type { SiteDictionary } from './en';

/**
 * Italian (it) translation.
 */
const it = {
  skipToContent: 'Vai al contenuto',
  siteName: 'Rearrange PDF',
  ogImageAlt:
    'Rearrange PDF — strumento online gratuito per riordinare, unire ed eliminare pagine PDF direttamente nel browser.',
  breadcrumbAriaLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',

  langSwitcher: {
    ariaLabel: 'Cambia lingua',
  },

  theme: {
    ariaLabel: 'Tema colori',
    light: 'Chiaro',
    dark: 'Scuro',
    system: 'Sistema',
  },

  nav: {
    ariaLabel: 'Navigazione principale',
    howItWorks: 'Come funziona',
    features: 'Funzionalità',
    privacy: 'Privacy',
    faq: 'Domande frequenti',
    cta: 'Riordina un PDF',
    toggleMenu: 'Apri/chiudi menu',
  },

  footer: {
    tagline:
      'Il modo che mette la privacy al primo posto per riordinare, ruotare e organizzare le pagine PDF. Tutto avviene nel tuo browser — i tuoi file non vengono mai caricati.',
    colTool: 'Strumento',
    colCompany: 'Azienda',
    colLegal: 'Legale',
    colLanguage: 'Lingua',
    rearrangePages: 'Riordina le pagine PDF',
    howItWorks: 'Come funziona',
    guide: 'Guida alla organizzazione PDF',
    faq: 'Domande frequenti',
    about: 'Chi siamo',
    contact: 'Contatti',
    privacyPolicy: 'Informativa sulla privacy',
    termsOfService: 'Termini di servizio',
    copyright: (year: number) => `© ${year} rearrangepdf.com. Tutti i diritti riservati.`,
    noAds: 'Nessuna pubblicità. Nessun tracker. Nessun caricamento.',
  },

  hero: {
    chip: '100% privato — i file non escono mai dal tuo browser',
    h1: 'Riordina le pagine PDF, direttamente nel tuo browser.',
    sub: 'Trascina per riordinare le pagine, ruotale, duplicale o eliminale — poi scarica all\'istante. Gratuito, illimitato e completamente privato.',
    bullets: ['Niente registrazione', 'Nessun limite di pagine', 'Nessuna filigrana', 'Nessun limite di dimensione'],
  },

  howItWorks: {
    heading: 'Come riordinare le pagine PDF',
    sub: 'Tre passaggi, zero caricamenti. Il tuo file viene elaborato localmente dall\'inizio alla fine.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina un file ovunque sulla pagina, clicca per sfogliare, o incollalo. Aggiungi altri PDF in qualsiasi momento — verranno uniti in un unico documento.',
      },
      {
        title: 'Disponi le pagine',
        text: 'Trascina le miniature nell\'ordine che preferisci. Ruota, duplica, elimina o seleziona più pagine contemporaneamente — con la cronologia completa per annullare se cambi idea.',
      },
      {
        title: 'Scarica all\'istante',
        text: 'Il tuo PDF viene ricostruito direttamente sul tuo dispositivo e scaricato in pochi secondi. Nessuna filigrana, nessuna registrazione, nessuna coda.',
      },
    ],
  },

  features: {
    heading: 'Tutto ciò che ti serve per organizzare un PDF',
    sub: 'Gli strumenti per riordinare le pagine che la gente già apprezza — senza i caricamenti, i limiti, la pubblicità e le registrazioni di cui si lamentano.',
    items: [
      {
        title: 'Privato per progettazione',
        text: 'Il tuo PDF viene elaborato interamente nel tuo browser. Nessun caricamento, nessun server, nessun tracciamento — apri la scheda di rete del tuo browser e verifica tu stesso.',
      },
      {
        title: 'Nessun limite, mai',
        text: 'Nessun tetto di pagine, nessun limite di dimensione file, nessuna quota giornaliera. Riordina 10 pagine o 1.000 — l\'elaborazione locale significa che non c\'è nulla da misurare.',
      },
      {
        title: 'Risultati immediati',
        text: 'Non c\'è nessun andata-e-ritorno di caricamento e attesa. Le pagine vengono visualizzate e il tuo nuovo PDF viene creato sul tuo dispositivo, quindi anche i file grandi sembrano istantanei.',
      },
      {
        title: 'Annulla qualsiasi cosa',
        text: 'Cronologia completa con annulla e ripristina (Ctrl+Z / Ctrl+Shift+Z), selezione multipla e scorciatoie da tastiera. Sperimenta liberamente — nulla è permanente finché non scarichi.',
      },
      {
        title: 'Progettato anche per il mobile',
        text: 'Touch target grandi, pressione prolungata per trascinare e una barra delle azioni comoda per il pollice. Riordinare le pagine sul telefono non dovrebbe essere una seccatura.',
      },
      {
        title: 'Qualità originale preservata',
        text: 'Le pagine vengono copiate byte per byte dal tuo PDF originale. Caratteri, vettori, immagini e link rimangono esattamente come erano — nessuna ricompressione.',
      },
    ],
  },

  privacySection: {
    h2: 'Il tuo PDF non esce mai dal tuo browser.',
    p1: 'La maggior parte degli strumenti PDF online carica il tuo file su un server, lo elabora lì e ti chiede di fidarti della loro policy di eliminazione. Noi abbiamo capovolto il modello: riordinare le pagine avviene <strong>interamente sul tuo dispositivo</strong>, usando lo stesso motore di rendering che il tuo browser già possiede.',
    p2: 'Nessun server riceve mai il tuo documento. Non c\'è nulla da violare, compromettere o sottoporre a subpoena. Questo lo rende sicuro per contratti, cartelle mediche, estratti conto e tutto ciò che non daresti a uno sconosciuto.',
    readPromise: 'Leggi la nostra promessa sulla privacy',
    tryNow: 'Prova adesso',
    bullets: [
      {
        title: 'Zero caricamenti',
        text: 'Il contenuto del tuo file non viene mai trasmesso da nessuna parte.',
      },
      {
        title: 'Nessun account, nessuna pubblicità, nessun tracker',
        text: 'Non abbiamo bisogno della tua email, e non ti seguiamo sul web.',
      },
      {
        title: 'Verificabile, non solo una promessa',
        text: 'Apri DevTools → Rete mentre lavori. Non vedrai nessuna richiesta di file.',
      },
    ],
  },

  faq: {
    heading: 'Domande frequenti',
    sub: 'Tutto ciò che le persone di solito vogliono sapere prima di riordinare il loro primo PDF.',
    items: [
      {
        q: 'Come si riordinano le pagine in un PDF?',
        a: 'Apri lo strumento nella parte superiore della pagina e aggiungi il tuo PDF, poi trascina qualsiasi miniatura nella sua nuova posizione — le pagine circostanti si spostano automaticamente per fare spazio. Ruota, duplica o elimina le pagine se necessario, e clicca "Scarica PDF" per salvare il file riordinato. L\'intero processo richiede meno di un minuto e il tuo file non esce mai dal tuo dispositivo.',
      },
      {
        q: 'Come si riordinano le pagine in un PDF gratis?',
        a: 'Usa uno strumento gratuito basato sul browser come questo: aggiungi il tuo PDF, trascina le miniature nell\'ordine che desideri, e scarica il risultato. Non c\'è registrazione, nessuna filigrana, nessun limite di pagine e nessun tier premium nascosto — lo strumento resta gratuito perché tutta l\'elaborazione avviene sul tuo dispositivo invece che su server a pagamento.',
      },
      {
        q: 'Come si riordinano le pagine PDF?',
        a: 'Il modo più semplice è il drag-and-drop: il tuo PDF appare come una griglia di miniature e trascini ogni pagina dove deve andare. Poiché l\'editor funziona interamente nel browser, non c\'è nulla da installare e nessun file viene caricato da nessuna parte. Quando l\'ordine è quello giusto, clicca "Scarica PDF" per salvare il nuovo file.',
      },
      {
        q: 'Come si riordinano le pagine in un PDF su iPhone?',
        a: 'Apri questa pagina in Safari e tocca per aggiungere il tuo PDF — dall\'app File, Mail o qualsiasi altra app che condivide PDF. Tieni premuta brevemente una miniatura per sollevarla, trascinala dove serve, poi tocca "Scarica PDF" e salva il risultato su File o condividilo direttamente. Non serve nessuna installazione, e lo stesso flusso funziona su iPad.',
      },
      {
        q: 'Posso riordinare le pagine PDF su mobile?',
        a: 'Sì. L\'editor è costruito con il touch come priorità: tieni premuta una miniatura per sollevarla, trascinala in una nuova posizione, e usa i pulsanti grandi per ruotare, duplicare e eliminare a portata di pollice. Funziona in Safari su iOS e Chrome su Android, e il PDF finito si salva direttamente sul telefono o tablet.',
      },
      {
        q: 'Come posso sostituire una pagina PDF senza perdere la formattazione?',
        a: 'Elimina la pagina che vuoi sostituire, aggiungi il PDF che contiene la nuova pagina, e trascinala nello spazio vuoto. Poiché ogni pagina viene copiata byte per byte invece che rirenderizzata, caratteri, immagini, vettori, link e metadati sono preservati esattamente — nulla viene ricompresso o ristilizzato.',
      },
      {
        q: 'Come si scambiano, aggiungono, rimuovono e ruotano le pagine PDF?',
        a: 'Tutte e quattro le azioni si trovano nella barra degli strumenti. Scambia due pagine trascinando una miniatura sull\'altra per scambiarne le posizioni. Aggiungi pagine inserendone di vuote o unendo un altro PDF, rimuovi le pagine con l\'azione elimina, e ruota le pagine a passi di 90° — singolarmente o in batch con selezione multipla.',
      },
      {
        q: 'Come si organizzano i file PDF?',
        a: 'Inizia combinando i file: aggiungi ogni PDF che ti serve e verranno uniti in un\'unica griglia di pagine. Poi organizza a livello di pagina — raggruppa le pagine correlate insieme, sposta intere sezioni, elimina ciò che non ti serve più, e inserisci pagine vuote come separatori. Quando tutto è nella posizione giusta, scarica un unico PDF ordinato.',
      },
      {
        q: 'Come si riordinano le pagine PDF gratis?',
        a: 'Gli strumenti PDF gratuiti sono di due tipi: editor online che caricano il tuo file sui loro server, e strumenti lato client come questo che elaborano tutto localmente. Il secondo tipo è genuinamente gratuito — nessuna prova, nessuna filigrana, nessuna quota giornaliera — perché è il tuo dispositivo a fare il lavoro. Aggiungi un PDF, riordina le miniature, e scarica senza costi.',
      },
      {
        q: 'Come posso riordinare le pagine di un documento PDF?',
        a: 'Carica il tuo documento nell\'editor, poi trascina le miniature nel nuovo ordine — o seleziona più pagine insieme e spostale tutte. Ogni passaggio è annullabile con Ctrl+Z (Cmd+Z su Mac), e puoi ripristinare l\'ordine originale con un click, quindi sperimentare è senza rischi. Committi solo quando scarichi.',
      },
      {
        q: 'I miei file vengono caricati su un server?',
        a: 'No. Rearrange PDF funziona interamente nel browser usando JavaScript. Il tuo PDF viene letto, visualizzato e ricostruito sul tuo dispositivo — nessun contenuto del file viene mai trasmesso. Puoi verificarlo tu stesso: apri gli strumenti di sviluppo del tuo browser, guarda la scheda Rete, e riordina alcune pagine. Non viene inviato nulla.',
      },
      {
        q: 'Posso unire e riordinare più PDF contemporaneamente?',
        a: 'Sì. Aggiungi tutti i PDF che vuoi — trascina più file insieme, o usa "Aggiungi PDF" mentre modifichi — e verranno uniti in un\'unica griglia, con badge che mostrano da quale file proviene ogni pagina. Puoi poi combinare e riordinare le pagine di ogni documento come preferisci prima di scaricare un unico PDF.',
      },
      {
        q: 'Posso annullare un errore?',
        a: 'Sì. Ogni azione — riordina, ruota, elimina, duplica — viene registrata nella cronologia. Premi Ctrl+Z (o Cmd+Z su Mac) per annullare, Ctrl+Shift+Z per ripristinare, o usa i pulsanti nella barra degli strumenti. Puoi anche ripristinare l\'ordine originale delle pagine con un click.',
      },
      {
        q: 'E i PDF protetti da password?',
        a: 'I PDF protetti con una password proprietaria (restrizioni su modifica o stampa) funzionano normalmente. I PDF che richiedono una password per aprirsi possono essere riordinati se inserisci la password, ma l\'esportazione di file completamente crittografati localmente non è ancora supportata — vedrai un avviso chiaro se questo si applica al tuo file.',
      },
    ],
  },

  seoContent: {
    h2: 'Riordina le pagine PDF online — gratis e illimitato',
    p1: 'Rearrange PDF è uno strumento online gratuito creato per un solo compito: aiutarti a riordinare le pagine PDF in modo rapido, privato e senza frizioni. Che tu abbia bisogno di correggere una scansione al contrario, spostare un\'appendice alla fine, o portare un caos esportato in un ordine sensato, ottieni un editor visivo completo con miniature trascinabili — direttamente nel tuo browser. Nulla da installare, nessun account da creare, nessuna filigrana sul risultato. E poiché tutto funziona localmente sul tuo dispositivo, puoi riordinare le pagine PDF online gratis, senza i caricamenti, le code e i limiti giornalieri che la maggior parte degli altri strumenti impongono.',
    p2: 'L\'editor si comporta come una piccola applicazione desktop. Ogni pagina del tuo documento appare come una miniatura che puoi afferrare e trascinare in una nuova posizione, mentre le pagine rimanenti si spostano automaticamente per fare spazio. Oltre al riordinamento, puoi ruotare le scansioni storte, duplicare le pagine che si ripetono, inserire fogli bianchi e selezionare più pagine contemporaneamente per azioni batch. Una cronologia di annulla completa significa che puoi sperimentare liberamente — nulla è definitivo finché non scarichi.',
    h3Merge: 'Unisci e riordina le pagine PDF in un unico posto',
    pMerge: 'I documenti reali raramente vivono in un unico file: il report è un PDF, l\'appendice un altro, la nuova copertina un terzo. Rearrange PDF ti permette di unire e riordinare le pagine PDF senza passare da un\'app all\'altra. Trascina tutti i file che vuoi — tutti insieme, o aggiungendone altri a metà modifica — e ogni pagina finisce in un\'unica griglia, etichettata con un badge colorato che mostra da quale documento proviene. Da lì puoi combinare e riordinare le pagine PDF di ogni fonte in un unico file continuo: interleavare i capitoli, spostare la nuova copertina davanti, o inserire materiale extra nel mezzo. Un click produce un PDF unico e ordinato.',
    h3Delete: 'Elimina e riordina le pagine PDF',
    pDelete: 'Pulizia e riordinamento di solito vanno insieme. Quando elimini e riordini le pagine PDF nella stessa passata, eviti di esportare due volte — ed è proprio la riesportazione altrove che fa introdurre perdita di qualità e filigrane. Seleziona qualsiasi pagina e rimuovila con un click, o tocca più miniature e eliminale in batch. Le pagine eliminate restano nella tua cronologia di annulla, quindi un taglio troppo zelante non è mai permanente. Combinato con le azioni di duplica, ruota e inserisci-vuoto, questo rende lo strumento un leggero editor di pagine: taglia ciò che non ti serve, ordina ciò che resta, esporta una volta.',
    h3Steps: 'Come riordinare le pagine PDF in tre passaggi',
    pSteps: 'Se ti stai chiedendo come riordinare le pagine PDF senza leggere un manuale, l\'intero flusso di lavoro si riduce a tre mosse:',
    steps: [
      '<strong>Aggiungi il tuo PDF.</strong> Trascina il file sullo strumento nella parte superiore della pagina, clicca per sfogliare, o incollalo dagli appunti. Aggiungi altri file se vuoi unirli.',
      '<strong>Trascina le pagine in ordine.</strong> Sposta qualsiasi miniatura in una nuova posizione, poi ruota, duplica o elimina le pagine finché la sequenza non è quella giusta. La selezione multipla e l\'annulla tengono veloci le modifiche grandi.',
      '<strong>Scarica all\'istante.</strong> Il PDF ricostruito viene generato sul tuo dispositivo e salvato immediatamente — nessuna filigrana, nessuna email richiesta.',
    ],
    pStepsOutro: 'Questo è davvero tutto ciò che c\'è da fare — il modo più veloce per riordinare le pagine PDF online gratis, senza registrazioni e caricamenti. Per una guida più dettagliata, incluso l\'inversione dell\'ordine delle pagine e la sostituzione di pagine individuali, consulta la <a href="/how-to-organize-pdf-pages">guida completa all\'organizzazione delle pagine PDF</a>.',
    h3Mobile: 'Riordina le pagine PDF su iPhone, iPad e Android',
    pMobile: 'Il mobile è dove molti strumenti PDF online falliscono: pulsanti minuscoli, bersagli di trascinamento rotti, popup che soffocano la griglia delle pagine. Questo editor è costruito con il touch come priorità, quindi capire come riordinare le pagine PDF su iPhone o iPad richiede secondi — tieni premuta una miniatura per sollevarla, trascinala dove serve, rilascia. I pulsanti per ruotare, duplicare e eliminare sono grandi e a portata di pollice, e toccare le pagine le seleziona per azioni batch. Su iOS puoi aprire un PDF da File o Mail, condividerlo su Safari, riordinarlo e salvare il risultato direttamente. Lo stesso flusso funziona su telefoni e tablet Android.',
    h3Best: 'Quali sono i modi migliori per riordinare le pagine PDF?',
    pBest: 'Cerca i modi migliori per riordinare le pagine PDF e ne troverai tre realistici. Ecco come si comportano per il lavoro quotidiano sui documenti:',
    bestList: [
      '<strong>Uno strumento basato sul browser — il migliore per la maggior parte delle persone.</strong> Ti permette di riordinare il PDF online in pochi secondi: nulla da installare, nulla da aggiornare, funziona identicamente su Windows, Mac, Linux e telefoni. Il problema abituale è che il tuo file viene caricato su un server. Questo strumento rimuove quel problema — le pagine vengono elaborate sul tuo dispositivo, mai trasmesse.',
      '<strong>Software desktop — per modifiche pesanti e ripetute.</strong> Editor come Adobe Acrobat offrono toolkit PDF profondi, ma costano un abbonamento, devono essere installati e mantenuti aggiornati, e sono eccessivi quando devi solo scambiare le pagine 12 e 13.',
      '<strong>App mobile — comode, con delle avvertenze.</strong> Le app dedicate funzionano offline, ma aggiungono permessi di archiviazione, pubblicità e informative sulla privacy da leggere. Per una correzione una tantum, uno strumento nel browser che già ti fidi è l\'opzione più leggera.',
    ],
    pBestOutro: 'Per la maggior parte delle persone, la maggior parte del tempo, la prima opzione vince: apri lo <a href="/#rearrange">strumento nella parte superiore della pagina</a>, riordina il PDF gratis, senza caricamenti e filigrane, e finisce in meno di un minuto.',
    h3Why: 'Perché gratis non significa rischioso',
    pWhy: 'Gli strumenti online gratuiti si guadagnano la loro reputazione onestamente: molti monetizzano estraendo i documenti che carichi, o applichino filigrane finché non paghi. Questo strumento prende la strada opposta. Il tuo PDF viene letto, visualizzato e riscritto interamente nel tuo browser, quindi nessuna copia del tuo file esiste mai su un server — nulla da violare, nulla da vendere, nulla trattenuto dopo che chiudi la scheda. Non devi prenderlo per fede: apri gli strumenti di sviluppo del tuo browser, guarda la scheda di rete mentre lavori, e vedrai zero traffico di file. È così che lo rende sicuro per contratti, cartelle mediche, estratti conto e tutto ciò che è confidenziale. Leggi la <a href="/privacy">promessa sulla privacy</a> completa per i dettagli.',
  },

  cta: {
    h2: 'Sistema l\'ordine delle pagine in pochi secondi.',
    sub: 'Nessun caricamento. Nessun limite. Nessuna registrazione. Trascina, rilascia e scarica.',
    button: 'Riordina un PDF adesso',
  },

  errors: {
    tryAgain: 'Riprova',
    backToTool: 'Torna allo strumento',
    notFound: {
      title: 'Pagina non trovata — Rearrange PDF',
      description: 'Questa pagina non esiste. Torna indietro per riordinare le pagine PDF.',
      heading: 'Questa pagina ha preso una brutta piega.',
      message: 'La pagina che stai cercando non esiste — ma l\'ordine delle pagine del tuo PDF può ancora essere sistemato in pochi secondi.',
    },
    serverError: {
      title: 'Qualcosa è andato storto — Rearrange PDF',
      description: 'Si è verificato un errore imprevisto. Ricarica per riprovare, o torna allo strumento.',
      heading: 'Qualcosa si è rotto da parte nostra.',
      message: 'Si è verificato un errore imprevisto. Ricarica per riprovare, o torna allo strumento — i tuoi file non hanno mai lasciato il tuo browser.',
    },
  },

  pages: {
    home: {
      meta: {
        title: 'Riordina le Pagine PDF Online Gratis — Unisci, Riorganizza ed Elimina Pagine | Rearrange PDF',
        description: 'Riordina le pagine PDF online gratis. Trascina per riorganizzare, unire, combinare o eliminare pagine — 100% privato, nessun caricamento, nessun limite, nessuna registrazione, nessuna filigrana.',
        keywords: [
          'riordinare pdf',
          'riordinare pagine pdf',
          'riordinare pagine pdf gratis',
          'riordinare pagine pdf online',
          'riordinare pagine pdf online gratis',
          'riordinare pdf online',
          'riordinare pdf gratis',
          'unire e riordinare pdf',
          'combinare e riordinare pdf',
          'eliminare e riordinare pagine pdf',
          'come riordinare pagine pdf',
          'come riordinare pagine pdf online gratis',
          'come riordinare pagine pdf su iphone',
          'migliori modi per riordinare pagine pdf',
        ],
      },
      jsonLd: {
        webApplication: {
          name: 'Rearrange PDF',
          alternateName: 'Riordina le Pagine PDF',
          description: 'Strumento online gratuito per riordinare, riorganizzare, ruotare, duplicare ed eliminare pagine PDF interamente nel browser. Nessun caricamento, nessun limite, nessuna registrazione.',
          featureList: [
            'Riordinamento delle pagine con drag-and-drop',
            'Ruota, duplica ed elimina pagine',
            'Unisci più PDF e riordina il documento combinato',
            'Aggiungi pagine vuote',
            'Selezione multipla con azioni batch',
            'Cronologia di annulla e ripristina',
            'Scorciatoie da tastiera',
            'Anteprima delle pagine',
            'Elaborazione 100% lato client — i file non escono mai dal browser',
          ],
        },
        howTo: {
          name: 'Come riordinare le pagine in un PDF',
          description: 'Riordina le pagine di qualsiasi PDF in tre passaggi, interamente nel browser senza caricamenti.',
          steps: [
            {
              name: 'Aggiungi il tuo PDF',
              text: 'Trascina un file PDF sullo strumento, clicca per sfogliare, o incollalo. Puoi aggiungere diversi PDF tutti insieme per unirli.',
            },
            {
              name: 'Disponi le pagine',
              text: 'Trascina le miniature nell\'ordine che desideri. Ruota, duplica o elimina le pagine secondo necessità — tutto può essere annullato.',
            },
            {
              name: 'Scarica all\'istante',
              text: 'Clicca Scarica PDF. Il tuo file riordinato viene ricostruito sul tuo dispositivo e salvato senza filigrana.',
            },
          ],
        },
      },
    },

    howto: {
      meta: {
        title: 'Come Organizzare le Pagine PDF Online — Guida Passo Passo (Senza Caricamenti)',
        description: 'Impara come riordinare, riorganizzare e organizzare le pagine PDF in qualsiasi browser — gratis e senza caricamenti. Copre desktop e mobile, unione di file, inversione dell\'ordine, sostituzione di pagine e altro.',
      },
      breadcrumb: 'Come organizzare le pagine PDF',
      h1: 'Come organizzare le pagine PDF online gratis',
      intro: 'Hai scansionato il documento al contrario? L\'appendice è finita prima dell\'introduzione? Ecco il modo più veloce per sistemare l\'ordine delle pagine di qualsiasi PDF — senza caricarlo sul server di nessuno, creare un account, o imbatterti in un muro di "prova gratuita".',
      quickH2: 'La risposta rapida',
      quickSteps: [
        '<a href="/#rearrange">Apri lo strumento</a> e trascina il tuo PDF.',
        'Trascina le miniature nell\'ordine che desideri.',
        'Clicca <strong>Scarica PDF</strong> — fatto, nessuna filigrana.',
      ],
      detailedH2: 'Passaggio dopo passaggio: riordinare le pagine nel dettaglio',
      step1H: 'Passaggio 1 — Aggiungi il tuo PDF',
      step1P: 'Trascina il file dalla scrivania o dal gestore file direttamente sulla card di caricamento, o cliccala per sfogliare. Puoi anche copiare un PDF e incollarlo con <strong>Ctrl+V</strong> (⌘V su Mac). Vuoi combinare i documenti prima? Trascina più PDF insieme — le loro pagine si uniscono in un\'unica griglia, ogni file contrassegnato dal proprio colore, così puoi poi interleavare le pagine di tutti.',
      step2H: 'Passaggio 2 — Trascina le pagine in ordine',
      step2P1: 'Ogni pagina appare come una miniatura. Afferrane una e trascinala dove deve andare — le altre fanno spazio mentre procedi. Su un telefono o tablet, tieni premuta brevemente una pagina per sollevarla, poi trascinala.',
      step2P2: 'Passando sopra una pagina appaiono piccoli pulsanti per <strong>ruotare</strong> (correggere scansioni storte), <strong>duplicare</strong>, <strong>anteprima</strong> a dimensione intera, o <strong>eliminare</strong>. Clicca le pagine per selezionarne diverse insieme — o <strong>Ctrl+A</strong> per selezionarle tutte — poi ruotale o eliminale in un batch dalla barra degli strumenti che appare.',
      step3H: 'Passaggio 3 — Scarica il tuo PDF organizzato',
      step3P: 'Clicca <strong>Scarica PDF</strong>. Il file viene ricostruito sul tuo dispositivo — le pagine originali esatte, solo nell\'ordine da te scelto — e salvato direttamente nella cartella dei download. Nessuna filigrana, nessuna email richiesta, nessuna coda.',
      tricksH2: 'Truccchi utili da conoscere',
      tricks: [
        '<strong>Nulla è permanente.</strong> Ogni azione è annullabile con Ctrl+Z, ripristinabile con Ctrl+Shift+Z. Sperimenta liberamente — il pulsante "ripristina ordine originale" riporta l\'intero documento a come è iniziato.',
        '<strong>Inverti un intero documento</strong> con il pulsante di inversione dell\'ordine nella barra degli strumenti — utile per scansioni fatte al contrario, nessun trascinamento richiesto.',
        '<strong>Sostituisci una pagina:</strong> elimina la pagina obsoleta, clicca "Aggiungi PDF" per portare la sostituta, poi trascinala nella posizione.',
        '<strong>Inserisci una pagina vuota</strong> ovunque — utile per note o separatori di stampa — con il pulsante "+" nella barra degli strumenti.',
        '<strong>Conserva solo ciò che ti serve:</strong> seleziona le pagine che vuoi tenere, inverti nulla — elimina semplicemente le altre, e scarica il documento rifilato.',
        '<strong>Verifica prima di commettere:</strong> apri qualsiasi pagina a dimensione intera con il pulsante di anteprima e sfoglia il documento con i tasti freccia prima di scaricare.',
      ],
      mobileH2: 'Riordinare le pagine PDF su mobile',
      mobileP: 'L\'editor è progettato con il touch come priorità: le miniature sono grandi, i pulsanti delle azioni sono a portata di pollice, e il trascinamento funziona con una breve pressione-e-tieni. Tocca le pagine per selezionarle per ruotare o eliminare in batch. Su iOS o Android, puoi aprire un PDF dalla tua app File o Drive, condividerlo al browser, e riordinarlo lì.',
      localH2: 'Perché riordinare localmente è importante',
      localP: 'La maggior parte dei "gratuiti" organizzatori PDF carica il tuo file su un server di elaborazione, poi promette di eliminarlo dopo. Va bene finché non lo è — contratti, cartelle mediche ed estratti conto meritano di più. Questo strumento fa tutto il lavoro dentro la scheda del tuo browser: il tuo PDF viene letto in memoria, visualizzato, e riscritto senza che un singolo byte lasci il tuo dispositivo. Non devi prendere la nostra parola — apri gli strumenti di sviluppo del tuo browser, guarda la scheda di rete, e riordina pure.',
      ctaH2: 'Pronto a sistemare l\'ordine delle pagine?',
      ctaP: 'Gratuito, illimitato, nessuna registrazione — e il tuo file non esce mai dal browser.',
      ctaButton: 'Riordina un PDF adesso',
      faqOutro: 'Cerchi altre risposte? Vedi la <a href="/#faq">pagina delle FAQ completa</a>.',
      jsonLd: {
        howTo: {
          name: 'Come organizzare le pagine PDF online gratis',
          description: 'Una guida passo passo per riordinare le pagine PDF nel browser senza caricare il file da nessuna parte.',
          steps: [
            {
              name: 'Apri lo strumento e aggiungi il tuo PDF',
              text: 'Vai su rearrangepdf.com e trascina il tuo PDF sullo strumento, clicca "Seleziona file PDF", o incolla il file con Ctrl+V.',
            },
            {
              name: 'Trascina le pagine nel nuovo ordine',
              text: 'Trascina qualsiasi miniatura in una nuova posizione. Usa i pulsanti al passaggio del mouse o la barra di selezione per ruotare, duplicare o eliminare le pagine.',
            },
            {
              name: 'Scarica il PDF organizzato',
              text: 'Clicca "Scarica PDF" — il file viene ricostruito sul tuo dispositivo e salvato immediatamente, senza filigrana.',
            },
          ],
        },
      },
    },

    about: {
      meta: {
        title: 'Chi siamo — Rearrange PDF',
        description: 'Perché abbiamo creato un organizer di pagine PDF che non carica mai i tuoi file, come funziona, e come contattarci.',
      },
      breadcrumb: 'Chi siamo',
      h1: 'Uno strumento, fatto come si deve.',
      p1: 'Riordinare le pagine di un PDF è un lavoro piccolo. Hai scansionato un contratto al contrario, o il sommario di un report è finito alla fine, e vuoi solo sistemarlo. Eppure la maggior parte degli strumenti per questo compito semplice chiede molto in cambio: il tuo file viene caricato su un server che non conosci, trovi un limite giornaliero dopo due documenti, e di solito c\'è un prompt di upgrade ad aspettarti.',
      p2: 'Abbiamo costruito Rearrange PDF perché nessuna di queste cose è necessaria. Il riordinamento delle pagine non ha bisogno di un server — un browser moderno ha tutto il necessario per leggere, visualizzare e ricostruire un PDF. Quindi questo sito è solo questo: una singola pagina, una zona di rilascio, e una griglia di miniature che puoi trascinare. Nessun caricamento, nessun account, nessuna pubblicità, nessun limite.',
      howItWorksH2: 'Come funziona',
      howItWorksP: 'Sotto il cofano, lo strumento usa due librerie open-source che funzionano interamente nel tuo browser: <strong>PDF.js</strong> renderizza ogni pagina come miniatura, e <strong>pdf-lib</strong> assembla il tuo nuovo documento copiando le pagine originali — byte per byte, quindi formattazione, caratteri e qualità sono preservati esattamente. Quando clicchi download, il PDF finito viene creato lì nella scheda e consegnato alla finestra di salvataggio del browser.',
      getInTouchH2: 'Mettiti in contatto',
      getInTouchP: 'Hai trovato un PDF che non funziona? Hai un\'idea per lo strumento? Leggiamo tutto — <a href="/contact">contattaci</a> a <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a>.',
      ctaH2: 'Provalo con il tuo file',
      ctaP: 'È gratuito, illimitato — e nulla esce mai dal tuo browser.',
      ctaButton: 'Riordina un PDF',
    },

    contact: {
      meta: {
        title: 'Contattaci — Rearrange PDF',
        description: 'Mettiti in contatto con il team di Rearrange PDF. Segnala un file che non funziona, suggerisci una funzionalità, o fai una domanda sull\'organizzatore di pagine PDF basato sul browser.',
      },
      breadcrumb: 'Contatti',
      h1: 'Contattaci',
      intro: 'Hai trovato un PDF che non si apre? Hai un\'idea che renderebbe lo strumento migliore? Leggiamo ogni messaggio e apprezziamo genuinamente il feedback.',
      emailH2: 'Scrivici un\'email',
      emailP: 'Il modo più veloce per raggiungerci è per email. Siamo un team piccolo, quindi permetti un paio di giorni per una risposta.',
      beforeH2: 'Prima di scrivere',
      beforeP: 'Alcune note ci aiutano ad aiutarti più velocemente:',
      beforeItems: [
        '<strong>Dimmi quale file si è comportato male.</strong> Se un PDF non riesce a caricarsi o esportarsi, descrivi il tipo di documento (scansionato, modulo, crittografato, molto grande) invece di inviare il file.',
        '<strong>Non possiamo vedere i tuoi file.</strong> Lo strumento funziona interamente nel browser, quindi i tuoi PDF non ci raggiungono mai. Per favore non inviare documenti sensibili via email — una descrizione è tutto ciò di cui abbiamo bisogno.',
        '<strong>Includi il tuo browser e dispositivo</strong> (per esempio, "Safari su iPhone") se stai segnalando un problema — ci aiuta a riprodurlo.',
      ],
      answersH2: 'Potresti trovare la risposta proprio qui',
      helpLinks: [
        {
          title: 'Leggi le FAQ',
          body: 'Risposte rapide su caricamenti, dimensione dei file, qualità delle pagine e privacy.',
        },
        {
          title: 'Apri la guida',
          body: 'Istruzioni passo passo per riordinare, ruotare ed eliminare le pagine.',
        },
        {
          title: 'Leggi la nostra informativa sulla privacy',
          body: 'Esattamente cosa lo strumento fa — e non fa — con i tuoi file.',
        },
      ],
      dataH2: 'Sui tuoi dati',
      dataP: 'Poiché non raccogliamo dati personali, di solito non c\'è nulla per cui possiamo cercare per te — ma se hai una domanda sulla privacy, siamo felici di rispondere. Vedi la nostra <a href="/privacy">informativa sulla privacy</a> e i <a href="/terms">termini di servizio</a> per i dettagli completi.',
      ctaH2: 'Hai bisogno di sistemare un PDF adesso?',
      ctaP: 'Lo strumento è gratuito, illimitato — e nulla esce mai dal tuo browser.',
      ctaButton: 'Riordina un PDF',
      jsonLd: {
        contactPage: {
          name: 'Contatta Rearrange PDF',
          description: 'Coordinate di contatto per Rearrange PDF, lo strumento basato sul browser per riordinare e organizzare le pagine PDF senza caricamenti.',
        },
      },
    },

    privacy: {
      meta: {
        title: 'Informativa sulla privacy — Rearrange PDF',
        description: 'La nostra promessa sulla privacy: i tuoi PDF non lasciano mai il browser, nessuna pubblicità e nessun tracker, e non raccogliamo dati personali. Leggi l\'informativa completa.',
      },
      breadcrumb: 'Informativa sulla privacy',
      h1: 'Informativa sulla privacy',
      lastUpdated: 'Ultimo aggiornamento: settembre 2026',
      shortH2: 'La versione breve',
      shortItems: [
        'I tuoi file PDF non lasciano mai il tuo dispositivo. Tutta l\'elaborazione avviene nel tuo browser.',
        'Non abbiamo account utente e non raccogliamo dati personali.',
        'Non mostriamo pubblicità e non embeddiamo tracker di terze parti.',
        'L\'unica misurazione che usiamo è analytics aggregati e senza cookie (vedi sotto).',
      ],
      sections: [
        {
          title: '1. Come funziona lo strumento',
          text: 'Rearrange PDF è un\'applicazione lato client. Quando apri un PDF qui, il file viene letto direttamente dal tuo browser usando le API JavaScript disponibili su questa pagina. Le miniature vengono renderizzate e il tuo documento modificato viene ricostruito interamente sul tuo dispositivo. Nessun contenuto del file viene trasmesso a noi o a terze parti — non c\'è un server di caricamento a cui inviarlo.',
        },
        {
          title: '2. Ciò che non raccogliamo mai',
          bullets: [
            'I contenuti, nomi o metadati dei tuoi file PDF',
            'Informazioni sull\'account — lo strumento non richiede registrazione',
            'Cookie di pubblicità o tracciamento cross-site di qualsiasi tipo',
          ],
        },
        {
          title: '3. Ciò che viene raccolto',
          subsections: [
            {
              title: 'Analytics senza cookie',
              text: 'Usiamo Cloudflare Web Analytics per capire l\'uso aggregato del sito (per esempio, quante persone visitano lo strumento e da quale paese). Questo servizio non usa cookie e non identifica visitatori individuali. Non ti segue su altri siti web.',
            },
            {
              title: 'Log standard del server',
              text: 'Come ogni sito web, il nostro provider di hosting (Cloudflare) mantiene log tecnici di breve durata delle richieste per caricare il sito stesso — cose come indirizzo IP, tipo di browser e timestamp. Questi log non includono mai i tuoi documenti (che non vengono mai caricati) ed esistono solo per mantenere il sito sicuro e operativo.',
            },
          ],
        },
        {
          title: '4. Verificalo tu stesso',
          text: 'Non devi fidarti di questa pagina. Apri gli strumenti di sviluppo del tuo browser (F12), passa alla scheda Rete, e usa lo strumento: carica un PDF, trascina le pagine, scarica il risultato. Vedrai che nessuna richiesta trasporta il tuo file.',
        },
        {
          title: '5. I tuoi diritti',
          text: 'Poiché non elaboriamo dati personali oltre le statistiche anonime e aggregate descritte sopra, generalmente non ci sono dati personali tuoi a cui noi possa accedere, correggere o cancellare. Se credi altrimenti e vorresti contattarci, vedi sotto.',
        },
        {
          title: '6. Modifiche a questa informativa',
          text: 'Se mai cambiamo come il sito funziona in un modo che influenza la privacy, aggiorneremo questa pagina. Lo strumento resterà lato client — questa è l\'intera ragione del sito.',
        },
        {
          title: '7. Contatti',
          text: 'Domande sulla privacy? Invia un\'email a <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> o visita la nostra <a href="/contact">pagina contatti</a>.',
        },
      ],
    },

    terms: {
      meta: {
        title: 'Termini di servizio — Rearrange PDF',
        description: 'I termini che si applicano quando usi rearrangepdf.com per riordinare le pagine PDF nel tuo browser.',
      },
      breadcrumb: 'Termini di servizio',
      h1: 'Termini di servizio',
      lastUpdated: 'Ultimo aggiornamento: settembre 2026',
      sections: [
        {
          title: '1. Il servizio',
          text: 'Rearrange PDF (rearrangepdf.com) è uno strumento gratuito basato sul browser che ti permette di riordinare, ruotare, duplicare, eliminare e organizzare le pagine dei file PDF. Tutta l\'elaborazione avviene localmente nel tuo browser web; i tuoi file non vengono caricati su di noi.',
        },
        {
          title: '2. Accettazione',
          text: 'Usando il sito accetti questi termini. Se non sei d\'accordo, per favore non usare il servizio.',
        },
        {
          title: '3. Il tuo contenuto',
          text: 'Mantieni tutti i diritti sui documenti su cui lavori. Poiché i file vengono elaborati sul tuo dispositivo, non li riceviamo, archiviamo o elaboriamo mai. Sei responsabile di avere i diritti su qualsiasi documento apri nello strumento e di rispettare la legge applicabile.',
        },
        {
          title: '4. Nessuna garanzia',
          text: 'Il servizio è fornito "così com\'è", gratuitamente, senza garanzie di alcun tipo. Lavoriamo sodo per mantenerlo accurato e affidabile — il contenuto delle pagine viene copiato byte per byte dal tuo file originale — ma non possiamo garantire disponibilità ininterrotta o idoneità per un particolare scopo. Mantieni backup dei documenti importanti.',
        },
        {
          title: '5. Limitazione di responsabilità',
          text: 'Nella misura massima consentita dalla legge, non siamo responsabili per alcun danno derivante dall\'uso o dall\'incapacità di usare il servizio.',
        },
        {
          title: '6. Modifiche',
          text: 'Possiamo aggiornare il servizio o questi termini in qualsiasi momento. L\'uso continuato dopo le modifiche significa che accetti i termini aggiornati. La versione attuale è sempre disponibile su questa pagina.',
        },
        {
          title: '7. Contatti',
          text: 'Domande su questi termini? Invia un\'email a <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> o visita la nostra <a href="/contact">pagina contatti</a>.',
        },
      ],
    },
  },
} satisfies SiteDictionary;

export default it;