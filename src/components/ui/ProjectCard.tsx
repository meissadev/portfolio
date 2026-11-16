import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryLabels, type Project } from '../../data/types'
import { useI18n } from '../../i18n'
import Tag from './Tag'

/** Carte projet présentée comme une fiche d'équipement. */
export default function ProjectCard({ project }: { project: Project }) {
  const { t, l, projectHref } = useI18n()
  const ongoing = project.status === 'ongoing'
  return (
    <article className="panel panel-hover group relative flex h-full flex-col">
      <header className="term-bar justify-between px-5">
        <span>
          <span className="text-accent">{project.code}</span> ·{' '}
          {project.categories.map((c) => l(categoryLabels[c])).join(' / ')}
        </span>
        <span className="flex shrink-0 items-center gap-1.5">
          <span
            aria-hidden="true"
            className={`size-2 rounded-full ${ongoing ? 'bg-todo-line' : 'bg-ok'}`}
          />
          {ongoing ? t.projects.status.ongoing : t.projects.status.done}
        </span>
      </header>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-mono text-base leading-snug font-semibold text-balance">
          {/* Lien étiré : toute la carte est cliquable */}
          <Link
            to={projectHref(project.slug)}
            className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[var(--c-accent)]"
          >
            {l(project.title)}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted">{l(project.summary)}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={t.project.technologies}>
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <p
          aria-hidden="true"
          className="mt-auto flex items-center gap-1.5 pt-5 font-mono text-sm font-medium text-accent"
        >
          {t.projects.caseStudy}
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </article>
  )
}
