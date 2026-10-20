import { todo, type Localized } from './types'

export const award = {
  competition: 'Cyber Competition Challenge 2026',
  result: { fr: 'Lauréat — 1re place sur 64 équipes de toute l’Afrique' } as Localized,
  shortResult: { fr: '1re place sur 64 équipes' } as Localized,
  date: { fr: 'Octobre 2026' } as Localized,
  team: 'SecurityForAll',
  round: { fr: 'Manche SOC' } as Localized,
  deliverables: [
    { fr: 'Mise en place et démonstration d’un SOC' },
    { fr: 'SOP de réponse aux incidents : ransomware et DDoS' },
    { fr: 'Plan de gestion de crise' },
    { fr: 'Rapport pour la direction' },
  ] as Localized[],
  role: { fr: todo('ton rôle dans l’équipe et ta contribution personnelle') } as Localized,
  url: 'https://securityforall.vercel.app/',
}
