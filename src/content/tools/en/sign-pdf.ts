import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Sign a PDF Online Free — Place Your Signature Fast',
    description:
      'Sign PDFs free: add your signature image to any page, position it where it belongs, and download. Applied in your browser — the document is never uploaded.',
  },
  breadcrumb: 'Sign PDF',
  h1: 'Sign your PDF in the browser',
  intro:
    'You already have your signature — the one you use on deliveries and forms. Add it as an image to the pages that need signing, place it where the signature line is, and download. The document never leaves your device, which is the whole point of a signature.',
  benefits: [
    {
      title: 'Use the signature you already have',
      text: 'Scan or photograph your signature once, save it as a PNG, and reuse it. A transparent background works best — anything rectangular arrives with its own white box.',
    },
    {
      title: 'Placed where the document expects it',
      text: 'Seven anchor positions plus a live preview, so the signature lands on the signature line rather than floating somewhere near it.',
    },
    {
      title: 'The document stays private',
      text: 'A signed contract is a finished document. It is opened, stamped and saved inside your browser tab — no server ever receives a copy, before or after signing.',
    },
  ],
  howTo: {
    heading: 'How to sign a PDF',
    sub: 'Three steps, and nothing is uploaded.',
    steps: [
      {
        title: 'Add the PDF you need to sign',
        text: 'Drop it onto the tool above or click to browse. Multiple files can be signed in one pass.',
      },
      {
        title: 'Add your signature image',
        text: 'Select the PNG or JPG of your signature. A transparent PNG keeps only the ink; a photo on white paper will show its background, so a scan with the background removed looks best.',
      },
      {
        title: 'Position and download',
        text: 'Choose where the signature sits — bottom right is the usual spot — then click Add signature. The signed copy is downloaded and your original is untouched.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I sign a PDF?',
      a: 'Add the PDF, select an image of your signature, choose its position, and click Add signature. The signed document is saved to your downloads.',
    },
    {
      q: 'Is this a legally valid signature?',
      a: 'That depends on your jurisdiction and what the recipient accepts, not on the tool. This places an image of your signature on the document; it does not apply a cryptographic digital signature. Many workflows accept an image, and ones that require cryptographic signing will say so.',
    },
    {
      q: 'What kind of signature image works best?',
      a: 'A PNG with a transparent background. The tool also accepts JPG, but a photo of a signature on paper will carry its white background with it, so you get a white box around the ink.',
    },
    {
      q: 'Can I sign only one page of a long document?',
      a: 'This version stamps every page, which suits a full agreement. To sign a single page, split the document first, sign that page, and merge the parts back together.',
    },
    {
      q: 'Is my signed document uploaded anywhere?',
      a: 'No. Signing happens inside your browser tab, and no copy of the document — signed or unsigned — is transmitted to any server.',
    },
  ],
};

export default en;