import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'Konvertieren Sie PDF in PNG online kostenlos – verlustfrei',
    description:
      'Konvertieren Sie PDF-Seiten kostenlos in PNG-Bilder in einem ZIP. Verlustfreier, transparenter Hintergrund optional, gerendert auf Ihrem Gerät',
  },
  breadcrumb: 'PDF bis PNG',
  h1: 'Konvertieren Sie PDF-Seiten in PNG-Bilder',
  intro:
    'PNG behält jedes Pixel genau so bei, wie es gerendert wird, was es zur richtigen Wahl macht, wenn das Bild bearbeitet oder zusammengesetzt werden soll oder keine Komprimierungsartefakte aufweisen darf. Konvertieren Sie ein beliebiges PDF und nehmen Sie jede Seite als PNG weg.',
  benefits: [
    {
      title: 'Jedes Mal verlustfrei',
      text:
        'PNG komprimiert, ohne Informationen zu verwerfen, sodass Textkanten scharf und flache Farben flach bleiben. Nichts wird so geglättet wie JPG.',
    },
    {
      title: 'Transparenter Hintergrund, wenn Sie ihn brauchen',
      text:
        'PDF-Seiten zeichnen normalerweise einen undurchsichtigen Hintergrund, aber Sie können stattdessen auch mit Transparenz exportieren – nützlich, wenn die Bilder über etwas anderes geschichtet werden sollen.',
    },
    {
      title: 'Alle Seiten in einem Archiv',
      text:
        'Konvertieren Sie ein langes Dokument auf einmal. Jede Seite wird zu page-1.png, page-2.png usw., verpackt in einem einzigen ZIP.',
    },
  ],
  howTo: {
    heading: 'So konvertieren Sie PDF in PNG',
    sub: 'Drei Schritte, wobei PDF lokal gerendert wird.',
    steps: [
      {
        title: 'Fügen Sie Ihren PDF hinzu',
        text:
          'Legen Sie eine Datei auf dem Tool oben ab oder klicken Sie zum Durchsuchen. Die Seitenzahl wird Ihnen sofort nach dem Lesen angezeigt.',
      },
      {
        title: 'Wählen Sie eine Auflösung',
        text:
          '72, 150 oder 300 DPI. PNG-Dateien sind größer als JPG-Dateien, da nichts verworfen wird. Daher ist eine niedrigere Auflösung eine sinnvolle Möglichkeit, das Archiv überschaubar zu halten.',
      },
      {
        title: 'Laden Sie ZIP herunter',
        text:
          'Klicken Sie auf „In Bilder konvertieren“ und Ihre PNG-Seiten werden zusammen in einem einzigen Archiv angezeigt.',
      },
    ],
  },
  faq: [
    {
      q: 'Sollte ich PNG oder JPG verwenden?',
      a:
        'Verwenden Sie PNG, wenn das Bild bearbeitet oder geschichtet wird oder scharf bleiben muss – es ist verlustfrei. Verwenden Sie JPG, wenn Sie etwas teilen oder hochladen und die Dateigröße wichtiger ist als die perfekte Wiedergabetreue. Wenn Sie dieselbe Seite in beide Richtungen konvertieren, können Sie den Unterschied schnell erkennen.',
    },
    {
      q: 'Wie konvertiere ich einen PDF in einen PNG?',
      a:
        'Fügen Sie oben Ihren PDF hinzu, wählen Sie eine Auflösung und klicken Sie dann auf „In Bilder konvertieren“. Jede Seite wird als PNG gerendert und in einem ZIP geliefert.',
    },
    {
      q: 'Ist der PDF hochgeladen?',
      a:
        'Nein. Das Rendern erfolgt in Ihrem Browser-Tab. Es wird nichts an einen Server übertragen, was Sie auf der Registerkarte „Netzwerk“ Ihrer Entwicklertools bestätigen können.',
    },
    {
      q: 'Warum sind die PNG-Dateien so groß?',
      a:
        'Denn PNG behält alle Details bei, statt sie anzunähern, und eine hohe Auflösung bedeutet viele Pixel. Durch die Senkung von 300 DPI auf 150 DPI wird die Pixelanzahl ohne Methodenverlust um etwa das Vierfache reduziert.',
    },
    {
      q: 'Kann ich einen transparenten Hintergrund bekommen?',
      a:
        'Ja – wählen Sie in der Hintergrundeinstellung „Transparent“ aus. Beachten Sie, dass eine PDF-Seite normalerweise ihren eigenen weißen Hintergrund zeichnet, sodass Sie nur dort Transparenz sehen, wo die Seite den Hintergrund wirklich unbemalt lässt.',
    },
  ],
};

export default de;