import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Seitengröße ändern – A4, Letter, kostenlos online',
    description:
      'Ändern Sie das Papierformat der PDF-Seiten kostenlos. Verschieben Sie Inhalte auf A4, Letter oder A5, Hoch- oder Querformat – angewendet in Ihrem Browser',
  },
  breadcrumb: 'PDF-Größe ändern',
  h1: 'Ändern Sie die Größe Ihrer PDF-Seiten',
  intro:
    'Ein für Letter eingerichtetes Dokument, das auf A4 gedruckt werden muss, oder ein Deck im Querformat, das ins Hochformat umgewandelt werden muss. Ändern Sie das Papier und die Ausrichtung einmal für jede Seite, und der Inhalt ändert sich mit.',
  benefits: [
    {
      title: 'Standardpapierformate',
      text:
        'A4, Letter und A5, in beiden Ausrichtungen, plus der Option, die aktuelle Größe beizubehalten und nur zwischen Hoch- und Querformat zu wechseln.',
    },
    {
      title: 'Jede Seite auf einmal',
      text:
        'Dokumente unterschiedlicher Größe – eine Letter-Seite, die in einen A4-Bericht geheftet ist – werden einheitlich ausgegeben, was in der Regel der Grund für die Größenänderung ist.',
    },
    {
      title: 'Der Inhalt bleibt klar',
      text:
        'Seiten werden als Vektoren auf das neue Blatt verschoben, sodass Ihr Text in jeder Größe auswählbar und scharf bleibt. Nichts wird zu einem Bild.',
    },
  ],
  howTo: {
    heading: 'So ändern Sie die Größe von PDF-Seiten',
    sub: 'Drei Schritte, angewendet auf Ihrem Gerät.',
    steps: [
      {
        title: 'Fügen Sie Ihren PDF hinzu',
        text:
          'Legen Sie das Dokument auf das Tool oben ab. Die aktuelle Seitengröße wird angezeigt, sodass Sie sehen können, wovon Sie wechseln.',
      },
      {
        title: 'Wählen Sie die neue Größe',
        text:
          'Wählen Sie A4, Letter oder A5 oder behalten Sie die aktuelle Größe bei. Wählen Sie dann Hoch- oder Querformat – oder lassen Sie die Ausrichtung unverändert, sodass jede Seite so ausgerichtet bleibt, wie sie bereits ist. Lassen Sie „Inhalt passend skalieren“ aktiviert und die Größe Ihres Inhalts wird angepasst und er wird auf dem neuen Blatt zentriert.',
      },
      {
        title: 'Laden Sie die geänderte Größe PDF herunter',
        text:
          'Klicken Sie auf Seitengröße ändern. Die verkleinerte Kopie wird in Ihren Downloads gespeichert und Ihr Original bleibt unberührt.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie ändere ich die Seitengröße eines PDF?',
      a:
        'Fügen Sie oben PDF hinzu, wählen Sie das gewünschte Papierformat und die gewünschte Ausrichtung aus und klicken Sie dann auf Seitengröße ändern. Die Größe jeder Seite wird geändert und die Kopie wird heruntergeladen.',
    },
    {
      q: 'Werden meine Inhalte passend skaliert?',
      a:
        'Ja, standardmäßig. Die Größe des Inhalts wird an die neue Seite angepasst und zentriert, wobei die Proportionen beibehalten werden, sodass nichts gestreckt wird. Wenn Sie diese Option deaktivieren, ändert sich die Größe der Seite, während der Inhalt genau dort bleibt, wo er war, wodurch alles abgeschnitten wird, was nicht mehr passt.',
    },
    {
      q: 'Überleben Links eine Größenänderung überleben?',
      a:
        'Dies geschieht nur, wenn Sie die Größe des Seitenrahmens ändern. Wenn der Inhalt passend skaliert wird, wird jede Seite als einzelnes Objekt neu gezeichnet und alle Links in diesem Dokument werden nicht übernommen. Wenn das Dokument Links enthält, die Ihnen wichtig sind, ändern Sie die Größe bei deaktivierter Skalierung.',
    },
    {
      q: 'Was ist der Unterschied zwischen Größenänderung und Zuschneiden?',
      a:
        'Durch die Größenänderung wird die Größe des Papiers geändert, auf dem die Seite liegt. Beim Zuschneiden werden Kanten von der sichtbaren Seite entfernt. Das Erstellen einer Seite A4 anstelle von Letter führt zu einer Größenänderung. Das Abschneiden eines Randes von einem Scan ist ein Zuschneiden.',
    },
    {
      q: 'Kann ich nur eine Seite im Querformat erstellen?',
      a:
        'Diese Version wendet auf jede Seite eine Größe und Ausrichtung an, wodurch ein Dokument einheitlich bleibt. Teilen Sie für eine einzelne Seite das Dokument, ändern Sie die Größe dieser Seite und führen Sie sie wieder zusammen.',
    },
    {
      q: 'Ist mein PDF hochgeladen?',
      a:
        'Nein. Die Größenänderung erfolgt innerhalb Ihres Browser-Tabs und es wird nichts an einen Server übertragen.',
    },
  ],
};

export default de;