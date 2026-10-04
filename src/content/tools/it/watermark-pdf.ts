import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Filigrana su PDF online gratuitamente: timbra ogni pagina',
    description:
      'Aggiungi gratuitamente una filigrana di testo alle pagine PDF. Imposta il testo, la dimensione, l\'angolo e l\'opacità e ripetilo su ogni pagina.',
  },
  breadcrumb: 'Filigrana PDF',
  h1: 'Aggiungi una filigrana alle pagine PDF',
  intro:
    'CONFIDENTIAL diagonale su ogni pagina o una nota discreta nell\'angolo. Imposta il testo e il suo aspetto, quindi scarica. La filigrana viene disegnata sulle pagine esistenti, quindi il testo, i collegamenti e le immagini sottostanti rimangono intatti.',
  benefits: [
    {
      title: 'Disegnato sull\'originale, non su un\'immagine',
      text:
        'Le tue pagine rimangono pagine reali. Il testo è ancora selezionabile e i collegamenti continuano a funzionare anche dopo che la filigrana è stata inserita, l\'opposto di ciò che accade quando uno strumento appiattisce il documento in un\'immagine.',
    },
    {
      title: 'Una volta attraversato o affiancato sulla pagina',
      text:
        'Una singola linea diagonale al centro si legge chiaramente. Per un documento in bozza, affiancalo in modo che il contrassegno non possa essere ritagliato da uno screenshot.',
    },
    {
      title: 'Controllo accurato, impostazioni predefinite ragionevoli',
      text:
        'Testo, dimensione, angolo, colore e opacità sono tutti regolabili e l\'opacità inizia con un valore basso in modo che la filigrana sia visibile senza nascondere ciò che c\'è sotto.',
    },
  ],
  howTo: {
    heading: 'Come filigranare un PDF',
    sub: 'Tre passaggi, applicati interamente sul tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text:
          'Rilascia il documento sullo strumento in alto o fai clic per sfogliarlo. È possibile filigranare più file insieme.',
      },
      {
        title: 'Imposta l\'aspetto della filigrana',
        text:
          'Digita il testo, quindi regola le dimensioni, la rotazione e l\'opacità. Lascia la ripetizione abilitata per una filigrana affiancata su tutta la pagina o disattivala per un singolo segno centrato.',
      },
      {
        title: 'Scarica il timbro PDF',
        text:
          'Fare clic su Aggiungi filigrana. Una copia con la filigrana applicata viene salvata nei tuoi download: il tuo file originale rimane intatto.',
      },
    ],
  },
  faq: [
    {
      q: 'Come faccio ad aggiungere una filigrana a un PDF?',
      a:
        'Aggiungi il tuo PDF sopra, digita il testo che desideri, regola l\'opacità e l\'angolo, quindi fai clic su Aggiungi filigrana. La copia timbrata viene scaricata e l\'originale viene lasciato solo.',
    },
    {
      q: 'La filigrana danneggia il documento?',
      a:
        'No. La filigrana viene aggiunta come livello su ogni pagina, quindi il testo, le immagini e i collegamenti originali vengono conservati al di sotto. Il tuo file sorgente non viene mai modificato.',
    },
    {
      q: 'Che opacità dovrei usare?',
      a:
        'Tra il 10% e il 25% è l\'intervallo abituale: chiaramente leggibile ma senza oscurare il contenuto. Andare più in alto solo per una bozza di marcatura dove il punto è che non può essere ignorata.',
    },
    {
      q: 'Posso filigranare solo una pagina?',
      a:
        'Questa versione applica la filigrana a ogni pagina, che è ciò che normalmente significa filigrana. Per contrassegnare una singola pagina, dividi prima il documento e applica una filigrana alla pagina che ti serve.',
    },
    {
      q: 'Il mio PDF è stato caricato?',
      a:
        'No. Il documento viene letto e timbrato nella scheda del tuo browser, quindi non ne viene mai trasmessa alcuna copia. Ciò è importante esattamente per il tipo di file con filigrana: contratti, rapporti, bozze interne.',
    },
  ],
};

export default it;