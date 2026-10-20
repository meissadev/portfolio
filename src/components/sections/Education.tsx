import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications, education } from '../../data/education'
import { useI18n } from '../../i18n'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { Placeholder } from '../ui/Text'
import Timeline from '../ui/Timeline'

export default function Education() {
  const { t, l } = useI18n()
  return (
    <Section id="formation" eyebrow={t.education.eyebrow} title={t.education.title} tinted>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h3 className="label-mono mb-6 text-accent">{t.education.degrees}</h3>
          <Timeline entries={education} />
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="label-mono mb-6 text-accent">{t.education.certification}</h3>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li key={c.name} className="rounded-xl border border-line bg-surface p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <BadgeCheck
                    size={22}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <div>
                    <h4 className="font-semibold">{c.name}</h4>
                    <p className="text-sm text-muted">
                      {c.issuer} · {l(c.date)}
                    </p>
                    <p className="mt-3 text-sm">
                      {c.verifyUrl ? (
                        <a
                          href={c.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                        >
                          {t.education.verify}
                          <ExternalLink size={14} aria-hidden="true" />
                          <span className="sr-only">(nouvel onglet)</span>
                        </a>
                      ) : (
                        <Placeholder>
                          [À COMPLÉTER : lien de vérification de la certification]
                        </Placeholder>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
