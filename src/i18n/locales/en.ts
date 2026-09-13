/**
 * English master dictionary. Every other locale in `src/i18n/locales/` is
 * typed against `SiteDictionary`, so missing or misspelled keys fail
 * `astro check`.
 *
 * Strings may contain a tiny inline-markup subset that `src/i18n/rich.ts`
 * parses: `<strong>…</strong>` and `<a href="/…">…</a>` (internal paths,
 * `mailto:` and `#fragment` links). Links are automatically localized at
 * render time.
 */
const en = {
  skipToContent: 'Skip to content',
  siteName: 'Rearrange PDF',
  ogImageAlt:
    'Rearrange PDF — free online tool to rearrange, merge and delete PDF pages in your browser.',
  breadcrumbAriaLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',

  langSwitcher: {
    ariaLabel: 'Change language',
  },

  nav: {
    ariaLabel: 'Main navigation',
    howItWorks: 'How it works',
    features: 'Features',
    privacy: 'Privacy',
    faq: 'FAQ',
    cta: 'Rearrange a PDF',
    toggleMenu: 'Toggle menu',
  },

  footer: {
    tagline:
      'The privacy-first way to rearrange, rotate and organize PDF pages. Everything happens in your browser — your files are never uploaded.',
    colTool: 'Tool',
    colCompany: 'Company',
    colLegal: 'Legal',
    colLanguage: 'Language',
    rearrangePages: 'Rearrange PDF pages',
    howItWorks: 'How it works',
    guide: 'Organize PDF guide',
    faq: 'FAQ',
    about: 'About',
    contact: 'Contact',
    privacyPolicy: 'Privacy policy',
    termsOfService: 'Terms of service',
    copyright: (year: number) => `© ${year} rearrangepdf.com. All rights reserved.`,
    noAds: 'No ads. No trackers. No uploads.',
  },

  hero: {
    chip: '100% private — files never leave your browser',
    h1: 'Rearrange PDF pages, right in your browser.',
    sub: 'Drag and drop to reorder pages, rotate, duplicate or delete them — then download instantly. Free, unlimited and completely private.',
    bullets: ['No sign-up', 'No page limits', 'No watermark', 'No file size caps'],
  },

  howItWorks: {
    heading: 'How to rearrange PDF pages',
    sub: 'Three steps, zero uploads. Your file is processed locally from start to finish.',
    steps: [
      {
        title: 'Add your PDF',
        text: 'Drop a file anywhere on the page, click to browse, or paste one in. Add more PDFs anytime — they merge into a single document.',
      },
      {
        title: 'Arrange your pages',
        text: 'Drag thumbnails into any order. Rotate, duplicate, delete, or select many pages at once — with full undo if you change your mind.',
      },
      {
        title: 'Download instantly',
        text: 'Your PDF is rebuilt right on your device and downloads in seconds. No watermark, no sign-up, no waiting in line.',
      },
    ],
  },

  features: {
    heading: 'Everything you need to organize a PDF',
    sub: 'The page-reordering tools people already like — without the uploads, limits, ads or sign-ups they complain about.',
    items: [
      {
        title: 'Private by design',
        text: 'Your PDF is processed entirely inside your browser. No uploads, no servers, no tracking — open your browser’s network tab and verify it yourself.',
      },
      {
        title: 'No limits, ever',
        text: 'No page caps, no file-size ceilings, no daily quotas. Reorder 10 pages or 1,000 — local processing means there is nothing to meter.',
      },
      {
        title: 'Instant results',
        text: 'There is no upload-and-wait round trip. Pages render and your new PDF is built on your device, so even large files feel immediate.',
      },
      {
        title: 'Undo anything',
        text: 'Full history with undo and redo (Ctrl+Z / Ctrl+Shift+Z), multi-select, and keyboard shortcuts. Experiment freely — nothing is permanent until you download.',
      },
      {
        title: 'Made for mobile too',
        text: 'Large tap targets, long-press to drag, and a thumb-friendly action bar. Rearranging pages on a phone shouldn’t feel like a chore.',
      },
      {
        title: 'Original quality preserved',
        text: 'Pages are copied byte-for-byte from your original PDF. Fonts, vectors, images and links stay exactly as they were — no re-compression.',
      },
    ],
  },

  privacySection: {
    h2: 'Your PDF never leaves your browser.',
    p1: 'Most online PDF tools upload your file to a server, process it there, and ask you to trust their deletion policy. We flipped the model: rearranging pages happens <strong>entirely on your device</strong>, using the same rendering engine your browser already has.',
    p2: 'No server ever receives your document. There is nothing to leak, breach, or subpoena. That makes it safe for contracts, medical records, financial statements and anything else you wouldn’t hand to a stranger.',
    readPromise: 'Read our privacy promise',
    tryNow: 'Try it now',
    bullets: [
      {
        title: 'Zero uploads',
        text: 'Your file content is never transmitted anywhere.',
      },
      {
        title: 'No accounts, no ads, no trackers',
        text: 'We don’t need your email, and we don’t follow you around the web.',
      },
      {
        title: 'Verifiable, not just a promise',
        text: 'Open DevTools → Network while you work. You’ll see zero file requests.',
      },
    ],
  },

  faq: {
    heading: 'Frequently asked questions',
    sub: 'Everything people usually want to know before rearranging their first PDF.',
    items: [
      {
        q: 'How to rearrange pages in a PDF?',
        a: 'Open the tool at the top of this page and add your PDF, then drag any page thumbnail to its new position — the surrounding pages shift automatically to make room. Rotate, duplicate or delete pages if needed, and click "Download PDF" to save the reordered file. The whole process takes under a minute and your file never leaves your device.',
      },
      {
        q: 'How to rearrange pages in a PDF for free?',
        a: 'Use a free browser-based tool like this one: add your PDF, drag the page thumbnails into the order you want, and download the result. There is no sign-up, no watermark, no page limit and no hidden premium tier — the tool stays free because all processing happens on your own device instead of on paid servers.',
      },
      {
        q: 'How to rearrange PDF pages?',
        a: 'The easiest way is drag-and-drop: your PDF appears as a grid of page thumbnails, and you drag each page to where it belongs. Because the editor runs entirely in your browser, there is nothing to install and no file is uploaded anywhere. When the order looks right, click "Download PDF" to save the new file.',
      },
      {
        q: 'How to rearrange pages in a PDF on iPhone?',
        a: 'Open this page in Safari and tap to add your PDF — from the Files app, Mail or any other app that shares PDFs. Press and hold a page thumbnail briefly to lift it, drag it into place, then tap "Download PDF" and save the result back to Files or share it directly. No app install is needed, and the same flow works on iPad.',
      },
      {
        q: 'Can I rearrange PDF pages on mobile?',
        a: 'Yes. The editor is built touch-first: press and hold a thumbnail to lift it, drag it to a new spot, and use the large rotate, duplicate and delete buttons within easy reach. It works in Safari on iOS and Chrome on Android, and the finished PDF saves straight back to your phone or tablet.',
      },
      {
        q: 'How do I replace a PDF page without losing formatting?',
        a: 'Delete the page you want to replace, add the PDF that contains the new page, and drag it into the empty slot. Because every page is copied byte-for-byte rather than re-rendered, fonts, images, vectors, links and metadata are preserved exactly — nothing is re-compressed or restyled.',
      },
      {
        q: 'How do I swap, add, remove, and rotate PDF pages?',
        a: 'All four actions live in the toolbar. Swap two pages by dragging one thumbnail onto the other to exchange their positions. Add pages by inserting blank ones or merging in another PDF, remove pages with the delete action, and rotate pages in 90° steps — individually or as a multi-select batch.',
      },
      {
        q: 'How do I organize PDF files?',
        a: 'Start by combining the files: add every PDF you need and they merge into a single page grid. Then organize at the page level — group related pages together, move whole sections, delete what you no longer need, and insert blank pages as separators. When everything sits in the right place, download one tidy PDF.',
      },
      {
        q: 'How to rearrange PDF pages for free?',
        a: 'Free PDF tools come in two kinds: online editors that upload your file to their servers, and client-side tools like this one that process everything locally. The second kind is genuinely free — no trial, no watermark, no daily quota — because your own device does the work. Add a PDF, reorder the thumbnails, and download at no cost.',
      },
      {
        q: 'How can I rearrange pages in a PDF document?',
        a: 'Load your document into the editor, then drag thumbnails into the new order — or select several pages at once and move them together. Every step is undoable with Ctrl+Z (Cmd+Z on Mac), and you can restore the original order with one click, so experimenting is risk-free. You only commit when you download.',
      },
      {
        q: 'Are my files uploaded to a server?',
        a: 'No. Rearrange PDF runs entirely in your browser using JavaScript. Your PDF is read, displayed and rebuilt on your own device — no file content is ever transmitted. You can verify this yourself: open your browser’s developer tools, watch the Network tab, and rearrange a few pages. Nothing is sent.',
      },
      {
        q: 'Can I merge and rearrange multiple PDFs at once?',
        a: 'Yes. Add as many PDFs as you like — drag in several files at once, or use "Add PDFs" while editing — and they merge into one page grid, with badges showing which file each page came from. You can then combine and rearrange pages from every document however you like before downloading a single PDF.',
      },
      {
        q: 'Can I undo a mistake?',
        a: 'Yes. Every action — reorder, rotate, delete, duplicate — is recorded in history. Press Ctrl+Z (or Cmd+Z on Mac) to undo, Ctrl+Shift+Z to redo, or use the undo buttons in the toolbar. You can also restore the original page order with one click.',
      },
      {
        q: 'What about password-protected PDFs?',
        a: 'PDFs protected with an owner password (restrictions on editing or printing) work normally. PDFs that require a password to open can be rearranged if you enter the password, but exporting fully encrypted files locally is not supported yet — you’ll see a clear warning if that applies to your file.',
      },
    ],
  },

  seoContent: {
    h2: 'Rearrange PDF pages online — free and unlimited',
    p1: 'Rearrange PDF is a free online tool built for one job: helping you rearrange PDF pages quickly, privately and without friction. Whether you need to fix a back-to-front scan, move an appendix to the end, or pull a chaotic export into a sensible order, you get a full visual editor with drag-and-drop page thumbnails — right in your browser. Nothing to install, no account to create, no watermark on the output. And because everything runs locally on your device, you can rearrange PDF pages online free of the uploads, queues and daily limits most other tools impose.',
    p2: 'The editor behaves like a small desktop application. Every page of your document appears as a thumbnail you can grab and drop into a new position, while the remaining pages shift automatically to make room. Beyond reordering, you can rotate sideways scans, duplicate pages that repeat, insert blank sheets and select several pages at once for batch actions. A full undo history means you can experiment freely — nothing is final until you download.',
    h3Merge: 'Merge and rearrange PDF pages in one place',
    pMerge: 'Real documents rarely live in a single file: the report is one PDF, the appendix another, the new cover page a third. Rearrange PDF lets you merge and rearrange PDF pages without switching between apps. Drop in as many files as you like — all at once, or by adding more mid-edit — and every page lands in one grid, tagged with a colored badge showing which document it came from. From there you can combine and rearrange PDF pages from every source into a single continuous file: interleave chapters, move the new cover to the front, or slot extra material into the middle. One click produces one cleanly merged PDF.',
    h3Delete: 'Delete and rearrange PDF pages',
    pDelete: 'Cleanup and ordering usually go together. When you delete and rearrange PDF pages in the same pass, you avoid exporting twice — and re-exporting elsewhere is exactly where quality loss and watermarks sneak in. Select any page and remove it with one click, or tap several thumbnails and delete them as a batch. Deleted pages stay in your undo history, so an overzealous cut is never permanent. Combined with duplicate, rotate and insert-blank actions, this makes the tool a lightweight page editor: trim what you don\'t need, order what remains, export once.',
    h3Steps: 'How to rearrange PDF pages in three steps',
    pSteps: 'If you\'re wondering how to rearrange PDF pages without reading a manual, the entire workflow is three moves:',
    steps: [
      '<strong>Add your PDF.</strong> Drag the file onto the tool at the top of this page, click to browse, or paste it from the clipboard. Add more files if you want to merge them.',
      '<strong>Drag pages into order.</strong> Move any thumbnail to a new position, then rotate, duplicate or delete pages until the sequence is right. Multi-select and undo keep big edits fast.',
      '<strong>Download instantly.</strong> The rebuilt PDF is generated on your device and saved immediately — no watermark, no email required.',
    ],
    pStepsOutro: 'That\'s genuinely all there is to it — the fastest way to rearrange PDF pages online free of sign-ups and uploads. For a deeper walkthrough, including reversing page order and replacing individual pages, see the <a href="/how-to-organize-pdf-pages">full guide to organizing PDF pages</a>.',
    h3Mobile: 'Rearrange PDF pages on iPhone, iPad and Android',
    pMobile: 'Mobile is where many online PDF tools fall apart: tiny buttons, broken drag targets, pop-ups smothering the page grid. This editor is built touch-first, so figuring out how to rearrange PDF pages on iPhone or iPad takes seconds — press and hold a thumbnail to lift it, drag it where it belongs, release. Rotate, duplicate and delete buttons are large and sit within thumb\'s reach, and tapping pages selects them for batch actions. On iOS you can open a PDF from Files or Mail, share it to Safari, reorder it, and save the result straight back. The same flow works on Android phones and tablets.',
    h3Best: 'What are the best ways to rearrange PDF pages?',
    pBest: 'Search for the best ways to rearrange PDF pages and you\'ll find three realistic options. Here\'s how they stack up for everyday document work:',
    bestList: [
      '<strong>A browser-based tool — best for most people.</strong> It lets you rearrange PDF online in seconds: nothing to install, nothing to update, works identically on Windows, Mac, Linux and phones. The usual catch is that your file gets uploaded to a server. This tool removes that catch — pages are processed on your device, never transmitted.',
      '<strong>Desktop software — for heavy, repeated editing.</strong> Editors like Adobe Acrobat pack deep PDF toolkits, but they cost a subscription, must be installed and kept updated, and are overkill when you just need pages 12 and 13 swapped.',
      '<strong>Mobile apps — convenient, with caveats.</strong> Dedicated apps work offline, but they add storage permissions, ads and privacy policies to read. For a one-off fix, a browser tool you already trust is the lighter option.',
    ],
    pBestOutro: 'For most people, most of the time, the first option wins: open the <a href="/#rearrange">tool at the top of this page</a>, rearrange PDF free of uploads and watermarks, and be finished inside a minute.',
    h3Why: 'Why free doesn\'t mean risky',
    pWhy: 'Free online tools earn their reputation honestly: many monetize by mining the documents you upload, or by stamping watermarks until you pay. This tool takes the opposite route. Your PDF is read, displayed and rewritten entirely inside your browser, so no copy of your file ever exists on a server — nothing to leak, nothing to sell, nothing retained after you close the tab. You don\'t have to take that on faith: open your browser\'s developer tools, watch the network tab while you work, and you\'ll see zero file traffic. That\'s what makes it safe for contracts, medical records, financial statements and anything else confidential. Read the full <a href="/privacy">privacy promise</a> for details.',
  },

  cta: {
    h2: 'Fix your page order in seconds.',
    sub: 'No uploads. No limits. No sign-up. Just drag, drop and download.',
    button: 'Rearrange a PDF now',
  },

  errors: {
    tryAgain: 'Try again',
    backToTool: 'Back to the tool',
    notFound: {
      title: 'Page not found — Rearrange PDF',
      description: 'That page does not exist. Head back to rearrange your PDF pages.',
      heading: 'This page took a wrong turn.',
      message: 'The page you\'re looking for doesn\'t exist — but your PDF\'s page order can still be fixed in seconds.',
    },
    serverError: {
      title: 'Something went wrong — Rearrange PDF',
      description: 'An unexpected error occurred. Reload to try again, or head back to the tool.',
      heading: 'Something broke on our end.',
      message: 'An unexpected error occurred. Reload to try again, or head back to the tool — your files never left your browser.',
    },
  },

  pages: {
    home: {
      meta: {
        title: 'Rearrange PDF Pages Online Free — Merge, Reorder & Delete Pages | Rearrange PDF',
        description: 'Rearrange PDF pages online free. Drag and drop to reorder, merge, combine or delete pages — 100% private, no uploads, no limits, no sign-up, no watermark.',
        keywords: [
          'rearrange pdf',
          'rearrange pdf pages',
          'rearrange pdf pages free',
          'rearrange pdf pages online',
          'rearrange pdf pages online free',
          'rearrange pdf online',
          'rearrange pdf free',
          'merge and rearrange pdf',
          'combine and rearrange pdf',
          'delete and rearrange pdf pages',
          'how to rearrange pdf pages',
          'how to rearrange pdf pages online free',
          'how to rearrange pdf pages on iphone',
          'what are the best ways to rearrange pdf pages',
        ],
      },
      jsonLd: {
        webApplication: {
          name: 'Rearrange PDF',
          alternateName: 'Rearrange PDF Pages',
          description: 'Free online tool to rearrange, reorder, rotate, duplicate and delete PDF pages entirely in your browser. No uploads, no limits, no sign-up.',
          featureList: [
            'Drag-and-drop page reordering',
            'Rotate, duplicate and delete pages',
            'Merge multiple PDFs and reorder the combined document',
            'Add blank pages',
            'Multi-select with batch actions',
            'Undo and redo history',
            'Keyboard shortcuts',
            'Page preview',
            '100% client-side processing — files never leave the browser',
          ],
        },
        howTo: {
          name: 'How to rearrange pages in a PDF',
          description: 'Rearrange the pages of any PDF in three steps, entirely in your browser with no uploads.',
          steps: [
            {
              name: 'Add your PDF',
              text: 'Drop a PDF file on the tool, click to browse, or paste one in. You can add several PDFs at once to merge them.',
            },
            {
              name: 'Arrange your pages',
              text: 'Drag page thumbnails into the order you want. Rotate, duplicate or delete pages as needed — everything can be undone.',
            },
            {
              name: 'Download instantly',
              text: 'Click Download PDF. Your rearranged file is rebuilt on your device and saved with no watermark.',
            },
          ],
        },
      },
    },

    howto: {
      meta: {
        title: 'How to Organize PDF Pages Online for Free (No Uploads) — Step-by-Step Guide',
        description: 'Learn how to rearrange, reorder and organize PDF pages in any browser — free and with no uploads. Covers desktop and mobile, merging files, reversing order, replacing pages and more.',
      },
      breadcrumb: 'How to organize PDF pages',
      h1: 'How to organize PDF pages online for free',
      intro: 'Scanned your document back-to-front? Appendix landing before the introduction? Here is the fastest way to fix the page order of any PDF — without uploading it to anyone\'s server, creating an account, or hitting a "free trial" wall.',
      quickH2: 'The quick answer',
      quickSteps: [
        '<a href="/#rearrange">Open the tool</a> and drop your PDF on it.',
        'Drag the page thumbnails into the order you want.',
        'Click <strong>Download PDF</strong> — done, no watermark.',
      ],
      detailedH2: 'Step-by-step: rearranging pages in detail',
      step1H: 'Step 1 — Add your PDF',
      step1P: 'Drag the file from your desktop or file manager straight onto the upload card, or click it to browse. You can also copy a PDF and paste it with <strong>Ctrl+V</strong> (⌘V on Mac). Want to combine documents first? Drop several PDFs at once — their pages merge into a single grid, each file marked with its own color, so you can then interleave pages from all of them.',
      step2H: 'Step 2 — Drag pages into order',
      step2P1: 'Every page shows as a thumbnail. Grab one and drag it where it belongs — the others make room as you go. On a phone or tablet, press and hold a page briefly to lift it, then drag.',
      step2P2: 'Hovering a page reveals small buttons to <strong>rotate</strong> (fix sideways scans), <strong>duplicate</strong>, <strong>preview</strong> full-size, or <strong>delete</strong>. Click pages to select several at once — or <strong>Ctrl+A</strong> to select all — then rotate or delete them in one batch from the toolbar that appears.',
      step3H: 'Step 3 — Download your organized PDF',
      step3P: 'Hit <strong>Download PDF</strong>. The file is rebuilt on your device — the exact original pages, just in your chosen order — and saved straight to your downloads folder. No watermark, no email required, no queue.',
      tricksH2: 'Useful tricks worth knowing',
      tricks: [
        '<strong>Nothing is permanent.</strong> Every action is undoable with Ctrl+Z, redoable with Ctrl+Shift+Z. Experiment freely — the one-click "restore original order" button takes the whole document back to how it started.',
        '<strong>Reverse a whole document</strong> with the reverse-order button in the toolbar — handy for scans made back-to-front, no dragging required.',
        '<strong>Replace a page:</strong> delete the outdated page, click "Add PDFs" to bring in the replacement, then drag it into position.',
        '<strong>Insert a blank page</strong> anywhere — useful for notes or print separators — with the "+" button in the toolbar.',
        '<strong>Keep only what you need:</strong> select the pages you want to keep, invert nothing — simply delete the rest, and download the trimmed document.',
        '<strong>Check before you commit:</strong> open any page full-size with the preview button and flip through the document with the arrow keys before downloading.',
      ],
      mobileH2: 'Rearranging PDF pages on mobile',
      mobileP: 'The editor is designed touch-first: thumbnails are large, action buttons sit within thumb\'s reach, and dragging works with a short press-and-hold. Tap pages to select them for batch rotate or delete. On iOS or Android, you can open a PDF from your Files or Drive app, share it to the browser, and rearrange it right there.',
      localH2: 'Why rearranging locally matters',
      localP: 'Most "free" PDF organizers upload your file to a processing server, then promise to delete it later. That\'s fine until it isn\'t — contracts, medical records and financial statements deserve better. This tool does all the work inside your browser tab: your PDF is read into memory, displayed, and written back out without a single byte leaving your device. You don\'t have to take our word for it — open your browser\'s developer tools, watch the network tab, and rearrange away.',
      ctaH2: 'Ready to fix your page order?',
      ctaP: 'Free, unlimited, no sign-up — and your file never leaves the browser.',
      ctaButton: 'Rearrange a PDF now',
      faqOutro: 'Looking for more answers? See the full <a href="/#faq">FAQ on the home page</a>.',
      jsonLd: {
        howTo: {
          name: 'How to organize PDF pages online for free',
          description: 'A step-by-step guide to rearranging PDF pages in your browser without uploading the file anywhere.',
          steps: [
            {
              name: 'Open the tool and add your PDF',
              text: 'Go to rearrangepdf.com and drop your PDF onto the tool, click "Select PDF file", or paste the file with Ctrl+V.',
            },
            {
              name: 'Drag pages into the new order',
              text: 'Drag any page thumbnail to a new position. Use the hover buttons or selection toolbar to rotate, duplicate or delete pages.',
            },
            {
              name: 'Download the organized PDF',
              text: 'Click "Download PDF" — the file is rebuilt on your device and saved immediately, with no watermark.',
            },
          ],
        },
      },
    },

    about: {
      meta: {
        title: 'About — Rearrange PDF',
        description: 'Why we built a PDF page organizer that never uploads your files, how it works under the hood, and how to get in touch.',
      },
      breadcrumb: 'About',
      h1: 'One tool, done properly.',
      p1: 'Rearranging the pages of a PDF is a small job. You scanned a contract back-to-front, or a report\'s summary ended up at the end, and you just want it fixed. Yet most tools for this simple task ask for a lot in return: your file gets uploaded to a server you know nothing about, you hit a daily limit after two documents, and there\'s usually an upgrade prompt waiting.',
      p2: 'We built Rearrange PDF because none of that is necessary. Page reordering doesn\'t need a server — a modern browser has everything required to read, display and rebuild a PDF. So that\'s all this site is: a single page, a drop zone, and a grid of thumbnails you can drag around. No uploads, no accounts, no ads, no limits.',
      howItWorksH2: 'How it works',
      howItWorksP: 'Under the hood, the tool uses two open-source libraries that run entirely in your browser: <strong>PDF.js</strong> renders each page as a thumbnail, and <strong>pdf-lib</strong> assembles your new document by copying the original pages — byte-for-byte, so formatting, fonts and quality are preserved exactly. When you click download, the finished PDF is created right there in the tab and handed to your browser\'s save dialog.',
      getInTouchH2: 'Get in touch',
      getInTouchP: 'Found a PDF that doesn\'t work? Have an idea for the tool? We read everything — <a href="/contact">contact us</a> at <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a>.',
      ctaH2: 'Try it with your own file',
      ctaP: 'It\'s free, unlimited — and nothing ever leaves your browser.',
      ctaButton: 'Rearrange a PDF',
    },

    contact: {
      meta: {
        title: 'Contact — Rearrange PDF',
        description: 'Get in touch with the team behind Rearrange PDF. Report a file that does not work, suggest a feature, or ask a question about the browser-based PDF page organizer.',
      },
      breadcrumb: 'Contact',
      h1: 'Contact us',
      intro: 'Found a PDF that will not open? Have an idea that would make the tool better? We read every message and genuinely appreciate the feedback.',
      emailH2: 'Email us',
      emailP: 'The fastest way to reach us is by email. We are a small team, so please allow a couple of days for a reply.',
      beforeH2: 'Before you write',
      beforeP: 'A few notes help us help you faster:',
      beforeItems: [
        '<strong>Tell us which file misbehaved.</strong> If a PDF fails to load or export, describe the document type (scanned, form, encrypted, very large) rather than sending the file.',
        '<strong>We cannot see your files.</strong> The tool runs entirely in your browser, so your PDFs never reach us. Please do not email sensitive documents — a description is all we need.',
        '<strong>Include your browser and device</strong> (for example, "Safari on iPhone") if you are reporting a problem — it helps us reproduce it.',
      ],
      answersH2: 'You might find the answer right here',
      helpLinks: [
        {
          title: 'Read the FAQ',
          body: 'Quick answers about uploads, file size, page quality and privacy.',
        },
        {
          title: 'Open the guide',
          body: 'Step-by-step instructions for reordering, rotating and deleting pages.',
        },
        {
          title: 'Review our privacy policy',
          body: 'Exactly what the tool does — and does not — do with your files.',
        },
      ],
      dataH2: 'About your data',
      dataP: 'Because we do not collect personal data, there is usually nothing for us to look up on your behalf — but if you have a privacy question, we are happy to answer it. See our <a href="/privacy">privacy policy</a> and <a href="/terms">terms of service</a> for the full details.',
      ctaH2: 'Need to fix a PDF right now?',
      ctaP: 'The tool is free, unlimited — and nothing ever leaves your browser.',
      ctaButton: 'Rearrange a PDF',
      jsonLd: {
        contactPage: {
          name: 'Contact Rearrange PDF',
          description: 'Contact details for Rearrange PDF, the browser-based tool for rearranging and organizing PDF pages without uploading.',
        },
      },
    },

    privacy: {
      meta: {
        title: 'Privacy Policy — Rearrange PDF',
        description: 'Our privacy promise: your PDFs never leave your browser, we run no ads and no trackers, and we collect no personal data. Read the full policy.',
      },
      breadcrumb: 'Privacy policy',
      h1: 'Privacy policy',
      lastUpdated: 'Last updated: September 2026',
      shortH2: 'The short version',
      shortItems: [
        'Your PDF files never leave your device. All processing happens in your browser.',
        'We have no user accounts and collect no personal data.',
        'We run no ads and embed no third-party trackers.',
        'The only measurement we use is cookieless, aggregated analytics (see below).',
      ],
      sections: [
        {
          title: '1. How the tool works',
          text: 'Rearrange PDF is a client-side application. When you open a PDF here, the file is read directly by your browser using the JavaScript APIs available on this page. Thumbnails are rendered and your edited document is rebuilt entirely on your device. No file content is transmitted to us or to any third party — there is no upload server to send it to.',
        },
        {
          title: '2. What we never collect',
          bullets: [
            'The contents, names or metadata of your PDF files',
            'Any account information — the tool requires no sign-up',
            'Advertising or cross-site tracking cookies of any kind',
          ],
        },
        {
          title: '3. What is collected',
          subsections: [
            {
              title: 'Cookieless analytics',
              text: 'We use Cloudflare Web Analytics to understand aggregate usage of the site (for example, how many people visit the tool and from which country). This service does not use cookies and does not identify individual visitors. It does not follow you across other websites.',
            },
            {
              title: 'Standard server logs',
              text: 'Like every website, our hosting provider (Cloudflare) keeps short-lived technical logs of requests made to load the site itself — things like IP address, browser type and timestamps. These logs never include your documents (which are never uploaded) and exist only to keep the site secure and operational.',
            },
          ],
        },
        {
          title: '4. Verify it yourself',
          text: 'You don\'t have to trust this page. Open your browser\'s developer tools (F12), switch to the Network tab, and use the tool: upload a PDF, drag pages around, download the result. You will see that no request carries your file.',
        },
        {
          title: '5. Your rights',
          text: 'Because we process no personal data beyond the anonymous, aggregated statistics described above, there is generally no personal data of yours for us to access, correct or erase. If you believe otherwise and would like to contact us, see below.',
        },
        {
          title: '6. Changes to this policy',
          text: 'If we ever change how the site works in a way that affects privacy, we will update this page. The tool will remain client-side — that is the whole point of the site.',
        },
        {
          title: '7. Contact',
          text: 'Questions about privacy? Email <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> or visit our <a href="/contact">contact page</a>.',
        },
      ],
    },

    terms: {
      meta: {
        title: 'Terms of Service — Rearrange PDF',
        description: 'The terms that apply when you use rearrangepdf.com to rearrange PDF pages in your browser.',
      },
      breadcrumb: 'Terms of service',
      h1: 'Terms of service',
      lastUpdated: 'Last updated: September 2026',
      sections: [
        {
          title: '1. The service',
          text: 'Rearrange PDF (rearrangepdf.com) is a free, browser-based tool that lets you rearrange, rotate, duplicate, delete and organize the pages of PDF files. All processing takes place locally in your web browser; your files are not uploaded to us.',
        },
        {
          title: '2. Acceptance',
          text: 'By using the site you agree to these terms. If you don\'t agree, please don\'t use the service.',
        },
        {
          title: '3. Your content',
          text: 'You keep all rights to the documents you work on. Since files are processed on your own device, we never receive, store or process them. You are responsible for having the rights to any document you open in the tool and for complying with applicable law.',
        },
        {
          title: '4. No warranty',
          text: 'The service is provided "as is", free of charge, without warranties of any kind. We work hard to keep it accurate and reliable — page content is copied byte-for-byte from your original file — but we cannot guarantee uninterrupted availability or fitness for a particular purpose. Keep backups of important documents.',
        },
        {
          title: '5. Limitation of liability',
          text: 'To the maximum extent permitted by law, we are not liable for any damages arising from the use or inability to use the service.',
        },
        {
          title: '6. Changes',
          text: 'We may update the service or these terms at any time. Continued use after changes means you accept the updated terms. The current version is always available on this page.',
        },
        {
          title: '7. Contact',
          text: 'Questions about these terms? Email <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> or visit our <a href="/contact">contact page</a>.',
        },
      ],
    },
  },
};

export type SiteDictionary = typeof en;
export default en;
