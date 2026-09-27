import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Duplicare le pagine di un PDF gratis — Copia perfetta',
    description:
      'Duplica una pagina o un intero intervallo del tuo PDF, sul posto o altrove. Nulla viene caricato, la copia è identica e non serve registrarsi.',
  },
  breadcrumb: 'Duplicare pagine PDF',
  h1: 'Duplicare pagine in un PDF',
  intro:
    'Ripeti una pagina senza andare a cercare il file originale. Copia una pagina o un blocco intero e colloca le copie dove servono: una accanto all\'altra, nel foglio successivo, o dove chiede il documento, senza caricare nulla.',
  benefits: [
    {
      title: 'Copia sul posto o altrove',
      text: 'Il duplicato può restare subito dopo l\'originale oppure essere trascinato ovunque nel documento. Ripeti un\'intestazione su ogni pagina, tieni una copia per un collega o duplica un foglio firme.',
    },
    {
      title: 'Duplica un blocco intero',
      text: 'Selezionare più pagine e duplicarle una sola volta le ripete tutte in un\'unica azione: la copia di ogni pagina viene inserita subito dopo l\'originale, così la tua sequenza viene rispettata.',
    },
    {
      title: 'Stessa qualità, ogni volta',
      text: 'Le copie sono duplicati byte per byte della pagina di origine, non un nuovo rendering, quindi testo, grafica vettoriale e caratteri incorporati sono indistinguibili dall\'originale.',
    },
  ],
  howTo: {
    heading: 'Come duplicare le pagine di un PDF',
    sub: 'Copia una pagina o un intero intervallo in tre passaggi.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Le pagine compaiono come miniature numerate.',
      },
      {
        title: 'Duplica la pagina o le pagine',
        text: 'Fai clic sul pulsante di copia di una miniatura per duplicare quella pagina, oppure seleziona più pagine e usa il comando di duplica nella barra degli strumenti. Ogni copia viene inserita subito dopo il suo originale.',
      },
      {
        title: 'Posiziona e scarica',
        text: 'Trascina le nuove copie dove le vuoi, poi fai clic su Scarica PDF. Il documento viene ricostruito sul tuo dispositivo con tutte le copie integre.',
      },
    ],
  },
  faq: [
    {
      q: 'Come duplico una pagina di un PDF?',
      a: 'Aggiungi il tuo PDF allo strumento qui sopra e fai clic sul pulsante di copia della miniatura della pagina da ripetere. Il duplicato viene inserito subito dopo l\'originale. Trascinalo altrove se ti serve in un\'altra posizione, poi scarica.',
    },
    {
      q: 'Posso duplicare più pagine tutte insieme?',
      a: 'Sì. Fai clic sulla prima pagina, Maiusc-clic sull\'ultima per selezionare l\'intervallo, poi premi il pulsante di duplica nella barra degli strumenti. Ogni pagina selezionata viene copiata subito dopo il suo originale e la sequenza attuale resta intatta.',
    },
    {
      q: 'A cosa serve duplicare una pagina di un PDF?',
      a: 'Gli usi più comuni sono ripetere una copertina o una nota legale in cima a un lotto unito, copiare una pagina di firma o approvazione per ogni firmatario, duplicare una pagina di riferimento come appendice, oppure conservare l\'originale accanto a una versione oscurata nello stesso documento.',
    },
    {
      q: 'Duplicare una pagina cambia la qualità del file?',
      a: 'No. La copia è un duplicato byte per byte della pagina originale e non un nuovo rendering, quindi la pagina duplicata è identica alla fonte sia in senso visivo che testuale, fino ai caratteri incorporati e ai link.',
    },
  ],
};

export default it;
