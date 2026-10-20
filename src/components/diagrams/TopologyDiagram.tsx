import {
  Boxes,
  Cloud,
  Container,
  Cpu,
  Database,
  HardDrive,
  KeyRound,
  Monitor,
  Network,
  Router,
  ScanSearch,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { useId } from 'react'
import type { NodeKind, Topology, TopologyNode } from '../../data/types'
import { useI18n } from '../../i18n'

const ICONS: Record<NodeKind, LucideIcon> = {
  router: Router,
  firewall: ShieldCheck,
  switch: Network,
  server: Server,
  cloud: Cloud,
  host: Monitor,
  users: Users,
  container: Container,
  storage: HardDrive,
  database: Database,
  workflow: Workflow,
  key: KeyRound,
  cpu: Cpu,
  gateway: Boxes,
  policy: SlidersHorizontal,
  search: ScanSearch,
}

const NODE_H = 58
const DEFAULT_W = 170
const PAD = 16

const width = (n: TopologyNode) => n.w ?? DEFAULT_W

/**
 * Schéma réseau généré à partir des données du projet.
 * Couleurs = variables CSS du thème : net et lisible en clair comme en sombre.
 */
export default function TopologyDiagram({ topology }: { topology: Topology }) {
  const { t, l } = useI18n()
  const uid = useId().replace(/:/g, '')
  const byId = new Map(topology.nodes.map((n) => [n.id, n]))

  // Cadre calculé automatiquement à partir des nœuds et des zones
  const xs: number[] = []
  const ys: number[] = []
  for (const n of topology.nodes) {
    xs.push(n.x - width(n) / 2, n.x + width(n) / 2)
    ys.push(n.y - NODE_H / 2, n.y + NODE_H / 2)
  }
  for (const z of topology.zones ?? []) {
    xs.push(z.x, z.x + z.w)
    ys.push(z.y, z.y + z.h)
  }
  const minX = Math.min(...xs) - PAD
  const minY = Math.min(...ys) - PAD
  const vbW = Math.max(...xs) + PAD - minX
  const vbH = Math.max(...ys) + PAD - minY

  const links = topology.links.flatMap((link) => {
    const a = byId.get(link.from)
    const b = byId.get(link.to)
    if (!a || !b) return []
    const mx = (a.x + b.x) / 2
    const my = (a.y + b.y) / 2
    let d = `M${a.x} ${a.y} L${b.x} ${b.y}`
    let lx = mx
    let ly = my
    if (link.bend) {
      const len = Math.hypot(b.x - a.x, b.y - a.y) || 1
      const cx = mx + (-(b.y - a.y) / len) * link.bend * 2
      const cy = my + ((b.x - a.x) / len) * link.bend * 2
      d = `M${a.x} ${a.y} Q${cx} ${cy} ${b.x} ${b.y}`
      lx = 0.25 * a.x + 0.5 * cx + 0.25 * b.x
      ly = 0.25 * a.y + 0.5 * cy + 0.25 * b.y
    }
    return [{ ...link, a, b, d, lx, ly }]
  })

  return (
    <figure>
      <div className="overflow-x-auto rounded-xl border border-line bg-surface">
        <svg
          role="img"
          // Pas de <title> SVG : React 19 le remonterait dans <head> (écart d'hydratation)
          aria-label={l(topology.title)}
          aria-describedby={`${uid}-cap`}
          viewBox={`${minX} ${minY} ${vbW} ${vbH}`}
          className="block h-auto w-full min-w-[680px]"
        >
          <defs>
            <pattern id={`${uid}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--c-line)" />
            </pattern>
          </defs>
          <rect x={minX} y={minY} width={vbW} height={vbH} fill={`url(#${uid}-grid)`} />

          {topology.zones?.map((z) => (
            <g key={z.label}>
              <rect
                x={z.x}
                y={z.y}
                width={z.w}
                height={z.h}
                rx="14"
                fill="var(--c-accent)"
                fillOpacity="0.05"
                stroke="var(--c-accent)"
                strokeOpacity="0.45"
                strokeDasharray="6 5"
              />
              <text
                x={z.x + 12}
                y={z.y + 18}
                fill="var(--c-muted)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                letterSpacing="0.06em"
              >
                {z.label.toUpperCase()}
              </text>
            </g>
          ))}

          <g fill="none" stroke="var(--c-accent)" strokeWidth="1.6" strokeLinecap="round">
            {links.map((k) => (
              <path
                key={`${k.from}-${k.to}`}
                d={k.d}
                strokeDasharray={k.dashed ? '5 5' : undefined}
              />
            ))}
          </g>

          {topology.nodes.map((n) => {
            const w = width(n)
            const Icon = ICONS[n.kind]
            return (
              <g key={n.id} transform={`translate(${n.x - w / 2} ${n.y - NODE_H / 2})`}>
                <rect
                  width={w}
                  height={NODE_H}
                  rx="9"
                  fill="var(--c-surface)"
                  stroke="var(--c-primary)"
                  strokeWidth="1.3"
                />
                <rect
                  x="1"
                  y="1"
                  width="36"
                  height={NODE_H - 2}
                  rx="8"
                  fill="var(--c-accent)"
                  fillOpacity="0.1"
                />
                <Icon
                  x={9}
                  y={(NODE_H - 20) / 2}
                  size={20}
                  color="var(--c-accent)"
                  aria-hidden="true"
                />
                <text
                  x="46"
                  y="25"
                  fill="var(--c-ink)"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="var(--font-sans)"
                >
                  {n.label}
                </text>
                {n.sub && (
                  <text
                    x="46"
                    y="42"
                    fill="var(--c-muted)"
                    fontSize="10.5"
                    fontFamily="var(--font-mono)"
                  >
                    {n.sub}
                  </text>
                )}
              </g>
            )
          })}

          {/* Étiquettes de liens au-dessus des nœuds pour rester lisibles */}
          {links
            .filter((k) => k.label)
            .map((k) => {
              const w = k.label!.length * 6.6 + 14
              return (
                <g key={`lbl-${k.from}-${k.to}`} transform={`translate(${k.lx} ${k.ly})`}>
                  <rect
                    x={-w / 2}
                    y="-10"
                    width={w}
                    height="20"
                    rx="10"
                    fill="var(--c-bg)"
                    stroke="var(--c-line)"
                  />
                  <text
                    y="4"
                    textAnchor="middle"
                    fill="var(--c-ink)"
                    fontSize="11"
                    fontFamily="var(--font-mono)"
                  >
                    {k.label}
                  </text>
                </g>
              )
            })}
        </svg>
      </div>
      <p className="mt-2 font-mono text-xs text-muted sm:hidden">{t.project.diagramScroll}</p>
      <figcaption id={`${uid}-cap`} className="mt-3 text-sm text-muted">
        {l(topology.caption)}
      </figcaption>
      <details className="mt-3 text-sm">
        <summary className="cursor-pointer font-medium text-accent">
          {t.project.diagramText}
        </summary>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {links.map((k) => (
            <li key={`txt-${k.from}-${k.to}`}>
              {k.a.label} ↔ {k.b.label}
              {k.label ? ` : ${k.label}` : ''}
              {k.dashed ? ' (lien logique)' : ''}
            </li>
          ))}
        </ul>
      </details>
    </figure>
  )
}
