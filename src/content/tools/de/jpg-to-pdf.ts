import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'JPG-zu-PDF-Konverter – kostenlos, online, keine Uploads',
    description:
      'Konvertieren Sie JPG-Bilder kostenlos online in PDF. Kombinieren Sie ein oder mehrere JPEGs zu einem einzigen PDF, das auf Ihrem Gerät verbleibt',
  },
  breadcrumb: 'JPG bis PDF',
  h1: 'Konvertieren Sie JPG-Bilder in PDF',
  intro:
    'Fotos, Scans und Screenshots kommen normalerweise als JPGs an und die meisten Menschen benötigen sie in einem PDF. Fügen Sie Ihre Bilder hinzu, legen Sie die Seitengröße fest und laden Sie sie herunter. Die Konvertierung erfolgt in Ihrem Browser, sodass Ihre Bilder niemals an einen Server gesendet werden.',
  benefits: [
    {
      title: 'Ihre Fotos bleiben erhalten',
      text:
        'Die Bilder werden vollständig in Ihrem Browser-Tab gelesen, platziert und in ein PDF geschrieben. Da nichts hochgeladen wird, werden persönliche Fotos und gescannte Dokumente niemals irgendwohin übertragen.',
    },
    {
      title: 'Keine erneute Komprimierung',
      text:
        'JPEG-Bytes werden wörtlich eingebettet und nicht dekodiert und neu kodiert. Ein Foto, das in Ihrer Galerie scharf aussah, sieht im PDF genauso aus, ohne Komprimierungsartefakte der zweiten Generation.',
    },
    {
      title: 'Ein PDF aus vielen Bildern',
      text:
        'Fügen Sie so viele JPGs hinzu, wie Sie möchten, ziehen Sie sie in die gewünschte Reihenfolge und erhalten Sie ein einzelnes, aufgeräumtes Dokument – ​​mit A4, Letter oder Seiten, die so zugeschnitten sind, dass sie genau zu jedem Bild passen.',
    },
  ],
  howTo: {
    heading: 'So konvertieren Sie JPG in PDF',
    sub: 'In drei Schritten verlassen Ihre Bilder nie wieder das Gerät.',
    steps: [
      {
        title: 'Fügen Sie Ihre JPG-Bilder hinzu',
        text:
          'Ziehen Sie eine oder mehrere JPG-Dateien auf das Tool oben oder klicken Sie zum Durchsuchen. Sie können ein Bild auch mit Strg+V einfügen und jederzeit weitere hinzufügen, ohne von vorne beginnen zu müssen.',
      },
      {
        title: 'Legen Sie die Seiteneinrichtung fest',
        text:
          'Wählen Sie „A4“, „Letter“ oder „An Bild anpassen“, um jede Seite auf ihr Bild zuzuschneiden. Wählen Sie Hochformat oder Querformat oder lassen Sie die Ausrichtung dem Bild folgen und fügen Sie einen Rand hinzu, wenn Sie einen Leerraum um das Bild herum wünschen.',
      },
      {
        title: 'Laden Sie PDF herunter',
        text:
          'Klicken Sie auf PDF herunterladen. Ihr Dokument wird auf Ihrem Gerät erstellt und in Ihren Downloads gespeichert – kein Wasserzeichen und kein wartender Upload-Schritt.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie wandle ich einen JPG in einen PDF um?',
      a:
        'Öffnen Sie das Tool oben, fügen Sie Ihr JPG-Bild hinzu, wählen Sie eine Seitengröße und klicken Sie dann auf „PDF herunterladen“. Die Konvertierung wird in Ihrem Browser ausgeführt und die fertige Datei wird direkt in Ihren Downloads gespeichert.',
    },
    {
      q: 'Werden meine Bilder irgendwo hochgeladen?',
      a:
        'Nein. Jedes Bild wird dekodiert, platziert und in den PDF in Ihrem eigenen Browser-Tab geschrieben, sodass keine Kopie Ihrer Fotos jemals an einen Server gesendet wird. Sie können es selbst bestätigen: Öffnen Sie die Entwicklertools Ihres Browsers, sehen Sie sich die Registerkarte „Netzwerk“ an und konvertieren Sie ein Bild. Es wird nichts übermittelt.',
    },
    {
      q: 'Reduziert die Konvertierung von JPG in PDF die Bildqualität?',
      a:
        'Nein. JPEG-Daten werden genau so in den PDF eingebettet, wie sie in Ihrer Datei erscheinen, anstatt dekodiert und neu kodiert zu werden. Dadurch wird eine zweite Generation von Komprimierungsartefakten vermieden, die normalerweise dazu führen, dass konvertierte Fotos weich aussehen.',
    },
    {
      q: 'Kann ich mehrere JPGs zu einem PDF kombinieren?',
      a:
        'Ja. Fügen Sie so viele Bilder hinzu, wie Sie möchten, ziehen Sie sie in die gewünschte Reihenfolge und laden Sie ein Dokument herunter, das alle Bilder enthält. Es gibt keine Obergrenze für die Anzahl der Bilder.',
    },
    {
      q: 'Welche Seitengröße soll ich wählen?',
      a:
        'Wählen Sie zum Drucken A4 oder Letter, wodurch jedes Bild eine vollständige Standardseite erhält. Wählen Sie „An Bild anpassen“, wenn Sie möchten, dass die Seite eng an jedes Bild angepasst wird und kein Leerraum umgibt – nützlich für ein Fotoalbum oder einen Comic.',
    },
  ],
};

export default de;