import type { Project } from '../types'
import hauteDisponibiliteLan from './haute-disponibilite-lan'
import qosMultisites from './qos-multisites'
import socOpenSource from './soc-open-source'

/**
 * Ordre d'affichage des projets sur le site.
 * Pour ajouter un projet : créer son fichier dans ce dossier, l'importer ici
 * et l'ajouter à la liste (voir README). Les projets de brouillons/ ne sont pas publiés.
 */
export const projects: Project[] = [socOpenSource, qosMultisites, hauteDisponibiliteLan]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
