import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Extract PDF Pages Online Free — Save Only the Pages You Need',
    description:
      'Extract pages from a PDF online free. Tick the pages you want and get a PDF with just those — private, no uploads, no sign-up, no watermark, no quality loss.',
  },
  breadcrumb: 'Extract PDF pages',
  h1: 'Extract pages from a PDF',
  intro:
    'Keep only the pages that matter and get a clean new document. Tick the pages you want — or a whole range — and the tool builds a PDF containing exactly those pages, in the order you choose, without uploading your file anywhere.',
  benefits: [
    {
      title: 'Tick, don\'t retype',
      text: 'Select pages directly on the thumbnails instead of typing page numbers and hoping you got the range right. Shift-click to select a block of pages, or Ctrl+A to start over.',
    },
    {
      title: 'Rearrange while you extract',
      text: 'Selected pages can be dragged into a different order before you export, so you can pull three pages out of a report and file them in the sequence you actually want.',
    },
    {
      title: 'Byte-for-byte copies',
      text: 'Extracted pages are copied straight from the source file, not re-rendered. Fonts, vector graphics, images and links are preserved exactly, with no re-compression.',
    },
  ],
  howTo: {
    heading: 'How to extract pages from a PDF',
    sub: 'Select the pages you want and download the new document.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the file onto the tool above, click to browse, or paste it with Ctrl+V. All pages appear as thumbnails with their numbers.',
      },
      {
        title: 'Select the pages to keep',
        text: 'Click each page you want to extract. Click the first and Shift-click the last to grab a whole range, or use Ctrl+A to select every page and then deselect what you do not need.',
      },
      {
        title: 'Download the extracted PDF',
        text: 'The new document is assembled on your device from only the pages you selected, then downloaded. The original file is never modified.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I extract specific pages from a PDF?',
      a: 'Add your PDF above, then click the pages you want to keep on the thumbnail grid. Click the first page and Shift-click the last to select a range, or select pages individually. Click Download PDF and you get a new document containing only those pages, in the order shown.',
    },
    {
      q: 'What is the difference between extracting and deleting pages?',
      a: 'The result is the same size document either way. Extracting produces a new PDF from the pages you keep, which leaves your original file untouched on disk. Deleting removes pages inside the editor and overwrites the result when you download. Use extract when you want to keep the original intact; use delete when you are working on a copy anyway.',
    },
    {
      q: 'Can I extract pages without uploading the PDF?',
      a: 'Yes. The document is read and rebuilt entirely inside your browser, so no copy is transmitted. You can watch the Network tab in your browser\'s developer tools while you work and see that nothing is sent.',
    },
    {
      q: 'Can I reorder the pages I extract?',
      a: 'Yes. Once selected, the pages can be dragged into any sequence before you download, so you can pull a few pages out of a long report and file them in the order that suits you rather than the order they appeared in.',
    },
  ],
};

export default en;
