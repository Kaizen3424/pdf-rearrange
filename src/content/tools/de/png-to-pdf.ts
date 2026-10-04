import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PNG-zu-PDF-Konverter – kostenlos, online, nichts hochgeladen',
    description:
      'Konvertieren Sie PNG-Bilder kostenlos online in PDF. Kombinieren Sie PNGs zu einem PDF mit korrekt gehandhabter Transparenz – keine Uploads, keine Anmeldung',
  },
  breadcrumb: 'PNG bis PDF',
  h1: 'Konvertieren Sie PNG-Bilder in PDF',
  intro:
    'PNGs sind das, was Sie aus Screenshots, Design-Exporten und allem mit transparentem Hintergrund erhalten. Fügen Sie sie hier hinzu, behalten Sie die gewünschte Reihenfolge bei und laden Sie ein einzelnes PDF herunter – auf Ihrem Gerät konvertiert, nie hochgeladen.',
  benefits: [
    {
      title: 'Transparenz richtig gehandhabt',
      text:
        'Ein PNG mit einem Alphakanal wird auf eine saubere weiße Seite reduziert, anstatt fallen gelassen zu werden oder als transparentes Loch übrig zu bleiben, sodass Logos und Ausschnitte genauso aussehen wie auf dem Bildschirm.',
    },
    {
      title: 'Screenshots in ihrer Originalform',
      text:
        'PNG-Daten werden ohne Neukodierung in den PDF eingebettet, sodass gestochen scharfer Text in einem Screenshot scharf bleibt. Es wird nichts heruntergerechnet, um die Datei kleiner zu machen, als sie sein muss.',
    },
    {
      title: 'Kombinieren Sie sie alle',
      text:
        'Fügen Sie eine beliebige Anzahl von PNGs hinzu, ziehen Sie sie in die richtige Reihenfolge und laden Sie ein Dokument herunter. Wählen Sie A4, Letter oder schneiden Sie jede Seite so zu, dass sie genau in ihr Bild passt.',
    },
  ],
  howTo: {
    heading: 'So konvertieren Sie PNG in PDF',
    sub: 'Drei Schritte, wobei die Konvertierung auf Ihrem eigenen Gerät ausgeführt wird.',
    steps: [
      {
        title: 'Fügen Sie Ihre PNG-Bilder hinzu',
        text:
          'Ziehen Sie eine oder mehrere PNG-Dateien auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie eine mit Strg+V ein. Sowohl Screenshots als auch exportierte Grafiken funktionieren.',
      },
      {
        title: 'Wählen Sie die Seiteneinrichtung',
        text:
          'Wählen Sie „A4“ oder „Letter“ zum Drucken oder „An Bild anpassen“, um jede Seite eng an das Bild anzupassen. Wählen Sie eine Ausrichtung oder lassen Sie sie jedem Bild folgen und legen Sie einen Rand fest, wenn Sie Platz zum Atmen wünschen.',
      },
      {
        title: 'Laden Sie PDF herunter',
        text:
          'Klicken Sie auf PDF herunterladen. Die Datei wird auf Ihrem Gerät zusammengestellt und in Ihren Downloads gespeichert – kein Wasserzeichen und nichts zum Hochladen.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie wandle ich einen PNG in einen PDF um?',
      a:
        'Fügen Sie Ihre PNG-Bilder zum Tool oben hinzu, wählen Sie eine Seitengröße und klicken Sie dann auf PDF herunterladen. Alles läuft in Ihrem Browser und das Ergebnis wird in Ihrem Download-Ordner gespeichert.',
    },
    {
      q: 'Was passiert mit transparenten Bereichen in einem PNG?',
      a:
        'Sie werden flach auf eine weiße Seite gedruckt. PDF-Seiten sind nicht transparent, sodass der Alphakanal nirgendwo hingehen kann; Durch die Komposition auf Weiß bleibt das Aussehen des Bildes auf Ihrem Bildschirm erhalten. Wenn der Hintergrund eine andere Farbe haben soll, wählen Sie diese vor der Konvertierung aus.',
    },
    {
      q: 'Reduziert die Konvertierung die Qualität eines Screenshots?',
      a:
        'Nein. PNG-Daten werden genau wie gespeichert eingebettet, ohne Neukodierung, sodass kleiner Text in einem Screenshot lesbar bleibt. Bilder werden auch nie vergrößert – ein 400 Pixel breiter Screenshot bleibt 400 Pixel breit und wird nicht so gestreckt, dass er eine A4-Seite ausfüllt.',
    },
    {
      q: 'Kann ich mehrere PNGs in ein PDF einfügen?',
      a:
        'Ja. Fügen Sie so viele hinzu, wie Sie möchten, ziehen Sie sie in die gewünschte Reihenfolge und laden Sie ein einzelnes PDF herunter, das alle enthält. Die Anzahl der Bilder ist unbegrenzt.',
    },
    {
      q: 'Werden meine PNGs hochgeladen?',
      a:
        'Nein. Die Dekodierung und die PDF-Assemblierung erfolgen beide in Ihrem Browser-Tab. Öffnen Sie während der Konvertierung die Registerkarte „Netzwerk“ der Entwicklertools und Sie werden keine Anfrage sehen, die Ihre Dateien enthält.',
    },
  ],
};

export default de;