import Seo from '../components/layout/Seo'
import Award from '../components/sections/Award'
import Contact from '../components/sections/Contact'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import { SITE_URL } from '../config'
import { award } from '../data/award'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'

export default function Home() {
  const { t } = useI18n()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Analyste SOC / Ingénieur sécurité réseau',
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Université Iba Der Thiam de Thiès' },
    award: `${award.competition} — 1re place sur 64 équipes`,
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
  }
  return (
    <>
      <Seo
        title={t.seo.homeTitle}
        description={t.seo.homeDescription}
        path="/"
        type="profile"
        jsonLd={jsonLd}
      />
      <Hero />
      <Award />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}
