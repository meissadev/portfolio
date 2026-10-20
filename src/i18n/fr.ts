/** Libellés de l'interface (le contenu lui-même est dans src/data). */
export const fr = {
  skipLink: 'Aller au contenu',
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    award: 'Distinction',
    projects: 'Projets',
    experience: 'Expérience',
    skills: 'Compétences',
    education: 'Formation',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  theme: { toggle: 'Basculer entre thème clair et sombre' },
  hero: {
    ctaProjects: 'Voir les projets',
    ctaCv: 'Télécharger un CV',
    profileTitle: 'show profil',
    proofsLabel: 'Preuves clés',
  },
  award: {
    eyebrow: 'Distinction',
    round: 'Livrables de la manche',
    role: 'Mon rôle',
    visit: 'Voir le site de l’équipe',
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Projets techniques',
    intro:
      'Chaque projet est présenté comme une fiche d’équipement. Ouvrez l’étude de cas pour le contexte, le schéma et les résultats.',
    filterLabel: 'Filtrer les projets par domaine',
    all: 'Tous',
    count: (n: number) => `${n} projet${n > 1 ? 's' : ''} affiché${n > 1 ? 's' : ''}`,
    caseStudy: 'Étude de cas',
    objective: 'Objectif',
    status: { done: 'Terminé', ongoing: 'En cours' },
  },
  project: {
    back: 'Tous les projets',
    context: 'Contexte',
    objective: 'Objectif',
    technologies: 'Technologies',
    diagram: 'Schéma',
    achievements: 'Ce que j’ai réalisé',
    learnings: 'Ce que j’ai appris',
    screenshots: 'Captures',
    links: 'Liens',
    github: 'Code sur GitHub',
    prev: 'Projet précédent',
    next: 'Projet suivant',
    diagramText: 'Description textuelle du schéma',
    diagramScroll: 'Faites défiler horizontalement pour voir tout le schéma.',
  },
  experience: {
    eyebrow: 'Expérience',
    title: 'Expérience et engagement',
    work: 'Expérience professionnelle',
    engagement: 'Engagement',
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Compétences',
    intro: 'Regroupées par domaine, avec le projet qui les démontre.',
    proofs: 'Démontré dans',
    interests: 'Centres d’intérêt',
  },
  education: {
    eyebrow: 'Formation',
    title: 'Formation et certification',
    degrees: 'Parcours',
    certification: 'Certification',
    verify: 'Vérifier la certification',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Discutons de votre poste',
    intro:
      'Je recherche un premier poste en cybersécurité à Dakar : analyste SOC ou ingénieur sécurité réseau.',
    email: 'Écrire un e-mail',
    cvs: 'Télécharger mon CV',
  },
  footer: { top: 'Retour en haut' },
  notFound: {
    title: 'Page introuvable',
    text: 'Cette page n’existe pas ou a été déplacée.',
    home: 'Retour à l’accueil',
  },
  seo: {
    siteName: 'Meissa Babou — Portfolio',
    homeTitle: 'Meissa Babou — Analyste SOC et ingénieur sécurité réseau',
    homeDescription:
      'Ingénieur sécurité réseau et analyste SOC junior, lauréat du Cyber Competition Challenge 2026 (1re place sur 64 équipes). Projets SOC, BGP/MPLS, NGFW, QoS et cloud AWS.',
  },
}

export type UiStrings = typeof fr
