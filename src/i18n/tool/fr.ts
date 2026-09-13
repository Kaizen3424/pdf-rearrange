import type { ToolStrings } from './en';

const fr = {
  dropZone: {
    reading: "Lecture de votre PDF…",
    processingLocally: "Traitement local — rien n'est telecharge.",
    heading: "Deposez votre PDF ici",
    or: "ou",
    selectFile: "Selectionner un fichier PDF",
    hint: "Ajoutez plusieurs fichiers pour les fusionner · collez avec Ctrl+V · taille et nombre de pages illimites",
    privacy: "Votre fichier ne quitte jamais ce navigateur",
  },
  toolbar: {
    noFile: "Aucun fichier",
    files: (n: number) => `${n} fichier${n > 1 ? "s" : ""}`,
    pages: (n: number) => `${n} page${n > 1 ? "s" : ""}`,
    undo: "Annuler (Ctrl+Z)",
    redo: "Retablir (Ctrl+Shift+Z)",
    reverse: "Inverser l'ordre des pages",
    resetLabel: "Reinitialiser a l'ordre original",
    reset: "Reinitialiser",
    thumbnailSize: "Taille des vignettes",
    zoomSm: "Petites vignettes",
    zoomMd: "Vignettes moyennes",
    zoomLg: "Grandes vignettes",
    addPdfs: "Ajouter des PDF",
    addBlank: "Ajouter une page blanche",
    confirm: "Confirmer ?",
    startNew: "Commencer",
    building: "Construction…",
    download: "Telecharger le PDF",
  },
  pageCard: {
    blankPage: "page blanche",
    sourcePage: (name: string, n: number) => `${name}, page originale ${n}`,
    rotated: (deg: number) => `, pivote a ${deg} degres`,
    pageOf: (pos: number, total: number) => `Page ${pos} sur ${total}`,
    renderFailed: "Impossible d'afficher cette page",
    loadingThumbnail: "Chargement de la vignette de la page",
    blank: "blanche",
    sourceTitle: (name: string, n: number) => `${name} — page originale ${n}`,
    rotatedTitle: (deg: number) => `Pivote a ${deg}°`,
    preview: "Apercu de la page",
    rotate: "Pivoter dans le sens horaire",
    duplicate: "Dupliquer la page",
    delete: "Supprimer la page",
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Page ${n} soulevee. Utilisez les touches flechees pour la deplacer, Espace pour deposer, Echap pour annuler.`,
    dragOver: (n: number) => `La page est maintenant sur la position ${n}.`,
    dragOut: "La page n'est plus sur une cible de depot.",
    dragEnd: (n: number) => `Deplacee a la position ${n}.`,
    dragCancel: "Deplacement annule.",
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Apercu de la page, page ${pos} sur ${total}`,
    headerBlank: (pos: number, total: number) => `Page ${pos} sur ${total} — page blanche`,
    headerFile: (pos: number, total: number, name: string) =>
      `Page ${pos} sur ${total} — ${name}`,
    close: "Fermer l'apercu",
    prev: "Page precedente",
    next: "Page suivante",
    alt: (pos: number) => `Apercu de la page ${pos}`,
  },
  password: {
    dialogLabel: "Mot de passe du PDF requis",
    heading: "Mot de passe requis",
    thisPdf: "Ce PDF",
    bodySuffix: "est protege. Entrez son mot de passe pour l'ouvrir sur votre appareil.",
    retry: "Ce mot de passe n'a pas fonctionne — reessayez.",
    placeholder: "Mot de passe du PDF",
    cancel: "Annuler",
    unlock: "Deverrouiller",
  },
  success: {
    heading: "Votre PDF est pret",
    body: "Votre PDF reorganise a ete telecharge sur votre appareil. Rien n'a ete telecharge — tout s'est passe directement dans votre navigateur.",
    pages: (n: number) => `${n} page${n > 1 ? "s" : ""}`,
    building: "Construction…",
    downloadAgain: "Telecharger a nouveau",
    startNew: "Commencer",
    backToEditing: "Retour a l'edition",
  },
  rating: {
    label: "Notez cet outil sur 5 etoiles",
    star: (n: number) => `${n} etoile${n > 1 ? "s" : ""}`,
    announced: (value: number) =>
      `Vous avez attribue la note de ${value} sur 5 etoiles. Merci pour votre retour !`,
    thanks: "Merci pour votre retour !",
    prompt: "Comment s'est passe votre experience ?",
  },
  batch: {
    label: "Actions pour les pages selectionnees",
    selected: (n: number) => `${n} page${n > 1 ? "s" : ""} selectionnee${n > 1 ? "s" : ""}`,
    rotate: "Pivoter",
    duplicate: "Dupliquer",
    delete: "Supprimer",
    all: "Tout",
    clear: "Effacer",
  },
  toasts: {
    dismiss: "Fermer la notification",
  },
  tool: {
    pagesReady: (n: number) => `${n} page${n > 1 ? "s" : ""} prete${n > 1 ? "s" : ""} a reorganiser.`,
    filesSkippedPdf: (n: number) =>
      `${n} fichier${n > 1 ? "s" : ""} ignore${n > 1 ? "s" : ""} — seuls les fichiers PDF sont pris en charge.`,
    readFailed: (name: string) => `Impossible de lire ${name}.`,
    openFailed: (name: string) =>
      `Impossible d'ouvrir ${name} — il peut etre corrompu ou ne pas etre un PDF valide.`,
    readingFile: (name: string) => `Lecture de ${name}…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Lecture de ${name} (${i} sur ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} fichier${n > 1 ? "s" : ""} ignore${n > 1 ? "s" : ""} — le mot de passe n'a pas ete entre.`,
    encryptedInfo:
      "Ce PDF est chiffre. Vous pouvez le reorganiser ici, mais les fichiers chiffres ne peuvent pas etre reconstruits pour le telechargement — le bouton de telechargement explique comment corriger cela.",
    allSelected: "Toutes les pages selectionnees.",
    rotated: (n: number) => `${n} page${n > 1 ? "s" : ""} pivotee${n > 1 ? "s" : ""}.`,
    duplicated: (n: number) => `${n} page${n > 1 ? "s" : ""} dupliquee${n > 1 ? "s" : ""}.`,
    deleted: (n: number) => `${n} page${n > 1 ? "s" : ""} supprimee${n > 1 ? "s" : ""}.`,
    reversed: "Ordre des pages inverse.",
    restored: "Ordre original des pages restaure.",
    blankAdded: "Page blanche ajoutee a la fin — faites-la glisser n'importe ou.",
    blankDocName: "Page blanche",
    noPagesLeft: "Aucune page restante",
    noPagesHint: "Annulez la suppression, ajoutez d'autres PDF, ou commencez.",
    undo: "Annuler",
    addPdfs: "Ajouter des PDF",
    dropOverlay: "Deposez des PDF pour ajouter leurs pages",
    encryptedTitle: "Ce PDF est chiffre et ne peut pas etre telecharge.",
    encryptedBody1:
      "Vous pouvez reorganiser, faire pivoter et previsualiser les pages, mais un fichier chiffre ne peut pas etre reconstruit sur votre appareil. Supprimez d'abord son mot de passe (ouvrez-le et utilisez ",
    encryptedStrong: "Imprimer → Enregistrer au format PDF",
    encryptedBody2:
      ", ou l'option « supprimer la securite » de votre app PDF), puis ajoutez la copie deverrouillee ici.",
    encryptedDownloadToast:
      "Ce fichier est chiffre et ne peut pas etre reconstruit localement. Supprimez son mot de passe (ouvrez-le, choisissez Imprimer → Enregistrer au format PDF, ou utilisez l'option « supprimer la securite » de votre app PDF), puis ajoutez la copie ici et telechargez.",
    exportFailed:
      "Ce PDF n'a pas pu etre reconstruit sur votre appareil. Il peut utiliser un chiffrement ou une structure que nous ne pouvons pas copier. Essayez un PDF sans mot de passe, ou exportez-le a nouveau depuis votre app PDF d'abord.",
    downloaded: (name: string) => `${name} telecharge.`,
    undone: "Annule.",
    redone: "Retabli.",
  },
} satisfies ToolStrings;

export default fr;