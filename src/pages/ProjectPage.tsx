import { ArrowLeft, ArrowRight, Download, ExternalLink } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/layout/Seo'
import TopologyDiagram from '../components/diagrams/TopologyDiagram'
import Reveal from '../components/ui/Reveal'
import Tag from '../components/ui/Tag'
import { PlaceholderBlock, Placeholder, Text } from '../components/ui/Text'
import { buttonSecondary } from '../components/ui/buttons'
import { projects } from '../data/projects'
import { categoryLabels } from '../data/types'
import { useI18n } from '../i18n'
import NotFound from './NotFound'

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="border-t border-line py-8">
        <h2 className="mb-4 font-mono text-sm font-medium text-accent">
          <span aria-hidden="true" className="text-muted">
            #{' '}
          </span>
          {title}
        </h2>
        {children}
      </section>
    </Reveal>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const { t, l, locale, projectHref, sectionHref } = useI18n()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const ongoing = project.status === 'ongoing'

  return (
    <article>
      <Seo
        title={`${l(project.title)} — Meissa Babou`}
        description={l(project.summary)}
        path={projectHref(project.slug)}
        image={`/og/${locale === 'fr' ? '' : 'en/'}${project.slug}.png`}
        type="article"
      />

      <header className="border-b border-line bg-surface-2/70">
        <div className="container-page py-10 sm:py-14">
          <a
            href={sectionHref('projets')}
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t.project.back}
          </a>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
            <span className="rounded border border-accent/40 px-1.5 py-0.5 font-medium text-accent">
              {project.code}
            </span>
            <span>{project.categories.map((c) => l(categoryLabels[c])).join(' / ')}</span>
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${ongoing ? 'bg-todo-line' : 'bg-ok'}`}
              />
              {ongoing ? t.projects.status.ongoing : t.projects.status.done}
            </span>
          </p>
          <h1 className="mt-3 max-w-3xl font-mono text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {l(project.title)}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">{l(project.summary)}</p>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={t.project.technologies}>
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="container-page pb-16">
        <Reveal>
          <div className="grid gap-5 py-10 md:grid-cols-2">
            <div className="panel p-5">
              <h2 className="mb-2 font-mono text-sm font-medium text-accent">
                {t.project.context}
              </h2>
              <p>
                <Text>{l(project.context)}</Text>
              </p>
            </div>
            <div className="panel p-5">
              <h2 className="mb-2 font-mono text-sm font-medium text-accent">
                {t.project.objective}
              </h2>
              <p>
                <Text>{l(project.objective)}</Text>
              </p>
            </div>
          </div>
        </Reveal>

        {project.topology && (
          <Block title={t.project.diagram}>
            <TopologyDiagram topology={project.topology} />
          </Block>
        )}

        <div className="grid gap-x-10 md:grid-cols-2">
          <Block title={t.project.achievements}>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              {project.achievements.map((a, i) => (
                <li key={i}>
                  <Text>{l(a)}</Text>
                </li>
              ))}
            </ul>
          </Block>
          <Block title={t.project.learnings}>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              {project.learnings.map((a, i) => (
                <li key={i}>
                  <Text>{l(a)}</Text>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <Block title={t.project.screenshots}>
          {project.screenshots.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {project.screenshots.map((s) => (
                <figure
                  key={s.src}
                  className={`panel overflow-hidden ${s.wide ? 'sm:col-span-2' : ''}`}
                >
                  <img
                    src={s.src}
                    alt={l(s.alt)}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                  {s.caption && (
                    <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
                      {l(s.caption)}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <PlaceholderBlock>
              [À COMPLÉTER : {t.project.todoScreens} — {l(project.screenshotsHint)}]
            </PlaceholderBlock>
          )}
        </Block>

        <Block title={t.project.links}>
          <div className="flex flex-wrap items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonSecondary}
              >
                {t.project.github}
                <ExternalLink size={15} aria-hidden="true" />
                <span className="sr-only">{t.newTab}</span>
              </a>
            )}
            {project.resources?.map((r) => (
              <a key={r.href} href={r.href} download className={buttonSecondary}>
                <Download size={15} aria-hidden="true" />
                {l(r.label)}
              </a>
            ))}
            {!project.github && !project.resources?.length && (
              <Placeholder>[À COMPLÉTER : lien GitHub, si le code est publiable]</Placeholder>
            )}
          </div>
        </Block>

        <nav
          aria-label={t.project.others}
          className="mt-4 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
        >
          <Link to={projectHref(prev.slug)} className="panel panel-hover p-4">
            <span className="label-mono flex items-center gap-1.5 text-muted">
              <ArrowLeft size={14} aria-hidden="true" />
              {t.project.prev}
            </span>
            <span className="mt-1 block font-medium">{l(prev.title)}</span>
          </Link>
          <Link to={projectHref(next.slug)} className="panel panel-hover p-4 text-right">
            <span className="label-mono flex items-center justify-end gap-1.5 text-muted">
              {t.project.next}
              <ArrowRight size={14} aria-hidden="true" />
            </span>
            <span className="mt-1 block font-medium">{l(next.title)}</span>
          </Link>
        </nav>
      </div>
    </article>
  )
}
