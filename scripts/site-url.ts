import { loadEnv } from 'vite'

/** SITE_URL lue comme le fait Vite : variable d'environnement, sinon fichier .env */
export const SITE_URL = (
  loadEnv('production', process.cwd(), '').SITE_URL || 'https://meissa-babou.vercel.app'
).replace(/\/$/, '')
