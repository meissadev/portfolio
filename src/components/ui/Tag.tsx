import type { ReactNode } from 'react'

/** Étiquette monospace façon « port d'équipement » (protocoles, outils). */
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-line bg-surface px-2 py-0.5 font-mono text-xs text-ink">
      <span aria-hidden="true" className="size-1.5 rounded-[1px] bg-accent/70" />
      {children}
    </span>
  )
}
