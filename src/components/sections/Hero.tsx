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
          <p className="label-mono text-accent">
            <span aria-hidden="true">// </span>
            {l(profile.roles[0])} · {l(profile.roles[1])}
          </p>
          <h1
            id="accueil-titre"
            className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-balance sm:text-xl">
            {l(profile.headline)}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Domaines">
            {['Réseau', 'Sécurité'].map((d) => (
              <li
                key={d}
                className="rounded border border-primary/40 px-2.5 py-1 font-mono text-xs font-medium tracking-wider text-primary uppercase"
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

        {/* Fiche profil façon sortie d'équipement */}
        <aside
          aria-label="Résumé du profil"
          className="order-3 overflow-hidden rounded-xl border border-line bg-surface/95 shadow-sm backdrop-blur lg:order-none"
        >
          <img
            src={profile.photo.src}
            width={profile.photo.width}
            height={profile.photo.height}
            alt={l(profile.photo.alt)}
            fetchPriority="high"
            decoding="async"
            className="aspect-[5/4] w-full border-b border-line object-cover object-top"
          />
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-xs text-muted">
            <span>
              <span aria-hidden="true">MB-01 › </span>
              {t.hero.profileTitle}
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2 rounded-full bg-ok" />
              en recherche de poste
            </span>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 px-4 py-4 font-mono text-sm">
            {profile.profileSheet.map((row) => (
              <div key={row.key} className="contents">
                <dt className="text-muted">{row.key}</dt>
                <dd>{l(row.value)}</dd>
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
                  className="flex h-full items-start gap-3 rounded-lg border border-line bg-surface/95 p-4 transition-colors hover:border-accent"
                >
                  <Icon size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-sm leading-snug font-semibold">{l(h.title)}</span>
                    <span className="mt-0.5 block text-sm text-muted">{l(h.sub)}</span>
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
