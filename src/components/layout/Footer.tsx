import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n'

export default function Footer() {
  const { t, l } = useI18n()
  return (
    <footer className="border-t border-line bg-surface-2/70">
      <div className="container-page flex flex-col items-start justify-between gap-3 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span aria-hidden="true">·</span>
          <span>{l(profile.footerTag)}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
            {t.footer.status}
          </span>
          <span aria-hidden="true">·</span>
          <span>v{__APP_VERSION__}</span>
        </p>
        <a href="#haut" className="inline-flex items-center gap-1.5 hover:text-accent">
          <ArrowUp size={14} aria-hidden="true" />
          {t.footer.top}
        </a>
      </div>
    </footer>
  )
}
