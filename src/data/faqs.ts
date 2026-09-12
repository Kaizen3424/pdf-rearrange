export interface FaqEntry {
  q: string;
  a: string;
}

export const faqs: FaqEntry[] = [
  {
    q: 'How to rearrange pages in a PDF?',
    a: 'Open the tool at the top of this page and add your PDF, then drag any page thumbnail to its new position — the surrounding pages shift automatically to make room. Rotate, duplicate or delete pages if needed, and click "Download PDF" to save the reordered file. The whole process takes under a minute and your file never leaves your device.',
  },
  {
    q: 'How to rearrange pages in a PDF for free?',
    a: 'Use a free browser-based tool like this one: add your PDF, drag the page thumbnails into the order you want, and download the result. There is no sign-up, no watermark, no page limit and no hidden premium tier — the tool stays free because all processing happens on your own device instead of on paid servers.',
  },
  {
    q: 'How to rearrange PDF pages?',
    a: 'The easiest way is drag-and-drop: your PDF appears as a grid of page thumbnails, and you drag each page to where it belongs. Because the editor runs entirely in your browser, there is nothing to install and no file is uploaded anywhere. When the order looks right, click "Download PDF" to save the new file.',
  },
  {
    q: 'How to rearrange pages in a PDF on iPhone?',
    a: 'Open this page in Safari and tap to add your PDF — from the Files app, Mail or any other app that shares PDFs. Press and hold a page thumbnail briefly to lift it, drag it into place, then tap "Download PDF" and save the result back to Files or share it directly. No app install is needed, and the same flow works on iPad.',
  },
  {
    q: 'Can I rearrange PDF pages on mobile?',
    a: 'Yes. The editor is built touch-first: press and hold a thumbnail to lift it, drag it to a new spot, and use the large rotate, duplicate and delete buttons within easy reach. It works in Safari on iOS and Chrome on Android, and the finished PDF saves straight back to your phone or tablet.',
  },
  {
    q: 'How do I replace a PDF page without losing formatting?',
    a: 'Delete the page you want to replace, add the PDF that contains the new page, and drag it into the empty slot. Because every page is copied byte-for-byte rather than re-rendered, fonts, images, vectors, links and metadata are preserved exactly — nothing is re-compressed or restyled.',
  },
  {
    q: 'How do I swap, add, remove, and rotate PDF pages?',
    a: 'All four actions live in the toolbar. Swap two pages by dragging one thumbnail onto the other to exchange their positions. Add pages by inserting blank ones or merging in another PDF, remove pages with the delete action, and rotate pages in 90° steps — individually or as a multi-select batch.',
  },
  {
    q: 'How do I organize PDF files?',
    a: 'Start by combining the files: add every PDF you need and they merge into a single page grid. Then organize at the page level — group related pages together, move whole sections, delete what you no longer need, and insert blank pages as separators. When everything sits in the right place, download one tidy PDF.',
  },
  {
    q: 'How to rearrange PDF pages for free?',
    a: 'Free PDF tools come in two kinds: online editors that upload your file to their servers, and client-side tools like this one that process everything locally. The second kind is genuinely free — no trial, no watermark, no daily quota — because your own device does the work. Add a PDF, reorder the thumbnails, and download at no cost.',
  },
  {
    q: 'How can I rearrange pages in a PDF document?',
    a: 'Load your document into the editor, then drag thumbnails into the new order — or select several pages at once and move them together. Every step is undoable with Ctrl+Z (Cmd+Z on Mac), and you can restore the original order with one click, so experimenting is risk-free. You only commit when you download.',
  },
  {
    q: 'Are my files uploaded to a server?',
    a: 'No. Rearrange PDF runs entirely in your browser using JavaScript. Your PDF is read, displayed and rebuilt on your own device — no file content is ever transmitted. You can verify this yourself: open your browser\u2019s developer tools, watch the Network tab, and rearrange a few pages. Nothing is sent.',
  },
  {
    q: 'Can I merge and rearrange multiple PDFs at once?',
    a: 'Yes. Add as many PDFs as you like — drag in several files at once, or use "Add PDFs" while editing — and they merge into one page grid, with badges showing which file each page came from. You can then combine and rearrange pages from every document however you like before downloading a single PDF.',
  },
  {
    q: 'Can I undo a mistake?',
    a: 'Yes. Every action — reorder, rotate, delete, duplicate — is recorded in history. Press Ctrl+Z (or Cmd+Z on Mac) to undo, Ctrl+Shift+Z to redo, or use the undo buttons in the toolbar. You can also restore the original page order with one click.',
  },
  {
    q: 'What about password-protected PDFs?',
    a: 'PDFs protected with an owner password (restrictions on editing or printing) work normally. PDFs that require a password to open can be rearranged if you enter the password, but exporting fully encrypted files locally is not supported yet — you\u2019ll see a clear warning if that applies to your file.',
  },
];
