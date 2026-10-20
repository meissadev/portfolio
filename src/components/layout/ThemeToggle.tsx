import { Moon, Sun } from 'lucide-react'
import { useI18n } from '../../i18n'

export default function ThemeToggle() {
  const { t } = useI18n()

  const toggle = () => {
    const root = document.documentElement
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* stockage indisponible : le choix vaut pour la session */
    }
  }

  // Les deux icônes sont rendues ; le CSS affiche la bonne (pas d'écart serveur/client)
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.theme.toggle}
      title={t.theme.toggle}
      className="grid size-10 place-items-center rounded-md text-muted hover:text-ink"
    >
      <Moon size={18} aria-hidden="true" className="dark:hidden" />
      <Sun size={18} aria-hidden="true" className="hidden dark:block" />
    </button>
  )
}
