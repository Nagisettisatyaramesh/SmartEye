export type FaqItem = {
  category: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    category: 'Cloud Data Security',
    question: "Is my organization's data and information safe in the cloud?",
    answer:
      'Absolutely! SmartEye’s software is hosted on Azure Web Services, which is the hosting service of choice for many fortune 100 companies, including NHS. Our team would be happy to share a system overview that covers data storage, disaster recovery and security in order to clarify any outstanding questions regarding security when using the cloud.',
  },
  {
    category: 'Compliance (Hardware Device & SaMD)',
    question: 'How does SmartEye help my company achieve quality & regulatory compliance?',
    answer:
      'SmartEye integrates medical device-specific guidance, 21 CFR Part 11 compliant workflows and ISO 14971 risk management, and supports compliance demonstration for 21 CFR Part 820 and ISO 13485:2016. For SaMD, it provides end-to-end software lifecycle support, including Agile-friendly workflows.',
  },
  {
    category: 'Templates',
    question: 'Does your platform provide templates for QMS, MDR, design control, risk management and human factors?',
    answer:
      'Yes — SmartEye comes with ready-to-use templates for ISO 13485, IEC 62304, ISO 14971, IEC 62366, MDR Technical File and FDA Design Control. You can use these as-is or customize and blend them with your own templates.',
  },
  {
    category: 'Team Collaboration',
    question: "Can our team use SmartEye's quality management software if we want to collaborate?",
    answer:
      'Absolutely — SmartEye enables global team collaboration through co-authoring, co-reviewing and co-approving features, so distributed teams across different geographical locations can work on the same controlled documents.',
  },
  {
    category: 'Data Migrations',
    question: 'How do I migrate my existing QMS controlled documents and processes into SmartEye?',
    answer:
      'Our onboarding process includes developing a tailored transition plan to migrate your existing documentation and processes into SmartEye with minimal disruption.',
  },
  {
    category: 'Targeted Markets',
    question: "Can my medical device company benefit from SmartEye's software if we are internationally based or intend to sell our devices into international markets?",
    answer:
      'Yes — SmartEye supports companies across five continents and helps you navigate international regulatory pathways and quality requirements.',
  },
  {
    category: 'Deployment & Licensing',
    question: 'How is the software licensed? Can I install it on my own server?',
    answer:
      'SmartEye is delivered as cloud-based software under monthly or annual subscription licenses, accessible through any standard web browser.',
  },
  {
    category: 'Onboarding',
    question: 'How long does onboarding take?',
    answer:
      'Time to value typically ranges from two to four weeks, depending on your primary use case. You’ll be paired with a dedicated medical device industry expert throughout onboarding.',
  },
  {
    category: 'Software Upgrades',
    question: 'Will I have to pay for software upgrades?',
    answer:
      'No additional fees apply. Our cloud-based architecture enables regular feature releases, plus 21 CFR Part 11 compliant validation protocols, at no extra charge.',
  },
]
