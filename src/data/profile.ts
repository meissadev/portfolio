import type { CvFile, Localized } from './types'

export const profile = {
  name: 'Meissa Babou',
  initials: 'MB',
  footerTag: 'réseau + sécurité',
  headline: {
    fr: 'Ingénieur sécurité réseau et analyste SOC junior : du routage opérateur à la détection des menaces.',
  } as Localized,
  /** Postes visés, affichés en étiquettes sur l'accueil */
  roles: [
    { fr: 'Analyste SOC', en: 'SOC Analyst' },
    { fr: 'Ingénieur sécurité réseau' },
  ] as Localized[],
  status: {
    fr: 'Étudiant en Master 2 Réseaux et Télécoms à l’Université Iba Der Thiam de Thiès (Sénégal).',
  } as Localized,
  seeking: {
    fr: 'Je recherche un premier poste en cybersécurité à Dakar.',
  } as Localized,
  /** Fiche « show profil » de l'accueil : paires clé / valeur */
  profileSheet: [
    { key: 'poste', value: { fr: 'Analyste SOC · Ingénieur sécurité réseau' } },
    { key: 'domaine', value: { fr: 'Réseau + Sécurité' } },
    { key: 'formation', value: { fr: 'M2 Réseaux et Télécoms (UIDT)' } },
    { key: 'cert', value: { fr: 'AWS Certified Cloud Practitioner' } },
    { key: 'cible', value: { fr: 'Dakar, Sénégal' } },
  ] as { key: string; value: Localized }[],
  /** Trois preuves affichées sous l'accroche, reliées à leur section */
  highlights: [
    {
      icon: 'trophy',
      title: { fr: 'Lauréat Cyber Competition Challenge 2026' },
      sub: { fr: '1re place sur 64 équipes africaines' },
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
  linkedin: null as string | null,
  github: null as string | null,
  /** Fichiers à déposer dans public/cv/ */
  cvs: [
    { id: 'soc', label: { fr: 'CV Analyste SOC' }, file: '/cv/meissa-babou-cv-soc.pdf' },
    {
      id: 'reseau',
      label: { fr: 'CV Sécurité réseau' },
      file: '/cv/meissa-babou-cv-securite-reseau.pdf',
    },
  ] as CvFile[],
  interests: [
    {
      fr: 'DevOps / DevSecOps (formation AWS re/Start & DevOps, Sonatel Academy)',
    },
  ] as Localized[],
}
