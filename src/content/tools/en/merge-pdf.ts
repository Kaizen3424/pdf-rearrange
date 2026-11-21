import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Merge PDF Files Online Free — Combine PDFs Without Uploading',
    description:
      'Merge PDF files online free. Drag several PDFs into one file in any order — 100% private, files never leave your browser. No sign-up, no watermark, no limits.',
  },
  breadcrumb: 'Merge PDF',
  h1: 'Merge PDF files into one document',
  intro:
    'Combine as many PDFs as you like into a single file, in exactly the order you want. Drop them all in at once or add more as you work, then drag the pages into position and download one tidy document — with nothing uploaded to a server.',
  benefits: [
    {
      title: 'Merge in the right order',
      text: 'Add every file first, then drag pages into the sequence you need. Interleave chapters from different documents, put a cover sheet on top, or drop an appendix at the end — the order is entirely yours.',
    },
    {
      title: 'Copied, never re-rendered',
      text: 'Every page is copied straight from your original file rather than re-rendered, so text stays selectable and fonts, vector graphics and images keep their original quality.',
    },
    {
      title: 'No upload, ever',
      text: 'The merge happens inside your browser tab. Your documents are never transmitted, so contracts, invoices and medical records stay on your device.',
    },
  ],
  howTo: {
    heading: 'How to merge PDF files',
    sub: 'Three steps, and the whole thing runs on your own device.',
    steps: [
      {
        title: 'Add your PDFs',
        text: 'Drag one or several PDF files onto the tool above, or click to browse your computer. You can also paste a file with Ctrl+V. Every page from every file lands in a single grid, colour-coded by where it came from.',
      },
      {
        title: 'Set the order',
        text: 'Drag page thumbnails to arrange them however you want. Pages from different files interleave freely, so you can combine chapter 1 of one document with chapter 2 of another.',
      },
      {
        title: 'Download the result',
        text: 'Click Download PDF. The merged document is rebuilt on your device and saved straight to your downloads — no watermark, no waiting in a queue.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I merge PDF files for free?',
      a: 'Open the tool above, add two or more PDFs, then drag the page thumbnails into the order you want and click Download PDF. There is no sign-up, no watermark and no daily limit — the tool is free because your own device does the work instead of a paid server.',
    },
    {
      q: 'Can I merge PDFs without uploading them?',
      a: 'Yes, and that is the only way this tool works. Your files are read, combined and written back entirely inside your browser, so no copy of your document ever reaches a server. You can verify it: open your browser\'s developer tools, watch the Network tab, and merge a few files. Nothing is transmitted.',
    },
    {
      q: 'Is there a limit on how many PDFs I can merge?',
      a: 'No. There is no cap on the number of files or pages, because nothing is being uploaded and there is no server metering your usage. The only real ceiling is your device\'s memory — a very large document will use more RAM while it is being assembled.',
    },
    {
      q: 'Will merging reduce the quality of my PDF?',
      a: 'No. Pages are copied from the originals rather than being re-rendered or re-compressed, so text stays sharp, vector graphics stay vector, and fonts and images keep their original quality.',
    },
    {
      q: 'What happens to bookmarks, links and form fields?',
      a: 'The page content is copied unchanged, but the result is a new PDF assembled from your pages: document-level features such as bookmarks, clickable links and fillable form fields are not carried over. Keep your original file if you still need those.',
    },
  ],
};

export default en;
