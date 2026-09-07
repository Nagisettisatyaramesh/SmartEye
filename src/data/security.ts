export type SecurityCard = {
  icon: 'Cloud' | 'KeyRound' | 'History' | 'PenTool' | 'ShieldCheck' | 'Workflow'
  title: string
  description: string
}

export const securityCards: SecurityCard[] = [
  {
    icon: 'Cloud',
    title: 'Cloud Security',
    description: 'Hosted on Azure Web Services — the hosting service of choice for many Fortune 100 companies, including the NHS.',
  },
  {
    icon: 'KeyRound',
    title: 'Role-Based Access',
    description: 'Granular permissions across Organisation Admin, Project Admin, Standard and External Users.',
  },
  {
    icon: 'History',
    title: 'Audit Trails',
    description: 'Every change, review and approval is tracked, so your record is always audit-ready.',
  },
  {
    icon: 'PenTool',
    title: 'Electronic Signatures',
    description: '21 CFR Part 11 compliant e-signatures for secure sign-off from anywhere.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Data Protection',
    description: 'Data storage, disaster recovery and security documented and available on request.',
  },
  {
    icon: 'Workflow',
    title: 'Controlled Workflows',
    description: 'Review and approval workflows built around the standards your business already works to.',
  },
]
