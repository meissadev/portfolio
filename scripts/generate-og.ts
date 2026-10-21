/**
 * Génère les images d'aperçu Open Graph (PNG 1200×630) pour LinkedIn et les réseaux :
 * public/og/default.png (accueil) et public/og/<slug>.png (une par étude de cas).
 * satori convertit le texte en tracés : le rendu ne dépend d'aucune police installée.
 */
import { Resvg } from '@resvg/resvg-js'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import satori from 'satori'
import { award } from '../src/data/award'
import { profile } from '../src/data/profile'
import { projects } from '../src/data/projects'
import { categoryLabels } from '../src/data/types'

const W = 1200
const H = 630
const NAVY = '#1D3A63'
const BLUE = '#2F5D9A'
const LIGHT = '#9DBBE6'

const font = (pkg: string, file: string) =>
  readFileSync(join('node_modules', '@fontsource', pkg, 'files', file))

const fonts = [
  {
    name: 'Plex',
    data: font('ibm-plex-sans', 'ibm-plex-sans-latin-400-normal.woff'),
    weight: 400 as const,
  },
  {
    name: 'Plex',
    data: font('ibm-plex-sans', 'ibm-plex-sans-latin-600-normal.woff'),
    weight: 600 as const,
  },
  {
    name: 'Plex Mono',
    data: font('ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff'),
    weight: 500 as const,
  },
]

type Node = { type: string; props: Record<string, unknown> }
const el = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown,
  extra = {},
): Node => ({
  type,
  props: { style, children, ...extra },
})

// Même motif de nœuds que l'accueil, en filigrane à droite
const networkSvg = (() => {
  const nodes = [
    [120, 60],
    [260, 130],
    [400, 50],
    [540, 120],
    [420, 240],
    [300, 280],
    [160, 230],
    [120, 400],
    [280, 430],
    [440, 390],
    [560, 470],
    [360, 560],
  ]
  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 5],
    [1, 6],
    [4, 5],
    [5, 6],
    [6, 7],
    [5, 8],
    [7, 8],
    [8, 9],
    [4, 9],
    [9, 10],
    [8, 11],
    [10, 11],
  ]
  const lines = links
    .map(
      ([a, b]) =>
        `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}"/>`,
    )
    .join('')
  const circles = nodes
    .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${[1, 5, 9].includes(i) ? 7 : 5}"/>`)
    .join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="620" height="630" viewBox="0 0 620 630"><g stroke="${LIGHT}" stroke-opacity="0.35" stroke-width="1.5">${lines}</g><g fill="${NAVY}" stroke="${LIGHT}" stroke-opacity="0.8" stroke-width="2">${circles}</g></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
})()

function card({
  eyebrow,
  title,
  tags,
  footer,
}: {
  eyebrow: string
  title: string
  tags: string[]
  footer: string
}) {
  return el(
    'div',
    {
      width: W,
      height: H,
      display: 'flex',
      position: 'relative',
      backgroundColor: NAVY,
      backgroundImage: `linear-gradient(135deg, ${NAVY} 55%, ${BLUE} 140%)`,
      fontFamily: 'Plex',
      color: '#FFFFFF',
    },
    [
      el('img', { position: 'absolute', right: 0, top: 0, width: 620, height: 630 }, undefined, {
        src: networkSvg,
        width: 620,
        height: 630,
      }),
      el(
        'div',
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          width: '100%',
        },
        [
          el('div', { display: 'flex', alignItems: 'center', gap: 18 }, [
            el(
              'div',
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                color: NAVY,
                fontFamily: 'Plex Mono',
                fontSize: 22,
              },
              profile.initials,
            ),
            el('div', { display: 'flex', fontSize: 30, fontWeight: 600 }, profile.name),
          ]),
          el('div', { display: 'flex', flexDirection: 'column', maxWidth: 900 }, [
            el(
              'div',
              {
                display: 'flex',
                fontFamily: 'Plex Mono',
                fontSize: 22,
                color: LIGHT,
                letterSpacing: 1,
              },
              eyebrow,
            ),
            el(
              'div',
              { display: 'flex', marginTop: 18, fontSize: 52, fontWeight: 600, lineHeight: 1.15 },
              title,
            ),
            el(
              'div',
              { display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30 },
              tags.map((tag) =>
                el(
                  'div',
                  {
                    display: 'flex',
                    padding: '6px 14px',
                    borderRadius: 6,
                    border: `1.5px solid ${LIGHT}`,
                    fontFamily: 'Plex Mono',
                    fontSize: 20,
                    color: '#E6ECF5',
                  },
                  tag,
                ),
              ),
            ),
          ]),
          el(
            'div',
            { display: 'flex', fontFamily: 'Plex Mono', fontSize: 20, color: LIGHT },
            footer,
          ),
        ],
      ),
    ],
  )
}

async function render(file: string, node: Node) {
  const svg = await satori(node as never, { width: W, height: H, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng()
  writeFileSync(join('public', 'og', file), png)
}

// Repart d'un dossier vide : les aperçus des projets retirés disparaissent
rmSync(join('public', 'og'), { recursive: true, force: true })
mkdirSync(join('public', 'og'), { recursive: true })

await render(
  'default.png',
  card({
    eyebrow: '// ANALYSTE SOC JUNIOR · SÉCURITÉ RÉSEAU',
    title: 'Du routage opérateur à la détection des menaces',
    tags: ['Réseau', 'Sécurité', `${award.competition} · 1re place`],
    footer: 'Portfolio · Master 2 Réseaux et Télécoms',
  }),
)

for (const p of projects) {
  await render(
    `${p.slug}.png`,
    card({
      eyebrow: `// ${p.code} · ${p.categories.map((c) => categoryLabels[c].fr.toUpperCase()).join(' / ')} · ÉTUDE DE CAS`,
      title: p.title.fr,
      tags: p.technologies.slice(0, 5),
      footer: 'Portfolio · Meissa Babou',
    }),
  )
}

console.log(`OG : ${projects.length + 1} images générées dans public/og/`)
