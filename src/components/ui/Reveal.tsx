import { m } from 'framer-motion'
import { useSyncExternalStore, type ReactNode } from 'react'

const noopSubscribe = () => () => {}

/**
 * Apparition douce au défilement (désactivée si « réduire les animations »).
 * Le HTML pré-rendu reste visible : l'animation ne s'active qu'après le chargement
 * de l'application, pour que le contenu ne disparaisse jamais si JavaScript échoue.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  // false au pré-rendu et pendant l'hydratation, true ensuite
  const ready = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )

  if (!ready) return <div className={className}>{children}</div>

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  )
}
