import { createContext, useContext, type ReactNode } from 'react'
import type { Localized } from '../data/types'
import { en } from './en'
import { fr, type UiStrings } from './fr'

export type Locale = 'fr' | 'en'
export const defaultLocale: Locale = 'fr'

const dictionaries: Record<Locale, UiStrings> = { fr, en }

const LocaleContext = createContext<Locale>(defaultLocale)

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

/** `t` : libellés d'interface ; `l` : résout un texte de contenu dans la langue courante. */
export function useI18n() {
  const locale = useContext(LocaleContext)
  return {
    locale,
    t: dictionaries[locale],
    l: (text: Localized) => text[locale] ?? text.fr,
  }
}
