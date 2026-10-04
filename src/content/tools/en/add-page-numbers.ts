import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Add Page Numbers to a PDF Online — Free, No Uploads',
    description:
      'Add page numbers to PDF pages free. Choose the format, position and starting number — applied on your device, no uploads, no sign-up, no watermark.',
  },
  breadcrumb: 'Add page numbers',
  h1: 'Add page numbers to your PDF',
  intro:
    'Numbering a document by hand is tedious and easy to get wrong once pages move. Add the numbers once and they stay correct: set a format like "Page 3 of 12", pick where it goes, and download.',
  benefits: [
    {
      title: 'A format you control',
      text: 'Use {n} for the current page and {total} for the page count, so "Page {n} of {total}", "{n} / {total}" or just "{n}" all work. The numbers are text, not an image overlay.',
    },
    {
      title: 'Number from any starting point',
      text: 'If page 1 is a cover and the body should start at 1 on the second sheet, set the starting number and it lines up. Useful when combining chapters into one document.',
    },
    {
      title: 'Positions that read properly',
      text: 'Bottom centre for a formal report, bottom right for a manual, top left if that matches your existing template. Six anchors, plus a size you can match to the document.',
    },
  ],
  howTo: {
    heading: 'How to add page numbers to a PDF',
    sub: 'Three steps, on your own device.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the document onto the tool above, or click to browse. The page count appears so you know the range you are numbering.',
      },
      {
        title: 'Choose the format and position',
        text: 'Set the number format, where the numbers sit, how large they are, and which page to start counting from. A live example is shown in the format field.',
      },
      {
        title: 'Download the numbered PDF',
        text: 'Click Add page numbers and the numbered copy is saved to your downloads. Your original file is unchanged.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I add page numbers to a PDF?',
      a: 'Add the PDF above, choose a format and position, then click Add page numbers. Every page is numbered and the copy is downloaded.',
    },
    {
      q: 'Can I start numbering from a number other than 1?',
      a: 'Yes. Set the starting number and the first page you upload gets that value. It is the straightforward way to number several documents as one continuous sequence.',
    },
    {
      q: 'Will the page numbers be selectable text?',
      a: 'Yes. They are embedded as real text, so they can be selected and searched, and they do not blur when printed.',
    },
    {
      q: 'Can I number only certain pages?',
      a: 'This version numbers every page. To number selectively, split the document first and apply numbering to the parts that need it.',
    },
    {
      q: 'Is my PDF uploaded?',
      a: 'No. Numbering happens entirely inside your browser tab. Nothing is transmitted, so an unpublished report stays unpublished.',
    },
  ],
};

export default en;