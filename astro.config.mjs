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

// https://astro.build/config
export default defineConfig({
  site: 'https://rearrangepdf.com',
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

  integrations: [react(), sitemap()]
});
