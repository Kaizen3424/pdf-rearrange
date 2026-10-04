import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Immagini in PDF: combina file JPG e PNG, gratuitamente',
    description:
      'Combina JPG, PNG e altre immagini in un\'unica PDF, in qualsiasi ordine, interamente nel tuo browser. Nessun caricamento, nessuna registrazione',
  },
  breadcrumb: 'Immagini in PDF',
  h1: 'Combina più immagini in una PDF',
  intro:
    'Una pila mista di ricevute, screenshot e foto, che vogliono essere tutte un unico documento. Aggiungi tutte le immagini, trascinale nell\'ordine che preferisci e scarica una singola PDF, assemblata sul tuo dispositivo, senza caricare nulla.',
  benefits: [
    {
      title: 'Mescola liberamente i formati',
      text:
        'Le immagini JPG e PNG possono essere combinate nello stesso documento, quindi una ricevuta fotografata e uno screenshot digitale possono finire in un unico file senza prima convertire nulla.',
    },
    {
      title: 'Trascina nell\'ordine corretto',
      text:
        'Ogni immagine è una pagina che puoi spostare. Trascinali in sequenza o spostali con i pulsanti freccia: utile quando l\'ordine è importante e non è importante digitare i nomi dei file in un elenco.',
    },
    {
      title: 'Impostazione della pagina per documento',
      text:
        'Stampa su A4 o Letter oppure ritaglia ciascuna pagina per adattarla esattamente all\'immagine. Aggiungi un margine quando desideri uno spazio bianco coerente e lascia che l\'orientamento segua l\'immagine o forzalo in un modo o nell\'altro.',
    },
  ],
  howTo: {
    heading: 'Come combinare le immagini in uno PDF',
    sub: 'Tre passaggi, senza caricamento in nessun momento.',
    steps: [
      {
        title: 'Aggiungi le tue immagini',
        text:
          'Inserisci tutti i file JPG o PNG che desideri oppure fai clic per sfogliarli. Puoi incollare immagini anche con Ctrl+V e aggiungerne altre in seguito senza perdere ciò che hai già caricato.',
      },
      {
        title: 'Ordinateli e impostate le pagine',
        text:
          'Trascina le immagini nella sequenza desiderata. Quindi seleziona A4, Letter o Adatta all\'immagine, scegli un orientamento e decidi se desideri un margine.',
      },
      {
        title: 'Scarica uno PDF',
        text:
          'Fai clic su Scarica PDF e il documento combinato verrà salvato nei download, ricostruito sul tuo dispositivo, senza filigrana aggiunta.',
      },
    ],
  },
  faq: [
    {
      q: 'Come posso combinare più immagini in una PDF?',
      a:
        'Aggiungi tutte le immagini allo strumento in alto, trascinale nell\'ordine desiderato, quindi fai clic su Scarica PDF. Ottieni uno PDF contenente ogni immagine come pagina separata.',
    },
    {
      q: 'Quali formati di immagine sono supportati?',
      a:
        'JPG e PNG, inclusi PNG con sfondo trasparente. Le immagini trasparenti vengono posizionate su una pagina bianca pulita, poiché le pagine PDF stesse non sono trasparenti.',
    },
    {
      q: 'C\'è un limite al numero di immagini che posso aggiungere?',
      a:
        'Nessun limite al numero di immagini. Poiché non viene caricato nulla, non esiste una quota lato server da raggiungere; il limite pratico è la quantità di memoria disponibile sul tuo dispositivo.',
    },
    {
      q: 'L\'ordine delle immagini è importante?',
      a:
        'Sì, e lo controlli. Ogni immagine diventa una pagina nell\'ordine mostrato e puoi trascinarla per riordinarla o utilizzare i pulsanti freccia. Scarica il file, cambia idea e riordina di nuovo: nulla è bloccato.',
    },
    {
      q: 'È davvero gratuito senza registrazione?',
      a:
        'SÌ. Non c\'è account, nessuna prova e nessuna filigrana. Lo strumento è gratuito perché è il tuo dispositivo a svolgere il lavoro anziché un server a pagamento.',
    },
  ],
};

export default it;