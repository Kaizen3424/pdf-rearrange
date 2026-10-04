import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Convertitore da PNG a PDF: gratuito, online, niente caricato',
    description:
      'Converti immagini PNG in PDF online gratuitamente. Combina PNG in un unico PDF con la trasparenza gestita correttamente: nessun caricamento, no',
  },
  breadcrumb: 'Da PNG a PDF',
  h1: 'Converti immagini PNG in PDF',
  intro:
    'I PNG sono ciò che ottieni da screenshot, esportazioni di progetti e qualsiasi cosa con uno sfondo trasparente. Aggiungili qui, mantieni l\'ordine che desideri e scarica un singolo PDF: convertito sul tuo dispositivo, mai caricato.',
  benefits: [
    {
      title: 'Trasparenza gestita correttamente',
      text:
        'Uno PNG con un canale alfa viene appiattito su una pagina bianca pulita invece di essere rilasciato o lasciato come un foro trasparente, quindi i loghi e i ritagli appaiono come sullo schermo.',
    },
    {
      title: 'Schermate nella loro forma originale',
      text:
        'I dati PNG sono incorporati nello PDF senza ricodifica, quindi il testo nitido in uno screenshot rimane nitido. Non viene eseguito il downsampling di nulla per rendere il file più piccolo del necessario.',
    },
    {
      title: 'Combinali tutti',
      text:
        'Aggiungi un numero qualsiasi di PNG, trascinali in sequenza e scarica un documento. Scegli A4, Letter o ritaglia ciascuna pagina per adattarla esattamente all\'immagine.',
    },
  ],
  howTo: {
    heading: 'Come convertire PNG in PDF',
    sub: 'Tre passaggi, con la conversione in esecuzione sul tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi le tue immagini PNG',
        text:
          'Trascina uno o più file PNG sullo strumento in alto, fai clic per sfogliarlo o incollane uno con Ctrl+V. Funzionano sia gli screenshot che la grafica esportata.',
      },
      {
        title: 'Scegli l\'impostazione della pagina',
        text:
          'Selezionare A4 o Letter per la stampa oppure Adatta all\'immagine per ritagliare ciascuna pagina in modo aderente all\'immagine. Scegli un orientamento o lascia che segua ciascuna immagine e imposta un margine se vuoi un po\' di respiro.',
      },
      {
        title: 'Scarica PDF',
        text:
          'Fare clic su Scarica PDF. Il file viene assemblato sul tuo dispositivo e salvato nei tuoi download: senza filigrana e niente da caricare.',
      },
    ],
  },
  faq: [
    {
      q: 'Come posso convertire uno PNG in uno PDF?',
      a:
        'Aggiungi le tue immagini PNG allo strumento in alto, scegli una dimensione di pagina, quindi fai clic su Scarica PDF. Tutto viene eseguito nel tuo browser e il risultato viene salvato nella cartella dei download.',
    },
    {
      q: 'Cosa succede alle aree trasparenti in uno PNG?',
      a:
        'Sono appiattiti su una pagina bianca. Le pagine PDF non sono trasparenti, quindi non c\'è nessun posto dove andare il canale alfa; la composizione sul bianco è ciò che preserva l\'aspetto dell\'immagine sullo schermo. Se hai bisogno che lo sfondo abbia un colore diverso, sceglilo prima della conversione.',
    },
    {
      q: 'La conversione ridurrà la qualità di uno screenshot?',
      a:
        'No. I dati PNG vengono incorporati esattamente come memorizzati, senza ricodifica, quindi il testo piccolo in uno screenshot rimane leggibile. Nemmeno le immagini vengono mai ingrandite: uno screenshot di 400 px rimane largo 400 pixel anziché essere allungato per riempire una pagina A4.',
    },
    {
      q: 'Posso inserire più PNG in uno PDF?',
      a:
        'SÌ. Aggiungine quanti vuoi, trascinali nell\'ordine che preferisci e scarica un singolo PDF che li contiene tutti. Non c\'è limite al numero di immagini.',
    },
    {
      q: 'I miei PNG sono caricati?',
      a:
        'No. La decodifica e l\'assemblaggio di PDF avvengono entrambi nella scheda del browser. Apri la scheda Rete degli strumenti per sviluppatori durante la conversione e non vedrai alcuna richiesta che trasporta i tuoi file.',
    },
  ],
};

export default it;