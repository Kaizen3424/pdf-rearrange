/**
 * Tool content resolver.
 *
 * Content lives at `src/content/tools/<locale>/<slug>.ts` and is discovered
 * with `import.meta.glob`, so adding a tool or a locale needs no edit here.
 * A locale that is missing a tool falls back to English, which keeps the build
 * green while translations land; `scripts/verify-i18n.mjs` fails the build if
 * any locale directory is missing an English slug, so the fallback can never
 * silently ship.
 */

import { defaultLocale, isLocale, locales, type Locale } from '../../i18n/ui';
import { getTool, tools, type ToolEntry } from '../registry';
import type { ToolContent } from './types';

export type { ToolContent } from './types';

const modules = import.meta.glob<{ default: ToolContent }>('./*/*.ts', {
  eager: true,
});

const content = new Map<string, ToolContent>();
for (const [path, module] of Object.entries(modules)) {
  // './en/merge-pdf.ts' -> 'en' + 'merge-pdf'
  const match = /^\.\/([^/]+)\/([^/]+)\.ts$/.exec(path);
  if (!match) continue;
  const [, locale, slug] = match;
  if (!locale || !slug) continue;
  if (!isLocale(locale)) {
    throw new Error(`Unknown locale directory in tool content: ${path}`);
  }
  content.set(toolKey(locale, slug), module.default);
}

function toolKey(locale: Locale, slug: string): string {
  return `${locale}/${slug}`;
}

/**
 * Content for a tool in a locale, falling back to English per-tool rather than
 * failing, so a partially-translated locale degrades one tool at a time instead
 * of taking down the page. Returns `null` only when the English copy itself is
 * missing, which is a build error rather than a runtime state.
 */
export function getToolContent(slug: string, locale: Locale): ToolContent | null {
  return content.get(toolKey(locale, slug)) ?? content.get(toolKey(defaultLocale, slug)) ?? null;
}

/** True when the tool has real content for the locale (not the English fallback). */
export function hasToolContent(slug: string, locale: Locale): boolean {
  return content.has(toolKey(locale, slug));
}

/** A tool paired with its resolved content for a locale. */
export interface ResolvedTool {
  tool: ToolEntry;
  content: ToolContent;
}

/** Tool entries paired with their content for a locale, in registry order. */
export function getToolsWithContent(locale: Locale): ResolvedTool[] {
  return tools
    .filter((tool) => tool.locales === undefined || tool.locales.includes(locale))
    .map((tool) => ({ tool, content: getToolContent(tool.slug, locale) }))
    .filter((entry): entry is ResolvedTool => Boolean(entry.content));
}

/**
 * Sibling tools for a tool's "related tools" block, restricted to the ones that
 * actually have content in this locale so we never link to a thin page.
 */
export function getRelatedTools(tool: ToolEntry, locale: Locale): ResolvedTool[] {
  return tool.related
    .map((slug) => getTool(slug))
    .filter((related): related is ToolEntry => Boolean(related))
    .map((related) => ({ tool: related, content: getToolContent(related.slug, locale) }))
    .filter((entry): entry is ResolvedTool => Boolean(entry.content));
}

/** Locales that currently have any tool content, for tests and tooling. */
export function contentLocales(): Locale[] {
  return locales.filter((locale) =>
    tools.some((tool) => content.has(toolKey(locale, tool.slug))),
  );
}
