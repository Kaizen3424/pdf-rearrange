import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Inserire pagine in un PDF — Vuote o da un altro file',
    description:
      'Inserisci pagine in un PDF: foglio vuoto, pagine da un altro file o sostituzione di una pagina. Nessun caricamento, nessuna filigrana, nessuna registrazione.',
  },
  breadcrumb: 'Inserire pagine PDF',
  h1: 'Inserire pagine in un PDF',
  intro:
    'Aggiungi pagine a un documento esistente senza ricostruirlo. Inserisci un foglio bianco, porta dentro pagine da un altro PDF, collocale dove serve e scarica un unico file combinato che non è mai passato da un server.',
  benefits: [
    {
      title: 'Pagine vuote o pagine di un file',
      text: 'Inserisci una pagina vuota per appunti, una copertina o un divisore di stampa, oppure aggiungi le pagine di un secondo documento. Entrambe le cose sono a un clic nella barra degli strumenti.',
    },
    {
      title: 'Mettile esattamente dove servono',
      text: 'Le pagine nuove finiscono nella griglia come tutte le altre: trascinale e le pagine vicine si spostano per fare spazio. Senza dover riordinare a mano tutto il documento.',
    },
    {
      title: 'Sostituisci una pagina in una passata',
      text: 'Elimina la pagina superata e trascina la sostituta nel vuoto. Poiché le pagine vengono copiate e non ridisegnate, la nuova conserva esattamente la sua formattazione originale.',
    },
  ],
  howTo: {
    heading: 'Come inserire pagine in un PDF',
    sub: 'Aggiungi e posiziona nuove pagine in tre passaggi.',
    steps: [
      {
        title: 'Aggiungi il tuo documento',
        text: 'Trascina il PDF sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Le pagine vengono caricate come griglia di miniature.',
      },
      {
        title: 'Inserisci le pagine nuove',
        text: 'Fai clic sul pulsante «+» nella barra degli strumenti per aggiungere una pagina bianca in fondo, oppure usa Aggiungi PDF per portare pagine da un altro documento. Ogni pagina nuova compare nella griglia, colorata secondo la provenienza.',
      },
      {
        title: 'Posiziona e scarica',
        text: 'Trascina le nuove pagine nel posto giusto, poi fai clic su Scarica PDF. Il documento combinato viene ricostruito sul tuo dispositivo e salvato; il file originale resta invariato.',
      },
    ],
  },
  faq: [
    {
      q: 'Come inserisco una pagina bianca in un PDF?',
      a: 'Aggiungi il tuo PDF allo strumento qui sopra e fai clic sul pulsante «+» nella barra degli strumenti. In fondo alla griglia viene aggiunta una pagina A4 vuota: trascinala dove vuoi e le pagine vicine si sposteranno per farle spazio. Scarica per salvare la modifica.',
    },
    {
      q: 'Come aggiungo le pagine di un altro PDF?',
      a: 'Usa il pulsante «Aggiungi PDF» nella barra degli strumenti per scegliere un secondo file. Tutte le sue pagine entrano nella stessa griglia, contrassegnate da un colore tutto loro, così sai da quale documento vengono. Posizionale e scarica un unico PDF combinato.',
    },
    {
      q: 'Come sostituisco una pagina in un PDF?',
      a: 'Elimina la pagina che stai sostituendo, aggiungi il PDF che contiene la nuova e trascinala nello spazio liberato. Poiché ogni pagina viene copiata byte per byte invece di essere ridisegnata, la sostituta conserva esattamente caratteri, immagini e impaginato.',
    },
    {
      q: 'Posso inserire pagine senza caricare il documento?',
      a: 'Sì: l\'inserimento avviene interamente nel tuo browser, quindi il file non viene mai trasmesso. Apri la scheda Rete negli strumenti di sviluppo del browser mentre lavori e non vedrai alcuna richiesta di file.',
    },
  ],
};

export default it;
