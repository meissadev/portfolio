import { useState } from 'react'
import { projects } from '../../data/projects'
import { categoryLabels, type ProjectCategory } from '../../data/types'
import { useI18n } from '../../i18n'
import ProjectCard from '../ui/ProjectCard'
import Section from '../ui/Section'

type Filter = 'all' | ProjectCategory
const FILTERS: Filter[] = ['all', 'soc', 'reseau', 'securite', 'infrastructure']

export default function Projects() {
  const { t, l } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const visible =
    filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <Section
      id="projets"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      intro={t.projects.intro}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label={t.projects.filterLabel} className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition-colors ${
                  active
                    ? 'border-primary bg-primary text-on-primary'
                    : 'border-line bg-surface text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {f === 'all' ? t.projects.all : l(categoryLabels[f])}
              </button>
            )
          })}
        </div>
        <p className="font-mono text-xs text-muted" aria-live="polite">
          {t.projects.count(visible.length)}
        </p>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
