export type Role = {
  id: string
  label: string
  headline: string
  description: string
  benefits: string[]
}

export const roles: Role[] = [
  {
    id: 'org-admin',
    label: 'Organisation Admin',
    headline: 'Full oversight, across every project',
    description:
      'Organisation Admins configure SmartEye for the whole business — users, permissions and the projects running across your organisation.',
    benefits: [
      'Manage users, roles and permissions across every project',
      'Full visibility into compliance status organisation-wide',
      'Control onboarding, templates and workspace configuration',
    ],
  },
  {
    id: 'project-admin',
    label: 'Project Admin',
    headline: 'Own the compliance of a single product',
    description:
      'Project Admins run day-to-day quality and compliance for a specific product or SaMD program inside SmartEye.',
    benefits: [
      'Configure requirements, risk and traceability for the project',
      'Assign reviewers and approvers on controlled documents',
      'Monitor project-level analytics and audit readiness',
    ],
  },
  {
    id: 'standard-user',
    label: 'Standard Users',
    headline: 'Do the work, without the admin overhead',
    description:
      'Standard Users — engineers, quality and regulatory teams — author, review and trace their day-to-day work inside SmartEye.',
    benefits: [
      'Author requirements, risk analyses, tests and design records',
      'Bi-directional traceability views without leaving the workflow',
      'Review and approve with compliant electronic signatures',
    ],
  },
  {
    id: 'external-user',
    label: 'External Users',
    headline: 'Bring partners and suppliers in, safely',
    description:
      'External Users get scoped access, so contractors, suppliers and auditors can collaborate without exposing everything.',
    benefits: [
      'Scoped, permissioned access to only what they need',
      'Collaborate on shared documents and reviews',
      'No compromise on the controls around the rest of your QMS',
    ],
  },
]
