#!/usr/bin/env node
/**
 * Measures every tool page's meta title and description across all locales.
 *
 * Length budgets are script-aware, because a single character budget is wrong
 * for CJK. Google measures title length in *pixels*, not characters, and a
 * full-width ideograph is roughly twice the width of a Latin letter. The
 * practical consequence:
 *
 *   Latin  → 50–60 characters  (~600px at 16px)
 *   CJK    → 28–36 characters  (a 60-char ja/ko title overflows SERPs badly)
 *
 * This script is a diagnostic. `verify-i18n.mjs` is the gate that fails the
 * build; this one is for finding the numbers to fix.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const TOOLS_DIR = 'src/content/tools';

// Asymmetric on purpose. Truncation is the only failure that costs
// impressions — a title cut mid-phrase loses the tail keywords, and a
// description cut mid-sentence is harmless because the first clause carries
// the intent. So CJK gets a hard ceiling and a deliberately low floor: a
// Japanese description that runs to 76 full-width glyphs is already near
// Google's own truncation point, and padding it to hit an arbitrary number
// produces stilted Japanese for no gain. Titles, which truncate with an
// ellipsis mid-keyword, do get a floor.
const BUDGETS = {
  latin: { title: [50, 60], description: [140, 160] },
  cjk: { title: [24, 34], description: [70, 100] },
};

const SCRIPT_BY_LOCALE = {
  en: 'latin',
  de: 'latin',
  es: 'latin',
  fr: 'latin',
  it: 'latin',
  'pt-br': 'latin',
  ja: 'cjk',
  ko: 'cjk',
};

/** Extracts the two meta strings from a ToolContent module. */
function readMeta(source) {
  const block = source.match(/meta:\s*\{([\s\S]*?)\n {2}\},/);
  if (!block) return null;
  const title = block[1].match(/title:\s*'((?:[^'\\]|\\.)*)'/);
  const description = block[1].match(/description:\s*\n?\s*'((?:[^'\\]|\\.)*)'/);
  if (!title || !description) return null;
  return {
    title: title[1].replace(/\\'/g, "'"),
    description: description[1].replace(/\\'/g, "'"),
  };
}

const locales = (await readdir(TOOLS_DIR, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const rows = [];

for (const locale of locales) {
  const budget = BUDGETS[SCRIPT_BY_LOCALE[locale] ?? 'latin'];
  const files = (await readdir(join(TOOLS_DIR, locale)))
    .filter((f) => f.endsWith('.ts'))
    .sort();

  for (const file of files) {
    const source = await readFile(join(TOOLS_DIR, locale, file), 'utf8');
    const meta = readMeta(source);
    if (!meta) {
      rows.push({ locale, slug: file.replace(/\.ts$/, ''), status: 'UNPARSED' });
      continue;
    }
    const t = meta.title.length;
    const d = meta.description.length;
    const problems = [];
    if (t < budget.title[0]) problems.push(`title short ${t}`);
    if (t > budget.title[1]) problems.push(`title LONG ${t}`);
    if (d < budget.description[0]) problems.push(`desc short ${d}`);
    if (d > budget.description[1]) problems.push(`desc LONG ${d}`);

    rows.push({
      locale,
      slug: file.replace(/\.ts$/, ''),
      titleLen: t,
      descLen: d,
      title: meta.title,
      status: problems.length ? problems.join(', ') : 'ok',
    });
  }
}

const bad = rows.filter((r) => r.status !== 'ok');

/** `--check` turns the report into a gate; bare invocation stays diagnostic. */
const asGate = process.argv.includes('--check');
const quiet = process.argv.includes('--quiet');

if (!quiet) {
  for (const r of rows) {
    const pad = r.locale.padEnd(6);
    const slug = r.slug.padEnd(22);
    if (r.status === 'ok') {
      console.log(`  ok   ${pad} ${slug} t=${String(r.titleLen).padStart(3)} d=${String(r.descLen).padStart(3)}`);
    } else if (r.status === 'UNPARSED') {
      console.log(`  ??   ${pad} ${slug} ${r.status}`);
    } else {
      console.log(`  FIX  ${pad} ${slug} ${r.status}`);
    }
  }
}

if (bad.length) {
  console.log('\n--- titles needing a rewrite ---');
  for (const r of bad) {
    console.log(`\n${r.locale}/${r.slug}  (t=${r.titleLen} d=${r.descLen}  budget ${SCRIPT_BY_LOCALE[r.locale]})`);
    console.log(`  title: ${r.title}`);
  }
}

if (asGate) {
  if (bad.length) {
    console.error(
      `\nx meta length gate failed: ${bad.length} of ${rows.length} tool pages outside budget\n` +
        `  latin 50–60 / 140–160 · cjk 24–34 / 70–100\n` +
        `  A title past the ceiling truncates mid-keyword and loses the tail terms;\n` +
        `  a title under the floor wastes the only pixels Google gives you.`,
    );
    process.exit(1);
  }
  console.log(`\n\u2713 meta length gate passed (${rows.length} tool pages)`);
} else if (!quiet) {
  console.log(`\n${rows.length} pages · ${bad.length} outside budget · ${rows.length - bad.length} ok`);
}
