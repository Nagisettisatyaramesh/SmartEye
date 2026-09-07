export type NavChild = {
  label: string
  description?: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  megaMenu?: {
    intro: { eyebrow: string; title: string; description: string; cta: { label: string; href: string } }
    groups: { heading: string; items: NavChild[] }[]
  }
  submenu?: NavChild[]
}

export const primaryNav: NavItem[] = [
  {
    label: 'Why SmartEye eQMS',
    href: '/quality-management-system-qms-for-medical-devices-and-samd/',
    megaMenu: {
      intro: {
        eyebrow: 'Platform',
        title: 'One QMS for design control, risk and SaMD',
        description:
          'SmartEye centralizes and automates the core processes of a compliant medical device Quality Management System.',
        cta: { label: 'See the full platform', href: '/quality-management-system-qms-for-medical-devices-and-samd/' },
      },
      groups: [
        {
          heading: 'Core QMS processes',
          items: [
            { label: 'Management', description: 'Quality policy, planning & review', href: '/quality-management-system-qms-for-medical-devices-and-samd/#management' },
            { label: 'Product Realization & Lifecycle', description: 'Design control, risk, production', href: '/quality-management-system-qms-for-medical-devices-and-samd/#lifecycle' },
            { label: 'Compliance & Documentation', description: 'Document & record control, e-signatures', href: '/quality-management-system-qms-for-medical-devices-and-samd/#compliance' },
          ],
        },
        {
          heading: 'Keeping you audit-ready',
          items: [
            { label: 'Monitoring & Improvement', description: 'Audits, CAPA, post-market surveillance', href: '/quality-management-system-qms-for-medical-devices-and-samd/#monitoring' },
            { label: 'Support & Enablement', description: 'Training, calibration, UDI, validation', href: '/quality-management-system-qms-for-medical-devices-and-samd/#support' },
          ],
        },
      ],
    },
  },
  {
    label: 'Who we are',
    href: '/powered-by-s-cube/',
  },
  {
    label: 'Resources',
    href: '/resources/',
    submenu: [
      { label: 'Blog & Guides', href: '/resources/' },
      { label: 'Career', href: '/category/jobs/' },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact/',
  },
]

export const footerNav = {
  platform: {
    heading: 'Platform',
    links: [
      { label: 'Why SmartEye eQMS', href: '/quality-management-system-qms-for-medical-devices-and-samd/' },
      { label: 'Request a Demo', href: '/#demo' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'Who we are', href: '/powered-by-s-cube/' },
      { label: 'Careers', href: '/category/jobs/' },
      { label: 'Contact Us', href: '/contact/' },
    ],
  },
  resources: {
    heading: 'Resources',
    links: [
      { label: 'Blog & Guides', href: '/resources/' },
    ],
  },
  legal: {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
      { label: 'Website Cookie Policy', href: '/website-cookie-policy/' },
      { label: 'Quality Policy', href: '/quality-policy/' },
      { label: 'Security Policy', href: '/security-policy/' },
    ],
  },
}

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/i.scubetechnologies/' },
  { label: 'Twitter', href: 'https://twitter.com/i_SCubeTech' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/s-cubetechnologies/' },
  { label: 'Instagram', href: 'https://www.instagram.com/i.scubetech/' },
]
