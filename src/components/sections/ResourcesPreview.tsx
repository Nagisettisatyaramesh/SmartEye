import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { articles } from '@/data/resources'

const MotionLink = motion.create(Link)

export function ResourcesPreview() {
  const featured = articles.slice(0, 3)

  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Resources"
            title="Our resource for QMS"
            description="Everyone has their own way of learning — our resources help you learn more."
            className="max-w-xl"
          />
          <Button href="/resources/" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            More Resources
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article, i) => (
            <MotionLink
              key={article.slug}
              to={`/${article.slug}/`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500">
                <div className="bg-grid absolute inset-0 opacity-20" />
                <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <h3 className="mt-2 font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-600">{article.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </Container>
    </section>
  )
}
