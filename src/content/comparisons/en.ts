import type { ComparisonBundle } from './types';

/**
 * English comparison pages.
 *
 * ## Editorial rules for these files
 *
 * 1. **Only claim what can be checked.** Everything in the `ours` column is a
 *    property of our own code — the reader can open DevTools and confirm it.
 * 2. **Never state a competitor's price, quota or limit.** Those change without
 *    notice and a stale figure is worse than no figure: the reader verifies it,
 *    finds it moved, and discounts the rows that *were* accurate. Defer to their
 *    own page instead, and say so via `tableNote`.
 * 3. **Concede real strengths.** PDF24's offline desktop app genuinely does run
 *    locally, and claiming otherwise would be false as well as cheap.
 * 4. **No invented features.** Nothing in `advantages` may describe a tool we
 *    do not have. If a feature is planned but unbuilt, it does not go here.
 */
export const en: ComparisonBundle = {
  chrome: {
    tableFeature: 'What happens to your file',
    ctaButton: 'Open the tool',
    otherAlternatives: 'Looking at a different tool?',
  },
  pages: {
    'smallpdf-alternative': {
    slug: 'smallpdf-alternative',
    competitor: 'Smallpdf',
    competitorHome: 'https://smallpdf.com',
    meta: {
      title: 'Smallpdf Alternative — Private PDF Page Reordering',
      description:
        'Looking for a Smallpdf alternative to reorder PDF pages? RearrangePDF runs entirely in your browser — no uploads, no sign-up, no page limits.',
    },
    breadcrumb: 'Smallpdf alternative',
    h1: 'A Smallpdf alternative that never uploads your PDF',
    intro:
      'Smallpdf is a polished suite and plenty of people use it happily. This page exists for a specific group: anyone whose documents are <strong>contracts, medical records, or financial statements</strong> — the kind of files you would rather not hand to a web server, and would rather not create an account to avoid.',

    reasonsH2: 'Why people look for an alternative',
    reasons: [
      '<strong>Uploading sensitive documents.</strong> Smallpdf’s online tools process your file on their servers. That is a normal design for the category — and for a scanned tax return, it is the part you would rather skip.',
      '<strong>Accounts for a single task.</strong> Reordering pages is a two-minute job. Being asked to create an account first is friction with no upside.',
      '<strong>Limits that appear exactly when you need them.</strong> Free tiers in this category exist to be paid past. You only find out which limit you hit after you have already organised your document.',
      '<strong>Documents the simple case.</strong> Smallpdf is a general toolkit. If your actual job is "put these pages in that order", a 25-tool suite is more surface area than the task deserves.',
    ],

    advantagesH2: 'What RearrangePDF does differently',
    advantages: [
      {
        title: 'Your file never leaves the device',
        text: 'Pages are parsed, reordered and rewritten inside your browser tab. No server receives the bytes — open DevTools → Network while you work and you will see no file requests at all.',
      },
      {
        title: 'No limits to discover',
        text: 'No page caps, no file-size ceilings, no daily quota. Local processing means there is nothing to meter, so there is nothing to upgrade past.',
      },
      {
        title: 'No account, ever',
        text: 'No email, no password, no confirmation link. The tool is the tool — there is no sign-up step hiding behind the download button.',
      },
      {
        title: 'Purpose-built for page order',
        text: 'Drag pages into position, or reverse the whole document in one click. Undo and redo every action, so experimenting costs you nothing.',
      },
      {
        title: 'Works the same on a phone',
        text: 'Long-press to lift a page, drag to place it, large tap targets for the action bar. Rearranging pages on a phone is not an afterthought here.',
      },
    ],

    tableH2: 'Side by side',
    tableNote:
      'Our column states what our code does. Smallpdf’s current pricing, quotas and free-tier terms are theirs to change, so we link to their own pages rather than quote figures that would be stale within a month.',
    rows: [
      {
        label: 'Where your file is processed',
        ours: 'In your browser, on your device',
        theirs: 'On their servers',
      },
      {
        label: 'Upload required',
        ours: 'Never',
        theirs: 'Yes',
      },
      {
        label: 'Sign-up required',
        ours: 'Never',
        theirs: 'Needed for some features',
      },
      {
        label: 'Page limits',
        ours: 'None',
        theirs: 'See current terms',
        theirsHref: 'https://smallpdf.com/pricing',
        theirsHrefLabel: 'pricing',
      },
      {
        label: 'Watermark on output',
        ours: 'Never',
        theirs: 'Free tools may add branding',
      },
      {
        label: 'Works offline',
        ours: 'After first load',
        theirs: 'Via desktop app',
        theirsHref: 'https://smallpdf.com/',
        theirsHrefLabel: 'desktop app',
      },
      {
        label: 'Undo / redo',
        ours: 'Full history, Ctrl+Z and Ctrl+Shift+Z',
        theirs: 'Varies by tool',
      },
    ],

    strengthsH2: 'What Smallpdf does well',
    strengths: [
      'A genuinely broad toolkit — if you need OCR, e-signature or Office conversion, it is all in one place.',
      'Polished, consistent interfaces across every tool, which is more than most of the category manages.',
      'A desktop editor for Windows and macOS if you would rather work offline.',
      'The online tools are free to try without a card, which is a fairer starting point than most.',
    ],

    ctaH2: 'Try it on your document',
    ctaP:
      'No upload, no account, no watermark. Add your PDF and drag the pages into place — you can verify the privacy claim yourself while you do it.',
    faqH2: 'Questions people ask first',
    faq: [
      {
        q: 'Is RearrangePDF really free?',
        a: 'Yes. There is no paid tier and no trial countdown. The tool is free because your file is processed on your own device, so there are no servers to pay for.',
      },
      {
        q: 'How is this different from Smallpdf?',
        a: 'Scope and architecture. Smallpdf is a broad commercial suite whose online tools upload your file; RearrangePDF is a single-purpose tool for rearranging PDF pages that never uploads anything and never asks for an account. If you need OCR or e-signature, Smallpdf has features RearrangePDF does not — see the section above.',
      },
      {
        q: 'Can RearrangePDF do what Smallpdf does?',
        a: 'No, and it does not try to. RearrangePDF covers merging, splitting, reordering, rotating, duplicating, deleting and inserting PDF pages. It does not do OCR, e-signature or Office conversion.',
      },
      {
        q: 'How do I know my file is not being uploaded?',
        a: 'Open your browser’s developer tools, switch to the Network tab, then add and rearrange your PDF. You will not see a request carrying your file — the work is happening in the page you already have open. That check takes ten seconds and is worth doing.',
      },
      {
        q: 'Is there a limit on how many pages I can reorder?',
        a: 'No. There is no page cap, no file-size ceiling and no daily quota. How much you can do is bounded by what your device and browser can hold in memory.',
      },
    ],
    },

    'ilovepdf-alternative': {
    slug: 'ilovepdf-alternative',
    competitor: 'iLovePDF',
    competitorHome: 'https://ilovepdf.com',
    meta: {
      title: 'iLovePDF Alternative — Reorder Pages Without Upload',
      description:
        'A private iLovePDF alternative for rearranging PDF pages. Works offline in your own browser, with no uploads, no sign-up and no page limits.',
    },
    breadcrumb: 'iLovePDF alternative',
    h1: 'An iLovePDF alternative that keeps your document on your device',
    intro:
      'iLovePDF is convenient, and for everyday files that is a perfectly reasonable trade. The friction appears with the files you actually care about — the ones with a social security number on them. This page is for rearranging <strong>those</strong> pages without sending them anywhere.',

    reasonsH2: 'Why people look for an alternative',
    reasons: [
      '<strong>The upload is the whole point for some files.</strong> iLovePDF’s tools process your document on their infrastructure. For a payslip or a medical form, that transfer is the thing you would rather avoid.',
      '<strong>Task limits appear mid-job.</strong> Free usage is capped, and the cap is metered in tasks. A busy afternoon of PDF work can run into it partway through a document.',
      '<strong>Task-based phrasing.</strong> iLovePDF organises around discrete jobs you submit. Reordering one document, then another, then another, means submitting three jobs and re-downloading three results.',
      '<strong>Account prompts.</strong> Some features sit behind a sign-up, which for a single page-ordering job is pure overhead.',
    ],

    advantagesH2: 'What RearrangePDF does differently',
    advantages: [
      {
        title: 'Nothing is transmitted',
        text: 'No server ever receives your document. There is nothing to leak, breach or subpoena — and no upload to wait on, because there is no upload.',
      },
      {
        title: 'A document, not a queue of tasks',
        text: 'Add several PDFs at once and they merge into one editable document. Rearrange across all of them and download a single file — rather than submitting one task per document.',
      },
      {
        title: 'No quotas to hit',
        text: 'No task counters, no daily caps, no page limits. Nothing is metered because nothing is being billed to someone else’s servers.',
      },
      {
        title: 'Every action reversible',
        text: 'Full undo and redo history. Move a page, dislike it, move it back — there is no “start over” penalty for experimenting.',
      },
      {
        title: 'Original bytes preserved',
        text: 'Pages are copied straight out of your source PDF rather than re-rendered, so fonts, vectors and images survive untouched.',
      },
    ],

    tableH2: 'Side by side',
    tableNote:
      'Our column describes what our code does. iLovePDF’s current free-tier limits and paid tiers are theirs to change, so we link to their own pages rather than quote numbers that will be stale by the time you read this.',
    rows: [
      {
        label: 'Where your file is processed',
        ours: 'In your browser, on your device',
        theirs: 'On their servers',
      },
      {
        label: 'Upload required',
        ours: 'Never',
        theirs: 'Yes',
      },
      {
        label: 'Sign-up required',
        ours: 'Never',
        theirs: 'Needed for some features',
      },
      {
        label: 'Free-tier limits',
        ours: 'None',
        theirs: 'See current terms',
        theirsHref: 'https://ilovepdf.com/pricing',
        theirsHrefLabel: 'pricing',
      },
      {
        label: 'Watermark on output',
        ours: 'Never',
        theirs: 'Free tools may add branding',
      },
      {
        label: 'Multiple documents at once',
        ours: 'Merged into one editable document',
        theirs: 'One task per document',
      },
      {
        label: 'Undo / redo',
        ours: 'Full history, Ctrl+Z and Ctrl+Shift+Z',
        theirs: 'Re-submit the task',
      },
    ],

    strengthsH2: 'What iLovePDF does well',
    strengths: [
      'An unusually clean task interface — submit, wait, download is easy to understand even for a first-time user.',
      'Broad coverage beyond page work: compress, convert, OCR and secure tools are all available in the same place.',
      'Free to use for everyday files without reaching for a card.',
      'Mobile web access, so it works from a phone when you need it to.',
    ],

    ctaH2: 'Rearrange a page order without uploading',
    ctaP:
      'Add your document, drag the pages where they belong, download. No account, no upload, no watermark — and nothing to wait for.',
    faqH2: 'Questions people ask first',
    faq: [
      {
        q: 'Is RearrangePDF free?',
        a: 'Yes, with no paid tier and no trial. Your file is processed on your own device, so there are no server costs to pass on.',
      },
      {
        q: 'Can it replace iLovePDF entirely?',
        a: 'For page organisation — merging, splitting, reordering, rotating, duplicating, deleting and inserting pages — yes. For compression, Office conversion, OCR and PDF security, iLovePDF has tools RearrangePDF does not, and we would rather point you at them than pretend otherwise.',
      },
      {
        q: 'Does it really work without an internet connection?',
        a: 'Once the page has loaded, the processing happens locally, so it keeps working if your connection drops. Reload or move to another tab and you will need to fetch the page again.',
      },
      {
        q: 'Will my file be saved anywhere?',
        a: 'There is no server to save it to. The file exists in your browser tab and in your downloads folder — which also means closing the tab discards unsaved work, so download before you navigate away.',
      },
      {
        q: 'Are there file-size or page limits?',
        a: 'None are set. The practical ceiling is your device’s available memory.',
      },
    ],
    },

    'pdf24-alternative': {
    slug: 'pdf24-alternative',
    competitor: 'PDF24',
    competitorHome: 'https://pdf24.org',
    meta: {
      title: 'PDF24 Alternative — Private Browser-Based PDF Editing',
      description:
        'A PDF24 alternative for rearranging PDF pages in your browser with no uploads or sign-up — plus an honest look at when PDF24’s offline app is the better choice.',
    },
    breadcrumb: 'PDF24 alternative',
    h1: 'A PDF24 alternative — and when PDF24 is the right call',
    intro:
      'We will start with the honest part: <strong>PDF24’s offline tools genuinely do process files on your computer</strong>, and if you have installed one of them you are already getting local processing. This page is written for people who found the online PDF24 tools and would rather not upload, and for anyone who wants page reordering open in a browser tab on a machine with no software installed.',

    reasonsH2: 'Why people look for an alternative',
    reasons: [
      '<strong>The online PDF24 tools still upload.</strong> Using PDF24 in a browser means your file goes to their servers. The offline app does not — but it does mean installing and running desktop software.',
      '<strong>Installation is a real step.</strong> On a work machine, a locked-down laptop or someone else’s computer, installing software is not always an option.',
      '<strong>A tool that opens when you need it.</strong> Page reordering is occasional work. A browser tab needs no install and no update.',
      '<strong>One focused tool.</strong> PDF24 is a large desktop suite. If the job is “reorder these pages”, that is more than the task needs.',
    ],

    advantagesH2: 'What RearrangePDF does differently',
    advantages: [
      {
        title: 'Nothing to install',
        text: 'No installer, no admin rights, no update prompt. Open a page and the tool is there — including on a borrowed or restricted machine.',
      },
      {
        title: 'Works on a phone',
        text: 'The same tool, in the same browser, on iOS or Android. There is no desktop PDF app to find a phone equivalent of.',
      },
      {
        title: 'Zero transmission',
        text: 'The browser version never sends your file anywhere. Neither does the offline app — but with PDF24 that requires the app to already be installed.',
      },
      {
        title: 'Page order as the primary action',
        text: 'Drag and drop, one-click reverse, batch rotate and multi-select delete. Page organisation is the tool, not one panel inside a larger suite.',
      },
      {
        title: 'Reversible throughout',
        text: 'Full undo and redo, plus a restore-original-order button, so a mis-drag costs nothing.',
      },
    ],

    tableH2: 'Side by side',
    tableNote:
      'PDF24 is the one product in this category with a genuine offline story, and this table does not pretend otherwise — its offline tools process locally. Where we link out rather than quote, it is because limits and feature sets change and we would rather be accurate than complete.',
    rows: [
      {
        label: 'Where your file is processed',
        ours: 'In your browser, on your device',
        theirs: 'Locally in the desktop app; uploaded by the online tools',
      },
      {
        label: 'Installation required',
        ours: 'No',
        theirs: 'Yes, for the offline app',
      },
      {
        label: 'Sign-up required',
        ours: 'Never',
        theirs: 'Never',
      },
      {
        label: 'Works on mobile',
        ours: 'Yes, in the browser',
        theirs: 'No native mobile app',
      },
      {
        label: 'Upload required',
        ours: 'Never',
        theirs: 'Yes, in the online tools',
      },
      {
        label: 'Page limits',
        ours: 'None',
        theirs: 'See current terms',
        theirsHref: 'https://pdf24.org/en/creator',
        theirsHrefLabel: 'tools',
      },
      {
        label: 'Best for',
        ours: 'Page order, anywhere, with no install',
        theirs: 'A broad offline PDF suite on desktop',
      },
    ],

    strengthsH2: 'What PDF24 does well',
    strengths: [
      'A real offline desktop suite — with the app installed, your files genuinely stay on your machine. That is the strongest privacy position any tool in this category offers.',
      'Enormous feature range, including OCR and Office conversion, which no single-purpose browser tool will match.',
      'Free, with no account and no watermark, across a large share of its tools.',
      'A sensible permanent install if you handle PDFs daily and want everything available offline.',
    ],

    ctaH2: 'Try the browser version',
    ctaP:
      'If you want page reordering without installing anything, this runs in the tab you already have open. If you handle PDFs all day and want a full offline suite, PDF24 is a reasonable choice — install it and use it.',
    faqH2: 'Questions people ask first',
    faq: [
      {
        q: 'Is PDF24 really private, then?',
        a: 'Partly, and it depends which part you use. PDF24’s offline desktop tools process files locally, which is genuinely private. Its online browser tools upload your file to their servers. We would rather draw that distinction than treat the whole product as one or the other.',
      },
      {
        q: 'So which should I use?',
        a: 'If you already use PDF24’s desktop app for private PDFs, there is little reason to stop — its offline tools are private and its feature range is much wider. Use RearrangePDF when you are on a machine you cannot install software on, when you are working on a phone, or when page reordering is the only job you have.',
      },
      {
        q: 'Does RearrangePDF replace the PDF24 desktop suite?',
        a: 'No. PDF24 covers OCR, conversion, signatures and much more. RearrangePDF covers page organisation: merge, split, reorder, rotate, duplicate, delete and insert.',
      },
      {
        q: 'Can I verify that nothing is uploaded?',
        a: 'Open DevTools → Network, then load and rearrange a PDF. No request carrying your file appears, because all of the work happens in the page.',
      },
      {
        q: 'Does it work offline?',
        a: 'Once loaded, yes — the page keeps working without a connection. A fresh visit needs the page to load first.',
      },
    ],
    },
  },
};