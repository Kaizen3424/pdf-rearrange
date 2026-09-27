import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Unire PDF online gratis — Combina senza caricare file',
    description:
      'Unisci più PDF in un solo documento nell\'ordine che vuoi. 100 % privato: nessun caricamento, tutto nel browser. Senza registrazione né filigrana.',
  },
  breadcrumb: 'Unire PDF',
  h1: 'Unire file PDF in un solo documento',
  intro:
    'Raccogli quanti PDF vuoi in un unico file, esattamente nell\'ordine che ti serve. Trascinali tutti insieme o aggiungine altri mentre lavori, riordina le pagine trascinandole e scarica un documento in ordine senza inviare nulla a un server.',
  benefits: [
    {
      title: 'Unisci nell\'ordine giusto',
      text: 'Carica prima tutti i file, poi colloca le pagine nella sequenza che ti serve. Intreccia capitoli di documenti diversi, metti una copertina in cima o lascia un\'appendice in fondo: l\'ordine è interamente tuo.',
    },
    {
      title: 'Senza perdita, byte per byte',
      text: 'Ogni pagina viene copiata tale e quale dal file originale invece di essere ridisegnata, quindi caratteri, grafica vettoriale, immagini e link escono esattamente come sono entrati.',
    },
    {
      title: 'Nessun caricamento, mai',
      text: 'L\'unione avviene dentro la scheda del tuo browser. I documenti non vengono mai trasmessi, così contratti, fatture e referti medici restano sul tuo dispositivo.',
    },
  ],
  howTo: {
    heading: 'Come unire file PDF',
    sub: 'Tre passaggi, e tutto avviene sul tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi i tuoi PDF',
        text: 'Trascina uno o più file PDF sullo strumento qui sopra, oppure fai clic per sfogliare il computer. Puoi anche incollare un file con Ctrl+V. Tutte le pagine di tutti i file finiscono in un\'unica griglia, con un colore a seconda della provenienza.',
      },
      {
        title: 'Imposta l\'ordine',
        text: 'Trascina le miniature per sistemarle come preferisci. Le pagine di file diversi si intrecciano liberamente, quindi puoi unire il capitolo 1 di un documento con il capitolo 2 di un altro.',
      },
      {
        title: 'Scarica il risultato',
        text: 'Fai clic su Scarica PDF. Il documento unito viene ricostruito sul tuo dispositivo e salvato direttamente nei download: nessuna filigrana, nessuna coda di attesa.',
      },
    ],
  },
  faq: [
    {
      q: 'Come unisco dei PDF gratis?',
      a: 'Apri lo strumento qui sopra, aggiungi due o più PDF, trascina le miniature nell\'ordine che preferisci e fai clic su Scarica PDF. Nessuna registrazione, nessuna filigrana, nessuna quota giornaliera: lo strumento è gratuito perché il lavoro lo fa il tuo dispositivo invece di un server a pagamento.',
    },
    {
      q: 'Posso unire dei PDF senza caricarli su un server?',
      a: 'Sì, ed è l\'unico modo in cui funziona questo strumento. I file vengono letti, combinati e riscritti interamente dentro il browser, quindi nessuna copia del documento raggiunge un server. Puoi verificarlo tu stesso: apri gli strumenti di sviluppo del browser, guarda la scheda Rete e unisci qualche file. Non viene trasmesso nulla.',
    },
    {
      q: 'C\'è un limite a quanti PDF posso unire?',
      a: 'No. Non c\'è un tetto sul numero di file o di pagine, perché nulla viene caricato e nessun server conta il tuo utilizzo. L\'unico limite reale è la memoria del dispositivo: un documento molto grande consumerà più RAM mentre viene assemblato.',
    },
    {
      q: 'L\'unione riduce la qualità del mio PDF?',
      a: 'No. Le pagine vengono copiate byte per byte dagli originali invece di essere ridisegnate o ricompresse, quindi il testo resta nitido, i vettori restano vettori e caratteri e link sono preservati esattamente.',
    },
  ],
};

export default it;
