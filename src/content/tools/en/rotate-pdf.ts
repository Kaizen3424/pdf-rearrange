import type { ToolContent } from '../types';

const en: ToolContent = {
  meta: {
    title: 'Rotate PDF Online Free — Turn Pages 90, 180 or 270°',
    description:
      'Rotate PDF pages online free. Turn sideways scans upright, individually or in bulk — 100% private, no uploads, no sign-up, no watermark, no quality loss.',
  },
  breadcrumb: 'Rotate PDF',
  h1: 'Rotate PDF pages',
  intro:
    'Turn a sideways or upside-down document the right way up. Rotate a single page or apply the same turn to dozens at once, check the result as you go, and download the corrected file — all without uploading a thing.',
  benefits: [
    {
      title: 'One page or a whole batch',
      text: 'Rotate individual pages with the button on each thumbnail, or select many pages and turn them all at once. Fixing a 200-page sideways scan takes one click per direction, not 200.',
    },
    {
      title: 'Set exactly the angle you need',
      text: 'Rotate in 90° steps — left, right or fully upside down — and combine directions when different pages need different corrections. Nothing is re-rendered, so the result is pixel-identical apart from its orientation.',
    },
    {
      title: 'Reversible by design',
      text: 'Rotation goes into the undo history, so a mis-click is a single Ctrl+Z away. Rotate back and forth as much as you like; the page only changes when you download.',
    },
  ],
  howTo: {
    heading: 'How to rotate a PDF',
    sub: 'Correct an entire document in three steps.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop the file onto the tool above, click to browse, or paste it with Ctrl+V. Page thumbnails render so you can see immediately which pages are sideways.',
      },
      {
        title: 'Rotate the pages',
        text: 'Click the rotate button on a thumbnail to turn that page 90° clockwise, or select several pages and use the toolbar to rotate them together. Keep going until every page is upright.',
      },
      {
        title: 'Download the upright PDF',
        text: 'Click Download PDF. The corrected document is rebuilt on your device with the same text, images and formatting — only the page orientation has changed.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I rotate pages in a PDF?',
      a: 'Add your PDF above, then click the rotate button on any page thumbnail to turn it 90° clockwise. Click again for another 90°, or use the rotate control in the toolbar after selecting several pages to turn them all at once. Download when the whole document looks right.',
    },
    {
      q: 'Why is my scanned PDF sideways?',
      a: 'Flatbed scanners and phone cameras capture whatever orientation the page was lying in, and PDFs have no reliable orientation metadata. That is why a sideways scan can look correct on your machine and sideways on someone else\'s. Rotating the pages here fixes the file itself, so it displays correctly everywhere.',
    },
    {
      q: 'Can I rotate a PDF without uploading it?',
      a: 'Yes — the rotation is applied entirely in your browser. Your file is never transmitted to a server, which you can confirm by watching the Network tab in your browser\'s developer tools while you work.',
    },
    {
      q: 'Does rotating a PDF lower its quality?',
      a: 'No. Rotation changes only how the page is displayed, not the underlying content. Text stays selectable, links keep working and images are not re-compressed, so the rotated file is exactly as sharp as the original.',
    },
  ],
};

export default en;
