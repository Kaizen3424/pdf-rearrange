import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Split PDF Online Free — Extract Pages or Split Every Page',
    description:
      'Split a PDF online free. Break one document into separate files by range, or extract every page individually — private, no uploads, no sign-up, no watermark.',
  },
  breadcrumb: 'Split PDF',
  h1: 'Split a PDF into separate documents',
  intro:
    'Break one PDF into as many files as you need. Choose a page range and get one document back, or split every page into its own file in one pass. Nothing is uploaded, and the output pages are byte-for-byte copies of your originals.',
  benefits: [
    {
      title: 'Split by range or entirely',
      text: 'Enter "1-5, 12, 20-30" to pull out exactly the pages you need as one file, or split every page into a separate document. Both modes run in the same tab.',
    },
    {
      title: 'See the pages first',
      text: 'Every page renders as a live thumbnail before you choose, so you are not guessing at page numbers. Flip through the full-size preview to make sure you have the right boundaries.',
    },
    {
      title: 'No upload, no limits',
      text: 'Splitting happens on your own device, so there is no file-size ceiling and no queue. Close the tab when you are done and the file is gone from memory — the server never had a copy to keep.',
    },
  ],
  howTo: {
    heading: 'How to split a PDF',
    sub: 'Choose your pages and download. That is the whole job.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the file onto the tool above, click to browse, or paste it with Ctrl+V. The page count and thumbnails appear immediately.',
      },
      {
        title: 'Choose what to split out',
        text: 'Type page ranges using commas and dashes — for example 1-4, 9, 15-20 — or switch to "every page" to get one file per page. Ranges are validated as you type, so a typo will not silently drop pages.',
      },
      {
        title: 'Download your files',
        text: 'Each resulting document is rebuilt on your device and downloaded. Splitting a document never re-compresses anything, so quality is identical to the original.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I split a PDF into separate files?',
      a: 'Add your PDF above, choose either a page range like 1-5 or "every page", then click the split button. Each output document is generated on your device and saved individually, so you get one file per range or per page.',
    },
    {
      q: 'How do I split by page range?',
      a: 'Type ranges using commas and dashes — for example 1-4, 9, 15-20 — and each one becomes a separate PDF in the order you list them. A single range like 1-4 gives you one output file; separate them with commas when you want several files at once.',
    },
    {
      q: 'Can I split a large PDF?',
      a: 'Yes, and there is no artificial size limit because nothing is uploaded. Very large or high-resolution documents use more device memory while they are processed, so a few hundred pages is comfortable and a thousand-page scan may feel slow on an older phone.',
    },
    {
      q: 'Does splitting reduce PDF quality?',
      a: 'No. Pages are copied byte-for-byte from the original file rather than being re-rendered, so the split output is identical in quality to the source — text stays selectable and vector graphics stay sharp.',
    },
  ],
};

export default en;
