import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'Leere Seite in PDF einfügen — kostenlos online, ohne Upload',
    description:
      'Leere Seite in eine PDF einfügen: A4-Blätter für Notizen, Trennseiten oder beidseitigen Druck ergänzen. Ohne Uploads, ohne Anmeldung, ohne Wasserzeichen.',
  },
  breadcrumb: 'Leere Seite einfügen',
  h1: 'Leere Seite in eine PDF einfügen',
  intro:
    'Setzen Sie ein leeres Blatt genau dorthin, wo Sie es brauchen. Ob als Platz für Notizen, als Trenner zwischen zwei Kapiteln oder als Weißraum, damit ein Dokument beidseitig druckbar wird: Die leere Seite kostet einen Klick und verlässt Ihren Browser nie.',
  benefits: [
    {
      title: 'Beliebige Position, nicht nur am Ende',
      text: 'Neue leere Seiten werden als gewöhnliche Seiten in das Raster eingefügt, sodass Sie sie überallhin ziehen können. Zwischen zwei Kapiteln, als Deckblatt ganz vorn oder als Notizblatt hinten.',
    },
    {
      title: 'Beidseitigen Druck in Ordnung bringen',
      text: 'Wenn ein Dokument auf der Rückseite leer ausgedruckt wird, ist eine einzelne leere Seite die Standardlösung: Sie gleicht die Seitenzahl aus, sodass jedes Blatt beidseitig Inhalt trägt.',
    },
    {
      title: 'Unbegrenzt und rückgängig machbar',
      text: 'Fügen Sie so viele leere Blätter hinzu, wie Sie brauchen, und entfernen Sie sie genauso schnell. Jede Einfügung ist ein einzelner Schritt im Rückgängig-Verlauf, Experimentieren kostet also nichts.',
    },
  ],
  howTo: {
    heading: 'So fügen Sie eine leere Seite in eine PDF ein',
    sub: 'Ein leeres Blatt in drei Schritten ergänzen.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Die Seiten laden als Miniaturansichts-Raster.',
      },
      {
        title: 'Leere Seite hinzufügen',
        text: 'Klicken Sie in der Werkzeugleiste auf die „+“-Schaltfläche. Eine leere A4-Seite wird ans Ende des Rasters angehängt und lässt sich an die gewünschte Stelle ziehen.',
      },
      {
        title: 'Platzieren und herunterladen',
        text: 'Ziehen Sie die leere Seite dorthin, wo sie hin soll, und klicken Sie dann auf „PDF herunterladen“. Das Dokument mit dem neuen leeren Blatt wird auf Ihrem Gerät neu erstellt und gespeichert.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie füge ich eine leere Seite in eine PDF ein?',
      a: 'Fügen Sie Ihre PDF oben in das Tool ein und klicken Sie in der Werkzeugleiste auf die „+“-Schaltfläche. Eine leere A4-Seite wird am Ende angehängt; ziehen Sie sie an die gewünschte Stelle und klicken Sie dann auf „PDF herunterladen“, um das Dokument mit dem neuen leeren Blatt zu speichern.',
    },
    {
      q: 'Wofür brauche ich eine leere Seite?',
      a: 'Der häufigste Grund ist der beidseitige Druck: Endet ein Dokument auf einer ungeraden Seite, druckt das nächste Blatt vorne leer aus, und eine leere Seite am Ende sorgt dafür, dass jedes Blatt beidseitig bedruckt wird. Außerdem dienen leere Seiten als Kapiteltrenner, als Deckblatt oder als Platz für handschriftliche Notizen.',
    },
    {
      q: 'Kann ich eine leere Seite einfügen, ohne meine PDF hochzuladen?',
      a: 'Ja. Die Seite wird hinzugefügt und das Dokument vollständig in Ihrem Browser neu erstellt, es wird also nichts übertragen. Beobachten Sie während der Arbeit den Netzwerk-Tab in den Entwicklertools Ihres Browsers, um sich selbst davon zu überzeugen.',
    },
    {
      q: 'Kann ich die Größe der leeren Seite ändern?',
      a: 'Leere Seiten werden in A4 eingefügt. Brauchen Sie ein anderes Papierformat, drehen Sie die Seite, um ihre Ausrichtung zu ändern, oder passen Sie die Seitengröße selbst an, nachdem Sie sie eingefügt haben.',
    },
  ],
};

export default de;
