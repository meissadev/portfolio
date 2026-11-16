import { ArrowRight, BadgeCheck, Briefcase, Download, Trophy } from 'lucide-react'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n'
import NetworkBackdrop from '../diagrams/NetworkBackdrop'
import { buttonPrimary, buttonSecondary } from '../ui/buttons'

const highlightIcons = { trophy: Trophy, badge: BadgeCheck, briefcase: Briefcase }

export default function Hero() {
  const { t, l } = useI18n()
  return (
    <section id="accueil" aria-labelledby="accueil-titre" className="relative overflow-hidden">
      <NetworkBackdrop />
      <div className="container-page relative grid gap-10 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14 lg:pb-24">
        <div>
          <p aria-hidden="true" className="font-mono text-sm">
            <span className="text-accent">mb@soc</span>
            <span className="text-muted">:</span>
            <span className="text-cyan">~</span>
            <span className="text-muted">$ </span>
            <span className="text-ink">whoami</span>
          </p>
          <h1
            id="accueil-titre"
            className="mt-3 font-mono text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {profile.name}
            <span aria-hidden="true" className="cursor" />
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-balance sm:text-xl">
            <span aria-hidden="true" className="font-mono text-accent">
              &gt;{' '}
            </span>
            {l(profile.headline)}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.hero.domainsLabel}>
            {t.hero.domains.map((d) => (
              <li
                key={d}
                className="rounded border border-cyan/40 bg-cyan/[0.06] px-2.5 py-1 font-mono text-xs font-medium tracking-wider text-cyan uppercase"
              >
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-xl text-muted">
            {l(profile.status)} {l(profile.seeking)}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projets" className={buttonPrimary}>
              {t.hero.ctaProjects}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            {profile.cvs.map((cv) => (
              <a key={cv.id} href={cv.file} download className={buttonSecondary}>
                <Download size={16} aria-hidden="true" />
                {t.hero.ctaCv}
              </a>
            ))}
          </div>
        </div>

        {/* Fiche profil présentée comme une fenêtre de terminal */}
        <aside
          aria-label={t.hero.profileLabel}
          className="panel brackets order-3 overflow-hidden shadow-[0_0_60px_-20px_var(--c-glow)] lg:order-none"
        >
          <div className="term-bar justify-between">
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="term-dots">
                <span />
                <span />
                <span />
              </span>
              <span>
                <span aria-hidden="true">cat </span>
                {t.hero.profileTitle}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2 rounded-full bg-ok" />
              {t.hero.available}
            </span>
          </div>
          <img
            src={profile.photo.src}
            width={profile.photo.width}
            height={profile.photo.height}
            alt={l(profile.photo.alt)}
            fetchPriority="high"
            decoding="async"
            className="aspect-[5/4] w-full border-b border-line object-cover object-top"
          />
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 px-4 py-4 font-mono text-sm">
            {profile.profileSheet.map((row) => (
              <div key={l(row.key)} className="contents">
                <dt className="text-cyan">
                  {l(row.key)}
                  <span aria-hidden="true" className="text-muted">
                    :
                  </span>
                </dt>
                <dd className="text-ink">{l(row.value)}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <ul
          aria-label={t.hero.proofsLabel}
          className="order-2 grid gap-3 sm:grid-cols-3 lg:order-none lg:col-span-2"
        >
          {profile.highlights.map((h) => {
            const Icon = highlightIcons[h.icon]
            return (
              <li key={h.href}>
                <a
                  href={h.href}
                  className="panel panel-hover flex h-full items-start gap-3 bg-surface/95 p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm leading-snug font-semibold">{l(h.title)}</span>
                    <span className="mt-0.5 block font-mono text-xs text-muted">{l(h.sub)}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
