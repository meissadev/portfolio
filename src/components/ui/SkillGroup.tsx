import { Cloud, Radar, Router, Server, ShieldCheck, Siren } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProject } from '../../data/projects'
import type { SkillGroup as SkillGroupData } from '../../data/types'
import { useI18n } from '../../i18n'
import Tag from './Tag'

const icons = {
  radar: Radar,
  siren: Siren,
  shield: ShieldCheck,
  router: Router,
  server: Server,
  cloud: Cloud,
}

const proofLink =
  'text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent'

export default function SkillGroup({ group }: { group: SkillGroupData }) {
  const { t, l } = useI18n()
  const Icon = icons[group.icon]
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-md bg-accent/10 text-accent">
          <Icon size={18} aria-hidden="true" />
        </span>
        <h3 className="font-semibold">{l(group.title)}</h3>
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <p className="border-t border-line pt-3 text-sm text-muted">
          <span className="label-mono mr-2">{t.skills.proofs}</span>
          {group.proofs.map((proof, i) => {
            const sep = i > 0 ? ' · ' : ''
            if ('project' in proof) {
              const p = getProject(proof.project)
              if (!p) return null
              return (
                <span key={proof.project}>
                  {sep}
                  <Link to={`/projets/${p.slug}`} className={proofLink}>
                    {p.code}
                  </Link>
                </span>
              )
            }
            return (
              <span key={proof.section}>
                {sep}
                <a href={`/#${proof.section}`} className={proofLink}>
                  {l(proof.label)}
                </a>
              </span>
            )
          })}
        </p>
      </div>
    </article>
  )
}
