import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'JPG to PDF Converter — Free, Online, No Uploads Required',
    description:
      'Convert JPG images to PDF online free. Combine one or many JPEGs into a single PDF that stays on your device — no upload, no sign-up, no watermark.',
  },
  breadcrumb: 'JPG to PDF',
  h1: 'Convert JPG images to PDF',
  intro:
    'Photographs, scans and screenshots usually arrive as JPGs, and most people need them in one PDF. Add your images, set the page size, and download — the conversion happens inside your browser, so your pictures are never sent to a server.',
  benefits: [
    {
      title: 'Your photos stay put',
      text: 'The images are read, placed and written into a PDF entirely inside your browser tab. Nothing is uploaded, so personal photos and scanned documents are never transmitted anywhere.',
    },
    {
      title: 'No re-compression',
      text: 'JPEG bytes are embedded verbatim rather than decoded and re-encoded. A photo that looked sharp in your gallery looks identical in the PDF, with no second generation of compression artefacts.',
    },
    {
      title: 'One PDF from many images',
      text: 'Add as many JPGs as you like, drag them into the order you want, and get a single tidy document — with A4, Letter or pages trimmed to fit each image exactly.',
    },
  ],
  howTo: {
    heading: 'How to convert JPG to PDF',
    sub: 'Three steps, and your images never leave the device.',
    steps: [
      {
        title: 'Add your JPG images',
        text: 'Drag one or several JPG files onto the tool above, or click to browse. You can also paste an image with Ctrl+V, and add more at any point without starting over.',
      },
      {
        title: 'Set the page setup',
        text: 'Choose A4, Letter, or Fit to image to trim each page down to its picture. Pick portrait, landscape, or let orientation follow the image, and add a margin if you want white space around it.',
      },
      {
        title: 'Download the PDF',
        text: 'Click Download PDF. Your document is built on your device and saved to your downloads — no watermark and no upload step to wait for.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I convert a JPG to a PDF?',
      a: 'Open the tool above, add your JPG image, choose a page size, then click Download PDF. The conversion runs in your browser and the finished file is saved straight to your downloads.',
    },
    {
      q: 'Are my images uploaded anywhere?',
      a: 'No. Every image is decoded, placed and written into the PDF inside your own browser tab, so no copy of your photos is ever sent to a server. You can confirm it yourself: open your browser developer tools, watch the Network tab, and convert an image. Nothing is transmitted.',
    },
    {
      q: 'Will converting JPG to PDF reduce image quality?',
      a: 'No. JPEG data is embedded into the PDF exactly as it appears in your file, rather than being decoded and re-encoded. That avoids a second generation of compression artefacts, which is what usually makes converted photos look soft.',
    },
    {
      q: 'Can I combine several JPGs into one PDF?',
      a: 'Yes. Add as many images as you like, drag them into the order you want, and download one document containing all of them. There is no cap on the number of images.',
    },
    {
      q: 'Which page size should I choose?',
      a: 'Choose A4 or Letter for printing, which gives every image a full standard page. Choose Fit to image when you want the page trimmed tightly to each picture with no surrounding blank space — useful for a photo album or a comic.',
    },
  ],
};

export default en;