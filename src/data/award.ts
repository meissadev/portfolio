import type { Localized } from './types'

export const award = {
  competition: 'Cyber Competition Challenge 2026',
  result: { fr: 'Lauréat — 1re place' } as Localized,
  shortResult: { fr: '1re place' } as Localized,
  date: { fr: 'Octobre 2026' } as Localized,
  team: 'SecurityForAll',
  round: { fr: 'Manche SOC' } as Localized,
  deliverables: [
    { fr: 'Mise en place et démonstration d’un SOC' },
    { fr: 'SOP de réponse aux incidents : ransomware et DDoS' },
    { fr: 'Plan de gestion de crise' },
    { fr: 'Rapport pour la direction' },
  ] as Localized[],
  role: {
    fr: 'Directeur technique (CTO) de l’équipe. Laboratoire SOC de la démonstration : voir le projet PRJ-01.',
  } as Localized,
  /** Photos dans /public, avec leurs dimensions réelles */
  photos: [
    {
      src: '/images/distinction/equipe-securityforall.jpg',
      width: 1080,
      height: 810,
      alt: { fr: 'L’équipe SecurityForAll autour du Pr M. D. Sarr, qui tient le trophée.' },
      caption: { fr: 'L’équipe SecurityForAll avec le Pr M. D. Sarr.' },
    },
    {
      src: '/images/distinction/trophee.jpg',
      width: 442,
      height: 811,
      alt: { fr: 'Trophée « Finale Capstone Professionnel ACN 2026 – Golden Team ».' },
      caption: { fr: 'Le trophée remis à l’équipe.' },
    },
  ] as { src: string; width: number; height: number; alt: Localized; caption: Localized }[],
}
