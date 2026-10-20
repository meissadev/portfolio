import type { TimelineEntry } from './types'

export const experience: TimelineEntry[] = [
  {
    id: 'stage-aibd',
    period: { fr: 'Mai 2025' },
    title: { fr: 'Stagiaire IT Support Back-Office' },
    org: { fr: 'LYMAK AIBD SUMMA — Aéroport International Blaise Diagne' },
    details: [
      {
        fr: 'Configuration d’un pare-feu FortiGate pour sécuriser le trafic d’un réseau sans fil.',
      },
      { fr: 'Maintenance et dépannage réseau.' },
    ],
    tags: ['FortiGate', 'Wi-Fi', 'Dépannage réseau'],
  },
]

export const engagement: TimelineEntry[] = [
  {
    id: 'cercle-des-geeks',
    period: { fr: '2025 – présent' },
    title: { fr: 'Coordonnateur des étudiants Réseaux et Télécoms' },
    org: { fr: 'Cercle des Geeks' },
  },
  {
    id: 'club-uidt',
    period: { fr: '2023' },
    title: { fr: 'Président de la commission pédagogique' },
    org: { fr: 'Club informatique de l’UIDT' },
  },
]
