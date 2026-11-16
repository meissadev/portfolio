/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/** Version du package.json, injectée au build (vite.config.ts) */
declare const __APP_VERSION__: string
