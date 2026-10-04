import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF Seiten online kostenlos zuschneiden – Kanten beschneiden',
    description:
      'PDF Seiten kostenlos zuschneiden. Schneiden Sie den gleichen Rand von jeder Seite ab oder legen Sie jeden Rand separat fest – in Ihrem Browser angewendet, nein',
  },
  breadcrumb: 'PDF zuschneiden',
  h1: 'Schneiden Sie die Ränder Ihrer PDF-Seiten ab',
  intro:
    'Gescannte Dokumente kommen so an, dass das Scannerbett um die Seite herum sichtbar ist, und nach PDF exportierte Folien weisen oft Ränder auf, nach denen niemand gefragt hat. Schneiden Sie an jeder Kante einen festen Betrag ab und der Inhalt füllt die Seite wieder aus.',
  benefits: [
    {
      title: 'Ein Ausschnitt auf jeder Seite',
      text:
        'Legen Sie die vier Ränder einmal fest und jede Seite wird identisch zugeschnitten – das richtige Verhalten für einen Scan oder einen exportierten Stapel, bei dem auf jeder Seite das gleiche Problem auftritt.',
    },
    {
      title: 'Kanten bleiben scharf',
      text:
        'Durch das Zuschneiden wird der Seitenrahmen verändert, nicht der Inhalt. Der Text wird nicht neu gerendert oder skaliert, sodass das zugeschnittene Ergebnis genauso scharf ist wie das Original.',
    },
    {
      title: 'Live-Feedback in Punkten',
      text:
        'Jede Kante weist ihr eigenes Maß auf, sodass ein Rand von 36 pt und ein Rand von 12 pt sichtbar unterschiedliche Optionen sind, bevor etwas angewendet wird.',
    },
  ],
  howTo: {
    heading: 'So beschneiden Sie einen PDF',
    sub: 'Drei Schritte, angewendet auf Ihrem Gerät.',
    steps: [
      {
        title: 'Fügen Sie Ihren PDF hinzu',
        text:
          'Legen Sie das Dokument auf dem Tool oben ab oder klicken Sie zum Durchsuchen darauf. Die aktuelle Seitengröße wird angezeigt, sodass Ihre Ränder Kontext haben.',
      },
      {
        title: 'Legen Sie die vier Ränder fest',
        text:
          'Ziehen Sie jede Kante, um den entsprechenden Betrag von oben, rechts, unten und links zu kürzen. Gleiche Werte auf allen vier Seiten sind der übliche Fall für Scanränder.',
      },
      {
        title: 'Laden Sie das zugeschnittene PDF herunter',
        text:
          'Klicken Sie auf Seiten zuschneiden. Die zugeschnittene Kopie wird in Ihren Downloads gespeichert; Die Originaldatei bleibt unberührt.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie beschneide ich einen PDF?',
      a:
        'Fügen Sie Ihren PDF hinzu, legen Sie fest, wie viel von jeder Kante abgeschnitten werden soll, und klicken Sie dann auf Seiten zuschneiden. Jede Seite wird um die gleichen Ränder beschnitten und das Ergebnis wird heruntergeladen.',
    },
    {
      q: 'Entfernt das Zuschneiden den Inhalt außerhalb des Rahmens?',
      a:
        'Nein, und es lohnt sich, das zu wissen. Durch das Zuschneiden wird geändert, welcher Teil der Seite angezeigt wird – die standardmäßige, nicht destruktive Bedeutung eines PDF-Zuschnitts. Ein Viewer zeigt nur den zugeschnittenen Bereich an, der zugrunde liegende Inhalt ist jedoch weiterhin in der Datei vorhanden.',
    },
    {
      q: 'Was sind Punkte?',
      a:
        'Ein Punkt ist 1/72 Zoll, die Einheit PDF, in der Seitengrößen gemessen werden. Als Richtwert gilt: 36 pt entspricht einem halben Zoll und 12 pt ist ein schmaler Beschnitt – ungefähr der Rand eines Scannerbetts.',
    },
    {
      q: 'Kann ich nur eine Seite zuschneiden?',
      a:
        'Diese Version schneidet jede Seite mit den gleichen Rändern zu, was für einen Scan oder ein Dia-Deck erforderlich ist. Teilen Sie bei einer einzelnen Seite zunächst das Dokument auf, schneiden Sie die Seite zu und führen Sie sie wieder zusammen.',
    },
    {
      q: 'Ist mein PDF hochgeladen?',
      a: 'Nein. Der Zuschnitt wird in Ihrem Browser-Tab angewendet und es wird nichts übertragen.',
    },
  ],
};

export default de;