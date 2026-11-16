import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { buttonPrimary } from '../components/ui/buttons'
import { useI18n } from '../i18n'

export default function NotFound() {
  const { t, home } = useI18n()
  return (
    <div className="container-page py-24 text-center">
      <Head>
        <title>{`${t.notFound.title} — Meissa Babou`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <p className="font-mono text-sm text-alert">{t.notFound.code}</p>
      <h1 className="mt-3 font-mono text-3xl font-semibold">{t.notFound.title}</h1>
      <p className="mt-3 text-muted">{t.notFound.text}</p>
      <Link to={home} className={`${buttonPrimary} mt-8`}>
        {t.notFound.home}
      </Link>
    </div>
  )
}
