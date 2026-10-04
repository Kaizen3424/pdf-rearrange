import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF online unterschreiben – Signaturbild kostenlos einfügen',
    description:
      'Unterschreiben Sie kostenlos ein PDF: Fügen Sie Ihr Signaturbild zu einer beliebigen Seite hinzu, positionieren Sie es und laden Sie die Datei herunter.',
  },
  breadcrumb: 'PDF signieren',
  h1: 'Signieren Sie Ihr PDF im Browser',
  intro:
    'Sie haben bereits Ihre Unterschrift – diejenige, die Sie auf Lieferungen und Formularen verwenden. Fügen Sie es als Bild zu den Seiten hinzu, die signiert werden müssen, platzieren Sie es dort, wo sich die Signaturzeile befindet, und laden Sie es herunter. Das Dokument verlässt niemals Ihr Gerät, und das ist der Sinn einer Signatur.',
  benefits: [
    {
      title: 'Verwenden Sie die Signatur, die Sie bereits haben',
      text:
        'Scannen oder fotografieren Sie Ihre Unterschrift einmal, speichern Sie sie als PNG und verwenden Sie sie wieder. Ein transparenter Hintergrund funktioniert am besten – alles, was rechteckig ist, wird mit einem eigenen weißen Feld geliefert.',
    },
    {
      title: 'Wird dort platziert, wo das Dokument es erwartet',
      text:
        'Sieben Ankerpositionen plus eine Live-Vorschau, sodass die Signatur auf der Signaturlinie landet und nicht irgendwo in deren Nähe schwebt.',
    },
    {
      title: 'Das Dokument bleibt privat',
      text:
        'Ein unterzeichneter Vertrag ist ein fertiges Dokument. Es wird geöffnet, gestempelt und in Ihrem Browser-Tab gespeichert – kein Server erhält jemals eine Kopie, weder vor noch nach dem Signieren.',
    },
  ],
  howTo: {
    heading: 'So signieren Sie einen PDF',
    sub: 'Drei Schritte und nichts wird hochgeladen.',
    steps: [
      {
        title: 'Fügen Sie den PDF hinzu, den Sie signieren müssen',
        text:
          'Ziehen Sie es auf das Tool oben oder klicken Sie zum Durchsuchen. Mehrere Dateien können in einem Durchgang signiert werden.',
      },
      {
        title: 'Fügen Sie Ihr Signaturbild hinzu',
        text:
          'Wählen Sie PNG oder JPG Ihrer Signatur aus. Ein transparenter PNG hält nur die Tinte; Bei einem Foto auf weißem Papier ist der Hintergrund sichtbar, sodass ein Scan ohne Hintergrund am besten aussieht.',
      },
      {
        title: 'Positionieren und herunterladen',
        text:
          'Wählen Sie aus, wo die Signatur platziert werden soll – unten rechts ist die übliche Stelle – und klicken Sie dann auf „Signatur hinzufügen“. Die signierte Kopie wird heruntergeladen und Ihr Original bleibt unberührt.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie unterschreibe ich einen PDF?',
      a:
        'Fügen Sie PDF hinzu, wählen Sie ein Bild Ihrer Signatur aus, legen Sie dessen Position fest und klicken Sie auf Signatur hinzufügen. Das signierte Dokument wird in Ihren Downloads gespeichert.',
    },
    {
      q: 'Ist das eine rechtsgültige Unterschrift?',
      a:
        'Das hängt von Ihrer Gerichtsbarkeit ab und davon, was der Empfänger akzeptiert, nicht vom Tool. Dadurch wird ein Bild Ihrer Unterschrift auf dem Dokument platziert. Es wird keine kryptografische digitale Signatur angewendet. Viele Arbeitsabläufe akzeptieren ein Bild, und diejenigen, die eine kryptografische Signatur erfordern, sagen dies auch.',
    },
    {
      q: 'Welche Art von Signaturbild funktioniert am besten?',
      a:
        'Ein PNG mit transparentem Hintergrund. Das Tool akzeptiert auch JPG, aber ein Foto einer Unterschrift auf Papier trägt seinen weißen Hintergrund mit sich, sodass Sie einen weißen Rahmen um die Tinte erhalten.',
    },
    {
      q: 'Kann ich nur eine Seite eines langen Dokuments signieren?',
      a:
        'Diese Version stempelt jede Seite, was einer vollständigen Übereinstimmung entspricht. Um eine einzelne Seite zu signieren, teilen Sie zunächst das Dokument auf, signieren Sie diese Seite und fügen Sie die Teile wieder zusammen.',
    },
    {
      q: 'Wird mein unterschriebenes Dokument irgendwo hochgeladen?',
      a:
        'Nein. Das Signieren erfolgt in Ihrem Browser-Tab und es wird keine Kopie des Dokuments – ob signiert oder nicht – an einen Server übertragen.',
    },
  ],
};

export default de;