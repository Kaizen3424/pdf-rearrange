import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'Seitenzahlen zu einem PDF online hinzufügen – kostenlos',
    description:
      'Fügen Sie kostenlos Seitenzahlen zu PDF-Seiten hinzu. Wählen Sie das Format, die Position und die Startnummer – auf Ihrem Gerät angewendet, keine Uploads, nein',
  },
  breadcrumb: 'Fügen Sie Seitenzahlen hinzu',
  h1: 'Fügen Sie Seitenzahlen zu Ihrem PDF hinzu',
  intro:
    'Das manuelle Nummerieren eines Dokuments ist mühsam und kann leicht zu Fehlern führen, wenn die Seiten verschoben werden. Fügen Sie die Zahlen einmal hinzu und sie bleiben korrekt: Legen Sie ein Format wie „Seite 3 von 12“ fest, wählen Sie aus, wo es hingehört, und laden Sie es herunter.',
  benefits: [
    {
      title: 'Ein Format, das Sie kontrollieren',
      text:
        'Verwenden Sie {n} für die aktuelle Seite und {total} für die Seitenanzahl, sodass „Seite {n} von {total}“, „{n} / {total}“ oder einfach „{n}“ alle funktionieren. Bei den Zahlen handelt es sich um Text, nicht um eine Bildüberlagerung.',
    },
    {
      title: 'Nummer von jedem Startpunkt aus',
      text:
        'Wenn es sich bei Seite 1 um ein Deckblatt handelt und der Hauptteil auf dem zweiten Blatt bei 1 beginnen soll, legen Sie die Anfangsnummer fest und alles wird ausgerichtet. Nützlich, wenn Kapitel in einem Dokument zusammengefasst werden.',
    },
    {
      title: 'Positionen, die sich richtig lesen',
      text:
        'Unten in der Mitte für einen formellen Bericht, unten rechts für ein Handbuch und oben links, wenn dies mit Ihrer vorhandenen Vorlage übereinstimmt. Sechs Anker und eine Größe, die Sie an das Dokument anpassen können.',
    },
  ],
  howTo: {
    heading: 'So fügen Sie Seitenzahlen zu einem PDF hinzu',
    sub: 'In drei Schritten, auf Ihrem eigenen Gerät.',
    steps: [
      {
        title: 'Fügen Sie Ihren PDF hinzu',
        text:
          'Legen Sie das Dokument auf dem Tool oben ab oder klicken Sie, um es zu durchsuchen. Die Seitenzahl wird angezeigt, sodass Sie wissen, welchen Bereich Sie nummerieren.',
      },
      {
        title: 'Wählen Sie das Format und die Position',
        text:
          'Legen Sie das Zahlenformat fest, wo die Zahlen stehen, wie groß sie sind und von welcher Seite aus mit dem Zählen begonnen werden soll. Im Formatfeld wird ein Live-Beispiel angezeigt.',
      },
      {
        title: 'Laden Sie das nummerierte PDF herunter',
        text:
          'Klicken Sie auf Seitenzahlen hinzufügen und die nummerierte Kopie wird in Ihren Downloads gespeichert. Ihre Originaldatei bleibt unverändert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie füge ich Seitenzahlen zu einem PDF hinzu?',
      a:
        'Fügen Sie oben PDF hinzu, wählen Sie ein Format und eine Position und klicken Sie dann auf Seitenzahlen hinzufügen. Jede Seite ist nummeriert und die Kopie wird heruntergeladen.',
    },
    {
      q: 'Kann ich mit der Nummerierung bei einer anderen Zahl als 1 beginnen?',
      a:
        'Ja. Legen Sie die Startnummer fest und die erste Seite, die Sie hochladen, erhält diesen Wert. Dies ist die unkomplizierte Möglichkeit, mehrere Dokumente in einer fortlaufenden Reihenfolge zu nummerieren.',
    },
    {
      q: 'Werden die Seitenzahlen auswählbarer Text sein?',
      a:
        'Ja. Sie werden als echter Text eingebettet, sodass sie ausgewählt und durchsucht werden können und beim Drucken nicht verschwimmen.',
    },
    {
      q: 'Kann ich nur bestimmte Seiten nummerieren?',
      a:
        'Diese Version nummeriert jede Seite. Um selektiv zu nummerieren, teilen Sie das Dokument zunächst auf und nummerieren Sie die Teile, die es benötigen.',
    },
    {
      q: 'Ist mein PDF hochgeladen?',
      a:
        'Nein. Die Nummerierung erfolgt vollständig innerhalb Ihres Browser-Tabs. Da nichts übermittelt wird, bleibt ein unveröffentlichter Bericht auch unveröffentlicht.',
    },
  ],
};

export default de;