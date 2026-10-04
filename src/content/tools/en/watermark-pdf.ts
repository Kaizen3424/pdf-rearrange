import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Watermark a PDF Online Free — Stamp Every Page, No Uploads',
    description:
      'Add a text watermark to PDF pages free. Set the text, size, angle and opacity, repeat it across the page or place it once — your file never leaves your browser.',
  },
  breadcrumb: 'Watermark PDF',
  h1: 'Add a watermark to PDF pages',
  intro:
    'Diagonal CONFIDENTIAL across every page, or a discreet note in the corner. Set the text and how it looks, then download. The watermark is drawn onto your existing pages, so text, links and images underneath are untouched.',
  benefits: [
    {
      title: 'Drawn onto the original, not over an image',
      text: 'Your pages stay real pages. Text is still selectable and links still work after the watermark goes on — the opposite of what happens when a tool flattens your document to a picture.',
    },
    {
      title: 'Once across, or tiled over the page',
      text: 'A single diagonal line through the middle reads clearly. For a draft document, tile it so the marking cannot be cropped out of a screenshot.',
    },
    {
      title: 'Fine control, sensible defaults',
      text: 'Text, size, angle, colour and opacity are all adjustable, and it starts at a low opacity so the watermark is visible without hiding what is underneath.',
    },
  ],
  howTo: {
    heading: 'How to watermark a PDF',
    sub: 'Three steps, applied entirely on your device.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the document onto the tool above, or click to browse. Multiple files can be watermarked together.',
      },
      {
        title: 'Set how the watermark looks',
        text: 'Type your text, then adjust size, rotation and opacity. Leave repeat enabled for a tiled watermark across the whole page, or turn it off for a single centred mark.',
      },
      {
        title: 'Download the stamped PDF',
        text: 'Click Add watermark. A copy with the watermark applied is saved to your downloads — your original file is untouched.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I add a watermark to a PDF?',
      a: 'Add your PDF above, type the text you want, adjust the opacity and angle, then click Add watermark. The stamped copy is downloaded and your original is left alone.',
    },
    {
      q: 'Does watermarking damage the document?',
      a: 'No. The watermark is added as a layer on each page, so the original text, images and links are preserved underneath. Your source file is never modified.',
    },
    {
      q: 'What opacity should I use?',
      a: 'Between 10% and 25% is the usual range — clearly legible but not obscuring the content. Go higher only for a draft marking where the point is that it cannot be ignored.',
    },
    {
      q: 'Can I watermark just one page?',
      a: 'This version applies the watermark to every page, which is what a watermark normally means. To mark a single page, split the document first and watermark the page you need.',
    },
    {
      q: 'Is my PDF uploaded?',
      a: 'No. The document is read and stamped inside your browser tab, so no copy of it is ever transmitted. This matters for exactly the kind of file people watermark — contracts, reports, internal drafts.',
    },
  ],
};

export default en;