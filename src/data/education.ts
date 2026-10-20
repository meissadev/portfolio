import { todo, type Certification, type TimelineEntry } from './types'

export const education: TimelineEntry[] = [
  {
    id: 'master',
    period: { fr: '2024 – présent' },
    title: { fr: 'Master Réseaux et Télécoms' },
    org: { fr: 'Université Iba Der Thiam de Thiès (UIDT)' },
    details: [
      {
        fr: 'Mémoire en cours : architecture Zero Trust post-quantique basée sur la cryptographie à codes correcteurs d’erreurs.',
      },
    ],
  },
  {
    id: 'aws-restart',
    period: { fr: 'Février – juillet 2026' },
    title: { fr: 'AWS re/Start & DevOps' },
    org: { fr: 'Sonatel Academy' },
  },
  {
    id: 'licence',
    period: { fr: '2023' },
    title: { fr: 'Licence Réseaux et Télécoms' },
    org: { fr: todo('établissement') },
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: { fr: 'Juillet 2026' },
    /** null = lien de vérification pas encore fourni */
    verifyUrl: null,
  },
]
