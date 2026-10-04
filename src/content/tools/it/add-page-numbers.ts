import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Numeri di pagina su PDF gratis – online, senza upload',
    description:
      'Aggiungi numeri di pagina alle pagine PDF gratuitamente. Scegli il formato, la posizione e il numero di partenza — applicato sul tuo dispositivo, no',
  },
  breadcrumb: 'Aggiungi i numeri di pagina',
  h1: 'Aggiungi i numeri di pagina al tuo PDF',
  intro:
    'Numerare un documento a mano è noioso ed è facile sbagliare una volta spostate le pagine. Aggiungi i numeri una volta e rimarranno corretti: imposta un formato come "Pagina 3 di 12", scegli dove va e scarica.',
  benefits: [
    {
      title: 'Un formato che controlli',
      text:
        'Utilizza {n} per la pagina corrente e {total} per il conteggio delle pagine, quindi "Pagina {n} di {total}", "{n} / {total}" o semplicemente "{n}" funzionano tutti. I numeri sono testo, non una sovrapposizione di immagini.',
    },
    {
      title: 'Numero da qualsiasi punto iniziale',
      text:
        'Se la pagina 1 è una copertina e il corpo deve iniziare da 1 sul secondo foglio, imposta il numero iniziale e si allineerà. Utile quando si combinano i capitoli in un unico documento.',
    },
    {
      title: 'Posizioni che si leggono correttamente',
      text:
        'In basso al centro per un rapporto formale, in basso a destra per un manuale, in alto a sinistra se corrisponde al modello esistente. Sei ancoraggi, più una dimensione che puoi abbinare al documento.',
    },
  ],
  howTo: {
    heading: 'Come aggiungere numeri di pagina a PDF',
    sub: 'Tre passaggi, sul tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text:
          'Rilascia il documento sullo strumento in alto o fai clic per sfogliarlo. Viene visualizzato il conteggio delle pagine in modo da conoscere l\'intervallo che stai numerando.',
      },
      {
        title: 'Scegli il formato e la posizione',
        text:
          'Imposta il formato dei numeri, dove si trovano i numeri, quanto sono grandi e da quale pagina iniziare a contare. Un esempio dal vivo è mostrato nel campo del formato.',
      },
      {
        title: 'Scarica il PDF numerato',
        text:
          'Fai clic su Aggiungi numeri di pagina e la copia numerata verrà salvata nei tuoi download. Il tuo file originale è rimasto invariato.',
      },
    ],
  },
  faq: [
    {
      q: 'Come faccio ad aggiungere i numeri di pagina a un PDF?',
      a:
        'Aggiungi PDF sopra, scegli un formato e una posizione, quindi fai clic su Aggiungi numeri di pagina. Ogni pagina è numerata e la copia viene scaricata.',
    },
    {
      q: 'Posso iniziare la numerazione da un numero diverso da 1?',
      a:
        'SÌ. Imposta il numero iniziale e la prima pagina che carichi riceverà quel valore. È il modo più semplice per numerare più documenti come un\'unica sequenza continua.',
    },
    {
      q: 'I numeri di pagina saranno testo selezionabile?',
      a:
        'SÌ. Sono incorporati come testo reale, quindi possono essere selezionati e cercati e non si sfocano quando vengono stampati.',
    },
    {
      q: 'Posso numerare solo determinate pagine?',
      a:
        'Questa versione numera ogni pagina. Per numerare in modo selettivo, dividere prima il documento e applicare la numerazione alle parti che ne necessitano.',
    },
    {
      q: 'Il mio PDF è stato caricato?',
      a:
        'No. La numerazione avviene interamente all\'interno della scheda del browser. Non viene trasmesso nulla, quindi un rapporto non pubblicato rimane tale.',
    },
  ],
};

export default it;