import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n'
import ThemeToggle from './ThemeToggle'

const SECTIONS = [
  'accueil',
  'distinction',
  'projets',
  'experience',
  'competences',
  'formation',
  'contact',
] as const

export default function Header() {
  const { t } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('accueil')
  const onHome = pathname === '/'

  const labels: Record<(typeof SECTIONS)[number], string> = {
    accueil: t.nav.home,
    distinction: t.nav.award,
    projets: t.nav.projects,
    experience: t.nav.experience,
    competences: t.nav.skills,
    formation: t.nav.education,
    contact: t.nav.contact,
  }

  // Met en évidence la section visible dans la navigation
  useEffect(() => {
    if (!onHome) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [onHome])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
      onHome && active === id ? 'text-accent' : 'text-muted'
    }`

  const links = SECTIONS.map((id) => (
    <li key={id}>
      <a
        href={`/#${id}`}
        className={linkClass(id)}
        aria-current={onHome && active === id ? 'location' : undefined}
        onClick={() => setOpen(false)}
      >
        {labels[id]}
      </a>
    </li>
  ))

  return (
    <header id="haut" className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-semibold">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-md bg-primary font-mono text-xs text-on-primary"
          >
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </Link>

        <nav aria-label={t.nav.label} className="hidden lg:block">
          <ul className="flex items-center gap-0.5">{links}</ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md text-muted hover:text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label={t.nav.label}
        className={`border-t border-line bg-bg lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="container-page flex flex-col py-2 [&_a]:block [&_a]:py-3">{links}</ul>
      </nav>
    </header>
  )
}
