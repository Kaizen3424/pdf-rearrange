import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'PDF to JPG Converter — Free, Every Page as an Image',
    description:
      'Convert PDF pages to JPG images free, in one ZIP. Choose 72, 150 or 300 DPI and the quality you need — rendered on your device, never uploaded.',
  },
  breadcrumb: 'PDF to JPG',
  h1: 'Convert PDF pages to JPG images',
  intro:
    'You need a PDF page as a photo — to put in a slide, upload somewhere that rejects PDFs, or share in a chat. Pick your resolution, convert, and every page comes back as a JPG inside a single ZIP.',
  benefits: [
    {
      title: 'Pick the resolution you need',
      text: '72 DPI for a quick look on screen, 150 for documents and email, 300 for printing. The tool shows you the exact pixel size before you render anything, so there are no surprises.',
    },
    {
      title: 'One ZIP, not twenty downloads',
      text: 'Every page is converted and packed into a single archive. Browsers block repeated automatic downloads, so one file is both the practical option and the one that actually works.',
    },
    {
      title: 'Rendered where your file already is',
      text: 'Your PDF is opened and drawn inside your browser. Nothing is sent anywhere, which matters when the document is a contract or a medical record.',
    },
  ],
  howTo: {
    heading: 'How to convert PDF to JPG',
    sub: 'Three steps, and the PDF never leaves your device.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop a file onto the tool above, or click to browse. The page count appears straight away so you know what you are working with.',
      },
      {
        title: 'Choose resolution and quality',
        text: 'Pick 72, 150 or 300 DPI. For JPG you can also choose a smaller file or maximum quality — higher quality means a bigger ZIP, so it is worth matching to where the image will be used.',
      },
      {
        title: 'Download the ZIP',
        text: 'Click Convert to images. Each page is rendered and saved as page-1.jpg, page-2.jpg and so on, zipped together and saved to your downloads.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I convert a PDF page to an image?',
      a: 'Add the PDF above, choose a resolution, then click Convert to images. Every page is rendered as a JPG and delivered together in one ZIP archive.',
    },
    {
      q: 'Is my PDF uploaded anywhere?',
      a: 'No. The PDF is opened and rendered inside your browser tab using the same engine your browser already uses to display PDFs. No copy is transmitted. You can check with your developer tools Network tab open.',
    },
    {
      q: 'Which resolution should I choose?',
      a: 'Use 72 DPI when the image will only be viewed on screen — it is small and quick. Use 150 DPI for documents shared by email. Use 300 DPI when the image is going to be printed, as that is the standard print resolution.',
    },
    {
      q: 'Will converting to JPG reduce quality?',
      a: 'JPG is a lossy format, so some quality is traded for file size — that is why the quality selector is there. Converting at a higher DPI preserves more detail than a low one, and text stays legible at 150 DPI or above.',
    },
    {
      q: 'Can I convert only some pages?',
      a: 'This version converts every page, which is what most people need and keeps the output in one predictable archive. If you only need a few pages, crop the document first and then convert it.',
    },
  ],
};

export default en;