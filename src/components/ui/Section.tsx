import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  /** Fond alterné pour rythmer la page */
  tinted?: boolean
}

/** Nom de dossier affiché dans l'invite : « Expérience » → « experience » */
const dirName = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '-')

export default function Section({ id, eyebrow, title, intro, children, tinted }: SectionProps) {
  const headingId = `${id}-titre`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 sm:py-24 ${tinted ? 'border-y border-line bg-surface-2/70' : ''}`}
    >
      <div className="container-page">
        <Reveal>
          {/* Invite de terminal décorative ; le libellé reste lisible par les lecteurs d'écran */}
          <p className="mb-3 font-mono text-sm">
            <span aria-hidden="true">
              <span className="text-accent">mb@soc</span>
              <span className="text-muted">:</span>
              <span className="text-cyan">~/{dirName(eyebrow)}</span>
              <span className="text-muted">$</span>
            </span>
            <span className="sr-only">{eyebrow}</span>
          </p>
          <h2
            id={headingId}
            className="font-mono text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
