import { ExternalLink, Trophy } from 'lucide-react'
import { award } from '../../data/award'
import { useI18n } from '../../i18n'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { Text } from '../ui/Text'
import { buttonSecondary } from '../ui/buttons'

export default function Award() {
  const { t, l } = useI18n()
  return (
    <Section id="distinction" eyebrow={t.award.eyebrow} title={award.competition} tinted>
      <Reveal>
        <article className="grid gap-8 rounded-xl border border-l-4 border-line border-l-primary bg-surface p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-primary text-on-primary">
                <Trophy size={22} aria-hidden="true" />
              </span>
              <p className="label-mono text-muted">
                {l(award.date)} · {l(award.round)}
              </p>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-balance sm:text-2xl">
              {l(award.result)}
            </h3>
            <p className="mt-2 text-muted">
              Équipe <span className="font-mono text-ink">{award.team}</span>
            </p>
            <p className="mt-4 text-sm">
              <span className="label-mono mr-2 text-muted">{t.award.role}</span>
              <Text>{l(award.role)}</Text>
            </p>
            <a
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonSecondary} mt-6`}
            >
              {t.award.visit}
              <ExternalLink size={15} aria-hidden="true" />
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </div>
          <div>
            <h4 className="label-mono text-accent">{t.award.round}</h4>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {award.deliverables.map((d, i) => (
                <li key={i} className="flex gap-3 rounded-lg border border-line bg-bg p-4">
                  <span aria-hidden="true" className="font-mono text-sm font-medium text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium">{l(d)}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
