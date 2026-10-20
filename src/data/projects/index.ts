import type { Project } from '../types'
import apiRestAws from './api-rest-aws'
import hauteDisponibiliteLan from './haute-disponibilite-lan'
import infraKubernetesEsxi from './infra-kubernetes-esxi'
import ingenierieTraficOperateur from './ingenierie-trafic-operateur'
import memoireZeroTrust from './memoire-zero-trust-post-quantique'
import ngfwSophosFortigate from './ngfw-sophos-fortigate'
import qosMultisites from './qos-multisites'
import socOpenSource from './soc-open-source'

/**
 * Ordre d'affichage des projets sur le site.
 * Pour ajouter un projet : créer son fichier dans ce dossier, l'importer ici
 * et l'ajouter à la liste (voir README).
 */
export const projects: Project[] = [
  socOpenSource,
  ingenierieTraficOperateur,
  qosMultisites,
  ngfwSophosFortigate,
  infraKubernetesEsxi,
  memoireZeroTrust,
  apiRestAws,
  hauteDisponibiliteLan,
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
