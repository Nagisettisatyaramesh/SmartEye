export type Job = {
  slug: string
  title: string
  date: string
  company: string
  pay: string
  type: string
  location: string
  excerpt: string
}

export const jobs: Job[] = [
  {
    slug: 'data-engineer-software-engineer',
    title: 'Data Engineer / Software Engineer',
    date: '2025-07-07',
    company: 'TKM Intelligence Limited',
    pay: 'TBD',
    type: 'Permanent',
    location: '125 Deansgate, Manchester M3 2LH, United Kingdom',
    excerpt: 'Full job description Overview: The ideal candidate will have …',
  },
  {
    slug: 'content-writer-digital-marketing-blog-writer',
    title: 'Content Writer / Digital Marketing / Blog Writer',
    date: '2025-07-07',
    company: 'TKM Intelligence Limited',
    pay: 'TBD',
    type: 'Permanent',
    location: '125 Deansgate, Manchester M3 2LH, United Kingdom',
    excerpt: 'Full job description Overview: Content …',
  },
  {
    slug: 'software-test-engineer',
    title: 'Software Test Engineer',
    date: '2024-09-30',
    company: 'TKM Intelligence Limited',
    pay: '£35,063 – £41,911 a year',
    type: 'Permanent',
    location: 'Bizspace Altrincham, Unit 43 Atlantic Street, Broadheath, Altrincham, England, WA14 5NQ',
    excerpt: 'Full job description Overview: …',
  },
]
