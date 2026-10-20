/**
 * Types du contenu du site.
 * Chaque texte est un `Localized` : le français est obligatoire, l'anglais facultatif.
 */
export interface Localized {
  fr: string
  en?: string
}

/** Marque une information manquante : affichée en évidence sur le site. */
export const todo = (what: string) => `[À COMPLÉTER : ${what}]`

export type ProjectCategory = 'soc' | 'reseau' | 'securite' | 'infrastructure'

export const categoryLabels: Record<ProjectCategory, Localized> = {
  soc: { fr: 'SOC' },
  reseau: { fr: 'Réseau', en: 'Network' },
  securite: { fr: 'Sécurité', en: 'Security' },
  infrastructure: { fr: 'Infrastructure' },
}

/* ---------------------------- Schémas de topologie ---------------------------- */

export type NodeKind =
  | 'router'
  | 'firewall'
  | 'switch'
  | 'server'
  | 'cloud'
  | 'host'
  | 'users'
  | 'container'
  | 'storage'
  | 'database'
  | 'workflow'
  | 'key'
  | 'cpu'
  | 'gateway'
  | 'policy'
  | 'search'

export interface TopologyNode {
  id: string
  label: string
  /** Seconde ligne en monospace (rôle, protocole…) */
  sub?: string
  kind: NodeKind
  /** Centre du nœud dans le repère du schéma */
  x: number
  y: number
  /** Largeur du nœud (170 par défaut) */
  w?: number
}

export interface TopologyLink {
  from: string
  to: string
  label?: string
  dashed?: boolean
  /** Courbure du lien (en unités du schéma, positive ou négative) */
  bend?: number
}

export interface TopologyZone {
  label: string
  x: number
  y: number
  w: number
  h: number
}

export interface Topology {
  /** Phrase lue par les lecteurs d'écran */
  title: Localized
  caption: Localized
  nodes: TopologyNode[]
  links: TopologyLink[]
  zones?: TopologyZone[]
}

/* ---------------------------------- Projets ---------------------------------- */

export interface Screenshot {
  /** Chemin dans /public, ex. "/images/projets/soc-open-source/wazuh.png" */
  src: string
  alt: Localized
  caption?: Localized
}

export interface Project {
  /** Identifiant d'URL : /projets/<slug> */
  slug: string
  /** Numéro de fiche affiché sur la carte, ex. "PRJ-01" */
  code: string
  title: Localized
  summary: Localized
  categories: ProjectCategory[]
  status: 'done' | 'ongoing'
  context: Localized
  objective: Localized
  technologies: string[]
  achievements: Localized[]
  learnings: Localized[]
  topology?: Topology
  screenshots: Screenshot[]
  /** Ce que les captures devraient montrer, tant qu'elles manquent */
  screenshotsHint: Localized
  /** URL du dépôt GitHub, ou null si non disponible */
  github: string | null
}

/* ------------------------------ Parcours, profil ------------------------------ */

export interface TimelineEntry {
  id: string
  period: Localized
  title: Localized
  org: Localized
  details?: Localized[]
  tags?: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: Localized
  verifyUrl: string | null
}

export type SkillIcon = 'radar' | 'siren' | 'shield' | 'router' | 'server' | 'cloud'

/** Référence vers une preuve : un projet (par slug) ou une section de la page. */
export type ProofRef = { project: string } | { section: string; label: Localized }

export interface SkillGroup {
  id: string
  title: Localized
  icon: SkillIcon
  items: string[]
  proofs: ProofRef[]
}

export interface CvFile {
  id: string
  label: Localized
  /** Chemin dans /public */
  file: string
}
