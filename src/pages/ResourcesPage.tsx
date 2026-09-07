import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, PlayCircle } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { articles } from '@/data/resources'

export function ResourcesPage() {
  return (
    <>
      <SEO
        title="Resources"
        description="Everyone has their own way of learning. S-Cube's resources help you learn more about ISO 13485, eQMS and medical device compliance."
      />

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
        <Container className="relative max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
            Resources
          </span>
          <h1 className="text-balance mt-6 text-4xl font-extrabold text-white sm:text-5xl">Our Resources</h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-brand-100/80">
            Everyone has their own way of learning. S-Cube's resources help you learn more.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Blogs" title="Everyone has their own way of learning" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/${article.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
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
                      <span aria-hidden="true">·</span>
                      {article.readTime}
                    </p>
                    <h3 className="mt-2 font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 py-20 sm:py-24">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Videos and Media"
            title="Watch SmartEye eQMS in action"
            description="Everyone has their own way of learning. S-Cube's resources help you learn more."
          />
          <a
            href="https://youtu.be/YjVfsjdiYAY"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-auto mt-8 flex aspect-video max-w-xl items-center justify-center rounded-2xl border border-neutral-200 bg-ink-950 shadow-soft"
          >
            <PlayCircle className="h-14 w-14 text-white/80 transition-transform hover:scale-110" />
          </a>
        </Container>
      </section>
    </>
  )
}
