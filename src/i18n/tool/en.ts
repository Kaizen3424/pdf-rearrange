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
};

export type ToolStrings = typeof enTool;
export default enTool;
