import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Delete PDF Pages Online Free — Remove Pages Instantly',
    description:
      'Delete pages from a PDF online free. Select the pages you want gone and download the rest — private, no uploads, no sign-up, original quality preserved.',
  },
  breadcrumb: 'Delete PDF pages',
  h1: 'Delete pages from a PDF',
  intro:
    'Remove the pages you do not need and keep everything else exactly as it was. Select single pages or batch-delete a whole range, see the result as thumbnails before you commit, and download the trimmed document — with your file never leaving the browser.',
  benefits: [
    {
      title: 'Delete one page or fifty',
      text: 'Hover a thumbnail to delete it individually, or select several pages and remove them in one batch. Ctrl+A selects everything, so clearing a document down to the pages you actually want takes seconds.',
    },
    {
      title: 'Nothing is ever lost',
      text: 'Deletions go into the undo history, so an overzealous cut is never permanent. Press Ctrl+Z to bring pages back, or restore the whole document to its original order with one click.',
    },
    {
      title: 'Unchanged quality',
      text: 'The surviving pages are copied exactly as they were — fonts, images, vectors and links are not re-rendered or re-compressed, so deleting a page costs you nothing in fidelity.',
    },
  ],
  howTo: {
    heading: 'How to delete pages from a PDF',
    sub: 'Remove unwanted pages in three steps.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the file onto the tool above, click to browse, or paste it with Ctrl+V. Every page appears as a thumbnail you can see at a glance.',
      },
      {
        title: 'Select what to remove',
        text: 'Click the trash icon on a page\'s thumbnail to delete just that page. To remove several at once, click the first page, then Shift-click the last one to select the whole range and delete them as a batch.',
      },
      {
        title: 'Download the trimmed PDF',
        text: 'Check the remaining order, then click Download PDF. The shortened document is rebuilt on your device and saved immediately.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I delete pages from a PDF?',
      a: 'Add your PDF to the tool above, hover any page thumbnail and click its delete button. To remove a range, click the first page, Shift-click the last, then press Delete or use the batch delete button. Download the result and you have a PDF with those pages gone.',
    },
    {
      q: 'Can I delete PDF pages without uploading the file?',
      a: 'Yes. The document is read and rewritten entirely inside your browser, so it is never sent to a server. Open your developer tools, watch the Network tab while you delete pages, and you will see zero file traffic.',
    },
    {
      q: 'Can I undo a page deletion?',
      a: 'Every action is recorded. Press Ctrl+Z (Cmd+Z on Mac) to bring deleted pages back, Ctrl+Shift+Z to redo, or use the undo button in the toolbar. The "reset" button restores the entire document to its original page order.',
    },
    {
      q: 'What if I delete too many pages?',
      a: 'Do not worry — deletions are undoable, so nothing is final until you download. If you have already exported, keep the original file and delete the pages from that copy instead.',
    },
  ],
};

export default en;
