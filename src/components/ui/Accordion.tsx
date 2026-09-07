import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

export function Accordion({
  items,
}: {
  items: { question: string; answer: string; eyebrow?: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-soft">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-neutral-50"
              >
                <span>
                  {item.eyebrow && (
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {item.eyebrow}
                    </span>
                  )}
                  <span className="font-semibold text-ink-900">{item.question}</span>
                </span>
                <ChevronDown
                  className={clsx(
                    'h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300',
                    isOpen && 'rotate-180 text-brand-600',
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx(
                'grid overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="min-h-0">
                <p className="px-6 pb-5 leading-relaxed text-neutral-600">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
