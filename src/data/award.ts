import type { Localized } from './types'

export const award = {
  competition: 'Cyber Competition Challenge 2026',
  result: { fr: 'Lauréat — 1re place', en: 'Winner — 1st place' } as Localized,
  shortResult: { fr: '1re place', en: '1st place' } as Localized,
  date: { fr: 'Octobre 2026', en: 'October 2026' } as Localized,
  team: 'SecurityForAll',
  round: { fr: 'Manche SOC', en: 'SOC round' } as Localized,
  deliverables: [
    { fr: 'Mise en place et démonstration d’un SOC', en: 'Building and demonstrating a SOC' },
    {
      fr: 'SOP de réponse aux incidents : ransomware et DDoS',
      en: 'Incident response SOPs: ransomware and DDoS',
    },
    { fr: 'Plan de gestion de crise', en: 'Crisis management plan' },
    { fr: 'Rapport pour la direction', en: 'Executive report' },
  ] as Localized[],
  role: {
    fr: 'Directeur technique (CTO) de l’équipe. Laboratoire SOC de la démonstration : voir le projet PRJ-01.',
    en: 'Team CTO. The SOC lab used for the demonstration is project PRJ-01.',
  } as Localized,
  /** Photos dans /public, avec leurs dimensions réelles */
  photos: [
    {
      src: '/images/distinction/equipe-securityforall.jpg',
      width: 1280,
      height: 950,
      alt: {
        fr: 'Membres de l’équipe SecurityForAll posant avec le trophée de la finale.',
        en: 'Members of the SecurityForAll team posing with the final’s trophy.',
      },
      caption: {
        fr: 'L’équipe SecurityForAll avec son trophée.',
        en: 'The SecurityForAll team with its trophy.',
      },
    },
    {
      src: '/images/distinction/trophee.jpg',
      width: 442,
      height: 811,
      alt: {
        fr: 'Trophée « Finale Capstone Professionnel ACN 2026 – Golden Team ».',
        en: 'Trophy reading “Finale Capstone Professionnel ACN 2026 – Golden Team”.',
      },
      caption: { fr: 'Le trophée remis à l’équipe.', en: 'The trophy awarded to the team.' },
    },
  ] as { src: string; width: number; height: number; alt: Localized; caption: Localized }[],
}
