import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Change PDF Page Size Online Free — Resize to A4 or Letter',
    description:
      'Change the paper size of PDF pages free. Move content onto A4, Letter or A5, portrait or landscape — applied in your browser, never uploaded.',
  },
  breadcrumb: 'Resize PDF',
  h1: 'Resize your PDF pages',
  intro:
    'A document set up for Letter that needs to print on A4, or a landscape deck that must become portrait. Change the paper and orientation once, for every page, and the content moves with it.',
  benefits: [
    {
      title: 'Standard paper sizes',
      text: 'A4, Letter and A5, in either orientation, plus the option to keep the current size and only flip between portrait and landscape.',
    },
    {
      title: 'Every page at once',
      text: 'Mixed-size documents — a Letter page stapled into an A4 report — come out uniform, which is usually the reason for resizing in the first place.',
    },
    {
      title: 'Content stays crisp',
      text: 'Pages are moved onto the new sheet as vectors, so your text stays selectable and sharp at any size. Nothing is turned into a picture.',
    },
  ],
  howTo: {
    heading: 'How to resize PDF pages',
    sub: 'Three steps, applied on your device.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the document onto the tool above. The current page size is displayed so you can see what you are changing from.',
      },
      {
        title: 'Choose the new size',
        text: 'Pick A4, Letter or A5, or keep the current size. Then choose portrait or landscape — or leave the orientation as it is, which keeps each page facing the way it already does. Leave "scale content to fit" on and your content is resized and centred on the new sheet.',
      },
      {
        title: 'Download the resized PDF',
        text: 'Click Resize pages. The resized copy is saved to your downloads and your original is untouched.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I change the page size of a PDF?',
      a: 'Add the PDF above, choose the paper size and orientation you want, then click Resize pages. Every page is resized and the copy is downloaded.',
    },
    {
      q: 'Will my content be scaled to fit?',
      a: 'Yes, by default. Content is resized to fit the new page and centred, keeping its proportions so nothing is stretched. Turn that option off and the page changes size while the content stays exactly where it was, which cuts off whatever no longer fits.',
    },
    {
      q: 'Do links survive resizing?',
      a: 'They do when you resize the page box alone. When content is scaled to fit, each page is redrawn as a single object and any links in that document are not carried over. If the document has links you care about, resize with scaling turned off.',
    },
    {
      q: 'What is the difference between resizing and cropping?',
      a: 'Resizing changes the size of the paper the page sits on. Cropping removes edges from the visible page. Making a page A4 instead of Letter is resizing; cutting a border off a scan is cropping.',
    },
    {
      q: 'Can I make just one page landscape?',
      a: 'This version applies one size and orientation to every page, which keeps a document uniform. For a single page, split the document, resize that page, and merge it back.',
    },
    {
      q: 'Is my PDF uploaded?',
      a: 'No. Resizing is applied inside your browser tab and nothing is transmitted to any server.',
    },
  ],
};

export default en;