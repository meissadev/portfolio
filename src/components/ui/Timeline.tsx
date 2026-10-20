import type { TimelineEntry } from '../../data/types'
import { useI18n } from '../../i18n'
import Tag from './Tag'
import { Text } from './Text'

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const { l } = useI18n()
  return (
    <ol className="relative ml-1.5 border-l border-line">
      {entries.map((entry) => (
        <li key={entry.id} className="relative pb-8 pl-6 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[7px] size-3 rounded-full border-2 border-accent bg-bg"
          />
          <p className="label-mono text-muted">
            <Text>{l(entry.period)}</Text>
          </p>
          <h4 className="mt-1 font-semibold">
            <Text>{l(entry.title)}</Text>
          </h4>
          <p className="text-sm text-muted">
            <Text>{l(entry.org)}</Text>
          </p>
          {entry.details && entry.details.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm marker:text-accent">
              {entry.details.map((d, i) => (
                <li key={i}>
                  <Text>{l(d)}</Text>
                </li>
              ))}
            </ul>
          )}
          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
