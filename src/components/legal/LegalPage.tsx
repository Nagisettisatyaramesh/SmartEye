import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import type { LegalBlock, LegalPageData } from '@/data/legal'

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-9 mb-3 text-xl font-bold text-ink-900">{block.text}</h2>
    case 'p':
      return <p className="leading-relaxed text-neutral-700">{block.text}</p>
    case 'ul':
      return (
        <ul className="my-3 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 leading-relaxed text-neutral-700">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      )
  }
}

export function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <>
      <SEO title={data.title} description={`${data.title} for SmartEye eQMS, provided by S-Cube Technologies Limited.`} />

      <section className="border-b border-neutral-100 bg-neutral-50 py-16">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">{data.title}</h1>
          <p className="mt-3 text-sm text-neutral-500">Last updated: {data.lastUpdated}</p>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container className="max-w-3xl">
          {data.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </Container>
      </section>
    </>
  )
}
