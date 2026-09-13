import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import type { APIRoute } from 'astro';
import { getAlternates, localePath, locales } from '../i18n/utils';

const FALLBACK_SITE = 'https://rearrangepdf.com';
const EXCLUDED_PAGES = new Set(['404', '500']);

/** Content shared by every page in every locale; an edit bumps lastmod site-wide. */
const SHARED_SOURCES = ['src/i18n/rich.ts', 'src/layouts/Layout.astro'];

/**
 * Logical (locale-independent) paths for every indexable root page, derived
 * from the route files themselves so newly added pages appear automatically.
 * The `[lang]` routes mirror these, so only the root `*.astro` files matter.
 */
function logicalPaths(): string[] {
  return Object.keys(import.meta.glob('./*.astro'))
    .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
    .filter((name) => !EXCLUDED_PAGES.has(name))
    .map((name) => (name === 'index' ? '/' : `/${name}`))
    .sort();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/*
 * <lastmod> per sitemaps.org: the date the linked page was last modified,
 * not the date the sitemap was generated. Sourced from git history (latest
 * commit touching the page's sources), superseded by a file's mtime when it
 * has uncommitted changes. The tag is optional, so it is simply omitted when
 * git is unavailable (e.g. a build environment without history).
 */

const commitDates = new Map<string, string | null>();
let worktreeChanges: Set<string> | null = null;

/** Latest commit date (YYYY-MM-DD) touching any of `files`; null if unknowable. */
function commitDateFor(files: string[]): string | null {
  const key = files.join('\n');
  if (!commitDates.has(key)) {
    try {
      const out = execFileSync(
        'git',
        ['log', '-1', '--format=%cI', '--', ...files.map((f) => `:(literal)${f}`)],
        { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
      ).trim();
      commitDates.set(key, out ? out.slice(0, 10) : null);
    } catch {
      commitDates.set(key, null);
    }
  }
  return commitDates.get(key) ?? null;
}

/** Paths that differ from HEAD (modified, staged, renamed, or untracked). */
function changedPaths(): Set<string> {
  if (worktreeChanges === null) {
    try {
      const out = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      });
      worktreeChanges = new Set(
        out
          .split('\n')
          .filter((line) => line.length > 3)
          .flatMap((line) => {
            const raw = line.slice(3).replace(/^"|"$/g, '');
            const arrow = raw.indexOf(' -> ');
            return arrow === -1 ? [raw] : [raw.slice(0, arrow), raw.slice(arrow + 4)];
          }),
      );
    } catch {
      worktreeChanges = new Set();
    }
  }
  return worktreeChanges;
}

/** Latest modification date (YYYY-MM-DD) of `files`, or null if unknowable. */
function lastModified(files: string[]): string | null {
  const dates: string[] = [];
  const committed = commitDateFor(files);
  if (committed) dates.push(committed);
  const changed = changedPaths();
  for (const file of files) {
    if (!changed.has(file)) continue;
    try {
      dates.push(statSync(file).mtime.toISOString().slice(0, 10));
    } catch {
      // Renamed or deleted in the worktree; HEAD already covers the old path.
    }
  }
  return dates.sort().at(-1) ?? null;
}

function maxDate(...candidates: (string | null | undefined)[]): string | null {
  return candidates
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(-1) ?? null;
}

/**
 * Single-file `/sitemap.xml` per the sitemaps.org protocol: uses the same
 * `localePath` + `getAlternates` helpers as `Layout.astro`, so canonical URL
 * forms (trailing slash on every directory-index page) and the hreflang
 * cluster (all locales + x-default) always match the emitted `<link>` tags.
 * Adds `xsi:schemaLocation` (per "Validating your Sitemap") and a git-sourced
 * `<lastmod>` per URL. `changefreq`/`priority` are deliberately omitted: both
 * are ignored by major engines and fabricated hints are worse than none.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(FALLBACK_SITE);
  const paths = logicalPaths();

  const sharedLastmod = lastModified(SHARED_SOURCES);
  const pageLastmods = new Map(
    paths.map((logical) => {
      const name = logical === '/' ? 'index' : logical.slice(1);
      return [
        logical,
        lastModified([`src/pages/${name}.astro`, `src/pages/[lang]/${name}.astro`]),
      ] as const;
    }),
  );
  const localeLastmods = new Map(
    locales.map((locale) =>
      [
        locale,
        lastModified([`src/i18n/locales/${locale}.ts`, `src/i18n/tool/${locale}.ts`]),
      ] as const,
    ),
  );

  const entries = paths.flatMap((logical) =>
    locales.map((locale) => {
      const loc = new URL(localePath(logical, locale), base).href;
      const lastmod = maxDate(
        pageLastmods.get(logical),
        localeLastmods.get(locale),
        sharedLastmod,
      );
      const alternates = getAlternates(logical, base)
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`,
        )
        .join('\n');
      const lastmodLine = lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : '';
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n${lastmodLine}${alternates}\n  </url>`;
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
