import { Download, ExternalLink, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { Placeholder } from '../ui/Text'
import { buttonPrimary, buttonSecondary } from '../ui/buttons'

function ExternalProfile({ label, url }: { label: string; url: string | null }) {
  const { t } = useI18n()
  if (!url) return <Placeholder>[À COMPLÉTER : URL {label}]</Placeholder>
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
      {label}
      <ExternalLink size={15} aria-hidden="true" />
      <span className="sr-only">{t.newTab}</span>
    </a>
  )
}

export default function Contact() {
  const { t, l } = useI18n()
  return (
    <Section
      id="contact"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      intro={t.contact.intro}
    >
      <Reveal>
        <div className="panel brackets grid gap-8 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <a href={`mailto:${profile.email}`} className={buttonPrimary}>
              <Mail size={16} aria-hidden="true" />
              {t.contact.email}
            </a>
            <p className="mt-3 font-mono text-sm break-all text-muted">{profile.email}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ExternalProfile label="LinkedIn" url={profile.linkedin} />
              <ExternalProfile label="GitHub" url={profile.github} />
            </div>
          </div>
          <div>
            <h3 className="font-mono text-sm text-accent">{t.contact.cvs}</h3>
            <ul className="mt-4 space-y-3">
              {profile.cvs.map((cv) => (
                <li key={cv.id}>
                  <a
                    href={l(cv.file)}
                    download
                    className="panel panel-hover flex items-center justify-between gap-3 bg-bg px-4 py-3"
                  >
                    <span className="font-mono text-sm font-medium">{l(cv.label)}</span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                      PDF
                      <Download size={16} aria-hidden="true" className="text-accent" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
