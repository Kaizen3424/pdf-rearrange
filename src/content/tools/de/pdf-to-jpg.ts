import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-zu-JPG-Konverter – Kostenlos, jede Seite als Bild',
    description:
      'Konvertieren Sie PDF-Seiten kostenlos in JPG-Bilder, in einem ZIP. Wählen Sie 72, 150 oder 300 DPI und die Qualität, die Sie benötigen – gerendert auf Ihrem',
  },
  breadcrumb: 'PDF bis JPG',
  h1: 'Konvertieren Sie PDF-Seiten in JPG-Bilder',
  intro:
    'Sie benötigen eine PDF-Seite als Foto – zum Einfügen einer Folie, zum Hochladen an einen Ort, an dem PDFs abgelehnt werden, oder zum Teilen in einem Chat. Wählen Sie Ihre Auflösung, konvertieren Sie und jede Seite wird als JPG in einem einzigen ZIP angezeigt.',
  benefits: [
    {
      title: 'Wählen Sie die Auflösung, die Sie benötigen',
      text:
        '72 DPI für einen schnellen Blick auf den Bildschirm, 150 für Dokumente und E-Mails, 300 für das Drucken. Das Tool zeigt Ihnen die genaue Pixelgröße an, bevor Sie etwas rendern, sodass es keine Überraschungen gibt.',
    },
    {
      title: 'Ein ZIP, nicht zwanzig Downloads',
      text:
        'Jede Seite wird konvertiert und in ein einzelnes Archiv gepackt. Browser blockieren wiederholte automatische Downloads, daher ist eine Datei sowohl die praktische Option als auch diejenige, die tatsächlich funktioniert.',
    },
    {
      title: 'Wird dort gerendert, wo sich Ihre Datei bereits befindet',
      text:
        'Ihr PDF wird geöffnet und in Ihrem Browser gezeichnet. Es wird nichts verschickt, was wichtig ist, wenn es sich bei dem Dokument um einen Vertrag oder eine Krankenakte handelt.',
    },
  ],
  howTo: {
    heading: 'So konvertieren Sie PDF in JPG',
    sub: 'Drei Schritte und der PDF verlässt Ihr Gerät nie.',
    steps: [
      {
        title: 'Fügen Sie Ihren PDF hinzu',
        text:
          'Legen Sie eine Datei auf dem Tool oben ab oder klicken Sie zum Durchsuchen. Die Seitenzahl wird sofort angezeigt, sodass Sie wissen, womit Sie arbeiten.',
      },
      {
        title: 'Wählen Sie Auflösung und Qualität',
        text:
          'Wählen Sie 72, 150 oder 300 DPI. Für JPG können Sie auch eine kleinere Datei oder maximale Qualität wählen – höhere Qualität bedeutet ein größeres ZIP, daher lohnt es sich, es an den Verwendungsort des Bildes anzupassen.',
      },
      {
        title: 'Laden Sie ZIP herunter',
        text:
          'Klicken Sie auf „In Bilder konvertieren“. Jede Seite wird gerendert und als Seite-1.jpg, Seite-2.jpg usw. gespeichert, zusammengezippt und in Ihren Downloads gespeichert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie konvertiere ich eine PDF-Seite in ein Bild?',
      a:
        'Fügen Sie oben PDF hinzu, wählen Sie eine Auflösung und klicken Sie dann auf „In Bilder konvertieren“. Jede Seite wird als JPG gerendert und zusammen in einem ZIP-Archiv geliefert.',
    },
    {
      q: 'Wird mein PDF irgendwo hochgeladen?',
      a:
        'Nein. Das PDF wird in Ihrem Browser-Tab mit derselben Engine geöffnet und gerendert, die Ihr Browser bereits zum Anzeigen von PDFs verwendet. Es wird keine Kopie übermittelt. Sie können dies überprüfen, indem Sie die Registerkarte „Netzwerk“ in Ihren Entwicklertools öffnen.',
    },
    {
      q: 'Welche Auflösung soll ich wählen?',
      a:
        'Verwenden Sie 72 DPI, wenn das Bild nur auf dem Bildschirm angezeigt wird – es ist klein und schnell. Verwenden Sie 150 DPI für Dokumente, die per E-Mail geteilt werden. Verwenden Sie 300 DPI, wenn das Bild gedruckt werden soll, da dies die Standarddruckauflösung ist.',
    },
    {
      q: 'Reduziert die Umstellung auf JPG die Qualität?',
      a:
        'JPG ist ein verlustbehaftetes Format, daher wird ein Teil der Qualität gegen die Dateigröße eingetauscht – deshalb gibt es die Qualitätsauswahl. Bei der Konvertierung mit einem höheren Wert von DPI bleiben mehr Details erhalten als bei einem niedrigen Wert, und der Text bleibt bei 150 DPI oder höher lesbar.',
    },
    {
      q: 'Kann ich nur einige Seiten konvertieren?',
      a:
        'Diese Version konvertiert jede Seite, was die meisten Leute brauchen, und speichert die Ausgabe in einem vorhersehbaren Archiv. Wenn Sie nur wenige Seiten benötigen, schneiden Sie das Dokument zunächst zu und konvertieren Sie es dann.',
    },
  ],
};

export default de;