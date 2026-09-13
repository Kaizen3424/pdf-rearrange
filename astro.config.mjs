// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Cloudflare Web Analytics is optional. Set PUBLIC_CF_BEACON_TOKEN (in .env,
// your host's build environment, or the CLI) to emit the beacon on every page;
// its origin is then also allowed in the Content Security Policy. `.env` files
// are not loaded inside the config file, so we read it with Vite's loadEnv.
const { PUBLIC_CF_BEACON_TOKEN } = loadEnv(
  process.env.NODE_ENV ?? 'production',
  process.cwd(),
  ''
);
const cfBeaconEnabled = Boolean(PUBLIC_CF_BEACON_TOKEN);

const connectSrc = ["'self'", 'blob:', 'data:'];
if (cfBeaconEnabled) connectSrc.push('https://cloudflareinsights.com');

const SITE = 'https://rearrangepdf.com';
const LOCALE_CODES = ['es', 'ja', 'fr', 'de', 'pt-br', 'ko', 'it'];

// Canonicals/hreflang in Layout.astro use directory URLs only for the home
// pages (`/`, `/es/`) and clean URLs elsewhere (`/es/about`), while
// @astrojs/sitemap defaults to directory URLs everywhere (`/es/about/`).
// Normalize the sitemap to match so crawlers see one URL form per page.
const HOME_URLS = new Set([`${SITE}/`, ...LOCALE_CODES.map((code) => `${SITE}/${code}/`)]);
/** @param {string} url */
const canonicalSitemapUrl = (url) =>
  HOME_URLS.has(url) ? url : url.replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  site: SITE,
  i18n: {
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt-br', 'ko', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },

  security: {
    csp: {
      // Setting `resources` replaces Astro's defaults, so `'self'` must be kept
      // for our own scripts. Astro still appends SHA-256 hashes for inline scripts.
      ...(cfBeaconEnabled
        ? {
            scriptDirective: {
              resources: ["'self'", 'https://static.cloudflareinsights.com']
            }
          }
        : {}),
      styleDirective: {
        resources: ["'self'", "'unsafe-inline'"]
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' blob: data:",
        "font-src 'self'",
        `connect-src ${connectSrc.join(' ')}`,
        "worker-src 'self' blob:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ]
    }
  },

  integrations: [
    react(),
    sitemap({
      // Emit <xhtml:link rel="alternate" hreflang="…"> for every locale on every
      // URL so Google can discover the translations. Values mirror the BCP 47
      // hreflang tags emitted by Layout.astro (see src/i18n/ui.ts localeMeta).
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          'pt-br': 'pt-BR',
          ko: 'ko',
          it: 'it'
        }
      },
      serialize(item) {
        item.url = canonicalSitemapUrl(item.url);
        if (item.links) {
          for (const link of item.links) {
            link.url = canonicalSitemapUrl(link.url);
          }
          // @astrojs/sitemap's i18n option omits x-default; point it at English,
          // matching the <link rel="alternate" hreflang="x-default"> in Layout.
          // `links` is cached and shared per logical path, so guard the push.
          const hasXDefault = item.links.some(
            (link) => link.lang === 'x-default' || link.hreflang === 'x-default'
          );
          if (!hasXDefault) {
            const english = item.links.find(
              (link) => link.lang === 'en' || link.hreflang === 'en'
            );
            if (english) {
              item.links.push({ lang: 'x-default', url: english.url });
            }
          }
        }
        return item;
      }
    })
  ]
});
