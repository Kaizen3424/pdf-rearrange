import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Convertitore da PDF a JPG: gratuito, ogni pagina come file',
    description:
      'Converti gratuitamente le pagine PDF in immagini JPG, in un unico ZIP. Scegli 72, 150 o 300 DPI e la qualità di cui hai bisogno, renderizzata sul tuo',
  },
  breadcrumb: 'Da PDF a JPG',
  h1: 'Converti pagine PDF in immagini JPG',
  intro:
    'Hai bisogno di una pagina PDF come foto: da inserire in una diapositiva, caricare da qualche parte che rifiuti i PDF o condividere in una chat. Scegli la risoluzione, converti e ogni pagina tornerà come JPG all\'interno di un singolo ZIP.',
  benefits: [
    {
      title: 'Scegli la risoluzione di cui hai bisogno',
      text:
        '72 DPI per una rapida occhiata sullo schermo, 150 per documenti ed e-mail, 300 per la stampa. Lo strumento ti mostra l\'esatta dimensione in pixel prima di eseguire il rendering, quindi non ci sono sorprese.',
    },
    {
      title: 'Uno ZIP, non venti download',
      text:
        'Ogni pagina viene convertita e impacchettata in un unico archivio. I browser bloccano i download automatici ripetuti, quindi un file è sia l\'opzione pratica che quella che funziona davvero.',
    },
    {
      title: 'Resi dove si trova già il tuo file',
      text:
        'Il tuo PDF viene aperto e disegnato all\'interno del tuo browser. Non viene inviato nulla da nessuna parte, il che conta quando il documento è un contratto o una cartella clinica.',
    },
  ],
  howTo: {
    heading: 'Come convertire PDF in JPG',
    sub: 'Tre passaggi e PDF non lascerà mai il tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text:
          'Rilascia un file nello strumento in alto o fai clic per sfogliarlo. Il conteggio delle pagine viene visualizzato immediatamente in modo da sapere con cosa stai lavorando.',
      },
      {
        title: 'Scegli risoluzione e qualità',
        text:
          'Scegli 72, 150 o 300 DPI. Per JPG puoi anche scegliere un file più piccolo o la massima qualità: una qualità più elevata significa un ZIP più grande, quindi vale la pena corrispondere a dove verrà utilizzata l\'immagine.',
      },
      {
        title: 'Scarica ZIP',
        text:
          'Fare clic su Converti in immagini. Ogni pagina viene renderizzata e salvata come pagina-1.jpg, pagina-2.jpg e così via, compressa insieme e salvata nei download.',
      },
    ],
  },
  faq: [
    {
      q: 'Come converto una pagina PDF in un\'immagine?',
      a:
        'Aggiungi PDF sopra, scegli una risoluzione, quindi fai clic su Converti in immagini. Ogni pagina viene renderizzata come JPG e consegnata insieme in un unico archivio ZIP.',
    },
    {
      q: 'Il mio PDF è caricato da qualche parte?',
      a:
        'No. PDF viene aperto e visualizzato nella scheda del browser utilizzando lo stesso motore già utilizzato dal browser per visualizzare i PDF. Non viene trasmessa alcuna copia. Puoi verificare con la scheda Rete degli strumenti per sviluppatori aperta.',
    },
    {
      q: 'Quale risoluzione dovrei scegliere?',
      a:
        'Utilizza 72 DPI quando l\'immagine verrà visualizzata solo sullo schermo: è piccola e veloce. Utilizza 150 DPI per i documenti condivisi tramite e-mail. Utilizzare 300 DPI quando l\'immagine verrà stampata, poiché questa è la risoluzione di stampa standard.',
    },
    {
      q: 'La conversione a JPG ridurrà la qualità?',
      a:
        'JPG è un formato con perdita di dati, quindi una parte della qualità viene scambiata con la dimensione del file: ecco perché è presente il selettore di qualità. La conversione a un valore DPI superiore preserva più dettagli rispetto a uno basso e il testo rimane leggibile a 150 DPI o superiore.',
    },
    {
      q: 'Posso convertire solo alcune pagine?',
      a:
        'Questa versione converte ogni pagina, che è ciò di cui la maggior parte delle persone ha bisogno e conserva l\'output in un archivio prevedibile. Se ti servono solo poche pagine, ritaglia prima il documento e poi convertilo.',
    },
  ],
};

export default it;