import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { ViteReactSSGOptions } from 'vite-react-ssg'

const ssgOptions: ViteReactSSGOptions = {
  // /projets/<slug>/index.html → URL propres sur Vercel
  dirStyle: 'nested',
  formatting: 'none',
  script: 'async',
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // SITE_URL (URL publique du site) est lue depuis .env ou les variables Vercel
  envPrefix: ['VITE_', 'SITE_'],
  ssgOptions,
})
