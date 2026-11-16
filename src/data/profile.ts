import type { CvFile, Localized, Txt } from './types'

export const profile = {
  name: 'Meissa Babou',
  initials: 'MB',
  footerTag: { fr: 'réseau + sécurité', en: 'network + security' } as Localized,
  /** Photo de profil (dans /public) et ses dimensions réelles */
  photo: {
    src: '/images/profil/meissa-babou.jpg',
    width: 1024,
    height: 1280,
    alt: { fr: 'Portrait de Meissa Babou', en: 'Portrait of Meissa Babou' } as Localized,
  },
  headline: {
    fr: 'Analyste SOC junior et sécurité réseau : du routage opérateur à la détection des menaces.',
    en: 'Junior SOC analyst and network security: from carrier routing to threat detection.',
  } as Localized,
  /** Postes visés, affichés sur l'accueil */
  roles: [
    { fr: 'Analyste SOC junior', en: 'Junior SOC Analyst' },
    { fr: 'Sécurité réseau', en: 'Network Security' },
  ] as Localized[],
  status: {
    fr: 'Étudiant en Master 2 Réseaux et Télécoms à l’Université Iba Der Thiam de Thiès (Sénégal).',
    en: 'Master’s student (2nd year) in Networks and Telecommunications at Université Iba Der Thiam de Thiès (Senegal).',
  } as Localized,
  seeking: {
    fr: 'Je recherche un premier poste en réseau et cybersécurité à Dakar.',
    en: 'I am looking for a first position in networking and cybersecurity in Dakar.',
  } as Localized,
  /** Fiche « profil » de l'accueil : paires clé / valeur */
  profileSheet: [
    {
      key: { fr: 'poste', en: 'role' },
      value: {
        fr: 'Analyste SOC junior · Sécurité réseau',
        en: 'Junior SOC Analyst · Network Security',
      },
    },
    {
      key: { fr: 'domaine', en: 'field' },
      value: { fr: 'Réseau + Cybersécurité', en: 'Network + Cybersecurity' },
    },
    {
      key: { fr: 'formation', en: 'degree' },
      value: { fr: 'M2 Réseaux et Télécoms (UIDT)', en: 'MSc Networks & Telecoms (UIDT)' },
    },
    { key: 'cert', value: 'AWS Certified Cloud Practitioner' },
    { key: { fr: 'cible', en: 'location' }, value: { fr: 'Dakar, Sénégal', en: 'Dakar, Senegal' } },
  ] as { key: Txt; value: Txt }[],
  /** Trois preuves affichées sous l'accroche, reliées à leur section */
  highlights: [
    {
      icon: 'trophy',
      title: {
        fr: 'Lauréat Cyber Competition Challenge 2026',
        en: 'Winner, Cyber Competition Challenge 2026',
      },
      sub: { fr: '1re place · équipe SecurityForAll', en: '1st place · SecurityForAll team' },
      href: '#distinction',
    },
    {
      icon: 'badge',
      title: { fr: 'AWS Certified Cloud Practitioner', en: 'AWS Certified Cloud Practitioner' },
      sub: { fr: 'Juillet 2026', en: 'July 2026' },
      href: '#formation',
    },
    {
      icon: 'briefcase',
      title: {
        fr: 'Stage à l’Aéroport International Blaise Diagne',
        en: 'Internship at Blaise Diagne International Airport',
      },
      sub: {
        fr: 'FortiGate pour sécuriser un réseau sans fil',
        en: 'FortiGate to secure a wireless network',
      },
      href: '#experience',
    },
  ] as { icon: 'trophy' | 'badge' | 'briefcase'; title: Localized; sub: Localized; href: string }[],
  email: 'baboumeissa09@gmail.com',
  /** null = lien pas encore fourni (un marqueur [À COMPLÉTER] s'affiche) */
  linkedin: 'https://www.linkedin.com/in/meissa-babou-029588248/' as string | null,
  github: 'https://github.com/meissadev' as string | null,
  /** Fichiers déposés dans public/cv/ */
  cvs: [
    {
      id: 'cv',
      label: { fr: 'CV Meissa Babou', en: 'Meissa Babou CV' },
      file: { fr: '/cv/meissa-babou-cv.pdf', en: '/cv/meissa-babou-cv-en.pdf' },
    },
  ] as CvFile[],
  interests: [
    {
      fr: 'DevOps / DevSecOps (formation AWS re/Start & DevOps, Sonatel Academy)',
      en: 'DevOps / DevSecOps (AWS re/Start & DevOps program, Sonatel Academy)',
    },
  ] as Localized[],
}
