import type { ToolStrings } from './en';

const it = {
  dropZone: {
    reading: 'Lettura del PDF in corso…',
    processingLocally: 'Elaborazione locale — nulla viene caricato.',
    heading: 'Trascina il tuo PDF qui',
    or: 'oppure',
    selectFile: 'Seleziona file PDF',
    hint: 'Aggiungi più file per unirli · incolla con Ctrl+V · dimensione e pagine illimitate',
    privacy: 'Il tuo file non esce mai da questo browser',
  },
  toolbar: {
    noFile: 'Nessun file',
    files: (n: number) => `${n} file`,
    pages: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'}`,
    undo: 'Annulla (Ctrl+Z)',
    redo: 'Ripristina (Ctrl+Shift+Z)',
    reverse: 'Inverti ordine delle pagine',
    resetLabel: 'Ripristina l\'ordine originale',
    reset: 'Ripristina',
    thumbnailSize: 'Dimensione miniature',
    zoomSm: 'Miniature piccole',
    zoomMd: 'Miniature medie',
    zoomLg: 'Miniature grandi',
    addPdfs: 'Aggiungi PDF',
    addBlank: 'Aggiungi una pagina vuota',
    confirm: 'Confermi?',
    startNew: 'Inizia nuovo',
    building: 'Creazione in corso…',
    download: 'Scarica PDF',
  },
  pageCard: {
    blankPage: 'pagina vuota',
    sourcePage: (name: string, n: number) => `${name}, pagina originale ${n}`,
    rotated: (deg: number) => `, ruotata di ${deg}°`,
    pageOf: (pos: number, total: number) => `Pagina ${pos} di ${total}`,
    renderFailed: 'Impossibile visualizzare questa pagina',
    loadingThumbnail: 'Caricamento miniatura della pagina',
    blank: 'vuota',
    sourceTitle: (name: string, n: number) => `${name} — pagina originale ${n}`,
    rotatedTitle: (deg: number) => `Ruotata di ${deg}°`,
    preview: 'Anteprima pagina',
    rotate: 'Ruota in senso orario',
    duplicate: 'Duplica pagina',
    delete: 'Elimina pagina',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Pagina ${n} sollevata. Usa i tasti freccia per spostarla, Spazio per rilasciarla, Escape per annullare.`,
    dragOver: (n: number) => `La pagina è ora sulla posizione ${n}.`,
    dragOut: 'La pagina non è più su un bersaglio di rilascio.',
    dragEnd: (n: number) => `Spostata alla posizione ${n}.`,
    dragCancel: 'Spostamento annullato.',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Anteprima pagina, pagina ${pos} di ${total}`,
    headerBlank: (pos: number, total: number) => `Pagina ${pos} di ${total} — pagina vuota`,
    headerFile: (pos: number, total: number, name: string) =>
      `Pagina ${pos} di ${total} — ${name}`,
    close: 'Chiudi anteprima',
    prev: 'Pagina precedente',
    next: 'Pagina successiva',
    alt: (pos: number) => `Anteprima della pagina ${pos}`,
  },
  password: {
    dialogLabel: 'Password del PDF richiesta',
    heading: 'Password richiesta',
    thisPdf: 'Questo PDF',
    bodySuffix: 'è protetto. Inserisci la password per aprirlo.',
    retry: 'Questa password non ha funzionato — riprova.',
    placeholder: 'Password del PDF',
    cancel: 'Annulla',
    unlock: 'Sblocca',
  },
  success: {
    heading: 'Il tuo PDF è pronto',
    body: 'Il tuo PDF riordinato è stato scaricato sul tuo dispositivo. Nulla è stato caricato — tutto è avvenuto proprio nel tuo browser.',
    pages: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'}`,
    building: 'Creazione in corso…',
    downloadAgain: 'Scarica di nuovo',
    startNew: 'Inizia nuovo',
    backToEditing: 'Torna alla modifica',
  },
  rating: {
    label: 'Valuta questo strumento su 5 stelle',
    star: (n: number) => `${n} stell${n > 1 ? 'e' : 'a'}`,
    announced: (value: number) =>
      `Hai votato ${value} su 5 stelle. Grazie per il tuo feedback!`,
    thanks: 'Grazie per il tuo feedback!',
    prompt: 'Come è andata?',
  },
  batch: {
    label: 'Azioni per le pagine selezionate',
    selected: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} selezionat${n === 1 ? 'a' : 'e'}`,
    rotate: 'Ruota',
    duplicate: 'Duplica',
    delete: 'Elimina',
    all: 'Tutte',
    clear: 'Cancella',
  },
  toasts: {
    dismiss: 'Chiudi notifica',
  },
  tool: {
    pagesReady: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} pronta da riordinare.`,
    filesSkippedPdf: (n: number) =>
      `${n} ${n === 1 ? 'file è stato ignorato' : 'file sono stati ignorati'} — solo i file PDF sono supportati.`,
    readFailed: (name: string) => `Impossibile leggere ${name}.`,
    openFailed: (name: string) =>
      `Impossibile aprire ${name} — potrebbe essere danneggiato o non un PDF valido.`,
    readingFile: (name: string) => `Lettura di ${name} in corso…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Lettura di ${name} (${i} di ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} ${n === 1 ? 'file è stato ignorato' : 'file sono stati ignorati'} — la password non è stata inserita.`,
    encryptedInfo:
      'Questo PDF è crittografato. Puoi riordinarlo qui, ma i file crittografati non possono essere ricostruiti per il download — il pulsante di download spiega come risolvere.',
    allSelected: 'Tutte le pagine selezionate.',
    rotated: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} ruotat${n === 1 ? 'a' : 'e'}.`,
    duplicated: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} duplicat${n === 1 ? 'a' : 'e'}.`,
    deleted: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} eliminat${n === 1 ? 'a' : 'e'}.`,
    reversed: 'Ordine delle pagine invertito.',
    restored: 'Ordine originale delle pagine ripristinato.',
    blankAdded: 'Pagina vuota aggiunta alla fine — trascinala dove vuoi.',
    blankDocName: 'Pagina vuota',
    noPagesLeft: 'Non ci sono più pagine',
    noPagesHint: 'Annulla l\'eliminazione, aggiungi più PDF, o inizia nuovo.',
    undo: 'Annulla',
    addPdfs: 'Aggiungi PDF',
    dropOverlay: 'Trascina PDF per aggiungere le loro pagine',
    encryptedTitle: 'Questo PDF è crittografato, quindi non può essere scaricato.',
    encryptedBody1:
      'Puoi riordinare, ruotare e visualizzare in anteprima le pagine, ma un file crittografato non può essere ricostruito sul tuo dispositivo. Rimuovi prima la password (aprilo e usa ',
    encryptedStrong: 'Stampa → Salva come PDF',
    encryptedBody2:
      ', oppure l\'opzione "rimuovi sicurezza" della tua app PDF), poi aggiungi la copia sbloccata qui.',
    encryptedDownloadToast:
      'Questo file è crittografato, quindi non può essere ricostruito localmente. Rimuovi la password (aprilo, scegli Stampa → Salva come PDF, oppure usa l\'opzione "rimuovi sicurezza" della tua app PDF), poi aggiungi la copia qui e scarica.',
    exportFailed:
      'Questo PDF non poteva essere ricostruito sul tuo dispositivo. Potrebbe usare crittografia o una struttura che non possiamo copiare. Prova un PDF senza password, o esportalo di nuovo dalla tua app PDF prima.',
    downloaded: (name: string) => `${name} scaricato.`,
    undone: 'Annullato.',
    redone: 'Ripristinato.',
  },
  shared: {
    memoryNote:
      'Nulla viene caricato, quindi non c\'è un limite di dimensione — ma non c\'è nemmeno una coda: un documento molto grande o ad alta risoluzione consuma più memoria del tuo dispositivo mentre viene ricostruito. Qualche centinaio di pagine va senza problemi, mentre una scansione di mille pagine può sembrare lenta su un telefono di vecchia generazione.',
    byteForByte:
      'Le pagine vengono copiate byte per byte direttamente dal file originale, mai ridisegnate e mai ricompresse, quindi la qualità è identica a quella della sorgente.',
    selectAllPages: 'Seleziona tutte le pagine',
    clearSelection: 'Cancella la selezione',
    selectedCount: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} selezionat${n === 1 ? 'a' : 'e'}`,
    nothingSelected: 'Nessuna pagina selezionata.',
  },
  split: {
    modeLabel: 'Modalità di divisione',
    modeRange: 'Per intervallo di pagine',
    modeEvery: 'Ogni pagina',
    rangeLabel: 'Intervalli di pagine',
    rangePlaceholder: '1-4, 9, 15-20',
    rangeHelp: 'Un file per intervallo, nell\'ordine in cui li elenchi.',
    rangeAppend: 'Fai clic su una pagina qui sotto per aggiungerla agli intervalli.',
    orderLocked:
      'I numeri di pagina seguono sempre l\'ordine del tuo documento originale — dividere non modifica mai il tuo file.',
    pageControlsDisabled:
      'Ruotare, duplicare ed eliminare appartengono all\'editor e qui non fanno nulla — dividere non modifica mai il tuo file. Usa lo strumento "Estrarre pagine da un PDF" per cambiare quali pagine entrano.',
    errorEmpty:
      'Inserisci almeno un intervallo di pagine, oppure passa a "Ogni pagina".',
    errorZero: 'I numeri di pagina iniziano da 1.',
    errorSyntax: (part: string) =>
      `${part} non è un numero di pagina. Usa numeri separati da virgole e trattini — per esempio 1-4, 9, 15-20.`,
    errorUnfinished: (part: string) => `A ${part} manca un numero di pagina.`,
    errorTrailing:
      'Rimuovi la virgola in più, oppure chiudi l\'ultimo intervallo con un numero di pagina.',
    errorReversed: (part: string) =>
      `${part} è al contrario. Scrivilo nel verso opposto, come 3-7.`,
    errorOutOfBounds: (max: number) =>
      `Questo intervallo supera l'ultima pagina. Questo documento ha ${max} pagin${max === 1 ? 'a' : 'e'}.`,
    planLabel: 'File da creare',
    planEmpty: 'Inserisci un intervallo per vedere i file che otterrai.',
    planItem: (part: number, label: string, pages: number) =>
      `${label} — ${pages} pagin${pages === 1 ? 'a' : 'e'}`,
    planCount: (n: number) => `${n} file ${n === 1 ? 'sarà creato' : 'saranno creati'}`,
    action: 'Dividi e scarica',
    working: 'Divisione in corso…',
    progress: (done: number, total: number) =>
      `${done} di ${total} file creat${total === 1 ? 'o' : 'i'}.`,
    confirmTitle: (n: number) =>
      `Questo creerà ${n} file separat${n === 1 ? 'o' : 'i'}.`,
    confirmBody:
      'Il browser potrebbe chiederti il permesso di scaricare più file insieme, e crearli richiede un momento. Vuoi continuare?',
    confirmAction: (n: number) => `Scarica ${n} file`,
    cancel: 'Annulla',
    resultsHeading: (n: number) => `${n} file creat${n === 1 ? 'o' : 'i'}`,
    resultsHeadingNone: 'Non è stato creato nulla',
    resultsBody:
      'Ogni documento è stato ricostruito sul tuo dispositivo e salvato separatamente. Nulla è stato caricato, e nessuna pagina è stata ridisegnata — la qualità è identica a quella dell\'originale.',
    resultsFailed: (n: number) =>
      `${n} file ${n === 1 ? 'non è stato creato' : 'non sono stati creati'}`,
    resultPending: 'Non creato',
    partialFailure: (done: number, failed: number) =>
      `${done} file creat${done === 1 ? 'o' : 'i'}, ${failed} fallit${failed === 1 ? 'o' : 'i'}. Gli altri sono già nei tuoi download.`,
    allFailed:
      'Non è stato possibile creare nessun file. Il tuo file originale non è stato toccato.',
    exportFailedOne: (name: string) =>
      `Non è stato possibile creare ${name}.`,
  },
  extract: {
    keepLabel: 'Pagine da tenere',
    keepHelp:
      'Fai clic su una pagina per tenerla. Fai clic sulla prima e Maiusc-clic sull\'ultima per prendere un intero intervallo, oppure seleziona tutte le pagine e poi deseleziona ciò che non ti serve.',
    orderLabel: 'Ordine delle pagine estratte',
    orderHelp:
      'Trascina qui una pagina per cambiarne l\'ordine nel nuovo documento. Il tuo file originale non viene mai modificato.',
    orderEmpty:
      'Nessuna pagina selezionata — fai clic su una pagina qui sopra per tenerla.',
    orderInTray:
      'Per cambiare l\'ordine delle pagine estratte, trascinale nell\'elenco qui sotto.',
    orderMoved: (from: number, to: number) =>
      `Spostata dalla posizione ${from} alla posizione ${to} del nuovo documento.`,
    moveUp: 'Sposta questa pagina prima nel nuovo documento',
    moveDown: 'Sposta questa pagina dopo nel nuovo documento',
    remove: 'Lascia fuori questa pagina dal nuovo documento',
    pickerLabel: 'Seleziona le pagine per numero',
    pickerHint: 'Ogni pagina come bersaglio al tocco, per tastiera e schermi piccoli.',
    pickerPage: (n: number, total: number) => `Pagina ${n} di ${total}`,
    pickerOn: (n: number) => `Pagina ${n}, tenuta`,
    pickerOff: (n: number) => `Pagina ${n}, non tenuta`,
    deselectMeansLeaveOut:
      'Questo strumento non elimina mai pagine dal tuo file — la pagina viene semplicemente lasciata fuori dal nuovo documento.',
    action: 'Scarica il PDF estratto',
    zeroSelected: 'Seleziona almeno una pagina da estrarre.',
    resultsHeading: (n: number) => `${n} pagin${n === 1 ? 'a' : 'e'} estratt${n === 1 ? 'a' : 'e'}`,
    resultsBody:
      'Il nuovo documento è stato ricostruito sul tuo dispositivo a partire dalle pagine che hai selezionato, nell\'ordine mostrato. Il tuo file originale non è stato modificato.',
  },
} satisfies ToolStrings;

export default it;