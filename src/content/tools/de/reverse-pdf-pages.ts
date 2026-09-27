import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Seitenreihenfolge umkehren — kostenlos, ohne Upload',
    description:
      'Seitenreihenfolge einer PDF umkehren: verkehrt herum gescannte Dokumente mit einem Klick richtig herum. Ohne Uploads, ohne Anmeldung, ohne Qualitätsverlust.',
  },
  breadcrumb: 'Seitenreihenfolge umkehren',
  h1: 'Seitenreihenfolge einer PDF umkehren',
  intro:
    'Ordnen Sie ein Dokument, das vollständig verkehrt herum steht. Ein Klick dreht einen verkehrt herum gescannten Scan so, dass Seite 1 vorne steht und die letzte Seite hinten, ganz ohne Ziehen. Und Ihre Datei verlässt den Browser nie.',
  benefits: [
    {
      title: 'Ein Klick für das ganze Dokument',
      text: 'Eine vollständige Umkehrung kostet einen Klick, statt hundert Miniaturansichten aneinander vorbeizuziehen. Ideal für Duplex-Scans, die verkehrt herum ausgegeben wurden, oder für ein Heft, das in der falschen Folge zusammengestellt wurde.',
    },
    {
      title: 'Vorher prüfen',
      text: 'Die Miniaturansichten ordnen sich sofort neu, sodass Sie die Reihenfolge vor dem Download kontrollieren können. Passt sie nicht, klicken Sie ein zweites Mal: Umkehren ist nur ein weiterer rückgängig machbarer Schritt.',
    },
    {
      title: 'Unveränderte Qualität',
      text: 'Nur die Reihenfolge der Seiten ändert sich. Jede Seite wird exakt so kopiert, wie sie war; Text, Bilder, Vektorgrafiken und Links sind identisch mit der Originaldatei.',
    },
  ],
  howTo: {
    heading: 'So kehren Sie die Seitenreihenfolge einer PDF um',
    sub: 'Drei Schritte, um ein verkehrt herum gescanntes Dokument zu retten.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Die Seiten erscheinen als Miniaturansichten in ihrer aktuellen, falschen Reihenfolge.',
      },
      {
        title: 'Reihenfolge umkehren',
        text: 'Klicken Sie in der Werkzeugleiste auf „Seitenreihenfolge umkehren“. Jede Seite wechselt sofort ihren Platz: Die letzte wird zur ersten, die erste zur letzten, alles dazwischen spiegelt sich entsprechend.',
      },
      {
        title: 'Korrigierte PDF herunterladen',
        text: 'Prüfen Sie die neue Reihenfolge im Raster und klicken Sie dann auf „PDF herunterladen“. Das neu geordnete Dokument wird auf Ihrem Gerät neu erstellt und sofort gespeichert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie kehre ich die Seitenreihenfolge einer PDF um?',
      a: 'Fügen Sie Ihre PDF oben in das Tool ein und klicken Sie in der Werkzeugleiste auf „Seitenreihenfolge umkehren“. Das gesamte Dokument kippt in einem Schritt um, letzte Seite zuerst, erste Seite zuletzt. Laden Sie das Ergebnis herunter und die Datei liegt in der korrigierten Reihenfolge.',
    },
    {
      q: 'Warum ist mein gescanntes PDF verkehrt herum?',
      a: 'Automatische Dokumenteneinzüge in Scannern und Kopierern stapeln Seiten oft mit der bedruckten Seite nach oben, sodass der Scanner sie vom letzten Blatt rückwärts liest. In der Miniaturansicht der Scan-App sieht das normal aus, gedruckt wird es verkehrt. Die Seitenreihenfolge umzukehren ist hier die Standardlösung und kostet einen Klick.',
    },
    {
      q: 'Kann ich PDF-Seiten ohne Upload umkehren?',
      a: 'Ja. Das Umsortieren passiert vollständig in Ihrer Browser-Registerkarte, sodass keine Kopie Ihres Dokuments irgendwohin gesendet wird. Beobachten Sie bei Bedarf den Netzwerk-Tab in den Entwicklertools, während Sie arbeiten.',
    },
    {
      q: 'Muss ich für einen verkehrt herum gescannten Scan jede Seite ziehen?',
      a: 'Nein, darum gibt es die Umkehr-Schaltfläche. Ein 300-seitiger Scan ist mit einem Klick repariert statt mit 299 einzelnen Ziehvorgängen. Sind nur einzelne Seiten verrutscht und nicht das ganze Dokument, ziehen Sie stattdessen nur diese Miniaturansichten.',
    },
  ],
};

export default de;
