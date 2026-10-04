import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'PNG to PDF Converter — Free, Online, Nothing Uploaded',
    description:
      'Convert PNG images to PDF online free. Combine PNGs into one PDF with transparency handled correctly — no uploads, no sign-up, no watermark.',
  },
  breadcrumb: 'PNG to PDF',
  h1: 'Convert PNG images to PDF',
  intro:
    'PNGs are what you get from screenshots, design exports and anything with a transparent background. Add them here, keep the ordering you want, and download a single PDF — converted on your device, never uploaded.',
  benefits: [
    {
      title: 'Transparency handled properly',
      text: 'A PNG with an alpha channel is flattened onto a clean white page instead of being dropped or left as a transparent hole, so logos and cut-outs come out looking the way they did on screen.',
    },
    {
      title: 'Screenshots in their original form',
      text: 'PNG data is embedded into the PDF without re-encoding, so crisp text in a screenshot stays sharp. Nothing is downsampled to make the file smaller than it needs to be.',
    },
    {
      title: 'Combine them all',
      text: 'Add any number of PNGs, drag them into sequence, and download one document. Choose A4, Letter, or trim each page to fit its image exactly.',
    },
  ],
  howTo: {
    heading: 'How to convert PNG to PDF',
    sub: 'Three steps, with the conversion running on your own device.',
    steps: [
      {
        title: 'Add your PNG images',
        text: 'Drag one or several PNG files onto the tool above, click to browse, or paste one with Ctrl+V. Screenshots and exported graphics both work.',
      },
      {
        title: 'Choose the page setup',
        text: 'Pick A4 or Letter for print, or Fit to image to trim each page tightly to the picture. Choose an orientation or let it follow each image, and set a margin if you want breathing room.',
      },
      {
        title: 'Download the PDF',
        text: 'Click Download PDF. The file is assembled on your device and saved to your downloads — no watermark, and nothing to upload.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I convert a PNG to a PDF?',
      a: 'Add your PNG images to the tool above, choose a page size, then click Download PDF. Everything runs in your browser and the result is saved to your downloads folder.',
    },
    {
      q: 'What happens to transparent areas in a PNG?',
      a: 'They are flattened onto a white page. PDF pages are not transparent, so there is nowhere for the alpha channel to go; compositing onto white is what preserves how the image looked on your screen. If you need the background to be a different colour, choose it before converting.',
    },
    {
      q: 'Will converting reduce the quality of a screenshot?',
      a: 'No. PNG data is embedded exactly as stored, without re-encoding, so small text in a screenshot stays legible. Images are never scaled up either — a 400px-wide screenshot stays 400 pixels wide rather than being stretched to fill an A4 page.',
    },
    {
      q: 'Can I put several PNGs into one PDF?',
      a: 'Yes. Add as many as you like, drag them into the order you want, and download a single PDF containing all of them. There is no limit on the number of images.',
    },
    {
      q: 'Are my PNGs uploaded?',
      a: 'No. Decoding and PDF assembly both happen inside your browser tab. Open the developer tools Network tab while you convert and you will see no request carrying your files.',
    },
  ],
};

export default en;