/** URL publique du site (sans slash final), définie par SITE_URL dans .env ou sur Vercel. */
export const SITE_URL = (import.meta.env.SITE_URL || 'https://meissa-babou.vercel.app').replace(
  /\/$/,
  '',
)

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
