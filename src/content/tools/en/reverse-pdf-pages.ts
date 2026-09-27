import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Reverse PDF Pages Online Free — Flip Page Order Instantly',
    description:
      'Reverse the page order of a PDF online free. One click flips back-to-front scans the right way round — private, no uploads, no sign-up, no quality loss.',
  },
  breadcrumb: 'Reverse PDF pages',
  h1: 'Reverse the page order of a PDF',
  intro:
    'Fix a document that is entirely the wrong way round. One click flips a back-to-front scan so page 1 ends up first and the last page ends up last — no dragging required, and your file never leaves the browser.',
  benefits: [
    {
      title: 'One click, whole document',
      text: 'A full reversal takes a single click rather than dragging a hundred thumbnails past each other. Ideal for duplex scans that came out back-to-front, or for a booklet assembled in the wrong sequence.',
    },
    {
      title: 'Preview before you commit',
      text: 'The thumbnails reorder immediately, so you can confirm the sequence is right before downloading. Flip it back with one more click if not — reversal is just another undoable step.',
    },
    {
      title: 'Unchanged quality',
      text: 'Only the sequence of pages changes. Each page is copied exactly as it was, so text, images, vector graphics and links are identical to the original file.',
    },
  ],
  howTo: {
    heading: 'How to reverse PDF pages',
    sub: 'Three steps to fix a back-to-front document.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the file onto the tool above, click to browse, or paste it with Ctrl+V. The pages appear as thumbnails in their current — wrong — order.',
      },
      {
        title: 'Reverse the order',
        text: 'Click the reverse button in the toolbar. Every page flips position instantly: the last page becomes first, the first becomes last, and everything in between mirrors accordingly.',
      },
      {
        title: 'Download the corrected PDF',
        text: 'Check the new sequence in the grid, then click Download PDF. The reordered document is rebuilt on your device and saved immediately.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I reverse the page order of a PDF?',
      a: 'Add your PDF to the tool above and click the reverse button in the toolbar. The entire document flips in one step — last page first, first page last. Download the result and the file is saved in the corrected order.',
    },
    {
      q: 'Why is my scanned PDF back-to-front?',
      a: 'Automatic document feeders on scanners and copiers often stack pages face-up, so the scanner reads them from the last sheet backwards. The result looks fine in the thumbnail preview of the scanning app but prints in reverse. Reversing the page order is the standard fix and takes one click here.',
    },
    {
      q: 'Can I reverse PDF pages without uploading the file?',
      a: 'Yes. Reordering happens entirely inside your browser tab, so no copy of your document is ever sent anywhere. Watch the Network tab in your developer tools while you work if you want to confirm it for yourself.',
    },
    {
      q: 'Do I need to drag every page to fix a reversed scan?',
      a: 'No — that is the point of the reverse button. A 300-page scan is fixed in a single click rather than 299 separate drags. If only a few pages are out of place rather than the whole document, drag just those thumbnails instead.',
    },
  ],
};

export default en;
