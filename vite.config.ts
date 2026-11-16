import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import type { ViteReactSSGOptions } from 'vite-react-ssg'

const ssgOptions: ViteReactSSGOptions = {
  // /projets/<slug>/index.html → URL propres sur Vercel
  dirStyle: 'nested',
  formatting: 'none',
  script: 'async',
}

const { version } = JSON.parse(readFileSync('package.json', 'utf8')) as { version: string }

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Version affichée dans le pied de page (celle du tag Git publié)
  define: { __APP_VERSION__: JSON.stringify(version) },
  // SITE_URL (URL publique du site) est lue depuis .env ou les variables Vercel
  envPrefix: ['VITE_', 'SITE_'],
  ssgOptions,
})
