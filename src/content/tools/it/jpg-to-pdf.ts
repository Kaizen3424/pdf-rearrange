import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Converti JPG in PDF gratuitamente, senza caricamento',
    description:
      'Converti immagini JPG in PDF online gratuitamente. Combina uno o più JPEG in un unico PDF che rimane sul tuo dispositivo: senza caricamento, senza registrazione',
  },
  breadcrumb: 'Da JPG a PDF',
  h1: 'Converti immagini JPG in PDF',
  intro:
    'Fotografie, scansioni e screenshot di solito arrivano come JPG e la maggior parte delle persone ne ha bisogno in un unico PDF. Aggiungi le tue immagini, imposta le dimensioni della pagina e scarica: la conversione avviene all\'interno del tuo browser, quindi le tue immagini non vengono mai inviate a un server.',
  benefits: [
    {
      title: 'Le tue foto restano al loro posto',
      text:
        'Le immagini vengono lette, posizionate e scritte in uno PDF interamente all\'interno della scheda del browser. Non viene caricato nulla, quindi le foto personali e i documenti scansionati non vengono mai trasmessi da nessuna parte.',
    },
    {
      title: 'Nessuna ricompressione',
      text:
        'I byte JPEG vengono incorporati alla lettera anziché decodificati e ricodificati. Una foto che sembrava nitida nella tua galleria sembra identica nello PDF, senza artefatti di compressione di seconda generazione.',
    },
    {
      title: 'Uno PDF tra molte immagini',
      text:
        'Aggiungi tutti i JPG che desideri, trascinali nell\'ordine che preferisci e ottieni un unico documento ordinato, con A4, Letter o pagine ritagliate per adattarsi esattamente a ciascuna immagine.',
    },
  ],
  howTo: {
    heading: 'Come convertire JPG in PDF',
    sub: 'Tre passaggi e le tue immagini non lasceranno mai il dispositivo.',
    steps: [
      {
        title: 'Aggiungi le tue immagini JPG',
        text:
          'Trascina uno o più file JPG sullo strumento in alto o fai clic per sfogliare. Puoi anche incollare un\'immagine con Ctrl+V e aggiungerne altre in qualsiasi momento senza ricominciare da capo.',
      },
      {
        title: 'Imposta l\'impostazione della pagina',
        text:
          'Scegli A4, Letter o Adatta all\'immagine per ritagliare ogni pagina in base alla sua immagine. Scegli verticale, orizzontale o lascia che l\'orientamento segua l\'immagine e aggiungi un margine se desideri uno spazio bianco attorno ad essa.',
      },
      {
        title: 'Scarica PDF',
        text:
          'Fare clic su Scarica PDF. Il tuo documento è creato sul tuo dispositivo e salvato nei tuoi download: senza filigrana e senza passaggi di caricamento da attendere.',
      },
    ],
  },
  faq: [
    {
      q: 'Come posso convertire uno JPG in uno PDF?',
      a:
        'Apri lo strumento qui sopra, aggiungi la tua immagine JPG, scegli una dimensione di pagina, quindi fai clic su Scarica PDF. La conversione viene eseguita nel tuo browser e il file finito viene salvato direttamente nei tuoi download.',
    },
    {
      q: 'Le mie immagini vengono caricate da qualche parte?',
      a:
        'No. Ogni immagine viene decodificata, inserita e scritta nello PDF all\'interno della scheda del tuo browser, quindi nessuna copia delle tue foto viene mai inviata a un server. Puoi confermarlo tu stesso: apri gli strumenti di sviluppo del browser, guarda la scheda Rete e converti un\'immagine. Non viene trasmesso nulla.',
    },
    {
      q: 'La conversione da JPG a PDF ridurrà la qualità dell\'immagine?',
      a:
        'No. I dati JPEG sono incorporati nello PDF esattamente come appaiono nel file, anziché essere decodificati e ricodificati. Ciò evita una seconda generazione di artefatti di compressione, che è ciò che di solito rende morbide le foto convertite.',
    },
    {
      q: 'Posso combinare diversi JPG in uno PDF?',
      a:
        'SÌ. Aggiungi tutte le immagini che desideri, trascinale nell\'ordine desiderato e scarica un documento che le contenga tutte. Non c\'è alcun limite al numero di immagini.',
    },
    {
      q: 'Quale dimensione della pagina dovrei scegliere?',
      a:
        'Scegli A4 o Letter per la stampa, che assegna a ogni immagine una pagina standard intera. Scegli Adatta all\'immagine se desideri che la pagina venga ritagliata in modo aderente a ciascuna immagine senza spazi vuoti circostanti: utile per un album fotografico o un fumetto.',
    },
  ],
};

export default it;