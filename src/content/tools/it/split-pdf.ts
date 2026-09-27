import type { ToolContent } from '../types';

const it: ToolContent = {
  meta: {
    title: 'Dividere un PDF online gratis — Estrai pagine o tutte',
    description:
      'Dividi un PDF online gratis: estrai un intervallo di pagine o separa ogni pagina in un file. Nessun caricamento, nessuna registrazione, qualità intatta.',
  },
  breadcrumb: 'Dividere un PDF',
  h1: 'Dividere un PDF in più documenti',
  intro:
    'Spezza un PDF in tanti file quanti ti servono. Scegli un intervallo di pagine e ottieni un documento, oppure dividi ogni pagina in un file a sé in un solo passaggio. Nulla viene caricato, e le pagine in uscita sono copie byte per byte degli originali.',
  benefits: [
    {
      title: 'Per intervallo o pagina per pagina',
      text: 'Scrivi «1-5, 12, 20-30» per estrarre esattamente le pagine che vuoi in un solo file, oppure dividi ogni pagina in un documento separato. Le due modalità funzionano nella stessa scheda.',
    },
    {
      title: 'Guarda le pagine prima di scegliere',
      text: 'Ogni pagina viene mostrata come miniatura reale prima della scelta, così non devi indovinare i numeri. Sfoglia l\'anteprima a grandezza piena per controllare che i limiti cadano dove devono.',
    },
    {
      title: 'Nessun caricamento, nessun limite',
      text: 'La divisione avviene sul tuo dispositivo: nessun tetto di dimensione e nessuna coda. Chiudi la scheda quando hai finito e il file sparisce dalla memoria; il server non ne ha mai tenuto una copia.',
    },
  ],
  howTo: {
    heading: 'Come dividere un PDF',
    sub: 'Scegli le pagine e scarica. Tutto qui.',
    steps: [
      {
        title: 'Aggiungi il tuo PDF',
        text: 'Trascina il file sullo strumento qui sopra, fai clic per sfogliare, oppure incollalo con Ctrl+V. Il numero di pagine e le miniature compaiono all\'istante.',
      },
      {
        title: 'Scegli cosa vuoi separare',
        text: 'Digita gli intervalli con virgole e trattini — per esempio 1-4, 9, 15-20 — oppure passa a «ogni pagina» per ottenere un file per pagina. Gli intervalli vengono controllati mentre scrivi, così un refuso non scarta pagine in silenzio.',
      },
      {
        title: 'Scarica i tuoi file',
        text: 'Ogni documento risultante viene ricostruito sul tuo dispositivo e poi scaricato. Dividere non ricomprime mai nulla, quindi la qualità è identica a quella dell\'originale.',
      },
    ],
  },
  faq: [
    {
      q: 'Come divido un PDF in più file?',
      a: 'Aggiungi il PDF qui sopra, scegli un intervallo come 1-5 o l\'opzione «ogni pagina», poi fai clic sul pulsante di divisione. Ogni documento viene generato sul tuo dispositivo e salvato separatamente, quindi ottieni un file per intervallo o per pagina.',
    },
    {
      q: 'Come divido per intervallo di pagine?',
      a: 'Digita gli intervalli con virgole e trattini — per esempio 1-4, 9, 15-20 — e ognuno diventa un PDF separato nell\'ordine in cui li elenchi. Un solo intervallo come 1-4 ti dà un unico file di output; separa gli intervalli con virgole quando vuoi più file insieme.',
    },
    {
      q: 'Posso dividere un PDF molto grande?',
      a: 'Sì, e non c\'è un limite artificiale perché nulla viene caricato. Documenti molto grandi o ad alta risoluzione consumano più memoria del dispositivo durante l\'elaborazione: qualche centinaio di pagine va senza problemi, mentre una scansione di mille pagine può sembrare lenta su un telefono di vecchia generazione.',
    },
    {
      q: 'Dividere riduce la qualità del PDF?',
      a: 'No. Le pagine vengono copiate byte per byte dal file originale invece di essere ridisegnate, quindi il risultato ha esattamente la qualità della sorgente: il testo resta selezionabile e la grafica vettoriale resta nitida.',
    },
  ],
};

export default it;
