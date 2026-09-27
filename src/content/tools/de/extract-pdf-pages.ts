import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Seiten extrahieren — kostenlos und ohne Anmeldung',
    description:
      'Einzelne Seiten aus einer PDF extrahieren und als neues Dokument speichern. Ohne Uploads, ohne Anmeldung — jede Seite bleibt Byte für Byte erhalten.',
  },
  breadcrumb: 'PDF-Seiten extrahieren',
  h1: 'Seiten aus einer PDF extrahieren',
  intro:
    'Behalten Sie nur die Seiten, die zählen, und erhalten Sie ein sauberes neues Dokument. Markieren Sie die gewünschten Seiten oder einen ganzen Bereich; das Tool baut daraus eine PDF mit genau diesen Seiten, in der Reihenfolge Ihrer Wahl, und lädt Ihre Datei nirgendwo hoch.',
  benefits: [
    {
      title: 'Anklicken statt abtippen',
      text: 'Wählen Sie Seiten direkt in den Miniaturansichten aus, statt Seitenzahlen einzugeben und zu hoffen, dass der Bereich stimmt. Mit Umschalt markieren Sie einen Block, mit Strg+A beginnen Sie von vorn.',
    },
    {
      title: 'Beim Extrahieren neu anordnen',
      text: 'Markierte Seiten lassen sich vor dem Export in eine andere Reihenfolge ziehen. So ziehen Sie drei Seiten aus einem Bericht heraus und legen sie in der Folge ab, die Sie wirklich brauchen.',
    },
    {
      title: 'Byte-für-Byte-Kopien',
      text: 'Extrahierte Seiten werden direkt aus der Quelldatei kopiert und nicht neu gerendert. Schriften, Vektorgrafiken, Bilder und Links bleiben exakt erhalten, ohne dass etwas neu komprimiert wird.',
    },
  ],
  howTo: {
    heading: 'So extrahieren Sie Seiten aus einer PDF',
    sub: 'Gewünschte Seiten markieren und das neue Dokument herunterladen.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Alle Seiten erscheinen als Miniaturansichten mit ihren Nummern.',
      },
      {
        title: 'Zu behaltende Seiten markieren',
        text: 'Klicken Sie jede Seite an, die Sie extrahieren möchten. Erste Seite anklicken und die letzte mit Umschalt markiert einen ganzen Bereich; mit Strg+A wählen Sie alle aus und nehmen anschließend wieder heraus, was Sie nicht brauchen.',
      },
      {
        title: 'Extrahierte PDF herunterladen',
        text: 'Das neue Dokument wird auf Ihrem Gerät ausschließlich aus den markierten Seiten zusammengesetzt und dann heruntergeladen. Ihre Originaldatei bleibt unverändert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie extrahiere ich einzelne Seiten aus einer PDF?',
      a: 'Fügen Sie Ihre PDF oben hinzu und klicken Sie im Miniaturansichtsraster die Seiten an, die Sie behalten möchten. Erste Seite anklicken und die letzte mit Umschalt markiert einen Bereich; Sie können Seiten auch einzeln auswählen. Mit „PDF herunterladen“ entsteht ein neues Dokument, das nur diese Seiten enthält, in der angezeigten Reihenfolge.',
    },
    {
      q: 'Worin unterscheidet sich Extrahieren vom Löschen von Seiten?',
      a: 'Das Ergebnis ist in beiden Fällen ein gleich großes Dokument. Beim Extrahieren entsteht eine neue PDF aus den Seiten, die Sie behalten, und Ihre Originaldatei bleibt auf der Festplatte unangetastet. Beim Löschen entfernen Sie Seiten im Editor und überschreiben das Ergebnis beim Download. Extrahieren Sie, wenn das Original intakt bleiben soll, und löschen Sie, wenn Sie ohnehin an einer Kopie arbeiten.',
    },
    {
      q: 'Kann ich Seiten extrahieren, ohne die PDF hochzuladen?',
      a: 'Ja. Das Dokument wird vollständig in Ihrem Browser gelesen und neu aufgebaut, es wird also keine Kopie übertragen. Beobachten Sie während der Arbeit den Netzwerk-Tab in den Entwicklertools Ihres Browsers und Sie sehen, dass nichts gesendet wird.',
    },
    {
      q: 'Kann ich die extrahierten Seiten neu sortieren?',
      a: 'Ja. Nach der Auswahl lassen sich die Seiten vor dem Download in beliebiger Reihenfolge anordnen. Sie können ein paar Seiten aus einem langen Bericht herausziehen und sie so ablegen, wie es Ihnen passt, statt in der Reihenfolge, in der sie im Original standen.',
    },
  ],
};

export default de;
