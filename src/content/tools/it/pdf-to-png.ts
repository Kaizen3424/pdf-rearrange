import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Converti PDF in PNG online gratuitamente, senza perdite',
    description:
      'Converti pagine PDF in immagini PNG gratuitamente in un unico ZIP. Sfondo trasparente e senza perdita di dati opzionale, reso sul tuo dispositivo',
  },
  breadcrumb: 'Da PDF a PNG',
  h1: 'Converti pagine PDF in immagini PNG',
  intro:
    'PNG mantiene ogni pixel esattamente come renderizzato, il che lo rende la scelta giusta quando l\'immagine verrà modificata, composta o non deve mostrare artefatti di compressione. Converti qualsiasi PDF e porta via ogni pagina come PNG.',
  benefits: [
    {
      title: 'Senza perdite, ogni volta',
      text:
        'PNG comprime senza eliminare le informazioni, in modo che i bordi del testo rimangano nitidi e i colori uniformi rimangano uniformi. Niente viene appianato come fa JPG.',
    },
    {
      title: 'Sfondo trasparente se ne hai bisogno',
      text:
        'Le pagine PDF normalmente dipingono uno sfondo opaco, ma puoi invece esportare con trasparenza, utile quando le immagini verranno sovrapposte a qualcos\'altro.',
    },
    {
      title: 'Tutte le pagine in un unico archivio',
      text:
        'Converti un lungo documento in una volta sola. Ogni pagina diventa page-1.png, page-2.png e così via, racchiusa in un unico ZIP.',
    },
  ],
  howTo: {
    heading: 'Come convertire PDF in PNG',
    sub: 'Tre passaggi, con PDF renderizzato localmente.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text:
          'Rilascia un file nello strumento sopra o fai clic per sfogliare. Vedrai il conteggio delle pagine non appena sarà stata letta.',
      },
      {
        title: 'Scegli una risoluzione',
        text:
          '72, 150 o 300 DPI. I file PNG sono più grandi di JPG perché non viene scartato nulla, quindi una risoluzione inferiore è un modo ragionevole per mantenere gestibile l\'archivio.',
      },
      {
        title: 'Scarica ZIP',
        text:
          'Fai clic su Converti in immagini e le tue pagine PNG arriveranno insieme in un unico archivio.',
      },
    ],
  },
  faq: [
    {
      q: 'Dovrei usare PNG o JPG?',
      a:
        'Usa PNG quando l\'immagine verrà modificata, sovrapposta o deve rimanere nitida: è senza perdite. Usa JPG quando condividi o carichi e le dimensioni del file contano più della perfetta fedeltà. Convertire la stessa pagina in entrambe le direzioni è un modo rapido per vedere la differenza.',
    },
    {
      q: 'Come posso convertire uno PDF in PNG?',
      a:
        'Aggiungi il tuo PDF sopra, scegli una risoluzione, quindi fai clic su Converti in immagini. Ogni pagina viene renderizzata come PNG e consegnata in uno ZIP.',
    },
    {
      q: 'Il PDF è stato caricato?',
      a:
        'No. Il rendering avviene all\'interno della scheda del browser. Niente viene trasmesso ad alcun server, cosa che puoi confermare nella scheda Rete dei tuoi strumenti di sviluppo.',
    },
    {
      q: 'Perché i file PNG sono così grandi?',
      a:
        'Perché PNG mantiene tutti i dettagli anziché approssimarli e un\'alta risoluzione significa molti pixel. Passando da 300 DPI a 150 DPI si riduce il conteggio dei pixel di circa quattro volte senza perdita di metodo.',
    },
    {
      q: 'Posso ottenere uno sfondo trasparente?',
      a:
        'Sì: nell\'impostazione dello sfondo, scegli Trasparente. Tieni presente che una pagina PDF di solito disegna il proprio sfondo bianco, quindi vedrai la trasparenza solo dove la pagina lascia effettivamente lo sfondo non verniciato.',
    },
  ],
};

export default it;