import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Estrarre pagine da un PDF gratis — Solo l\'essenziale',
    description:
      'Estrai da un PDF solo le pagine che ti servono e scarica un documento nuovo, senza filigrana. Il file non viene caricato e la qualità resta intatta.',
  },
  breadcrumb: 'Estrarre pagine PDF',
  h1: 'Estrarre pagine da un PDF',
  intro:
    'Tieni solo le pagine che contano e ottieni un documento nuovo, pulito. Seleziona quelle che vuoi — o un intero intervallo — e lo strumento costruisce un PDF che contiene esattamente quelle pagine, nell\'ordine che scegli, senza caricare il tuo file da nessuna parte.',
  benefits: [
    {
      title: 'Seleziona invece di digitare numeri',
      text: 'Scegli le pagine direttamente sulle miniature invece di scrivere numeri e sperare che l\'intervallo sia quello giusto. Maiusc-clic per prendere un blocco intero, Ctrl+A per ricominciare da capo.',
    },
    {
      title: 'Riordina mentre estrai',
      text: 'Le pagine selezionate si possono trascinare in un altro ordine prima dell\'esportazione, così puoi tirare fuori tre pagine di un rapporto e archiviarle nella sequenza che ti serve davvero.',
    },
    {
      title: 'Copie byte per byte',
      text: 'Le pagine estratte vengono copiate direttamente dal file di origine, non ridisegnate. Caratteri, grafica vettoriale, immagini e link sono preservati esattamente, senza alcuna ricompressione.',
    },
  ],
  howTo: {
    heading: 'Come estrarre pagine da un PDF',
    sub: 'Seleziona le pagine che vuoi e scarica il nuovo documento.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Tutte le pagine compaiono come miniature con il loro numero.',
      },
      {
        title: 'Seleziona le pagine da tenere',
        text: 'Fai clic su ogni pagina che vuoi estrarre. Fai clic sulla prima e Maiusc-clic sull\'ultima per prendere un intero intervallo, oppure usa Ctrl+A per selezionare tutto e poi deseleziona ciò che non ti serve.',
      },
      {
        title: 'Scarica il PDF estratto',
        text: 'Il nuovo documento viene assemblato sul tuo dispositivo usando solo le pagine selezionate e poi scaricato. Il file originale non viene mai modificato.',
      },
    ],
  },
  faq: [
    {
      q: 'Come estraggo pagine specifiche da un PDF?',
      a: 'Aggiungi il PDF qui sopra, poi fai clic sulle pagine che vuoi conservare nella griglia di miniature. Fai clic sulla prima e Maiusc-clic sull\'ultima per selezionare un intervallo, oppure seleziona le pagine una a una. Premi Scarica PDF e ottieni un documento che contiene solo quelle pagine, nell\'ordine mostrato.',
    },
    {
      q: 'Qual è la differenza tra estrarre ed eliminare pagine?',
      a: 'Il documento risultante è grande uguale in entrambi i casi. L\'estrazione produce un nuovo PDF a partire dalle pagine che tieni, lasciando intatto il file originale sul disco. L\'eliminazione toglie pagine dentro l\'editor e sovrascrive il risultato quando scarichi. Usa l\'estrazione per preservare l\'originale, l\'eliminazione quando stai lavorando su una copia comunque.',
    },
    {
      q: 'Posso estrarre pagine senza caricare il PDF?',
      a: 'Sì. Il documento viene letto e ricostruito interamente dentro il tuo browser, quindi non viene trasmessa nessuna copia. Guarda la scheda Rete negli strumenti di sviluppo del browser mentre lavori e vedrai che non viene inviato nulla.',
    },
    {
      q: 'Posso riordinare le pagine che estraggo?',
      a: 'Sì. Una volta selezionate, le pagine si trascinano in qualsiasi ordine prima del download, così puoi prendere qualche pagina da un rapporto lungo e ordinarle come preferisci invece che nell\'ordine in cui comparivano.',
    },
  ],
};

export default it;
