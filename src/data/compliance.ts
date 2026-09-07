export type Standard = {
  code: string
  name: string
  description: string
}

export const standards: Standard[] = [
  { code: 'ISO 13485', name: 'Medical Device QMS', description: 'The core quality management standard for medical device manufacturers.' },
  { code: 'ISO 14971', name: 'Risk Management', description: 'Application of risk management to medical devices across the lifecycle.' },
  { code: 'IEC 62304', name: 'Software Lifecycle', description: 'Software development lifecycle requirements for medical device software.' },
  { code: 'IEC 62366', name: 'Usability Engineering', description: 'Application of usability engineering to medical devices.' },
  { code: '21 CFR 820', name: 'FDA Quality System Regulation', description: 'FDA requirements for the quality system used in device manufacturing.' },
  { code: '21 CFR Part 11', name: 'Electronic Records & Signatures', description: 'Compliant electronic records and signatures for regulated workflows.' },
  { code: 'EU MDR', name: 'Medical Device Regulation', description: 'EU regulatory framework including post-market surveillance obligations.' },
  { code: 'SaMD', name: 'Software as a Medical Device', description: 'End-to-end lifecycle support for standalone medical device software.' },
]

export const qmsProcessGroups = [
  {
    id: 'management',
    number: '01',
    title: 'Management',
    summary: 'Strategic alignment, resource allocation, and continuous improvement.',
    processes: [
      'Management Responsibility – Setting the Quality Policy and Objectives',
      'Quality Planning – Defining how quality will be achieved',
      'Management Review – Regular evaluation of QMS performance',
      'Resource Management – Ensuring adequate personnel, infrastructure, and environment',
    ],
  },
  {
    id: 'lifecycle',
    number: '02',
    title: 'Product Realization & Lifecycle Control',
    summary: 'Turning ideas into compliant, safe, and effective medical devices.',
    processes: [
      'Design & Development Control – Managing the product design lifecycle',
      'Risk Management (ISO 14971) – Identifying and mitigating risks',
      'Purchasing & Supplier Management – Qualifying and monitoring suppliers',
      'Production & Process Control – Validated manufacturing, traceability, labeling',
      'Change Management – Controlled updates to product, process, or documents',
    ],
  },
  {
    id: 'compliance',
    number: '03',
    title: 'Compliance & Documentation',
    summary: 'Accurate, controlled documentation and electronic records.',
    processes: [
      'Document Control – Approval, revision, and version tracking of QMS documents',
      'Record Control – Secure handling of quality records (training, audit, complaints)',
      'Electronic Records & Signatures (eQMS) – Compliant with FDA 21 CFR Part 11',
    ],
  },
  {
    id: 'monitoring',
    number: '04',
    title: 'Monitoring & Improvement',
    summary: 'Identifying, correcting, and preventing problems.',
    processes: [
      'Internal Audits – Periodic review of QMS compliance and effectiveness',
      'Nonconformance Management (NCs) – Identifying and handling deviations',
      'Corrective & Preventive Action (CAPA) – Root cause analysis and resolution',
      'Feedback Analysis – Learning from user and field feedback',
      'Post-Market Surveillance (EU MDR) – Real-world performance and vigilance',
    ],
  },
  {
    id: 'support',
    number: '05',
    title: 'Support & Compliance Enablement',
    summary: 'Ensuring your QMS is usable, compliant, and scalable.',
    processes: [
      'Training & Competence – Ensuring qualified, knowledgeable staff',
      'Calibration & Equipment Control – Maintaining measurement accuracy',
      'Software Validation (for tools/eQMS) – Ensuring software used in QMS is fit for purpose',
      'Labeling & UDI Compliance – Accurate, compliant product identification',
    ],
  },
]

export const whySmartEyeReasons = [
  'Expertise and Innovation',
  'Cloud-Based Security and Accessibility',
  'Comprehensive Regulatory Compliance',
  'Ready-to-Use Templates and Customization',
  'Global Collaboration and Integration',
  'Seamless Data Migration',
  'International Application and Scalability',
  'Licensing and Accessibility',
  'Customer-Centric Onboarding and Support',
  'Continuous Improvements Without Additional Costs',
]
