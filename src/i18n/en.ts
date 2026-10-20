import type { UiStrings } from './fr'

/**
 * Version anglaise — à traduire le jour où elle est activée.
 * Tant qu'elle reprend le français, le site reste cohérent.
 * Pour l'activer : traduire ces libellés, renseigner les champs `en` dans src/data,
 * puis ajouter les routes /en (voir README).
 */
import { fr } from './fr'

export const en: UiStrings = { ...fr }
