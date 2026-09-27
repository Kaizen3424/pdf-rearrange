import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Dateien zusammenführen — kostenlos und ohne Upload',
    description:
      'PDF-Dateien kostenlos zusammenführen: mehrere PDFs werden ein Dokument, in beliebiger Reihenfolge. Ohne Upload, ohne Anmeldung — alles bleibt in Ihrem Browser.',
  },
  breadcrumb: 'PDF-Dateien zusammenführen',
  h1: 'PDF-Dateien in ein Dokument zusammenführen',
  intro:
    'Führen Sie so viele PDFs zusammen, wie Sie möchten, und erhalten Sie eine einzige Datei in genau der Reihenfolge, die Sie brauchen. Legen Sie alle Dateien auf einmal ab oder fügen Sie während der Arbeit weitere hinzu, ziehen Sie die Seiten an ihre Stellen und laden Sie ein aufgeräumtes Dokument herunter. Nichts davon wird auf einen Server hochgeladen.',
  benefits: [
    {
      title: 'In der richtigen Reihenfolge zusammenführen',
      text: 'Fügen Sie zuerst jede Datei hinzu und ziehen Sie die Seiten anschließend in die Sequenz, die Sie brauchen. Verschränken Sie Kapitel aus verschiedenen Dokumenten, setzen Sie ein Deckblatt nach vorn oder hängen Sie einen Anhang ans Ende. Die Reihenfolge liegt ganz bei Ihnen.',
    },
    {
      title: 'Verlustfrei, Byte für Byte',
      text: 'Jede Seite wird direkt aus Ihrer Originaldatei kopiert statt neu gerendert, sodass Schriften, Vektorgrafiken, Bilder und Links genauso herauskommen, wie sie hineingegangen sind. Das unterscheidet Zusammenführen von Konvertieren: Hier wird nichts umgerechnet.',
    },
    {
      title: 'Kein Upload, niemals',
      text: 'Das Zusammenführen passiert in Ihrer Browser-Registerkarte. Ihre Dokumente werden nie übertragen, sodass Verträge, Rechnungen und Krankenakten auf Ihrem Gerät bleiben.',
    },
  ],
  howTo: {
    heading: 'So führen Sie PDF-Dateien zusammen',
    sub: 'Drei Schritte, und die ganze Arbeit läuft auf Ihrem eigenen Gerät.',
    steps: [
      {
        title: 'PDFs hinzufügen',
        text: 'Ziehen Sie eine oder mehrere PDF-Dateien auf das Tool oben oder klicken Sie, um Ihren Computer zu durchsuchen. Sie können eine Datei auch mit Strg+V einfügen. Alle Seiten aller Dateien landen in einem einzigen Raster, farblich gekennzeichnet nach ihrer Herkunft.',
      },
      {
        title: 'Reihenfolge festlegen',
        text: 'Ziehen Sie die Seitenminiaturansichten an die gewünschte Stelle. Seiten aus verschiedenen Dateien lassen sich frei verschränken: Kapitel 1 aus dem einen Dokument gehört direkt an Kapitel 2 aus einem anderen.',
      },
      {
        title: 'Ergebnis herunterladen',
        text: 'Klicken Sie auf „PDF herunterladen“. Das zusammengeführte Dokument wird auf Ihrem Gerät neu erstellt und direkt gespeichert, ohne Wasserzeichen und ohne Warten in einer Warteschlange.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie kann ich PDF-Dateien kostenlos zusammenführen?',
      a: 'Öffnen Sie das Tool oben, fügen Sie zwei oder mehr PDFs hinzu, ziehen Sie die Miniaturansichten in die gewünschte Reihenfolge und klicken Sie auf „PDF herunterladen“. Es gibt keine Anmeldung, kein Wasserzeichen und kein Tageslimit. Das Tool bleibt kostenlos, weil Ihr eigenes Gerät die Arbeit erledigt statt eines bezahlten Servers.',
    },
    {
      q: 'Kann ich PDFs zusammenführen, ohne sie hochzuladen?',
      a: 'Ja, und anders funktioniert dieses Tool nicht. Ihre Dateien werden vollständig im Browser gelesen, zusammengeführt und zurückgeschrieben, sodass keine Kopie Ihres Dokuments einen Server erreicht. Sie können das prüfen: Öffnen Sie die Entwicklertools Ihres Browsers, beobachten Sie den Netzwerk-Tab und führen Sie ein paar Dateien zusammen. Es wird nichts übertragen.',
    },
    {
      q: 'Gibt es ein Limit, wie viele PDFs ich zusammenführen kann?',
      a: 'Nein. Weder für die Anzahl der Dateien noch für die Anzahl der Seiten gilt eine Obergrenze, weil nichts hochgeladen wird und kein Server Ihre Nutzung zählt. Die einzige echte Grenze ist der Arbeitsspeicher Ihres Geräts: Ein sehr großes Dokument belegt beim Zusammensetzen mehr RAM.',
    },
    {
      q: 'Sinkt die Qualität meiner PDF durch das Zusammenführen?',
      a: 'Nein. Seiten werden Byte für Byte aus den Originalen kopiert und weder neu gerendert noch neu komprimiert. Text bleibt scharf, Vektorgrafiken bleiben Vektor, und Schriften sowie Links bleiben exakt erhalten.',
    },
  ],
};

export default de;
