import { engagement, experience } from '../../data/experience'
import { useI18n } from '../../i18n'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import Timeline from '../ui/Timeline'

export default function Experience() {
  const { t } = useI18n()
  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title} tinted>
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="label-mono mb-6 text-accent">{t.experience.work}</h3>
          <Timeline entries={experience} />
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="label-mono mb-6 text-accent">{t.experience.engagement}</h3>
          <Timeline entries={engagement} />
        </Reveal>
      </div>
    </Section>
  )
}
