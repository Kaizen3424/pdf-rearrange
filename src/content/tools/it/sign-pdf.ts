import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Firma un PDF online gratuitamente: inserisci la tua firma',
    description:
      'Firma gratuitamente i PDF: aggiungi la tua immagine della firma a qualsiasi pagina, posizionala dove appartiene e scarica. Applicato nel tuo browser',
  },
  breadcrumb: 'Firma PDF',
  h1: 'Firma il tuo PDF nel browser',
  intro:
    'Hai già la tua firma, quella che usi su consegne e moduli. Aggiungilo come immagine alle pagine che devono essere firmate, posizionalo dove si trova la riga della firma e scaricalo. Il documento non lascia mai il tuo dispositivo, che è il punto centrale di una firma.',
  benefits: [
    {
      title: 'Usa la firma che hai già',
      text:
        'Scansiona o fotografa la tua firma una volta, salvala come PNG e riutilizzala. Uno sfondo trasparente funziona meglio: qualsiasi cosa rettangolare arriva con la propria scatola bianca.',
    },
    {
      title: 'Posizionato dove il documento lo prevede',
      text:
        'Sette posizioni di ancoraggio più un\'anteprima dal vivo, in modo che la firma si fermi sulla linea della firma anziché fluttuare da qualche parte vicino ad essa.',
    },
    {
      title: 'Il documento rimane privato',
      text:
        'Un contratto firmato è un documento finito. Viene aperto, timbrato e salvato nella scheda del browser: nessun server ne riceve mai una copia, prima o dopo la firma.',
    },
  ],
  howTo: {
    heading: 'Come firmare un PDF',
    sub: 'Tre passaggi e non viene caricato nulla.',
    steps: [
      {
        title: 'Aggiungi lo PDF che devi firmare',
        text:
          'Rilascialo nello strumento in alto o fai clic per sfogliare. È possibile firmare più file in un unico passaggio.',
      },
      {
        title: 'Aggiungi la tua immagine della firma',
        text:
          'Seleziona PNG o JPG della tua firma. Uno PNG trasparente trattiene solo l\'inchiostro; una foto su carta bianca mostrerà lo sfondo, quindi una scansione con lo sfondo rimosso avrà un aspetto migliore.',
      },
      {
        title: 'Posiziona e scarica',
        text:
          'Scegli dove si trova la firma (in basso a destra è il solito punto), quindi fai clic su Aggiungi firma. La copia firmata viene scaricata e l\'originale rimane intatto.',
      },
    ],
  },
  faq: [
    {
      q: 'Come faccio a firmare un PDF?',
      a:
        'Aggiungi PDF, seleziona un\'immagine della tua firma, scegli la sua posizione e fai clic su Aggiungi firma. Il documento firmato viene salvato nei download.',
    },
    {
      q: 'È una firma legalmente valida?',
      a:
        'Dipende dalla tua giurisdizione e da ciò che il destinatario accetta, non dallo strumento. Ciò inserisce un\'immagine della tua firma sul documento; non applica una firma digitale crittografica. Molti flussi di lavoro accettano un\'immagine e quelli che richiedono la firma crittografica lo diranno.',
    },
    {
      q: 'Che tipo di immagine della firma funziona meglio?',
      a:
        'Uno PNG con uno sfondo trasparente. Lo strumento accetta anche JPG, ma una foto di una firma su carta porterà con sé il suo sfondo bianco, quindi otterrai una casella bianca attorno all\'inchiostro.',
    },
    {
      q: 'Posso firmare solo una pagina di un documento lungo?',
      a:
        'Questa versione stampa ogni pagina, il che si adatta a un accordo completo. Per firmare una singola pagina, dividi prima il documento, firma quella pagina e unisci nuovamente le parti.',
    },
    {
      q: 'Il mio documento firmato è caricato da qualche parte?',
      a:
        'No. La firma avviene all\'interno della scheda del browser e nessuna copia del documento, firmata o meno, viene trasmessa a nessun server.',
    },
  ],
};

export default it;