import type { ToolStrings } from './en';

const fr = {
  dropZone: {
    reading: "Lecture de votre PDF…",
    processingLocally: "Traitement local — rien n'est téléchargé.",
    heading: "Déposez votre PDF ici",
    or: "ou",
    selectFile: "Sélectionner un fichier PDF",
    hint: "Ajoutez plusieurs fichiers pour les fusionner · collez avec Ctrl+V · taille et nombre de pages illimités",
    privacy: "Votre fichier ne quitte jamais ce navigateur",
  },
  toolbar: {
    noFile: "Aucun fichier",
    files: (n: number) => `${n} fichier${n > 1 ? "s" : ""}`,
    pages: (n: number) => `${n} page${n > 1 ? "s" : ""}`,
    undo: "Annuler (Ctrl+Z)",
    redo: "Rétablir (Ctrl+Shift+Z)",
    reverse: "Inverser l'ordre des pages",
    resetLabel: "Réinitialiser à l'ordre original",
    reset: "Réinitialiser",
    thumbnailSize: "Taille des vignettes",
    zoomSm: "Petites vignettes",
    zoomMd: "Vignettes moyennes",
    zoomLg: "Grandes vignettes",
    addPdfs: "Ajouter des PDF",
    addBlank: "Ajouter une page blanche",
    confirm: "Confirmer ?",
    startNew: "Commencer",
    building: "Construction…",
    download: "Télécharger le PDF",
  },
  pageCard: {
    blankPage: "page blanche",
    sourcePage: (name: string, n: number) => `${name}, page originale ${n}`,
    rotated: (deg: number) => `, pivoté à ${deg} degrés`,
    pageOf: (pos: number, total: number) => `Page ${pos} sur ${total}`,
    renderFailed: "Impossible d'afficher cette page",
    loadingThumbnail: "Chargement de la vignette de la page",
    blank: "blanche",
    sourceTitle: (name: string, n: number) => `${name} — page originale ${n}`,
    rotatedTitle: (deg: number) => `Pivoté à ${deg}°`,
    preview: "Aperçu de la page",
    rotate: "Pivoter dans le sens horaire",
    duplicate: "Dupliquer la page",
    delete: "Supprimer la page",
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Page ${n} soulevée. Utilisez les touches fléchées pour la déplacer, Espace pour déposer, Échap pour annuler.`,
    dragOver: (n: number) => `La page est maintenant sur la position ${n}.`,
    dragOut: "La page n'est plus sur une cible de dépôt.",
    dragEnd: (n: number) => `Déplacée à la position ${n}.`,
    dragCancel: "Déplacement annulé.",
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Aperçu de la page, page ${pos} sur ${total}`,
    headerBlank: (pos: number, total: number) => `Page ${pos} sur ${total} — page blanche`,
    headerFile: (pos: number, total: number, name: string) =>
      `Page ${pos} sur ${total} — ${name}`,
    close: "Fermer l'aperçu",
    prev: "Page précédente",
    next: "Page suivante",
    alt: (pos: number) => `Aperçu de la page ${pos}`,
  },
  password: {
    dialogLabel: "Mot de passe du PDF requis",
    heading: "Mot de passe requis",
    thisPdf: "Ce PDF",
    bodySuffix: "est protégé. Entrez son mot de passe pour l'ouvrir sur votre appareil.",
    retry: "Ce mot de passe n'a pas fonctionné — réessayez.",
    placeholder: "Mot de passe du PDF",
    cancel: "Annuler",
    unlock: "Déverrouiller",
  },
  success: {
    heading: "Votre PDF est prêt",
    body: "Votre PDF réorganisé a été téléchargé sur votre appareil. Rien n'a été téléchargé — tout s'est passé directement dans votre navigateur.",
    pages: (n: number) => `${n} page${n > 1 ? "s" : ""}`,
    building: "Construction…",
    downloadAgain: "Télécharger à nouveau",
    startNew: "Commencer",
    backToEditing: "Retour à l'édition",
  },
  rating: {
    label: "Notez cet outil sur 5 étoiles",
    star: (n: number) => `${n} étoile${n > 1 ? "s" : ""}`,
    announced: (value: number) =>
      `Vous avez attribué la note de ${value} sur 5 étoiles. Merci pour votre retour !`,
    thanks: "Merci pour votre retour !",
    prompt: "Comment s'est passée votre expérience ?",
  },
  batch: {
    label: "Actions pour les pages sélectionnées",
    selected: (n: number) => `${n} page${n > 1 ? "s" : ""} sélectionnée${n > 1 ? "s" : ""}`,
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
    pagesReady: (n: number) => `${n} page${n > 1 ? "s" : ""} prête${n > 1 ? "s" : ""} à réorganiser.`,
    filesSkippedPdf: (n: number) =>
      `${n} fichier${n > 1 ? "s" : ""} ignoré${n > 1 ? "s" : ""} — seuls les fichiers PDF sont pris en charge.`,
    readFailed: (name: string) => `Impossible de lire ${name}.`,
    openFailed: (name: string) =>
      `Impossible d'ouvrir ${name} — il peut être corrompu ou ne pas être un PDF valide.`,
    readingFile: (name: string) => `Lecture de ${name}…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Lecture de ${name} (${i} sur ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} fichier${n > 1 ? "s" : ""} ignoré${n > 1 ? "s" : ""} — le mot de passe n'a pas été entré.`,
    encryptedInfo:
      "Ce PDF est chiffré. Vous pouvez le réorganiser ici, mais les fichiers chiffrés ne peuvent pas être reconstruits pour le téléchargement — le bouton de téléchargement explique comment corriger cela.",
    allSelected: "Toutes les pages sélectionnées.",
    rotated: (n: number) => `${n} page${n > 1 ? "s" : ""} pivotée${n > 1 ? "s" : ""}.`,
    duplicated: (n: number) => `${n} page${n > 1 ? "s" : ""} dupliquée${n > 1 ? "s" : ""}.`,
    deleted: (n: number) => `${n} page${n > 1 ? "s" : ""} supprimée${n > 1 ? "s" : ""}.`,
    reversed: "Ordre des pages inversé.",
    restored: "Ordre original des pages restauré.",
    blankAdded: "Page blanche ajoutée à la fin — faites-la glisser n'importe où.",
    blankDocName: "Page blanche",
    noPagesLeft: "Aucune page restante",
    noPagesHint: "Annulez la suppression, ajoutez d'autres PDF, ou commencez.",
    undo: "Annuler",
    addPdfs: "Ajouter des PDF",
    dropOverlay: "Déposez des PDF pour ajouter leurs pages",
    encryptedTitle: "Ce PDF est chiffré et ne peut pas être téléchargé.",
    encryptedBody1:
      "Vous pouvez réorganiser, faire pivoter et prévisualiser les pages, mais un fichier chiffré ne peut pas être reconstruit sur votre appareil. Supprimez d'abord son mot de passe (ouvrez-le et utilisez ",
    encryptedStrong: "Imprimer → Enregistrer au format PDF",
    encryptedBody2:
      ", ou l'option « supprimer la sécurité » de votre app PDF), puis ajoutez la copie déverrouillée ici.",
    encryptedDownloadToast:
      "Ce fichier est chiffré et ne peut pas être reconstruit localement. Supprimez son mot de passe (ouvrez-le, choisissez Imprimer → Enregistrer au format PDF, ou utilisez l'option « supprimer la sécurité » de votre app PDF), puis ajoutez la copie ici et téléchargez.",
    exportFailed:
      "Ce PDF n'a pas pu être reconstruit sur votre appareil. Il peut utiliser un chiffrement ou une structure que nous ne pouvons pas copier. Essayez un PDF sans mot de passe, ou exportez-le à nouveau depuis votre app PDF d'abord.",
    downloaded: (name: string) => `${name} téléchargé.`,
    undone: "Annulé.",
    redone: "Rétabli.",
  },
  shared: {
    memoryNote:
      "Rien n'est téléchargé, donc il n'y a pas de limite de taille — mais il n'y a pas non plus de file d'attente : un document très volumineux ou en très haute résolution consomme davantage de mémoire de votre appareil pendant sa reconstruction. Quelques centaines de pages passent sans problème, un scan de mille pages peut sembler lent sur un téléphone ancien.",
    byteForByte:
      "Les pages sont copiées octet par octet directement depuis votre fichier d'origine, jamais recalculées ni recompressées, si bien que la qualité est identique à celle de la source.",
    selectAllPages: "Sélectionner toutes les pages",
    clearSelection: "Effacer la sélection",
    selectedCount: (n: number) => `${n} page${n > 1 ? "s" : ""} sélectionnée${n > 1 ? "s" : ""}`,
    nothingSelected: "Aucune page sélectionnée.",
  },
  split: {
    modeLabel: "Mode de division",
    modeRange: "Par plage de pages",
    modeEvery: "Chaque page",
    rangeLabel: "Plages de pages",
    rangePlaceholder: "1-4, 9, 15-20",
    rangeHelp: "Un fichier par plage, dans l'ordre où vous les saisissez.",
    rangeAppend: "Cliquez sur une page ci-dessous pour l'ajouter aux plages.",
    orderLocked:
      "Les numéros de page suivent toujours l'ordre de votre document d'origine — diviser ne modifie jamais votre fichier.",
    pageControlsDisabled:
      "La rotation, la duplication et la suppression appartiennent à l'éditeur et ne font rien ici — diviser ne modifie jamais votre fichier. Utilisez l'outil « Extraire des pages d'un PDF » pour changer les pages à inclure.",
    errorEmpty: "Saisissez au moins une plage de pages, ou basculez sur « Chaque page ».",
    errorZero: "Les numéros de page commencent à 1.",
    errorSyntax: (part: string) =>
      `${part} n'est pas un numéro de page. Utilisez des nombres séparés par des virgules et des tirets — par exemple 1-4, 9, 15-20.`,
    errorUnfinished: (part: string) => `Il manque un numéro de page à ${part}.`,
    errorTrailing:
      "Supprimez la virgule en trop, ou terminez la dernière plage par un numéro de page.",
    errorReversed: (part: string) =>
      `${part} est à l'envers. Écrivez-la dans l'autre sens, comme 3-7.`,
    errorOutOfBounds: (max: number) =>
      `Cette plage dépasse la dernière page. Ce document compte ${max} page${max > 1 ? "s" : ""}.`,
    planLabel: "Fichiers à créer",
    planEmpty: "Saisissez une plage pour voir les fichiers que vous obtiendrez.",
    planItem: (part: number, label: string, pages: number) =>
      `${label} — ${pages} page${pages > 1 ? "s" : ""}`,
    planCount: (n: number) => `${n} fichier${n > 1 ? "s seront créés" : " sera créé"}`,
    action: "Diviser et télécharger",
    working: "Division en cours…",
    progress: (done: number, total: number) =>
      `${done} fichier${total > 1 ? "s" : ""} créé${total > 1 ? "s" : ""} sur ${total}.`,
    confirmTitle: (n: number) =>
      `Cela créera ${n} fichier${n > 1 ? "s" : ""} distinct${n > 1 ? "s" : ""}.`,
    confirmBody:
      "Votre navigateur peut demander l'autorisation de télécharger plusieurs fichiers à la fois, et leur création prend un moment. Continuer ?",
    confirmAction: (n: number) => `Télécharger ${n} fichier${n > 1 ? "s" : ""}`,
    cancel: "Annuler",
    resultsHeading: (n: number) => `${n} fichier${n > 1 ? "s" : ""} créé${n > 1 ? "s" : ""}`,
    resultsHeadingNone: "Rien n'a été créé",
    resultsBody:
      "Chaque document a été reconstruit sur votre appareil et enregistré séparément. Rien n'a été téléchargé, et aucune page n'a été recalculée — la qualité est identique à celle de votre original.",
    resultsFailed: (n: number) =>
      `${n} fichier${n > 1 ? "s n'ont" : " n'a"} pas pu être créé${n > 1 ? "s" : ""}`,
    resultPending: "Non créé",
    partialFailure: (done: number, failed: number) =>
      `${done} fichier${done > 1 ? "s créés" : " créé"}, ${failed} en échec. Les autres sont déjà dans vos téléchargements.`,
    allFailed: "Aucun fichier n'a pu être créé. Votre fichier d'origine est intact.",
    exportFailedOne: (name: string) => `${name} n'a pas pu être créé.`,
  },
  extract: {
    keepLabel: "Pages à conserver",
    keepHelp:
      "Cliquez sur une page pour la conserver. Cliquez sur la première et Maj-cliquez sur la dernière pour prendre toute une plage, ou sélectionnez toutes les pages puis décochez ce dont vous n'avez pas besoin.",
    orderLabel: "Ordre des pages extraites",
    orderHelp:
      "Faites glisser une page ici pour changer l'ordre dans lequel elle apparaîtra dans le nouveau document. Votre fichier d'origine n'est jamais modifié.",
    orderEmpty:
      "Aucune page sélectionnée pour l'instant — cliquez sur une page ci-dessus pour la conserver.",
    orderInTray:
      "Pour changer l'ordre des pages extraites, faites-les glisser dans la liste ci-dessous.",
    orderMoved: (from: number, to: number) =>
      `Déplacée de la position ${from} à la position ${to} du nouveau document.`,
    moveUp: "Déplacer cette page plus tôt dans le nouveau document",
    moveDown: "Déplacer cette page plus tard dans le nouveau document",
    remove: "Laisser cette page hors du nouveau document",
    pickerLabel: "Sélectionner les pages par numéro",
    pickerHint:
      "Toutes les pages comme cible tactile, pour le clavier et les petits écrans.",
    pickerPage: (n: number, total: number) => `Page ${n} sur ${total}`,
    pickerOn: (n: number) => `Page ${n}, conservée`,
    pickerOff: (n: number) => `Page ${n}, non conservée`,
    deselectMeansLeaveOut:
      "Cet outil ne supprime jamais de pages de votre fichier — la page est simplement laissée hors du nouveau document.",
    action: "Télécharger le PDF extrait",
    zeroSelected: "Sélectionnez au moins une page à extraire.",
    resultsHeading: (n: number) => `${n} page${n > 1 ? "s" : ""} extraite${n > 1 ? "s" : ""}`,
    resultsBody:
      "Le nouveau document a été reconstruit sur votre appareil à partir des pages que vous avez sélectionnées, dans l'ordre affiché. Votre fichier d'origine n'a pas été modifié.",
  },
} satisfies ToolStrings;

export default fr;
