import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'Seiten in PDF einfügen — kostenlos online und ohne Upload',
    description:
      'Seiten in eine PDF einfügen: leere Blätter ergänzen, Seiten aus einer anderen Datei holen oder an der richtigen Stelle ablegen. Ohne Upload, ohne Anmeldung.',
  },
  breadcrumb: 'Seiten in PDF einfügen',
  h1: 'Seiten in eine PDF einfügen',
  intro:
    'Ergänzen Sie ein vorhandenes Dokument, ohne es neu aufzubauen. Fügen Sie ein leeres Blatt ein, holen Sie sich Seiten aus einer anderen PDF, verschieben Sie alles an seine Stelle und laden Sie dann eine kombinierte Datei herunter, die nie einen Server berührt hat.',
  benefits: [
    {
      title: 'Leere Seiten oder Seiten aus einer Datei',
      text: 'Fügen Sie ein leeres Blatt für Notizen, ein Deckblatt oder eine Drucktrennseite ein, oder übernehmen Sie ganze Seiten aus einem zweiten Dokument. Beides ist in der Werkzeugleiste einen Klick entfernt.',
    },
    {
      title: 'Genau dorthin, wo sie gehören',
      text: 'Neue Seiten landen im Raster wie alle anderen: Ziehen Sie sie an die gewünschte Stelle, und die umgebenden Seiten rücken auf, um Platz zu schaffen. Sie müssen nicht das ganze Dokument von Hand umsortieren.',
    },
    {
      title: 'Eine Seite in einem Durchgang ersetzen',
      text: 'Löschen Sie die veraltete Seite und ziehen Sie ihren Ersatz in die Lücke. Weil Seiten kopiert statt neu gerendert werden, behält der Ersatz sein Layout exakt.',
    },
  ],
  howTo: {
    heading: 'So fügen Sie Seiten in eine PDF ein',
    sub: 'Neue Seiten hinzufügen und platzieren in drei Schritten.',
    steps: [
      {
        title: 'Dokument hinzufügen',
        text: 'Legen Sie Ihre PDF auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Die Seiten laden als Miniaturansichts-Raster.',
      },
      {
        title: 'Neue Seiten einfügen',
        text: 'Klicken Sie in der Werkzeugleiste auf die „+“-Schaltfläche, um eine leere Seite anzuhängen, oder nutzen Sie „PDFs hinzufügen“, um Seiten aus einem anderen Dokument zu holen. Jede neue Seite erscheint im Raster, farblich nach Herkunft markiert.',
      },
      {
        title: 'Platzieren und herunterladen',
        text: 'Ziehen Sie die neuen Seiten an die richtige Stelle und klicken Sie dann auf „PDF herunterladen“. Das kombinierte Dokument wird auf Ihrem Gerät neu erstellt und gespeichert; Ihre Originaldatei bleibt unverändert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie füge ich eine leere Seite in eine PDF ein?',
      a: 'Fügen Sie Ihre PDF oben in das Tool ein und klicken Sie in der Werkzeugleiste auf die „+“-Schaltfläche. Eine leere A4-Seite landet am Ende des Rasters; ziehen Sie sie an die gewünschte Stelle, und die umgebenden Seiten machen Platz. Laden Sie herunter, um die Änderung zu speichern.',
    },
    {
      q: 'Wie füge ich Seiten aus einer anderen PDF hinzu?',
      a: 'Nutzen Sie die Schaltfläche „PDFs hinzufügen“ in der Werkzeugleiste, um eine zweite Datei zu wählen. Alle ihre Seiten gesellen sich in dasselbe Raster und erhalten ihre eigene Farbe, damit Sie die Herkunft erkennen. Ziehen Sie sie an die richtige Stelle und laden Sie eine kombinierte PDF herunter.',
    },
    {
      q: 'Wie ersetze ich eine Seite in einer PDF?',
      a: 'Löschen Sie die Seite, die Sie ersetzen wollen, fügen Sie die PDF mit der neuen Seite hinzu und ziehen Sie sie in den leeren Slot. Da jede Seite Byte für Byte kopiert statt neu gerendert wird, behält der Ersatz Schriften, Bilder und Layout exakt.',
    },
    {
      q: 'Kann ich Seiten einfügen, ohne mein Dokument hochzuladen?',
      a: 'Ja, das Einfügen passiert vollständig in Ihrem Browser, Ihre Datei wird also nie übertragen. Öffnen Sie während der Arbeit den Netzwerk-Tab in den Entwicklertools Ihres Browsers und Sie sehen überhaupt keine Dateianfragen.',
    },
  ],
};

export default de;
