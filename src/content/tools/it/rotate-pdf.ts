import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Ruotare le pagine di un PDF gratis — 90°, 180° o 270°',
    description:
      'Ruota le pagine di un PDF di 90, 180 o 270°, una alla volta o in blocco. 100 % privato: nessun caricamento, nessuna filigrana, nessuna perdita di qualità.',
  },
  breadcrumb: 'Ruotare un PDF',
  h1: 'Ruotare le pagine di un PDF',
  intro:
    'Raddrizza un documento scansionato di lato o capovolto. Ruota una singola pagina o applica la stessa correzione a dozzine di pagine in una volta, controlla il risultato mentre procedi e scarica il file corretto senza trasmettere nulla.',
  benefits: [
    {
      title: 'Una pagina o un intero blocco',
      text: 'Ruota le pagine singolarmente con il pulsante su ogni miniatura, oppure selezionane molte e ruotale tutte insieme. Sistemare una scansione di 200 pagine storta richiede un clic per direzione, non duecento.',
    },
    {
      title: 'L\'angolo esatto che ti serve',
      text: 'Le rotazioni vanno a passi di 90° — a sinistra, a destra o completamente capovolto — e si combinano quando a pagine diverse serve una correzione diversa. Nulla viene ridisegnato, quindi il risultato è identico pixel per pixel a parte dell\'orientamento.',
    },
    {
      title: 'Reversibile per progettazione',
      text: 'La rotazione finisce nella cronologia degli annullamenti, quindi un clic di troppo si annulla con Ctrl+Z. Ruota e controruota quanto vuoi: la pagina cambia solo quando scarichi.',
    },
  ],
  howTo: {
    heading: 'Come ruotare un PDF',
    sub: 'Correggi un intero documento in tre passaggi.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Le miniature compaiono e vedi subito quali pagine sono storte.',
      },
      {
        title: 'Ruota le pagine',
        text: 'Fai clic sul pulsante di rotazione di una miniatura per girare quella pagina di 90° in senso orario, oppure seleziona più pagine e usa la barra degli strumenti per ruotarle insieme. Continua finché non sono tutte dritte.',
      },
      {
        title: 'Scarica il PDF raddrizzato',
        text: 'Fai clic su Scarica PDF. Il documento corretto viene ricostruito sul tuo dispositivo con lo stesso testo, le stesse immagini e lo stesso impaginato: è cambiata solo l\'orientamento delle pagine.',
      },
    ],
  },
  faq: [
    {
      q: 'Come ruoto le pagine di un PDF?',
      a: 'Aggiungi il PDF qui sopra, poi fai clic sul pulsante di rotazione di una miniatura per girarla di 90° in senso orario. Un altro clic aggiunge altri 90°, oppure usa il comando di rotazione nella barra degli strumenti dopo aver selezionato più pagine per ruotarle tutte insieme. Scarica quando l\'intero documento ti sembra corretto.',
    },
    {
      q: 'Perché il mio PDF scansionato è di lato?',
      a: 'Gli scanner a piano fisso e le fotocamere dei telefoni catturano la pagina nell\'orientamento in cui era appoggiata, e i PDF non hanno metadati di orientamento affidabili. Ecco perché una scansione storta può sembrare corretta sul tuo computer e inclinata su quello di un altro. Correggere le pagine qui riscrive il file stesso, quindi si vedrà bene ovunque.',
    },
    {
      q: 'Posso ruotare un PDF senza caricarlo?',
      a: 'Sì: la rotazione viene applicata interamente nel tuo browser. Il file non è mai trasmesso a un server, e puoi confermarlo guardando la scheda Rete negli strumenti di sviluppo del browser mentre lavori.',
    },
    {
      q: 'Ruotare un PDF ne riduce la qualità?',
      a: 'No. La rotazione cambia solo il modo in cui la pagina viene mostrata, non il contenuto. Il testo resta selezionabile, i link continuano a funzionare e le immagini non vengono ricompresse, quindi il file ruotato è nitido esattamente quanto l\'originale.',
    },
  ],
};

export default it;
