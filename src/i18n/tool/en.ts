/**
 * English strings for the interactive PDF tool (React components).
 * `ToolStrings` is the contract every other locale in `src/i18n/tool/`
 * must satisfy — missing keys fail `astro check`.
 *
 * Functions handle pluralization and placeholders; each locale implements
 * its own plural rules.
 */
const enTool = {
  dropZone: {
    reading: 'Reading your PDF…',
    processingLocally: 'Processing locally — nothing is uploaded.',
    heading: 'Drop your PDF here',
    or: 'or',
    selectFile: 'Select PDF file',
    hint: 'Add multiple files to merge them · paste with Ctrl+V · unlimited size and pages',
    privacy: 'Your file never leaves this browser',
  },
  toolbar: {
    noFile: 'No file',
    files: (n: number) => `${n} files`,
    pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
    undo: 'Undo (Ctrl+Z)',
    redo: 'Redo (Ctrl+Shift+Z)',
    reverse: 'Reverse page order',
    resetLabel: 'Reset to original order',
    reset: 'Reset',
    thumbnailSize: 'Thumbnail size',
    zoomSm: 'Small thumbnails',
    zoomMd: 'Medium thumbnails',
    zoomLg: 'Large thumbnails',
    addPdfs: 'Add PDFs',
    addBlank: 'Add a blank page',
    confirm: 'Confirm?',
    startNew: 'Start new',
    building: 'Building…',
    download: 'Download PDF',
  },
  pageCard: {
    blankPage: 'blank page',
    sourcePage: (name: string, n: number) => `${name}, original page ${n}`,
    rotated: (deg: number) => `, rotated ${deg} degrees`,
    pageOf: (pos: number, total: number) => `Page ${pos} of ${total}`,
    renderFailed: 'Couldn’t render this page',
    loadingThumbnail: 'Loading page thumbnail',
    blank: 'blank',
    sourceTitle: (name: string, n: number) => `${name} — original page ${n}`,
    rotatedTitle: (deg: number) => `Rotated ${deg}°`,
    preview: 'Preview page',
    rotate: 'Rotate clockwise',
    duplicate: 'Duplicate page',
    delete: 'Delete page',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Picked up page ${n}. Use the arrow keys to move it, Space to drop, Escape to cancel.`,
    dragOver: (n: number) => `Page is now over position ${n}.`,
    dragOut: 'Page is no longer over a drop target.',
    dragEnd: (n: number) => `Moved to position ${n}.`,
    dragCancel: 'Move cancelled.',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Page preview, page ${pos} of ${total}`,
    headerBlank: (pos: number, total: number) => `Page ${pos} of ${total} — blank page`,
    headerFile: (pos: number, total: number, name: string) =>
      `Page ${pos} of ${total} — ${name}`,
    close: 'Close preview',
    prev: 'Previous page',
    next: 'Next page',
    alt: (pos: number) => `Preview of page ${pos}`,
  },
  password: {
    dialogLabel: 'PDF password required',
    heading: 'Password required',
    thisPdf: 'This PDF',
    bodySuffix: 'is protected. Enter its password to open it on your device.',
    retry: 'That password didn\'t work — try again.',
    placeholder: 'PDF password',
    cancel: 'Cancel',
    unlock: 'Unlock',
  },
  success: {
    heading: 'Your PDF is ready',
    body: 'Your rearranged PDF has been downloaded to your device. Nothing was uploaded — everything happened right in your browser.',
    pages: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
    building: 'Building…',
    downloadAgain: 'Download again',
    startNew: 'Start new',
    backToEditing: 'Back to editing',
  },
  rating: {
    label: 'Rate this tool out of 5 stars',
    star: (n: number) => `${n} star${n > 1 ? 's' : ''}`,
    announced: (value: number) =>
      `You rated ${value} out of 5 stars. Thanks for your feedback!`,
    thanks: 'Thanks for your feedback!',
    prompt: 'How did we do?',
  },
  batch: {
    label: 'Actions for selected pages',
    selected: (n: number) => `${n} page${n === 1 ? '' : 's'} selected`,
    rotate: 'Rotate',
    duplicate: 'Duplicate',
    delete: 'Delete',
    all: 'All',
    clear: 'Clear',
  },
  toasts: {
    dismiss: 'Dismiss notification',
  },
  tool: {
    pagesReady: (n: number) => `${n} page${n === 1 ? '' : 's'} ready to rearrange.`,
    filesSkippedPdf: (n: number) =>
      `${n} file${n > 1 ? 's were' : ' was'} skipped — only PDF files are supported.`,
    readFailed: (name: string) => `Couldn't read ${name}.`,
    openFailed: (name: string) =>
      `Couldn't open ${name} — it may be damaged or not a valid PDF.`,
    readingFile: (name: string) => `Reading ${name}…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Reading ${name} (${i} of ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} file${n > 1 ? 's were' : ' was'} skipped — the password wasn't entered.`,
    encryptedInfo:
      'This PDF is encrypted. You can rearrange it here, but encrypted files can\'t be rebuilt for download — the download button will explain how to fix that.',
    allSelected: 'All pages selected.',
    rotated: (n: number) => `Rotated ${n} page${n === 1 ? '' : 's'}.`,
    duplicated: (n: number) => `Duplicated ${n} page${n === 1 ? '' : 's'}.`,
    deleted: (n: number) => `Deleted ${n} page${n === 1 ? '' : 's'}.`,
    reversed: 'Page order reversed.',
    restored: 'Restored the original page order.',
    blankAdded: 'Blank page added at the end — drag it anywhere.',
    blankDocName: 'Blank page',
    noPagesLeft: 'No pages left',
    noPagesHint: 'Undo the deletion, add more PDFs, or start new.',
    undo: 'Undo',
    addPdfs: 'Add PDFs',
    dropOverlay: 'Drop PDFs to add their pages',
    encryptedTitle: 'This PDF is encrypted, so it can\'t be downloaded.',
    encryptedBody1:
      'You can rearrange, rotate and preview the pages, but an encrypted file can\'t be rebuilt on your device. Remove its password first (open it and use ',
    encryptedStrong: 'Print → Save as PDF',
    encryptedBody2:
      ', or your PDF app\'s "remove security" option), then add the unlocked copy here.',
    encryptedDownloadToast:
      'This file is encrypted, so it can\'t be rebuilt locally. Remove its password (open it, choose Print → Save as PDF, or use your PDF app\'s "remove security" option), then add the copy here and download.',
    exportFailed:
      'This PDF couldn\'t be rebuilt on your device. It may use encryption or a structure we can\'t copy. Try a PDF without a password, or export it again from your PDF app first.',
    downloaded: (name: string) => `Downloaded ${name}.`,
    undone: 'Undone.',
    redone: 'Redone.',
  },
  /**
   * Copy the split and extract engines share. Both rebuild documents on the
   * device, so both owe the user the same two honest caveats: no upload, and
   * memory grows with the document.
   */
  shared: {
    memoryNote:
      'Nothing is uploaded, so there is no size limit — but there is no queue either: a very large or high-resolution document uses more of this device’s memory while it is being rebuilt. A few hundred pages is comfortable; a thousand-page scan can be slow on an older phone.',
    byteForByte:
      'Pages are copied straight out of your original file, never re-rendered or re-compressed, so quality is identical to the source.',
    selectAllPages: 'Select all pages',
    clearSelection: 'Clear selection',
    selectedCount: (n: number) => `${n} page${n === 1 ? '' : 's'} selected`,
    nothingSelected: 'No pages selected.',
  },
  split: {
    modeLabel: 'Split mode',
    modeRange: 'By page range',
    modeEvery: 'Every page',
    rangeLabel: 'Page ranges',
    rangePlaceholder: '1-4, 9, 15-20',
    rangeHelp: 'One file per range, in the order you list them.',
    rangeAppend: 'Click a page below to add it to the ranges.',
    orderLocked:
      'Page numbers always follow the order of your original document — splitting never changes your file.',
    pageControlsDisabled:
      'Rotating, duplicating and deleting belong to the editor and do nothing here — splitting never changes your file. Use the Extract PDF pages tool to change which pages go in.',
    errorEmpty: 'Enter at least one page range, or switch to “Every page”.',
    errorZero: 'Page numbers start at 1.',
    errorSyntax: (part: string) =>
      `${part} is not a page number. Use numbers separated by commas and dashes — for example 1-4, 9, 15-20.`,
    errorUnfinished: (part: string) => `${part} is missing a page number.`,
    errorTrailing: 'Remove the extra comma, or finish the last range with a page number.',
    errorReversed: (part: string) =>
      `${part} runs backwards. Write it the other way round, like 3-7.`,
    errorOutOfBounds: (max: number) =>
      `That range goes past the last page. This document has ${max} page${max === 1 ? '' : 's'}.`,
    planLabel: 'Files to be created',
    planEmpty: 'Enter a range to see the files you will get.',
    planItem: (part: number, label: string, pages: number) =>
      `${label} — ${pages} page${pages === 1 ? '' : 's'}`,
    planCount: (n: number) => `${n} file${n === 1 ? '' : 's'} will be created`,
    action: 'Split and download',
    working: 'Splitting…',
    progress: (done: number, total: number) =>
      `Built ${done} of ${total} file${total === 1 ? '' : 's'}.`,
    confirmTitle: (n: number) => `This will create ${n} separate files.`,
    confirmBody:
      'Your browser may ask permission to download several files at once, and building them takes a moment. Continue?',
    confirmAction: (n: number) => `Download ${n} file${n === 1 ? '' : 's'}`,
    cancel: 'Cancel',
    resultsHeading: (n: number) => `${n} file${n === 1 ? '' : 's'} created`,
    resultsHeadingNone: 'Nothing was built',
    resultsBody:
      'Each document was rebuilt on your device and saved separately. Nothing was uploaded, and no page was re-rendered — quality is identical to your original.',
    resultsFailed: (n: number) => `${n} file${n === 1 ? '' : 's'} could not be built`,
    resultPending: 'Not built',
    partialFailure: (done: number, failed: number) =>
      `${done} file${done === 1 ? '' : 's'} created, ${failed} failed. The rest are already in your downloads.`,
    allFailed: 'No files could be built. Your original file is untouched.',
    exportFailedOne: (name: string) => `${name} could not be built.`,
  },
  extract: {
    keepLabel: 'Pages to keep',
    keepHelp:
      'Click a page to keep it. Click the first page and Shift-click the last for a whole range, or select all and then deselect what you do not need.',
    orderLabel: 'Order of the extracted pages',
    orderHelp:
      'Drag a page here to change the order it appears in the new document. Your original file is never modified.',
    orderEmpty: 'No pages selected yet — click a page above to keep it.',
    orderInTray: 'To change the order of the extracted pages, drag them in the list below.',
    orderMoved: (from: number, to: number) =>
      `Moved from position ${from} to position ${to} of the new document.`,
    moveUp: 'Move this page earlier in the new document',
    moveDown: 'Move this page later in the new document',
    remove: 'Leave this page out of the new document',
    pickerLabel: 'Select pages by number',
    pickerHint: 'Every page as a tap target, for keyboard and small screens.',
    pickerPage: (n: number, total: number) => `Page ${n} of ${total}`,
    pickerOn: (n: number) => `Page ${n}, kept`,
    pickerOff: (n: number) => `Page ${n}, not kept`,
    deselectMeansLeaveOut:
      'This tool never deletes pages from your file — the page is simply left out of the new document.',
    action: 'Download extracted PDF',
    zeroSelected: 'Select at least one page to extract.',
    resultsHeading: (n: number) => `${n} page${n === 1 ? '' : 's'} extracted`,
    resultsBody:
      'The new document was rebuilt on your device from the pages you selected, in the order shown. Your original file was not modified.',
  },
};

export type ToolStrings = typeof enTool;
export default enTool;
