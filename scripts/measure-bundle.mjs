/**
 * Walks the real static-import graph of a built page and totals the bytes a
 * browser must download before the page is interactive.
 *
 * Why this instead of Lighthouse: a dev server serves unbundled ESM with
 * react-refresh and no tree-shaking, so it measures the toolchain rather than
 * the product. The production chunk graph is deterministic and lives on disk.
 *
 * Usage: node scripts/measure-bundle.mjs [dist] [page] e.g. ... dist merge-pdf
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] || 'dist';
const PAGE = process.argv[3] || 'merge-pdf';
const ASTRO = join(DIST, '_astro');

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

/** Chunk names are captured from URLs that already carry an `_astro/` prefix. */
const normalize = (file) => file.replace(/^\/?(?:_astro\/)?/, '').replace(/^\.\//, '');

/** Resolves a relative import specifier to an on-disk chunk filename. */
function resolveSpec(fromFile, spec) {
  const name = normalize(spec);
  const base = join(ASTRO, name);
  if (existsSync(base) && statSync(base).isFile()) return name;
  // Bare specifiers that were bundled into a sibling chunk, or extensions omitted.
  for (const ext of ['.js', '.mjs']) {
    if (existsSync(base + ext)) return name + ext;
  }
  return null;
}

function importsOf(file) {
  const src = readFileSync(join(ASTRO, file), 'utf8');
  const out = new Set();
  // Anchored on the specifier rather than on the `import` keyword, because a
  // minifier emits `import{a,b}from"./x.js"` with no whitespace around `from`.
  // Anchoring on `import\s*\(?\s*` instead misses every multi-line named-import
  // list, which is most of a bundler's output.
  for (const re of [
    /\bfrom\s*["'](\.[^"']+)["']/g, // static import + re-export
    /\bimport\s*["'](\.[^"']+)["']/g, // side-effect import
    /\bimport\s*\(\s*["'](\.[^"']+)["']/g, // dynamic import
  ]) {
    for (const m of src.matchAll(re)) out.add(m[1]);
  }
  return [...out].map((s) => resolveSpec(file, s)).filter(Boolean);
}

const html = readFileSync(join(DIST, PAGE, 'index.html'), 'utf8');

// Entry chunks. Astro's island hydration emits them as `component-url` on
// <astro-island> and `renderer-url` for the framework runtime, not as a
// <script src> — so a plain src/href scan finds nothing and silently reports
// 0 KB, which is worse than reporting nothing.
const entries = new Set();
for (const re of [
  /component-url="\/([^"]+\.js)"/g,
  /renderer-url="\/([^"]+\.js)"/g,
  /(?:src|href)="\/([^"]+\.js)"/g,
]) {
  for (const m of html.matchAll(re)) entries.add(normalize(m[1]));
}

const seen = new Map(); // file -> bytes
const queue = [...entries];
while (queue.length) {
  const file = queue.shift();
  if (seen.has(file)) continue;
  const path = join(ASTRO, file);
  if (!existsSync(path)) continue;
  seen.set(file, statSync(path).size);
  for (const dep of importsOf(file)) if (!seen.has(dep)) queue.push(dep);
}

const total = [...seen.values()].reduce((a, b) => a + b, 0);
const rows = [...seen.entries()].sort((a, b) => b[1] - a[1]);

console.log(`Production JS graph for /${PAGE}/  —  ${seen.size} chunks\n`);
for (const [f, bytes] of rows) console.log(`${kb(bytes).padStart(10)}  ${f}`);
console.log(`${'-'.repeat(10 + 2 + 40)}`);
console.log(`${kb(total).padStart(10)}  TOTAL (uncompressed)`);

// How many chunks does a single-locale page drag in?
const localeDicts = rows.filter(([f]) => /i18n|locale|dictionary/i.test(f));
console.log(`\nlocale/dictionary-ish chunks pulled in: ${localeDicts.length}`);
for (const [f, bytes] of localeDicts) console.log(`  ${kb(bytes).padStart(10)}  ${f}`);