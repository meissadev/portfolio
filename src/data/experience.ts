import type { TimelineEntry } from './types'

export const experience: TimelineEntry[] = [
  {
    id: 'stage-aibd',
    period: { fr: 'Mai 2025', en: 'May 2025' },
    title: { fr: 'Stagiaire IT Support Back-Office', en: 'IT Support Back-Office Intern' },
    org: {
      fr: 'LYMAK AIBD SUMMA — Aéroport International Blaise Diagne',
      en: 'LYMAK AIBD SUMMA — Blaise Diagne International Airport',
    },
    details: [
      {
        fr: 'Configuration d’un pare-feu FortiGate pour sécuriser le trafic d’un réseau sans fil.',
        en: 'Configured a FortiGate firewall to secure the traffic of a wireless network.',
      },
      { fr: 'Maintenance et dépannage réseau.', en: 'Network maintenance and troubleshooting.' },
    ],
    tags: ['FortiGate', 'Wi-Fi', { fr: 'Dépannage réseau', en: 'Network troubleshooting' }],
  },
]

export const engagement: TimelineEntry[] = [
  {
    id: 'cercle-des-geeks',
    period: { fr: '2025 – présent', en: '2025 – present' },
    title: {
      fr: 'Coordonnateur des étudiants Réseaux et Télécoms',
      en: 'Coordinator of the Networks and Telecoms students',
    },
    org: { fr: 'Cercle des Geeks', en: 'Cercle des Geeks' },
  },
  {
    id: 'club-uidt',
    period: { fr: '2023', en: '2023' },
    title: { fr: 'Président de la commission pédagogique', en: 'Head of the academic committee' },
    org: { fr: 'Club informatique de l’UIDT', en: 'UIDT Computer Club' },
  },
]
