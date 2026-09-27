import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Seiten löschen — kostenlos online und ohne Upload',
    description:
      'PDF-Seiten online kostenlos löschen: unerwünschte Seiten auswählen, Rest herunterladen. Ohne Uploads, ohne Anmeldung — die Originalqualität bleibt erhalten.',
  },
  breadcrumb: 'PDF-Seiten löschen',
  h1: 'Seiten aus einer PDF löschen',
  intro:
    'Entfernen Sie die Seiten, die Sie nicht brauchen, und lassen Sie alles andere genau so, wie es war. Wählen Sie einzelne Seiten oder löschen Sie einen ganzen Bereich auf einmal, sehen Sie das Ergebnis vorher als Miniaturansichten und laden Sie das bereinigte Dokument herunter. Ihre Datei verlässt dabei nie den Browser.',
  benefits: [
    {
      title: 'Eine Seite oder fünfzig',
      text: 'Fahren Sie über eine Miniaturansicht, um sie einzeln zu löschen, oder markieren Sie mehrere Seiten und entfernen Sie sie in einem Durchgang. Mit Strg+A markieren Sie alles, sodass ein Dokument in Sekunden auf die Seiten reduziert ist, die Sie tatsächlich brauchen.',
    },
    {
      title: 'Nichts geht verloren',
      text: 'Löschungen landen im Rückgängig-Verlauf. Ein zu weit geschnittenes Dokument ist nie endgültig: Strg+Z holt die Seiten zurück, oder ein Klick auf „Zur Originalreihenfolge zurücksetzen“ stellt das ganze Dokument wieder her.',
    },
    {
      title: 'Unveränderte Qualität',
      text: 'Die verbleibenden Seiten werden exakt so kopiert, wie sie waren. Schriften, Bilder, Vektoren und Links werden weder neu gerendert noch neu komprimiert; eine gelöschte Seite kostet Sie also nichts an Schärfe.',
    },
  ],
  howTo: {
    heading: 'So löschen Sie Seiten aus einer PDF',
    sub: 'Unerwünschte Seiten in drei Schritten entfernen.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Jede Seite erscheint als Miniaturansicht, die Sie auf einen Blick erkennen.',
      },
      {
        title: 'Markieren, was weg soll',
        text: 'Klicken Sie auf das Papierkorb-Symbol in der Miniaturansicht, um genau diese Seite zu löschen. Für mehrere Seiten klicken Sie die erste an und dann mit Umschalt die letzte: Der ganze Bereich ist markiert und lässt sich als Stapel löschen.',
      },
      {
        title: 'Bereinigte PDF herunterladen',
        text: 'Prüfen Sie die verbleibende Reihenfolge und klicken Sie dann auf „PDF herunterladen“. Das gekürzte Dokument wird auf Ihrem Gerät neu erstellt und sofort gespeichert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie lösche ich Seiten aus einer PDF?',
      a: 'Fügen Sie Ihre PDF oben in das Tool ein, fahren Sie über eine beliebige Miniaturansicht und klicken Sie auf die Löschen-Schaltfläche. Für einen Bereich markieren Sie die erste Seite, mit Umschalt die letzte und drücken Sie Entf oder nutzen Sie die Löschen-Schaltfläche der Auswahl. Laden Sie das Ergebnis herunter und die Seiten sind weg.',
    },
    {
      q: 'Kann ich PDF-Seiten löschen, ohne die Datei hochzuladen?',
      a: 'Ja. Das Dokument wird vollständig in Ihrem Browser gelesen und neu geschrieben, also nie an einen Server gesendet. Öffnen Sie die Entwicklertools, beobachten Sie beim Löschen den Netzwerk-Tab und Sie sehen null Dateiverkehr.',
    },
    {
      q: 'Kann ich eine gelöschte Seite rückgängig machen?',
      a: 'Jede Aktion wird aufgezeichnet. Strg+Z (Cmd+Z auf dem Mac) holt gelöschte Seiten zurück, Strg+Umschalt+Z wiederholt das Ganze, und die Rückgängig-Schaltfläche in der Werkzeugleiste tut es ebenfalls. „Zurücksetzen“ stellt die gesamte ursprüngliche Seitenreihenfolge wieder her.',
    },
    {
      q: 'Was, wenn ich zu viele Seiten lösche?',
      a: 'Kein Problem: Löschen lässt sich rückgängig machen, nichts ist vor dem Download endgültig. Haben Sie schon exportiert, behalten Sie die Originaldatei und löschen Sie die Seiten stattdessen aus dieser Kopie.',
    },
  ],
};

export default de;
