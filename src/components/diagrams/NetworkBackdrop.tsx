/**
 * Détail signature : une topologie de nœuds reliés, très discrète, en fond de l'accueil.
 * Un seul « paquet » circule sur un chemin ; il est masqué si l'utilisateur réduit les animations.
 */
const NODES: [number, number][] = [
  [620, 80],
  [760, 150],
  [900, 70],
  [1060, 130],
  [1150, 260],
  [980, 250],
  [830, 300],
  [700, 250],
  [640, 400],
  [790, 450],
  [950, 410],
  [1100, 470],
  [880, 545],
  [1030, 560],
  [540, 210],
  [1160, 40],
]
const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 15],
  [3, 4],
  [3, 5],
  [1, 7],
  [1, 6],
  [5, 6],
  [6, 7],
  [7, 14],
  [0, 14],
  [7, 8],
  [6, 9],
  [8, 9],
  [9, 10],
  [5, 10],
  [4, 11],
  [10, 11],
  [9, 12],
  [12, 13],
  [11, 13],
]
const HUBS = new Set([1, 6, 10])
const PACKET_PATH = 'M540 210 L700 250 L830 300 L980 250 L1060 130 L1150 260 L1100 470'

export default function NetworkBackdrop() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_left,black_20%,transparent_70%)] opacity-50 dark:opacity-40"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMaxYMid slice"
    >
      <g stroke="var(--c-accent)" strokeOpacity="0.35" strokeWidth="1.2">
        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
          />
        ))}
      </g>
      <g>
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={HUBS.has(i) ? 6 : 4}
            fill={HUBS.has(i) ? 'var(--c-accent)' : 'var(--c-bg)'}
            stroke="var(--c-accent)"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
        ))}
      </g>
      <g className="motion-reduce:hidden">
        <circle r="3.5" fill="var(--c-primary)">
          <animateMotion dur="11s" repeatCount="indefinite" path={PACKET_PATH} />
        </circle>
      </g>
    </svg>
  )
}
