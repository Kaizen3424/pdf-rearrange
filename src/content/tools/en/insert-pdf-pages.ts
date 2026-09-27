import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Insert PDF Pages Online Free — Add Pages to a Document',
    description:
      'Insert pages into a PDF online free. Add a blank page, pull pages in from another file, or place them where they belong — private, no uploads, no sign-up.',
  },
  breadcrumb: 'Insert PDF pages',
  h1: 'Insert pages into a PDF',
  intro:
    'Add pages to an existing document without rebuilding it. Drop in a blank sheet, pull pages across from another PDF, and drag everything into position — then download one combined file that never touched a server.',
  benefits: [
    {
      title: 'Blank pages or pages from a file',
      text: 'Insert an empty page for notes, a cover sheet, or a print divider — or add pages from a second document entirely. Both are one click away in the toolbar.',
    },
    {
      title: 'Drop them exactly where they belong',
      text: 'New pages land in the grid like any other, so drag them into position and the surrounding pages shift to make room. No reordering the whole document by hand.',
    },
    {
      title: 'Replace a page in one pass',
      text: 'Delete the outdated page and drag its replacement into the gap. Because pages are copied rather than re-rendered, the replacement keeps its original formatting exactly.',
    },
  ],
  howTo: {
    heading: 'How to insert pages into a PDF',
    sub: 'Add and position new pages in three steps.',
    steps: [
      {
        title: 'Add your document',
        text: 'Drop your PDF onto the tool above, click to browse, or paste it with Ctrl+V. The pages load as a thumbnail grid.',
      },
      {
        title: 'Insert the new pages',
        text: 'Click the "+" button in the toolbar to append a blank page, or use Add PDFs to pull pages in from another document. Each new page appears in the grid, colour-coded by source.',
      },
      {
        title: 'Position and download',
        text: 'Drag the new pages into the right place, then click Download PDF. The combined document is rebuilt on your device and saved — your original file is unchanged.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I insert a blank page into a PDF?',
      a: 'Add your PDF to the tool above and click the "+" button in the toolbar. A blank A4 page is added to the end of the grid — drag it wherever you want it and the surrounding pages move to make room. Download to save the change.',
    },
    {
      q: 'How do I add pages from another PDF?',
      a: 'Use the "Add PDFs" button in the toolbar to choose a second file. All of its pages join the same grid, marked with their own colour so you can tell which document they came from. Drag them into position, then download one combined PDF.',
    },
    {
      q: 'How do I replace a page in a PDF?',
      a: 'Delete the page you are replacing, add the PDF that contains the new page, and drag it into the empty slot. Since every page is copied byte-for-byte rather than re-rendered, the replacement keeps its fonts, images and layout exactly.',
    },
    {
      q: 'Can I insert pages without uploading my document?',
      a: 'Yes — insertion happens entirely in your browser, so your file is never transmitted. Open the Network tab in your browser\'s developer tools while you work and you will see no file requests at all.',
    },
  ],
};

export default en;
