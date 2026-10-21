import type { CvFile, Localized } from './types'

export const profile = {
  name: 'Meissa Babou',
  initials: 'MB',
  footerTag: 'réseau + sécurité',
  /** Photo de profil (dans /public) et ses dimensions réelles */
  photo: {
    src: '/images/profil/meissa-babou.jpg',
    width: 1024,
    height: 1280,
    alt: { fr: 'Portrait de Meissa Babou' } as Localized,
  },
  headline: {
    fr: 'Analyste SOC junior et sécurité réseau : du routage opérateur à la détection des menaces.',
  } as Localized,
  /** Postes visés, affichés sur l'accueil */
  roles: [
    { fr: 'Analyste SOC junior', en: 'Junior SOC Analyst' },
    { fr: 'Sécurité réseau' },
  ] as Localized[],
  status: {
    fr: 'Étudiant en Master 2 Réseaux et Télécoms à l’Université Iba Der Thiam de Thiès (Sénégal).',
  } as Localized,
  seeking: {
    fr: 'Je recherche un premier poste en réseau et cybersécurité à Dakar.',
  } as Localized,
  /** Fiche « show profil » de l'accueil : paires clé / valeur */
  profileSheet: [
    { key: 'poste', value: { fr: 'Analyste SOC junior · Sécurité réseau' } },
    { key: 'domaine', value: { fr: 'Réseau + Cybersécurité' } },
    { key: 'formation', value: { fr: 'M2 Réseaux et Télécoms (UIDT)' } },
    { key: 'cert', value: { fr: 'AWS Certified Cloud Practitioner' } },
    { key: 'cible', value: { fr: 'Dakar, Sénégal' } },
  ] as { key: string; value: Localized }[],
  /** Trois preuves affichées sous l'accroche, reliées à leur section */
  highlights: [
    {
      icon: 'trophy',
      title: { fr: 'Lauréat Cyber Competition Challenge 2026' },
      sub: { fr: '1re place · équipe SecurityForAll' },
      href: '#distinction',
    },
    {
      icon: 'badge',
      title: { fr: 'AWS Certified Cloud Practitioner' },
      sub: { fr: 'Juillet 2026' },
      href: '#formation',
    },
    {
      icon: 'briefcase',
      title: { fr: 'Stage à l’Aéroport International Blaise Diagne' },
      sub: { fr: 'FortiGate pour sécuriser un réseau sans fil' },
      href: '#experience',
    },
  ] as { icon: 'trophy' | 'badge' | 'briefcase'; title: Localized; sub: Localized; href: string }[],
  email: 'meissababou66@gmail.com',
  /** null = lien pas encore fourni (un marqueur [À COMPLÉTER] s'affiche) */
  linkedin: 'https://www.linkedin.com/in/meissa-babou-029588248/' as string | null,
  github: 'https://github.com/meissadev' as string | null,
  /** Fichiers déposés dans public/cv/ */
  cvs: [
    { id: 'cv', label: { fr: 'CV Meissa Babou' }, file: '/cv/meissa-babou-cv.pdf' },
  ] as CvFile[],
  interests: [
    {
      fr: 'DevOps / DevSecOps (formation AWS re/Start & DevOps, Sonatel Academy)',
    },
  ] as Localized[],
}
