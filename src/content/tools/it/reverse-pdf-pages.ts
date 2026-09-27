import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Invertire l\'ordine delle pagine di un PDF — Privato',
    description:
      'Inverti l\'ordine delle pagine di un PDF con un clic, anche per le scansioni al contrario. Nessun caricamento, nessuna registrazione, nessuna perdita di qualità.',
  },
  breadcrumb: 'Invertire l\'ordine delle pagine',
  h1: 'Invertire l\'ordine delle pagine di un PDF',
  intro:
    'Sistemaci un documento interamente al contrario. Un clic rovescia una scansione fronte-retro: la pagina 1 finisce in cima e l\'ultima resta ultima, senza trascinare nulla e con il file sempre dentro il browser.',
  benefits: [
    {
      title: 'Un clic per tutto il documento',
      text: 'L\'inversione completa sta in un clic invece di far passare cento miniature una davanti all\'altra. Ideale per una scansione fronte-retro uscita al contrario, o per un fascicolo assemblato nella sequenza sbagliata.',
    },
    {
      title: 'Controlla prima di confermare',
      text: 'Le miniature si riordinano all\'istante, così verifichi la sequenza prima di scaricare. Se non è quella giusta, un altro clic la rovescia: l\'inversione è un passo in più che si può annullare.',
    },
    {
      title: 'Qualità invariata',
      text: 'Cambia solo la sequenza delle pagine. Ogni pagina viene copiata esattamente com\'era, quindi testo, immagini, grafica vettoriale e link sono identici a quelli del file originale.',
    },
  ],
  howTo: {
    heading: 'Come invertire l\'ordine delle pagine di un PDF',
    sub: 'Tre passaggi per sistemare un documento al contrario.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Le pagine compaiono come miniature, nel loro ordine attuale: quello sbagliato.',
      },
      {
        title: 'Inverti l\'ordine',
        text: 'Fai clic sul pulsante di inversione nella barra degli strumenti. Ogni pagina cambia posizione all\'istante: l\'ultima diventa la prima, la prima diventa l\'ultima, e tutto ciò che sta in mezzo si rovescia di conseguenza.',
      },
      {
        title: 'Scarica il PDF corretto',
        text: 'Controlla la nuova sequenza nella griglia, poi fai clic su Scarica PDF. Il documento riordinato viene ricostruito sul tuo dispositivo e salvato subito.',
      },
    ],
  },
  faq: [
    {
      q: 'Come inverto l\'ordine delle pagine di un PDF?',
      a: 'Aggiungi il tuo PDF allo strumento qui sopra e fai clic sul pulsante di inversione nella barra degli strumenti. L\'intero documento si rovescia in un passo: ultima pagina per prima, prima pagina per ultima. Scarica il risultato e il file resta salvato nell\'ordine corretto.',
    },
    {
      q: 'Perché il mio PDF scansionato è al contrario?',
      a: 'Gli alimentatori automatici di scanner e fotocopiatrici impilano spesso i fogli con il lato stampato verso l\'alto, così lo scanner li legge a partire dall\'ultimo foglio. Il risultato sembra normale nell\'anteprima dell\'app di scansione, ma stampa al contrario. Invertire l\'ordine delle pagine è la soluzione standard, e qui richiede un solo clic.',
    },
    {
      q: 'Posso invertire l\'ordine delle pagine senza caricare il file?',
      a: 'Sì. La riordinazione avviene interamente nella scheda del tuo browser, quindi nessuna copia del documento viene inviata da nessuna parte. Guarda la scheda Rete negli strumenti di sviluppo mentre lavori, se vuoi verificarlo da solo.',
    },
    {
      q: 'Devo trascinare ogni pagina per sistemare una scansione invertita?',
      a: 'No: è proprio questo il punto del pulsante di inversione. Una scansione di 300 pagine si sistema con un clic invece di 299 trascinamenti separati. Se le pagine fuori posto sono solo poche, e non tutto il documento, sposta soltanto quelle miniature.',
    },
  ],
};

export default it;
