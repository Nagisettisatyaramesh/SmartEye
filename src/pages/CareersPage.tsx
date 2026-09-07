import { Briefcase, MapPin, Calendar, PoundSterling } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { jobs } from '@/data/jobs'

export function CareersPage() {
  return (
    <>
      <SEO
        title="Careers"
        description="Current job openings at TKM Intelligence Limited / S-Cube Technologies, the team behind SmartEye eQMS."
      />

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
        <Container className="relative max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
            Career
          </span>
          <h1 className="text-balance mt-6 text-4xl font-extrabold text-white sm:text-5xl">Join the team</h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-brand-100/80">
            Everyone has their own way of learning. S-Cube's blog helps you learn more — including open roles.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Open Roles" title="Current opportunities" />
          <div className="mt-10 space-y-4">
            {jobs.map((job) => (
              <div key={job.slug} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-ink-900">{job.title}</h2>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{job.company}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(job.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PoundSterling className="h-4 w-4" /> {job.pay}
                  </span>
                </div>
                <p className="mt-3 flex items-start gap-1.5 text-sm text-neutral-500">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> {job.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{job.excerpt}</p>
                <a href="mailto:info@scube-technologies.com" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
                  Read more / Apply
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
