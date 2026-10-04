import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Ritaglia le pagine PDF gratis – online, senza upload',
    description:
      'Ritaglia le pagine PDF gratuitamente. Ritaglia lo stesso margine da ogni pagina o imposta ciascun bordo separatamente: applicato nel tuo browser, no',
  },
  breadcrumb: 'Ritaglia PDF',
  h1: 'Ritaglia i bordi dalle tue pagine PDF',
  intro:
    'I documenti scansionati arrivano con il piano dello scanner visibile intorno alla pagina e le diapositive esportate in PDF spesso riportano margini che nessuno ha chiesto. Taglia una quantità fissa da ciascun bordo e il contenuto riempie nuovamente la pagina.',
  benefits: [
    {
      title: 'Un ritaglio su ogni pagina',
      text:
        'Imposta i quattro margini una volta e ogni pagina verrà ritagliata in modo identico: il comportamento giusto per una scansione o un mazzo esportato, in cui ogni pagina presenta lo stesso problema.',
    },
    {
      title: 'I bordi rimangono affilati',
      text:
        'Il ritaglio modifica il riquadro della pagina, non il contenuto. Il testo non viene sottoposto a nuovo rendering né ridimensionato, quindi il risultato ritagliato è nitido come l\'originale.',
    },
    {
      title: 'Feedback dal vivo in punti',
      text:
        'Ciascun bordo mostra la propria misurazione, quindi un margine di 36 pt e un margine di 12 pt sono scelte visibilmente diverse prima che venga applicato qualsiasi cosa.',
    },
  ],
  howTo: {
    heading: 'Come ritagliare un PDF',
    sub: 'Tre passaggi, applicati sul tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text:
          'Rilascia il documento sullo strumento in alto o fai clic per sfogliarlo. Viene visualizzata la dimensione della pagina corrente in modo che i margini abbiano contesto.',
      },
      {
        title: 'Imposta i quattro margini',
        text:
          'Trascina ciascun bordo per tagliare quella quantità dall\'alto, da destra, dal basso e da sinistra. Valori uguali su tutti e quattro i lati sono il caso comune per i bordi di scansione.',
      },
      {
        title: 'Scarica il PDF ritagliato',
        text:
          'Fai clic su Ritaglia pagine. La copia ritagliata viene salvata nei tuoi download; il file originale è intatto.',
      },
    ],
  },
  faq: [
    {
      q: 'Come posso ritagliare un PDF?',
      a:
        'Aggiungi il tuo PDF, imposta la quantità di ritaglio da ciascun bordo, quindi fai clic su Ritaglia pagine. Ogni pagina viene ritagliata con gli stessi margini e il risultato viene scaricato.',
    },
    {
      q: 'Il ritaglio rimuove il contenuto fuori dagli schemi?',
      a:
        'No, e vale la pena saperlo. Il ritaglio cambia la parte della pagina visualizzata: il significato standard e non distruttivo di un ritaglio PDF. Un visualizzatore mostra solo l\'area ritagliata, ma il contenuto sottostante esiste ancora nel file.',
    },
    {
      q: 'Cosa sono i punti?',
      a:
        'Un punto è 1/72 di pollice, l\'unità PDF misura le dimensioni della pagina. A titolo indicativo, 36 pt equivalgono a mezzo pollice e 12 pt è un ritaglio stretto, all\'incirca il bordo del piano dello scanner.',
    },
    {
      q: 'Posso ritagliare solo una pagina?',
      a:
        'Questa versione ritaglia ogni pagina con gli stessi margini, che è ciò di cui ha bisogno una scansione o una serie di diapositive. Per una singola pagina, dividi prima il documento, ritaglia la pagina e uniscila di nuovo.',
    },
    {
      q: 'Il mio PDF è stato caricato?',
      a: 'No. Il ritaglio viene applicato nella scheda del browser e non viene trasmesso nulla.',
    },
  ],
};

export default it;