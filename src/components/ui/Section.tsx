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

export default function Section({ id, eyebrow, title, intro, children, tinted }: SectionProps) {
  const headingId = `${id}-titre`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 sm:py-24 ${tinted ? 'border-y border-line bg-surface-2/60' : ''}`}
    >
      <div className="container-page">
        <Reveal>
          <p className="label-mono mb-2 text-accent">
            <span aria-hidden="true">// </span>
            {eyebrow}
          </p>
          <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
