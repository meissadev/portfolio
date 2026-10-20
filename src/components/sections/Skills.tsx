import { profile } from '../../data/profile'
import { skillGroups } from '../../data/skills'
import { useI18n } from '../../i18n'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SkillGroup from '../ui/SkillGroup'

export default function Skills() {
  const { t, l } = useI18n()
  return (
    <Section
      id="competences"
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      intro={t.skills.intro}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <li key={g.id}>
            <Reveal delay={(i % 3) * 0.06} className="h-full">
              <SkillGroup group={g} />
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        <span className="label-mono mr-2 text-accent">{t.skills.interests}</span>
        {profile.interests.map((i) => l(i)).join(' · ')}
      </p>
    </Section>
  )
}
