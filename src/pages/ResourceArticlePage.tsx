import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { getArticleBySlug, type ContentBlock } from '@/data/resources'
import { CTA } from '@/components/sections/CTA'

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'h3':
      return <h2 className="mt-10 mb-3 text-2xl font-bold text-ink-900">{block.text}</h2>
    case 'p':
      return <p className="leading-relaxed text-neutral-700">{block.text}</p>
    case 'quote':
      return (
        <blockquote className="my-6 rounded-xl border-l-4 border-brand-500 bg-brand-50 px-5 py-4 italic leading-relaxed text-brand-900">
          {block.text}
        </blockquote>
      )
    case 'ul':
      return (
        <ul className="my-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 leading-relaxed text-neutral-700">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-neutral-50">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-ink-900">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 align-top text-neutral-600">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export function ResourceArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) return <Navigate to="/resources/" replace />

  return (
    <>
      <SEO title={article.title} description={article.excerpt} />

      <article className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link to="/resources/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>

          <span className="mt-6 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            {article.category}
          </span>
          <h1 className="text-balance mt-4 text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span>{article.readTime}</span>
          </div>

          <div className="prose-content mt-10">
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </article>

      <CTA />
    </>
  )
}
