import type { ReactNode } from 'react'

/** Étiquette monospace (protocoles, outils), façon port d'équipement. */
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-accent/25 bg-accent/[0.06] px-2 py-0.5 font-mono text-xs text-ink">
      {children}
    </span>
  )
}
