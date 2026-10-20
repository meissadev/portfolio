/** Après le pré-rendu : sitemap.xml, robots.txt et page 404.html pour Vercel. */
import { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { projects } from '../src/data/projects'
import { SITE_URL } from './site-url'

const dist = 'dist'
const today = new Date().toISOString().slice(0, 10)
const paths = ['/', ...projects.map((p) => `/projets/${p.slug}`)]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

const notFound = join(dist, '404', 'index.html')
if (existsSync(notFound)) copyFileSync(notFound, join(dist, '404.html'))

// Les balises de Helmet sont insérées en tête de <head> : on remet <meta charset>
// en première position (il doit figurer dans les 1024 premiers octets).
const htmlFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? htmlFiles(join(dir, e.name))
      : e.name.endsWith('.html')
        ? [join(dir, e.name)]
        : [],
  )
const charset = /<meta charset="UTF-8"\s*\/?>/i
for (const file of htmlFiles(dist)) {
  const html = readFileSync(file, 'utf8')
  if (!charset.test(html)) continue
  writeFileSync(file, html.replace(charset, '').replace('<head>', '<head><meta charset="UTF-8">'))
}

console.log(`postbuild : sitemap (${paths.length} URL), robots.txt, 404.html — ${SITE_URL}`)
