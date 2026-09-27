import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF-Seiten duplizieren — kostenlos und ohne Anmeldung',
    description:
      'Seiten in einer PDF duplizieren: eine Seite kopieren oder einen ganzen Bereich wiederholen. Ohne Uploads und Anmeldung, jede Kopie bleibt identisch.',
  },
  breadcrumb: 'PDF-Seiten duplizieren',
  h1: 'Seiten in einer PDF duplizieren',
  intro:
    'Wiederholen Sie eine Seite, ohne das Original suchen zu müssen. Kopieren Sie eine einzelne Seite oder einen ganzen Block und legen Sie die Kopien dorthin, wo sie gebraucht werden: nebeneinander, auf dem nächsten Blatt oder dort, wo das Dokument es verlangt. Ohne Upload.',
  benefits: [
    {
      title: 'Direkt daneben oder weiter hinten',
      text: 'Eine Kopie kann unmittelbar hinter dem Original sitzen oder an jede beliebige Stelle im Dokument gezogen werden. Wiederholen Sie eine Kopfzeile auf jeder Seite, legen Sie eine Kopie für eine Kollegin oder einen Kollegen bereit oder verdoppeln Sie ein Freigabeblatt.',
    },
    {
      title: 'Einen ganzen Stapel duplizieren',
      text: 'Markieren Sie mehrere Seiten und duplizieren Sie einmal: Alle werden in einem Durchgang wiederholt, wobei die Kopie jeder Seite direkt hinter dem Original eingefügt wird. Ihre Reihenfolge bleibt erhalten.',
    },
    {
      title: 'Jedes Mal dieselbe Qualität',
      text: 'Kopien sind Byte-für-Byte-Duplikate der Quellseite, keine Neuerstellungen. Text, Vektorgrafiken und eingebettete Schriften sind deshalb nicht vom Original zu unterscheiden.',
    },
  ],
  howTo: {
    heading: 'So duplizieren Sie PDF-Seiten',
    sub: 'Eine Seite oder einen ganzen Bereich in drei Schritten kopieren.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Die Seiten erscheinen als nummerierte Miniaturansichten.',
      },
      {
        title: 'Seite oder Seiten duplizieren',
        text: 'Klicken Sie in einer Miniaturansicht auf die Kopier-Schaltfläche, um diese Seite zu duplizieren, oder markieren Sie mehrere Seiten und nutzen Sie die Duplizieren-Schaltfläche in der Werkzeugleiste. Jede Kopie wird direkt hinter ihrem Original eingefügt.',
      },
      {
        title: 'Platzieren und herunterladen',
        text: 'Ziehen Sie die neuen Kopien an die Stellen, an denen sie stehen sollen, und klicken Sie dann auf „PDF herunterladen“. Das Dokument wird auf Ihrem Gerät neu erstellt, mit jeder Kopie vollständig erhalten.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie dupliziere ich eine Seite in einer PDF?',
      a: 'Fügen Sie Ihre PDF oben in das Tool ein und klicken Sie in der Miniaturansicht auf die Kopier-Schaltfläche der Seite, die Sie wiederholen möchten. Die Kopie wird direkt hinter dem Original eingefügt. Brauchen Sie sie an einer anderen Stelle, ziehen Sie sie dorthin und laden Sie dann herunter.',
    },
    {
      q: 'Kann ich mehrere Seiten auf einmal duplizieren?',
      a: 'Ja. Klicken Sie die erste Seite an, mit Umschalt die letzte, und drücken Sie dann die Duplizieren-Schaltfläche in der Werkzeugleiste. Jede markierte Seite wird direkt hinter ihr Original kopiert, Ihre bestehende Reihenfolge bleibt unangetastet.',
    },
    {
      q: 'Wofür ist das Duplizieren einer PDF-Seite nützlich?',
      a: 'Typische Fälle sind ein Deckblatt oder ein Haftungsausschluss am Anfang eines Stapels, eine Unterschrifts- oder Freigabeseite für jeden Unterzeichner, eine Referenzseite für einen Anhang, oder das Original neben einer geschwärzten Fassung im selben Dokument.',
    },
    {
      q: 'Verändert das Duplizieren die Dateiqualität?',
      a: 'Nein. Die Kopie ist ein Byte-für-Byte-Duplikat der Originalseite und keine Neuerstellung; die duplizierte Seite ist optisch und inhaltlich identisch mit ihrer Quelle, bis hin zu den eingebetteten Schriften und Links.',
    },
  ],
};

export default de;
