import { createContext, useContext, type ReactNode } from 'react'
import type { Txt } from '../data/types'
import { en } from './en'
import { fr, type UiStrings } from './fr'

export type Locale = 'fr' | 'en'
export const defaultLocale: Locale = 'fr'
export const locales: Locale[] = ['fr', 'en']

const dictionaries: Record<Locale, UiStrings> = { fr, en }

/* ------------------------- Chemins des pages par langue ------------------------- */
// Français à la racine (/ et /projets/<slug>), anglais sous /en (/en et /en/projects/<slug>)

export const homePath = (locale: Locale) => (locale === 'fr' ? '/' : '/en')

export const projectPath = (locale: Locale, slug: string) =>
  locale === 'fr' ? `/projets/${slug}` : `/en/projects/${slug}`

/** Lien vers une section de l'accueil, ex. sectionHref('en', 'contact') → /en#contact */
export const sectionHref = (locale: Locale, id: string) => `${locale === 'fr' ? '/' : '/en'}#${id}`

/** Même page dans l'autre langue (pour le sélecteur et les balises hreflang). */
export function translatePath(pathname: string, to: Locale): string {
  const clean = pathname.replace(/\/+$/, '') || '/'
  const project = clean.match(/^\/(?:en\/projects|projets)\/([^/]+)$/)
  if (project) return projectPath(to, project[1])
  return homePath(to)
}

export const localeFromPath = (pathname: string): Locale =>
  /^\/en(\/|$)/.test(pathname) ? 'en' : 'fr'

/* ----------------------------------- Contexte ----------------------------------- */

const LocaleContext = createContext<Locale>(defaultLocale)

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

/**
 * `t` : libellés d'interface ; `l` : résout un texte de contenu dans la langue courante
 * (texte simple identique dans les deux langues, ou objet { fr, en }).
 */
export function useI18n() {
  const locale = useContext(LocaleContext)
  return {
    locale,
    t: dictionaries[locale],
    l: (text: Txt) => (typeof text === 'string' ? text : (text[locale] ?? text.fr)),
    home: homePath(locale),
    projectHref: (slug: string) => projectPath(locale, slug),
    sectionHref: (id: string) => sectionHref(locale, id),
  }
}
