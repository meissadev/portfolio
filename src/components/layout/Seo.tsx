import { Head } from 'vite-react-ssg'
import { absoluteUrl } from '../../config'
import { useI18n } from '../../i18n'

interface SeoProps {
  title: string
  description: string
  /** Chemin de la page, ex. "/" ou "/projets/soc-open-source" */
  path: string
  /** Chemin de l'image Open Graph (PNG 1200×630 générée au build) */
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  jsonLd?: object
}

export default function Seo({
  title,
  description,
  path,
  image = '/og/default.png',
  imageAlt,
  type = 'website',
  jsonLd,
}: SeoProps) {
  const { t, locale } = useI18n()
  const url = absoluteUrl(path)
  const img = absoluteUrl(image)

  return (
    <Head>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={t.seo.siteName} />
      <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt ?? title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  )
}
