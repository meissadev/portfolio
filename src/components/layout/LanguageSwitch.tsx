import { Link, useLocation } from 'react-router-dom'
import { locales, translatePath, useI18n } from '../../i18n'

/** Sélecteur FR / EN : renvoie vers la même page dans l'autre langue. */
export default function LanguageSwitch() {
  const { locale, t } = useI18n()
  const { pathname, hash } = useLocation()
  return (
    <ul
      aria-label={t.lang.label}
      className="flex items-center rounded-md border border-line bg-surface p-0.5 font-mono text-xs"
    >
      {locales.map((code) => {
        const active = code === locale
        return (
          <li key={code}>
            <Link
              to={`${translatePath(pathname, code)}${hash}`}
              hrefLang={code}
              lang={code}
              aria-current={active ? 'true' : undefined}
              aria-label={t.lang.names[code]}
              className={`block rounded px-2 py-1.5 uppercase transition-colors ${
                active ? 'bg-accent/15 text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {code}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
