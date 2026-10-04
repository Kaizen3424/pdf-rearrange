import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Modifica online gratuitamente le dimensioni della pagina PDF',
    description:
      'Modifica gratuitamente il formato carta delle pagine PDF. Sposta il contenuto su A4, Letter o A5, verticale o orizzontale, applicato nel tuo browser',
  },
  breadcrumb: 'Ridimensiona PDF',
  h1: 'Ridimensiona le tue pagine PDF',
  intro:
    'Un documento impostato per Letter che deve essere stampato su A4 o un mazzo orizzontale che deve diventare verticale. Cambia la carta e l\'orientamento una volta, per ogni pagina, e il contenuto si sposterà con esso.',
  benefits: [
    {
      title: 'Formati carta standard',
      text:
        'A4, Letter e A5, in entrambi gli orientamenti, oltre all\'opzione di mantenere le dimensioni correnti e passare solo da verticale a orizzontale.',
    },
    {
      title: 'Ogni pagina in una volta',
      text:
        'I documenti di dimensioni miste (una pagina Letter pinzata in un rapporto A4) risultano uniformi, il che di solito è il motivo principale del ridimensionamento.',
    },
    {
      title: 'Il contenuto rimane nitido',
      text:
        'Le pagine vengono spostate sul nuovo foglio come vettori, quindi il testo rimane selezionabile e nitido a qualsiasi dimensione. Niente viene trasformato in un\'immagine.',
    },
  ],
  howTo: {
    heading: 'Come ridimensionare le pagine PDF',
    sub: 'Tre passaggi, applicati sul tuo dispositivo.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text:
          'Rilascia il documento sullo strumento sopra. Viene visualizzata la dimensione della pagina corrente in modo da poter vedere da cosa stai modificando.',
      },
      {
        title: 'Scegli la nuova dimensione',
        text:
          'Scegli A4, Letter o A5 oppure mantieni la dimensione corrente. Quindi scegli verticale o orizzontale oppure lascia l\'orientamento così com\'è, in modo che ogni pagina sia rivolta nello stesso modo in cui è già. Lascia attivo l\'opzione "ridimensiona contenuto per adattarlo" e il contenuto verrà ridimensionato e centrato sul nuovo foglio.',
      },
      {
        title: 'Scarica il PDF ridimensionato',
        text:
          'Fare clic su Ridimensiona pagine. La copia ridimensionata viene salvata nei tuoi download e l\'originale rimane intatto.',
      },
    ],
  },
  faq: [
    {
      q: 'Come posso modificare la dimensione della pagina di un PDF?',
      a:
        'Aggiungi PDF sopra, scegli il formato carta e l\'orientamento desiderati, quindi fai clic su Ridimensiona pagine. Ogni pagina viene ridimensionata e la copia viene scaricata.',
    },
    {
      q: 'I miei contenuti verranno ridimensionati per adattarsi?',
      a:
        'Sì, per impostazione predefinita. Il contenuto viene ridimensionato per adattarsi alla nuova pagina e centrato, mantenendo le sue proporzioni in modo che nulla venga allungato. Disattiva questa opzione e la pagina cambia dimensione mentre il contenuto rimane esattamente dov\'era, eliminando tutto ciò che non si adatta più.',
    },
    {
      q: 'I collegamenti sopravvivono al ridimensionamento?',
      a:
        'Lo fanno quando ridimensioni solo la casella della pagina. Quando il contenuto viene ridimensionato per adattarlo, ogni pagina viene ridisegnata come un singolo oggetto e tutti i collegamenti in quel documento non vengono mantenuti. Se il documento contiene collegamenti che ti interessano, ridimensionalo disattivando il ridimensionamento.',
    },
    {
      q: 'Qual è la differenza tra ridimensionare e ritagliare?',
      a:
        'Il ridimensionamento modifica la dimensione del foglio su cui si trova la pagina. Il ritaglio rimuove i bordi dalla pagina visibile. Creare una pagina A4 invece di Letter comporta un ridimensionamento; tagliare un bordo da una scansione significa ritagliare.',
    },
    {
      q: 'Posso creare una sola pagina orizzontale?',
      a:
        'Questa versione applica una dimensione e un orientamento a ogni pagina, mantenendo uniforme il documento. Per una singola pagina, dividi il documento, ridimensiona la pagina e uniscila di nuovo.',
    },
    {
      q: 'Il mio PDF è stato caricato?',
      a:
        'No. Il ridimensionamento viene applicato nella scheda del browser e nulla viene trasmesso a nessun server.',
    },
  ],
};

export default it;