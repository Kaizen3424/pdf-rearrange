import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Inserire una pagina vuota in un PDF — Gratis, online',
    description:
      'Inserisci una pagina vuota dove vuoi in un PDF: appunti, divisore o stampa fronte-retro. Nessun caricamento, nessuna filigrana, nessuna registrazione.',
  },
  breadcrumb: 'Inserire una pagina vuota',
  h1: 'Inserire una pagina vuota in un PDF',
  intro:
    'Aggiungi un foglio vuoto esattamente dove ti serve. Che sia per prendere appunti, per separare due capitoli o per lasciare spazio e stampare fronte-retro, la pagina vuota costa un clic e non esce mai dal browser.',
  benefits: [
    {
      title: 'Ovunque, non solo in fondo',
      text: 'Le nuove pagine vuote entrano nella griglia come pagine normali, quindi trascinale dove ti servono: fra due capitoli, all\'inizio come copertina o in fondo come foglio per gli appunti.',
    },
    {
      title: 'Risolve la stampa fronte-retro',
      text: 'Quando un documento esce bianco sul retro, la soluzione standard è aggiungere una sola pagina vuota: pareggia il numero di pagine e ogni foglio ha contenuto su entrambi i lati.',
    },
    {
      title: 'Illimitate e annullabili',
      text: 'Aggiungi quanti fogli vuoti ti servono e toglili altrettanto in fretta. Ogni inserimento è un singolo passo annullabile, quindi sperimentare non costa nulla.',
    },
  ],
  howTo: {
    heading: 'Come inserire una pagina vuota in un PDF',
    sub: 'Aggiungi un foglio vuoto in tre passaggi.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Le pagine vengono caricate in una griglia di miniature.',
      },
      {
        title: 'Aggiungi la pagina vuota',
        text: 'Fai clic sul pulsante «+» nella barra degli strumenti. In fondo alla griglia viene aggiunta una pagina A4 vuota, pronta da trascinare al suo posto.',
      },
      {
        title: 'Posiziona e scarica',
        text: 'Trascina la pagina vuota dove la vuoi, poi fai clic su Scarica PDF. Il documento con il tuo nuovo foglio bianco viene ricostruito sul tuo dispositivo e salvato.',
      },
    ],
  },
  faq: [
    {
      q: 'Come aggiungo una pagina vuota a un PDF?',
      a: 'Aggiungi il tuo PDF allo strumento qui sopra e fai clic sul pulsante «+» nella barra degli strumenti. In fondo viene aggiunta una pagina A4 bianca: trascinala dove preferisci, poi fai clic su Scarica PDF per salvare il documento con il nuovo foglio.',
    },
    {
      q: 'Perché dovrei aver bisogno di una pagina vuota?',
      a: 'Il motivo più comune è la stampa fronte-retro: se un documento finisce su una pagina dispari, il foglio successivo esce bianco sul fronte, e aggiungere una pagina vuota in fondo fa stampare ogni foglio da entrambi i lati. Le pagine vuote servono anche come divisori di capitoli, copertine o spazio per appunti scritti a mano.',
    },
    {
      q: 'Posso inserire una pagina vuota senza caricare il PDF?',
      a: 'Sì. La pagina viene aggiunta e il documento ricostruito interamente dentro il tuo browser, quindi nulla viene trasmesso. Guarda la scheda Rete negli strumenti di sviluppo del browser mentre lavori per verificarlo da solo.',
    },
    {
      q: 'Posso cambiare il formato della pagina vuota?',
      a: 'Le pagine vuote vengono aggiunte in formato A4. Se ti serve un altro formato carta, ruota la pagina per cambiarne l\'orientamento, oppure modifica il formato della pagina dopo averla inserita.',
    },
  ],
};

export default it;
