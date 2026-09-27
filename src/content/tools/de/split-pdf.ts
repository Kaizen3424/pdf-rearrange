import type { ToolContent } from '../types';

const de: ToolContent = {
  meta: {
    title: 'PDF teilen — kostenlos Seiten oder ganze Dateien trennen',
    description:
      'PDF kostenlos teilen: nach Seitenbereich aufteilen oder jede Seite einzeln speichern. Ohne Uploads, ohne Anmeldung, ohne Wasserzeichen — lokal im Browser.',
  },
  breadcrumb: 'PDF teilen',
  h1: 'Eine PDF in einzelne Dokumente teilen',
  intro:
    'Teilen Sie eine PDF so oft, wie Sie es brauchen. Wählen Sie einen Seitenbereich und erhalten Sie ein Dokument zurück, oder lassen Sie jede Seite in einem Durchgang als eigene Datei ausgeben. Nichts wird hochgeladen, und die Ausgabeseiten sind Byte-für-Byte-Kopien Ihrer Originale.',
  benefits: [
    {
      title: 'Nach Bereich oder vollständig teilen',
      text: 'Geben Sie „1-5, 12, 20-30“ ein und Sie erhalten genau die benötigten Seiten als eine Datei, oder Sie teilen jede Seite in ein eigenes Dokument auf. Beide Modi laufen im selben Tab.',
    },
    {
      title: 'Seiten vorher ansehen',
      text: 'Jede Seite wird als echte Miniaturansicht gerendert, bevor Sie wählen; Sie raten nicht nach Seitenzahlen. Blättern Sie durch die Vorschau in Originalgröße und prüfen Sie so, ob die Grenzen stimmen.',
    },
    {
      title: 'Kein Upload, keine Limits',
      text: 'Das Teilen läuft auf Ihrem eigenen Gerät, also gibt es keine Obergrenze für die Dateigröße und keine Warteschlange. Schließen Sie den Tab, wenn Sie fertig sind: Im Speicher ist nichts mehr, und der Server hatte nie eine Kopie zum Aufbewahren.',
    },
  ],
  howTo: {
    heading: 'So teilen Sie eine PDF',
    sub: 'Seiten auswählen, herunterladen. Mehr Arbeit ist das nicht.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Legen Sie die Datei auf das Tool oben, klicken Sie zum Durchsuchen oder fügen Sie sie mit Strg+V ein. Seitenzahl und Miniaturansichten erscheinen sofort.',
      },
      {
        title: 'Auswählen, was getrennt werden soll',
        text: 'Tippen Sie Seitenbereiche mit Kommas und Bindestrichen, etwa 1-4, 9, 15-20, oder wechseln Sie auf „jede Seite“, um eine Datei pro Seite zu erhalten. Bereiche werden schon beim Tippen geprüft, sodass ein Tippfehler keine Seiten verschluckt.',
      },
      {
        title: 'Dateien herunterladen',
        text: 'Jedes erzeugte Dokument wird auf Ihrem Gerät neu erstellt und heruntergeladen. Beim Teilen wird nichts neu komprimiert; die Qualität entspricht dem Original.',
      },
    ],
  },
  faq: [
    {
      q: 'Wie kann ich eine PDF in einzelne Dateien teilen?',
      a: 'Fügen Sie Ihre PDF oben hinzu, wählen Sie einen Seitenbereich wie 1-5 oder „jede Seite“ und klicken Sie dann auf die Schaltfläche zum Teilen. Jedes Ausgabedokument wird auf Ihrem Gerät erzeugt und einzeln gespeichert, sodass Sie eine Datei je Bereich oder je Seite erhalten.',
    },
    {
      q: 'Wie funktioniert das Teilen nach Seitenbereichen?',
      a: 'Geben Sie die gewünschten Seitenzahlen oder Bereiche durch Kommas getrennt ein, etwa 1, 3, 7-9. Daraus entsteht eine neue Datei, die genau diese Seiten in der angegebenen Reihenfolge enthält. Wollen Sie Seiten behalten, statt die Datei aufzuteilen, ist das Extrahieren die passendere Funktion.',
    },
    {
      q: 'Kann ich eine große PDF teilen?',
      a: 'Ja, und weil nichts hochgeladen wird, gibt es keine künstliche Größenbegrenzung. Sehr große oder hochauflösende Dokumente belegen während der Verarbeitung mehr Gerätespeicher: Ein paar hundert Seiten sind unproblematisch, ein Scan mit tausend Seiten kann auf einem älteren Telefon langsam sein.',
    },
    {
      q: 'Sinkt durch das Teilen die PDF-Qualität?',
      a: 'Nein. Seiten werden Byte für Byte aus der Originaldatei kopiert statt neu gerendert, das Ergebnis hat also dieselbe Qualität wie die Quelle. Text bleibt auswählbar und Vektorgrafiken bleiben scharf.',
    },
  ],
};

export default de;
