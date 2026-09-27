import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Eliminare pagine da un PDF gratis — Cancella e scarica',
    description:
      'Elimina le pagine di un PDF online gratis. Seleziona quelle da togliere e scarica il resto: nessun caricamento, nessuna registrazione, qualità invariata.',
  },
  breadcrumb: 'Eliminare pagine PDF',
  h1: 'Eliminare pagine da un PDF',
  intro:
    'Togli le pagine che non ti servono e lascia tutto il resto esattamente com\'era. Seleziona una singola pagina o elimina un intero intervallo in una volta, controlla il risultato nelle miniature prima di confermare e scarica il documento ridotto: il tuo file non esce dal browser.',
  benefits: [
    {
      title: 'Una pagina o cinquanta',
      text: 'Passa il puntatore su una miniatura per eliminarla da sola, oppure seleziona più pagine e rimuovile in un colpo solo. Ctrl+A seleziona tutto, così ridurre un documento alle sole pagine utili richiede pochi secondi.',
    },
    {
      title: 'Non si perde mai nulla',
      text: 'Le eliminazioni finiscono nella cronologia degli annullamenti, quindi un taglio troppo zelante non è mai definitivo. Ctrl+Z riporta le pagine e un clic ripristina l\'intero documento nel suo ordine originale.',
    },
    {
      title: 'Qualità invariata',
      text: 'Le pagine superstiti vengono copiate come sono: caratteri, immagini, vettori e link non sono ridisegnati né ricompressi, quindi togliere una pagina non costa nulla in fedeltà.',
    },
  ],
  howTo: {
    heading: 'Come eliminare pagine da un PDF',
    sub: 'Rimuovi le pagine indesiderate in tre passaggi.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Ogni pagina compare come miniatura e la vedi a colpo d\'occhio.',
      },
      {
        title: 'Seleziona cosa togliere',
        text: 'Fai clic sull\'icona del cestino sulla miniatura di una pagina per eliminare solo quella pagina. Per toglierne più di una, fai clic sulla prima e poi Maiusc-clic sull\'ultima: tutto l\'intervallo viene selezionato ed eliminato in un colpo.',
      },
      {
        title: 'Scarica il PDF ridotto',
        text: 'Controlla l\'ordine rimasto, poi fai clic su Scarica PDF. Il documento accorciato viene ricostruito sul tuo dispositivo e salvato subito.',
      },
    ],
  },
  faq: [
    {
      q: 'Come elimino delle pagine da un PDF?',
      a: 'Aggiungi il tuo PDF allo strumento qui sopra, passa il puntatore su una miniatura e fai clic sul suo pulsante di eliminazione. Per togliere un intervallo: fai clic sulla prima pagina, Maiusc-clic sull\'ultima, poi premi Canc o usa il pulsante di eliminazione in blocco. Scarica il risultato e avrai il PDF senza quelle pagine.',
    },
    {
      q: 'Posso eliminare pagine senza caricare il file?',
      a: 'Sì. Il documento viene letto e riscritto interamente dentro il tuo browser, quindi non è mai inviato a un server. Apri gli strumenti di sviluppo, guarda la scheda Rete mentre elimini e vedrai zero traffico di file.',
    },
    {
      q: 'Posso annullare l\'eliminazione di una pagina?',
      a: 'Ogni azione viene registrata. Premi Ctrl+Z (Cmd+Z su Mac) per riportare le pagine eliminate, Ctrl+Shift+Z per ripristinare, oppure usa il pulsante di annulla nella barra degli strumenti. Il pulsante di ripristino riporta l\'intero documento al suo ordine di pagine originale.',
    },
    {
      q: 'E se elimino troppe pagine?',
      a: 'Non ti preoccupare: le eliminazioni si annullano, quindi nulla è definitivo finché non scarichi. Se hai già esportato, conserva il file originale ed elimina le pagine da quella copia.',
    },
  ],
};

export default it;
