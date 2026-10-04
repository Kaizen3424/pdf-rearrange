import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Convert PDF to PNG Online Free — Lossless, No Uploads',
    description:
      'Convert PDF pages to PNG images free in one ZIP. Lossless, transparent background optional, rendered on your device — no uploads, no sign-up.',
  },
  breadcrumb: 'PDF to PNG',
  h1: 'Convert PDF pages to PNG images',
  intro:
    'PNG keeps every pixel exactly as rendered, which makes it the right choice when the image will be edited, composited, or must not show compression artefacts. Convert any PDF and take away every page as a PNG.',
  benefits: [
    {
      title: 'Lossless, every time',
      text: 'PNG compresses without discarding information, so text edges stay sharp and flat colours stay flat. Nothing is smoothed away the way JPG does.',
    },
    {
      title: 'Transparent background if you need it',
      text: 'PDF pages normally paint an opaque background, but you can export with transparency instead — useful when the images are going to be layered over something else.',
    },
    {
      title: 'All pages in one archive',
      text: 'Convert a long document in one go. Every page becomes page-1.png, page-2.png and so on, packed into a single ZIP.',
    },
  ],
  howTo: {
    heading: 'How to convert PDF to PNG',
    sub: 'Three steps, with the PDF rendered locally.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop a file onto the tool above or click to browse. You will see the page count as soon as it has been read.',
      },
      {
        title: 'Choose a resolution',
        text: '72, 150 or 300 DPI. PNG files are larger than JPG because nothing is discarded, so a lower resolution is a reasonable way to keep the archive manageable.',
      },
      {
        title: 'Download the ZIP',
        text: 'Click Convert to images and your PNG pages arrive together in a single archive.',
      },
    ],
  },
  faq: [
    {
      q: 'Should I use PNG or JPG?',
      a: 'Use PNG when the image will be edited, layered or needs to stay sharp — it is lossless. Use JPG when you are sharing or uploading and file size matters more than perfect fidelity. Converting the same page both ways is a quick way to see the difference.',
    },
    {
      q: 'How do I convert a PDF to PNG?',
      a: 'Add your PDF above, pick a resolution, then click Convert to images. Each page is rendered as a PNG and delivered in one ZIP.',
    },
    {
      q: 'Is the PDF uploaded?',
      a: 'No. Rendering happens inside your browser tab. Nothing is transmitted to any server, which you can confirm in the Network tab of your developer tools.',
    },
    {
      q: 'Why are the PNG files so large?',
      a: 'Because PNG keeps all detail rather than approximating it, and a high resolution means a lot of pixels. Dropping from 300 DPI to 150 DPI cuts the pixel count by about four times with no loss of method.',
    },
    {
      q: 'Can I get a transparent background?',
      a: 'Yes — in the background setting, choose Transparent. Note that a PDF page usually draws its own white background, so you will only see transparency where the page genuinely leaves the background unpainted.',
    },
  ],
};

export default en;