import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Seiten online kostenlos drehen — ohne Qualitätsverlust',
    description:
      'PDF-Seiten online kostenlos drehen: seitliche Scans aufrichten, einzeln oder im Stapel. Ohne Uploads, ohne Anmeldung — Text und Bilder bleiben unverändert.',
  },
  breadcrumb: 'PDF-Seiten drehen',
  h1: 'PDF-Seiten richtig herum drehen',
  intro:
    'Bringen Sie ein liegendes oder auf dem Kopf stehendes Dokument in die richtige Lage. Drehen Sie eine einzelne Seite oder wenden Sie dieselbe Drehung auf Dutzende Seiten gleichzeitig an, sehen Sie beim Arbeiten nach und laden Sie die korrigierte Datei herunter. Es wird nichts hochgeladen.',
  benefits: [
    {
      title: 'Eine Seite oder ein ganzer Stapel',
      text: 'Drehen Sie einzelne Seiten über die Schaltfläche in jeder Miniaturansicht, oder markieren Sie viele Seiten und drehen Sie sie alle auf einmal. Ein 200-seitiger Querformat-Scan kostet damit einen Klick pro Richtung statt 200.',
    },
    {
      title: 'Genau der Winkel, den Sie brauchen',
      text: 'Gedreht wird in 90°-Schritten: nach links, nach rechts oder vollständig auf dem Kopf. Verschiedene Richtungen lassen sich kombinieren, wenn Seiten unterschiedliche Korrekturen brauchen. Nichts wird neu gerendert, das Ergebnis ist bis auf die Ausrichtung pixelidentisch.',
    },
    {
      title: 'Rückgängig machbar',
      text: 'Jede Drehung kommt in den Rückgängig-Verlauf, ein Fehlklick ist also nur ein Strg+Z entfernt. Drehen Sie hin und her, so viel Sie mögen; die Seite ändert sich erst, wenn Sie herunterladen.',
    },
  ],
  howTo: {
    heading: 'So drehen Sie eine PDF',
    sub: 'Ein ganzes Dokument in drei Schritten ausrichten.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Die Miniaturansichten erscheinen, sodass Sie sofort sehen, welche Seiten liegen.',
      },
      {
        title: 'Seiten drehen',
        text: 'Klicken Sie in einer Miniaturansicht auf die Dreh-Schaltfläche, um die Seite um 90° im Uhrzeigersinn zu drehen. Markieren Sie mehrere Seiten, drehen Sie sie gemeinsam über die Werkzeugleiste. Wiederholen Sie, bis alle aufrecht stehen.',
      },
      {
        title: 'Ausgerichtete PDF herunterladen',
        text: 'Klicken Sie auf „PDF herunterladen“. Das korrigierte Dokument wird auf Ihrem Gerät neu erstellt, mit demselben Text, denselben Bildern und derselben Formatierung; nur die Seitenausrichtung hat sich geändert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie drehe ich Seiten in einer PDF?',
      a: 'Fügen Sie Ihre PDF oben hinzu und klicken Sie in einer beliebigen Miniaturansicht auf die Dreh-Schaltfläche, um die Seite um 90° im Uhrzeigersinn zu drehen. Ein weiterer Klick dreht um die nächsten 90°. Nach Auswahl mehrerer Seiten dreht die Schaltfläche in der Werkzeugleiste alle gleichzeitig. Laden Sie herunter, wenn das ganze Dokument passt.',
    },
    {
      q: 'Warum liegt meine gescannte PDF quer?',
      a: 'Flachbett-Scanner und Handykameras erfassen die Lage, in der das Blatt lag, und PDF-Dateien führen keine zuverlässigen Metadaten zur Ausrichtung. Genau deshalb kann ein Scan auf Ihrem Rechner korrekt und auf dem eines anderen quer erscheinen. Hier wird die Datei selbst korrigiert, damit sie überall richtig dargestellt wird.',
    },
    {
      q: 'Kann ich eine PDF ohne Upload drehen?',
      a: 'Ja, die Drehung wird vollständig in Ihrem Browser angewendet. Ihre Datei wird nie an einen Server übertragen; Sie können das bestätigen, indem Sie während der Arbeit den Netzwerk-Tab in den Entwicklertools Ihres Browsers beobachten.',
    },
    {
      q: 'Sinkt durch das Drehen die PDF-Qualität?',
      a: 'Nein. Gedreht wird nur die Darstellung der Seite, nicht der Inhalt darunter. Text bleibt auswählbar, Links funktionieren weiter und Bilder werden nicht neu komprimiert, die gedrehte Datei ist also genauso scharf wie das Original.',
    },
  ],
};

export default de;
