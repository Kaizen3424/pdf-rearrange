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
      `${n} file ${n > 1 ? 'sono' : 'è'} stato ignorat${n > 1 ? 'i' : 'o'} — solo i file PDF sono supportati.`,
    readFailed: (name: string) => `Impossibile leggere ${name}.`,
    openFailed: (name: string) =>
      `Impossibile aprire ${name} — potrebbe essere danneggiato o non un PDF valido.`,
    readingFile: (name: string) => `Lettura di ${name} in corso…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Lettura di ${name} (${i} di ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} file ${n > 1 ? 'sono' : 'è'} stato ignorat${n > 1 ? 'i' : 'o'} — la password non è stata inserita.`,
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
} satisfies ToolStrings;

export default it;