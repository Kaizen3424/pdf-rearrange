/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Cloudflare Web Analytics beacon token. When set, the beacon is emitted on every page. */
  readonly PUBLIC_CF_BEACON_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
