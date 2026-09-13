import type { ToolStrings } from './en';

const de = {
  dropZone: {
    reading: 'PDF wird gelesen…',
    processingLocally: 'Lokale Verarbeitung — nichts wird hochgeladen.',
    heading: 'PDF hier ablegen',
    or: 'oder',
    selectFile: 'PDF-Datei auswählen',
    hint: 'Mehrere Dateien zum Zusammenführen hinzufügen · mit Strg+V einfügen · unbegrenzte Größe und Seiten',
    privacy: 'Ihre Datei verlässt diesen Browser niemals',
  },
  toolbar: {
    noFile: 'Keine Datei',
    files: (n: number) => `${n} Datei${n === 1 ? '' : 'n'}`,
    pages: (n: number) => `${n} Seite${n === 1 ? '' : 'n'}`,
    undo: 'Rückgängig (Strg+Z)',
    redo: 'Wiederholen (Strg+Umschalt+Z)',
    reverse: 'Seitenreihenfolge umkehren',
    resetLabel: 'Zur Originalreihenfolge zurücksetzen',
    reset: 'Zurücksetzen',
    thumbnailSize: 'Miniaturansicht-Größe',
    zoomSm: 'Kleine Miniaturansichten',
    zoomMd: 'Mittlere Miniaturansichten',
    zoomLg: 'Große Miniaturansichten',
    addPdfs: 'PDFs hinzufügen',
    addBlank: 'Leere Seite hinzufügen',
    confirm: 'Bestätigen?',
    startNew: 'Neu starten',
    building: 'Wird erstellt…',
    download: 'PDF herunterladen',
  },
  pageCard: {
    blankPage: 'leere Seite',
    sourcePage: (name: string, n: number) => `${name}, Originalseite ${n}`,
    rotated: (deg: number) => `, um ${deg}° gedreht`,
    pageOf: (pos: number, total: number) => `Seite ${pos} von ${total}`,
    renderFailed: 'Diese Seite konnte nicht gerendert werden',
    loadingThumbnail: 'Seitenminiaturansicht wird geladen',
    blank: 'leer',
    sourceTitle: (name: string, n: number) => `${name} — Originalseite ${n}`,
    rotatedTitle: (deg: number) => `Um ${deg}° gedreht`,
    preview: 'Seitenvorschau',
    rotate: 'Im Uhrzeigersinn drehen',
    duplicate: 'Seite duplizieren',
    delete: 'Seite löschen',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Seite ${n} aufgenommen. Verwenden Sie die Pfeiltasten zum Verschieben, Leertaste zum Ablegen, Escape zum Abbrechen.`,
    dragOver: (n: number) => `Seite befindet sich jetzt über Position ${n}.`,
    dragOut: 'Seite befindet sich nicht mehr über einem Ablageziel.',
    dragEnd: (n: number) => `An Position ${n} verschoben.`,
    dragCancel: 'Verschieben abgebrochen.',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Seitenvorschau, Seite ${pos} von ${total}`,
    headerBlank: (pos: number, total: number) => `Seite ${pos} von ${total} — leere Seite`,
    headerFile: (pos: number, total: number, name: string) =>
      `Seite ${pos} von ${total} — ${name}`,
    close: 'Vorschau schließen',
    prev: 'Vorherige Seite',
    next: 'Nächste Seite',
    alt: (pos: number) => `Vorschau von Seite ${pos}`,
  },
  password: {
    dialogLabel: 'PDF-Passwort erforderlich',
    heading: 'Passwort erforderlich',
    thisPdf: 'Diese PDF',
    bodySuffix: 'ist geschützt. Geben Sie ihr Passwort ein, um sie auf Ihrem Gerät zu öffnen.',
    retry: 'Das Passwort hat nicht funktioniert — versuchen Sie es erneut.',
    placeholder: 'PDF-Passwort',
    cancel: 'Abbrechen',
    unlock: 'Entsperren',
  },
  success: {
    heading: 'Ihre PDF ist fertig',
    body: 'Ihre neu angeordnete PDF wurde auf Ihr Gerät heruntergeladen. Nichts wurde hochgeladen — alles ist direkt in Ihrem Browser passiert.',
    pages: (n: number) => `${n} Seite${n === 1 ? '' : 'n'}`,
    building: 'Wird erstellt…',
    downloadAgain: 'Erneut herunterladen',
    startNew: 'Neu starten',
    backToEditing: 'Zurück zur Bearbeitung',
  },
  rating: {
    label: 'Bewerten Sie dieses Tool mit 5 Sternen',
    star: (n: number) => `${n} Stern${n > 1 ? 'e' : ''}`,
    announced: (value: number) =>
      `Sie haben ${value} von 5 Sternen vergeben. Vielen Dank für Ihr Feedback!`,
    thanks: 'Vielen Dank für Ihr Feedback!',
    prompt: 'Wie war es?',
  },
  batch: {
    label: 'Aktionen für ausgewählte Seiten',
    selected: (n: number) => `${n} Seite${n === 1 ? '' : 'n'} ausgewählt`,
    rotate: 'Drehen',
    duplicate: 'Duplizieren',
    delete: 'Löschen',
    all: 'Alle',
    clear: 'Auswahl aufheben',
  },
  toasts: {
    dismiss: 'Benachrichtigung verwerfen',
  },
  tool: {
    pagesReady: (n: number) => `${n} Seite${n === 1 ? '' : 'n'} bereit zum Neuordnen.`,
    filesSkippedPdf: (n: number) =>
      `${n} Datei${n === 1 ? ' wurde' : 'n wurden'} übersprungen — nur PDF-Dateien werden unterstützt.`,
    readFailed: (name: string) => `${name} konnte nicht gelesen werden.`,
    openFailed: (name: string) =>
      `${name} konnte nicht geöffnet werden — sie ist möglicherweise beschädigt oder keine gültige PDF.`,
    readingFile: (name: string) => `${name} wird gelesen…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `${name} wird gelesen (${i} von ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} Datei${n === 1 ? ' wurde' : 'n wurden'} übersprungen — das Passwort wurde nicht eingegeben.`,
    encryptedInfo:
      'Diese PDF ist verschlüsselt. Sie können sie hier neu anordnen, aber verschlüsselte Dateien können nicht für den Download neu erstellt werden — die Download-Schaltfläche erklärt, wie Sie das beheben.',
    allSelected: 'Alle Seiten ausgewählt.',
    rotated: (n: number) => `${n} Seite${n === 1 ? '' : 'n'} gedreht.`,
    duplicated: (n: number) => `${n} Seite${n === 1 ? '' : 'n'} dupliziert.`,
    deleted: (n: number) => `${n} Seite${n === 1 ? '' : 'n'} gelöscht.`,
    reversed: 'Seitenreihenfolge umgekehrt.',
    restored: 'Originale Seitenreihenfolge wiederhergestellt.',
    blankAdded: 'Leere Seite am Ende hinzugefügt — ziehen Sie sie beliebig.',
    blankDocName: 'Leere Seite',
    noPagesLeft: 'Keine Seiten übrig',
    noPagesHint: 'Löschen rückgängig machen, weitere PDFs hinzufügen oder neu starten.',
    undo: 'Rückgängig',
    addPdfs: 'PDFs hinzufügen',
    dropOverlay: 'PDFs ablegen, um ihre Seiten hinzuzufügen',
    encryptedTitle: 'Diese PDF ist verschlüsselt und kann nicht heruntergeladen werden.',
    encryptedBody1:
      'Sie können die Seiten neu anordnen, drehen und eine Vorschau davon anzeigen, aber eine verschlüsselte Datei kann auf Ihrem Gerät nicht neu erstellt werden. Entfernen Sie zuerst ihr Passwort (öffnen Sie sie und verwenden Sie ',
    encryptedStrong: 'Drucken → Als PDF speichern',
    encryptedBody2:
      ', oder die Option „Sicherheit entfernen" Ihrer PDF-App), dann fügen Sie die entsperrte Kopie hier hinzu.',
    encryptedDownloadToast:
      'Diese Datei ist verschlüsselt und kann nicht lokal neu erstellt werden. Entfernen Sie ihr Passwort (öffnen Sie sie, wählen Sie Drucken → Als PDF speichern, oder verwenden Sie die Option „Sicherheit entfernen" Ihrer PDF-App), dann fügen Sie die Kopie hier hinzu und laden Sie herunter.',
    exportFailed:
      'Diese PDF konnte auf Ihrem Gerät nicht neu erstellt werden. Sie verwendet möglicherweise eine Verschlüsselung oder eine Struktur, die wir nicht kopieren können. Versuchen Sie eine PDF ohne Passwort oder exportieren Sie sie zuerst erneut aus Ihrer PDF-App.',
    downloaded: (name: string) => `${name} heruntergeladen.`,
    undone: 'Rückgängig gemacht.',
    redone: 'Wiederholt.',
  },
} satisfies ToolStrings;

export default de;