import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Crop PDF Pages Online Free — Trim Edges, No Uploads',
    description:
      'Crop PDF pages free. Trim the same margin from every page, or set each edge separately — applied in your browser, no uploads, no sign-up, no watermark.',
  },
  breadcrumb: 'Crop PDF',
  h1: 'Crop the edges off your PDF pages',
  intro:
    'Scanned documents arrive with the scanner bed showing around the page, and slides exported to PDF often carry margins nobody asked for. Trim a fixed amount from each edge and the content fills the page again.',
  benefits: [
    {
      title: 'One crop across every page',
      text: 'Set the four margins once and every page is cropped identically — the right behaviour for a scan or an exported deck, where each page has the same problem.',
    },
    {
      title: 'Edges stay sharp',
      text: 'Cropping changes the page box, not the content. Text is not re-rendered or scaled, so the cropped result is as crisp as the original.',
    },
    {
      title: 'Live feedback in points',
      text: 'Each edge shows its own measurement, so a 36 pt margin and a 12 pt margin are visibly different choices before anything is applied.',
    },
  ],
  howTo: {
    heading: 'How to crop a PDF',
    sub: 'Three steps, applied on your device.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the document onto the tool above or click to browse. The current page size is shown so your margins have context.',
      },
      {
        title: 'Set the four margins',
        text: 'Drag each edge to trim that amount from the top, right, bottom and left. Equal values on all four sides is the common case for scan borders.',
      },
      {
        title: 'Download the cropped PDF',
        text: 'Click Crop pages. The cropped copy is saved to your downloads; the original file is untouched.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I crop a PDF?',
      a: 'Add your PDF, set how much to trim from each edge, then click Crop pages. Every page is cropped by the same margins and the result is downloaded.',
    },
    {
      q: 'Does cropping remove the content outside the box?',
      a: 'No, and it is worth knowing this. Cropping changes which part of the page is displayed — the standard, non-destructive meaning of a PDF crop. A viewer shows only the cropped area, but the underlying content still exists in the file.',
    },
    {
      q: 'What are points?',
      a: 'A point is 1/72 of an inch, the unit PDF page sizes are measured in. As a guide, 36 pt is half an inch and 12 pt is a narrow trim — roughly the border of a scanner bed.',
    },
    {
      q: 'Can I crop just one page?',
      a: 'This version crops every page with the same margins, which is what a scan or a slide deck needs. For a single page, split the document first, crop that page, and merge it back.',
    },
    {
      q: 'Is my PDF uploaded?',
      a: 'No. The crop is applied inside your browser tab and nothing is transmitted.',
    },
  ],
};

export default en;