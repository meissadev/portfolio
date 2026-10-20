import { CircleDashed } from 'lucide-react'
import type { ReactNode } from 'react'

export const TODO_PREFIX = '[À COMPLÉTER'
const TODO_PATTERN = /(\[À COMPLÉTER[^\]]*\])/g

export const isTodo = (text: string) => text.trim().startsWith(TODO_PREFIX)

/** Marqueur visible pour une information manquante. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded border border-dashed border-todo-line bg-todo-bg [box-decoration-break:clone] px-1.5 py-0.5 font-mono text-[0.85em] text-todo-ink">
      {children}
    </mark>
  )
}

/** Variante bloc, pour une section entière à compléter (captures, schéma réel…). */
export function PlaceholderBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-dashed border-todo-line bg-todo-bg p-4 font-mono text-sm text-todo-ink">
      <CircleDashed size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
      <div>{children}</div>
    </div>
  )
}

/** Affiche un texte de contenu en mettant en évidence les « [À COMPLÉTER : …] ». */
export function Text({ children }: { children: string }) {
  const parts = children.split(TODO_PATTERN)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith(TODO_PREFIX) ? <Placeholder key={i}>{part}</Placeholder> : part,
      )}
    </>
  )
}
