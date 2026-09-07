export type ModuleItem = {
  icon:
    | 'ListChecks'
    | 'FlaskConical'
    | 'ShieldAlert'
    | 'Compass'
    | 'GitBranch'
    | 'Lock'
    | 'Stethoscope'
    | 'Radar'
    | 'FileStack'
    | 'BadgeCheck'
    | 'ClipboardList'
    | 'BarChart3'
  title: string
  description: string
}

export const modules: ModuleItem[] = [
  {
    icon: 'ListChecks',
    title: 'Requirement Management',
    description: 'Capture, structure and baseline every product and system requirement in one connected workspace.',
  },
  {
    icon: 'FlaskConical',
    title: 'Test Management',
    description: 'Plan, execute and evidence verification & validation testing tied directly back to requirements.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Risk Management',
    description: 'Identify hazards, assess and mitigate risk in line with ISO 14971 throughout the product lifecycle.',
  },
  {
    icon: 'Compass',
    title: 'Design Control',
    description: 'Manage design inputs, outputs, reviews, verification and validation in a single audit-ready trail.',
  },
  {
    icon: 'GitBranch',
    title: 'E2E Traceability',
    description: 'Bi-directional traceability across requirements, risk, design and test — always audit-ready.',
  },
  {
    icon: 'Lock',
    title: 'Cyber Security',
    description: 'Embed cybersecurity considerations into your design control and risk management processes.',
  },
  {
    icon: 'Stethoscope',
    title: 'Clinical Trials',
    description: 'Connect clinical evidence and trial documentation directly to your design and risk records.',
  },
  {
    icon: 'Radar',
    title: 'Post-Market Surveillance',
    description: 'Track real-world performance and vigilance data in line with EU MDR post-market obligations.',
  },
  {
    icon: 'FileStack',
    title: 'Document Management',
    description: '100s of ready-made SOPs and templates, with automatic DHF and DMR file generation.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Compliance',
    description: 'Workflows configured around ISO 13485, IEC 62304, IEC 62366, FDA 21 CFR Part 820 and Part 11.',
  },
  {
    icon: 'ClipboardList',
    title: 'QARA',
    description: 'A one-stop boutique for Quality Assurance & Regulatory Affairs, end to end.',
  },
  {
    icon: 'BarChart3',
    title: 'Analytics',
    description: 'Easy-to-use dashboards to measure compliance progress, filterable by user, team or project.',
  },
]
