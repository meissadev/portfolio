import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-start justify-between gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name} ·{' '}
          <span className="font-mono text-xs">{profile.footerTag}</span>
        </p>
        <a href="#haut" className="inline-flex items-center gap-1.5 hover:text-accent">
          <ArrowUp size={16} aria-hidden="true" />
          {t.footer.top}
        </a>
      </div>
    </footer>
  )
}
