export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  body: ContentBlock[]
}

export const articles: Article[] = [
  {
    slug: 'iso-13485-qms-a-complete-guide-for-medical-device-companies-and-startups',
    title: 'ISO 13485 QMS: A Complete Guide for Medical Device Companies and Startups',
    excerpt:
      'A practical walkthrough of what an ISO 13485 quality management system actually requires, and how to implement one without slowing your team down.',
    date: '2025-05-18',
    author: 'S-Cube Technologies',
    category: 'ISO 13485',
    readTime: '6 min read',
    body: [
      { type: 'h3', text: 'Introduction' },
      {
        type: 'p',
        text: "In today's regulatory landscape, having a robust Quality Management System (QMS) is no longer optional for medical device manufacturers — it's a strategic necessity. Whether you're targeting FDA approval or EU MDR compliance, implementing an ISO 13485-certified QMS ensures your organization meets global standards while delivering safe and effective products.",
      },
      { type: 'h3', text: 'What is ISO 13485 QMS?' },
      {
        type: 'p',
        text: 'ISO 13485 is the internationally recognized standard for QMS in the medical device industry. It outlines a framework for consistently meeting customer and regulatory requirements throughout the product lifecycle — from design to post-market surveillance.',
      },
      { type: 'h3', text: 'Key Components of a Medical Device QMS' },
      {
        type: 'ul',
        items: [
          'Design Controls — Ensures products are designed to meet intended use and user needs.',
          'Risk Management — Integrates ISO 14971 to manage product risks throughout development.',
          'Document & Change Control — Tracks revisions, approvals, and traceability of critical documentation.',
          'Supplier Quality Management — Ensures external suppliers and contractors meet quality expectations.',
          'Corrective and Preventive Actions (CAPA) — Identifies and addresses quality issues proactively.',
        ],
      },
      { type: 'h3', text: "FDA QSR vs ISO 13485: What's the Difference in 2025?" },
      {
        type: 'p',
        text: "The FDA's Quality System Regulation (QSR), defined in 21 CFR Part 820, is currently being harmonized with ISO 13485. This move will align the US regulatory framework with global standards.",
      },
      { type: 'h3', text: 'Do You Need an eQMS?' },
      {
        type: 'p',
        text: 'Implementing an electronic QMS can streamline compliance, reduce manual errors, and improve audit readiness.',
      },
      {
        type: 'ul',
        items: [
          'Real-time document control',
          'Audit trails for every change',
          'Faster CAPA and training management',
          'Integration with PLM, ERP, and CRM',
        ],
      },
      { type: 'h3', text: 'How to Implement a QMS for Medical Devices?' },
      {
        type: 'ul',
        items: [
          'Gap Analysis — Assess your current processes against ISO 13485',
          'Define Policies & Objectives — Align quality goals with regulatory needs',
          'Train Your Team — Ensure all roles understand QMS requirements',
          'Document Everything — Procedures, manuals, DHF, DMR, etc.',
          'Audit & Improve — Perform internal audits and management reviews',
        ],
      },
      { type: 'h3', text: 'Conclusion' },
      {
        type: 'p',
        text: "In 2025, staying compliant means staying competitive. Whether you're a startup or a seasoned manufacturer, a well-structured ISO 13485 QMS not only ensures compliance but also builds trust with regulators, customers, and partners. Now is the time to invest in a quality system that scales with your medical device innovation.",
      },
      {
        type: 'quote',
        text: 'Need help implementing an ISO 13485-compliant QMS? Contact us for a free consultation or request a demo of our FDA-ready eQMS platform for medical devices.',
      },
    ],
  },
  {
    slug: 'how-an-eqms-simplifies-iso-13485-compliance-for-uk-medical-device-startups',
    title: 'How an eQMS Simplifies ISO 13485 Compliance for UK Medical Device Startups',
    excerpt:
      'For UK medical device startups, manual systems make ISO 13485 compliance hard. Here is what an eQMS automates, and why that matters.',
    date: '2026-07-16',
    author: 'S-Cube Technologies',
    category: 'e-QMS',
    readTime: '7 min read',
    body: [
      { type: 'h3', text: 'Introduction' },
      {
        type: 'p',
        text: 'For UK medical device startups, achieving ISO 13485 compliance presents significant challenges when relying on manual systems. An eQMS automates quality processes, centralizes documentation, and provides complete traceability, helping startups meet ISO 13485 requirements efficiently.',
      },
      { type: 'h3', text: 'What Is ISO 13485?' },
      {
        type: 'p',
        text: 'ISO 13485 is the internationally recognized quality management standard specifically designed for medical device manufacturers. The standard addresses:',
      },
      {
        type: 'ul',
        items: [
          'Quality Management Systems',
          'Design and Development Controls',
          'Risk Management',
          'Document Control',
          'Supplier Management',
          'Corrective and Preventive Actions (CAPA)',
          'Internal Audits',
          'Training Management',
          'Complaint Handling',
        ],
      },
      {
        type: 'p',
        text: 'For UK startups, ISO 13485 certification is often essential for demonstrating regulatory compliance and accessing broader markets.',
      },
      { type: 'h3', text: 'Challenges Medical Device Startups Face' },
      {
        type: 'p',
        text: 'Startups frequently use Excel spreadsheets, shared folders, email approvals, and paper forms, creating problems such as lack of document control, poor traceability, audit preparation stress, and an increased risk of non-conformities.',
      },
      { type: 'h3', text: 'What Is an eQMS?' },
      {
        type: 'p',
        text: 'An Electronic Quality Management System (eQMS) is a software platform designed to digitize and automate quality management processes — including document control, audit management, CAPA management, supplier quality management, risk management, complaint handling, training management, design control, and change control.',
      },
      { type: 'h3', text: 'Key Benefits' },
      {
        type: 'ul',
        items: [
          'Automated Document Control — version history, controlled approvals, review tracking, e-signatures, and protection from unauthorized changes.',
          'Simplified Design Control Management — design inputs, outputs, verification, validation, reviews, changes, and design history files in one place.',
          'Integrated Risk Management — identify hazards, assess risks, implement controls, monitor effectiveness, maintain risk registers.',
          'Efficient CAPA Management — automated issue reporting, root cause analysis, corrective/preventive actions, effectiveness verification.',
          'Audit Readiness at All Times — auditors can quickly review training records, procedures, design documentation, CAPA records, risk assessments, and supplier evaluations.',
          'Improved Training Compliance — automatic assignment, completion tracking, reminders, records, and competency evidence.',
          'Faster Regulatory Approval Preparation — organized documentation required by regulators, enabling faster submission preparation.',
        ],
      },
      { type: 'h3', text: 'Why Early Adoption Matters' },
      {
        type: 'p',
        text: 'Implementing an eQMS early offers advantages including reduced rework, scalable growth, investor confidence, and faster time to market.',
      },
      { type: 'h3', text: 'Key Features to Look for' },
      {
        type: 'p',
        text: 'When selecting an eQMS, consider: ISO 13485 compliance support, FDA 21 CFR Part 820 alignment, IEC 62304 integration, ISO 14971 risk management, electronic signatures, design control management, audit management, CAPA workflows, training management, cloud-based access, and regulatory traceability.',
      },
      { type: 'h3', text: 'Conclusion' },
      {
        type: 'p',
        text: 'For UK medical device startups, ISO 13485 compliance does not need to be a complex, paper-heavy process. Implementing an eQMS early can accelerate certification efforts, reduce compliance risks, and focus more resources on innovation and product development.',
      },
    ],
  },
  {
    slug: 'why-uk-medical-device-startups-are-adopting-eqms-to-accelerate-iso-13485-compliance',
    title: 'Why UK Medical Device Startups are Adopting eQMS to Accelerate ISO 13485 Compliance',
    excerpt:
      'Document debt is a growing bottleneck for UK medtech startups. Here is how an eQMS replaces manual stress with automated compliance.',
    date: '2026-07-06',
    author: 'S-Cube Technologies',
    category: 'ISO 13485',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: 'Bringing a new medical device to market is an exhilarating milestone for any UK tech startup. But as the transition happens from a brilliant prototype to a commercialised product, you run head-first into a complex regulatory framework. In the UK, the path to market access requires strict adherence to international quality standards, chief among them being ISO 13485:2016.',
      },
      {
        type: 'p',
        text: 'With the Medicines and Healthcare products Regulatory Agency (MHRA) updating its regulatory roadmap and rolling out pathways like the International Reliance Pathway, the compliance landscape is moving faster than ever. For agile startups, relying on legacy paper systems, scattered spreadsheets or basic cloud storage folders is no longer just inefficient — it is a major business risk.',
      },
      {
        type: 'p',
        text: 'This growing operational bottleneck is known as "document debt." Left unchecked, it can stall your regulatory submissions, inflate your audit prep costs, and delay your market launch by months. That is why a growing cohort of UK medtech innovators are bypassing traditional paperwork entirely and deploying an eQMS (electronic Quality Management System) right from day one.',
      },
      {
        type: 'quote',
        text: 'An electronic Quality Management System is a specialized, cloud-based software platform designed to manage an organisation’s documents, processes, and compliance tracking under a single digital roof.',
      },
      { type: 'h3', text: 'How an eQMS Simplifies ISO 13485 Compliance' },
      {
        type: 'p',
        text: 'Although ISO 13485 certification is not legally mandatory in the UK, it is widely regarded as the foundation for demonstrating an effective Quality Management System when seeking UKCA marking under the UK Medical Devices Regulations (UK MDR). It also supports regulatory submissions in many international markets. Achieving certification requires proving to a UK Approved Body that you maintain complete control over your documentation, design changes, and risk management.',
      },
      {
        type: 'p',
        text: 'For software medical devices, an eQMS also supports compliance with IEC 62304 by providing traceability between software requirements, development activities, testing and release records.',
      },
      { type: 'h3', text: '1. Centralising Document Control (Clause 4.2)' },
      {
        type: 'p',
        text: 'Under ISO 13485, every Standard Operating Procedure (SOP), work instruction and quality policy must undergo a rigorous lifecycle of drafting, review, approval and distribution. Manual processes mean chasing team members for wet-ink signatures, accidentally editing old versions of a document, or losing track of who has read the latest update.',
      },
      {
        type: 'p',
        text: 'An eQMS automates the entire document lifecycle. Built-in, FDA 21 CFR Part 11-compliant electronic signatures allow your team to sign off on documents securely from anywhere. The system automatically archives outdated versions, ensuring that your team only works from the currently approved revision.',
      },
      { type: 'h3', text: '2. Safeguarding the Design History File (Clause 7.3)' },
      {
        type: 'p',
        text: 'If you are developing Software as a Medical Device (SaMD) or a complex hardware instrument, your Design History File (DHF) is your most critical asset. Manually maintaining a traceability matrix across dynamic spreadsheets to connect user needs, design inputs, design outputs, and validation tests is fragile — one engineering tweak can break the entire matrix.',
      },
      {
        type: 'p',
        text: 'An eQMS dynamically links your design inputs directly to outputs and testing protocols. If a component or code block changes, it flags exactly which test cases and risks are affected, keeping your DHF permanently audit-ready.',
      },
      { type: 'h3', text: '3. Closing the Loop on CAPA and Deviations (Clause 8.5)' },
      {
        type: 'p',
        text: 'When something goes wrong — whether it is a manufacturing defect or a software bug — ISO 13485 requires you to document it, find the root cause, and implement a Corrective and Preventive Action (CAPA). An eQMS turns quality events into active, trackable tasks: it automatically triggers alerts, routes root-cause analyses to the appropriate team members, and keeps a tamper-proof audit trail of how the issue was resolved.',
      },
      { type: 'h3', text: 'The Executive Blueprint: Manual vs. Automated QMS' },
      {
        type: 'table',
        headers: ['Regulatory Priority', 'Paper / General Cloud Drive', 'SmartEye eQMS Solution'],
        rows: [
          ['Audit Preparation', 'Weeks of stressful manual file checks.', 'Zero-prep; real-time dashboard exports.'],
          ['Sign-off Security', 'Scanned PDFs or physical ink.', 'Cryptographic, compliant e-signatures.'],
          ['Traceability', 'Broken links across static files.', 'Automated, cross-linked entity database.'],
          ['SOP Training', 'Email chains with "read and understood".', 'Automatic training prompts & quiz verification.'],
        ],
      },
      { type: 'h3', text: 'Final Thoughts' },
      {
        type: 'p',
        text: 'For early-stage medical device companies, quality management should not be viewed as an administrative burden. A well-implemented electronic Quality Management System (eQMS) establishes the foundation for regulatory compliance, product quality and sustainable business growth.',
      },
      {
        type: 'p',
        text: 'As UK medical device regulations continue to evolve and documentation requirements become more demanding, organisations that digitise their Quality Management System early are better positioned to achieve ISO 13485 certification, prepare for audits with confidence and bring innovative products to market more efficiently.',
      },
    ],
  },
  {
    slug: 'iso-13485-explained-in-plain-english',
    title: 'ISO 13485 Explained in Plain English',
    excerpt:
      'For startups that just want to build, not drown in paperwork — what ISO 13485 is actually asking you to do, in five simple things.',
    date: '2026-03-24',
    author: 'S-Cube Technologies',
    category: 'ISO 13485',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: "If you're building a medical device startup, you've definitely heard this early on: \"You need ISO 13485.\" And almost every founder has the same initial reactions: we'll do it later, we're too early, is this just documentation, can we manage this in Excel or shared folders. Having had exactly the same conversation with teams again and again, here's the simplified version: ISO 13485 is not what most startups think it is.",
      },
      { type: 'h3', text: '1. What ISO 13485 Actually Is (In One Line)' },
      { type: 'quote', text: 'ISO 13485 is a system that proves you can consistently build a safe medical device.' },
      { type: 'p', text: "That's it. Not paperwork. Not templates. Not bureaucracy. In simple terms, it shows that your company is in control of what it is building." },
      { type: 'h3', text: 'Why Startups Struggle with It' },
      {
        type: 'ul',
        items: [
          '"Let\'s just create documents when needed" — SOPs get written only when someone asks, and nothing connects.',
          '"We\'ll clean it up before the audit" — creates stress, missing records, and last-minute confusion.',
          '"Excel / Google Drive should be enough" — works early on, but version control and traceability slip as the team grows.',
          '"Quality is QA\'s job" — without the full team involved, the system never really works.',
        ],
      },
      { type: 'p', text: 'In most early-stage audits, the biggest gap is not missing documents — it is that nothing is connected end-to-end.' },
      { type: 'h3', text: 'What ISO 13485 Is Really Asking You To Do' },
      {
        type: 'ul',
        items: [
          'Define how you work',
          'Follow it consistently',
          'Keep evidence of what you did',
          'Fix issues when they happen',
          'Keep improving',
        ],
      },
      { type: 'h3', text: 'The Biggest Misconception' },
      { type: 'p', text: 'Many startups think ISO 13485 is about documentation. In reality, it is about control, traceability, and evidence — documentation is just the output of a system that is working properly.' },
      { type: 'h3', text: 'What Auditors Actually Care About' },
      {
        type: 'p',
        text: 'Auditors are not focused on how your documents look — they are trying to understand how your system works in reality: how was this requirement implemented, where is the evidence this was tested, how was this risk evaluated, who approved this change and when. The key is being able to connect everything clearly — this connection is what we call traceability, and it is where most startups struggle the most.',
      },
      { type: 'h3', text: 'When Should You Start ISO 13485' },
      {
        type: 'p',
        text: 'You do not need it at the idea stage, but you should have it in place before clinical validation, regulatory submission, and first customers. Teams that start earlier build it naturally into how they work; teams that delay it often have to rebuild things under pressure.',
      },
      { type: 'h3', text: 'The Shift That Changes Everything' },
      { type: 'p', text: "The companies that handle this well don't treat ISO 13485 as a certification exercise. They treat it as the way the company operates every day — and that shift makes everything simpler, including audits." },
      { type: 'h3', text: 'Final Thought' },
      { type: 'p', text: 'ISO 13485 is not about passing an audit. It is about building a company that can consistently deliver safe and reliable products — and the earlier you start thinking this way, the smoother everything becomes later.' },
    ],
  },
  {
    slug: 'why-most-medical-device-startups-fail-their-first-audit',
    title: 'Why Most Medical Device Startups Fail Their First Audit',
    excerpt:
      'Most startups don’t fail their first audit because the product is unsafe — they fail because they built the company in the wrong order.',
    date: '2026-03-10',
    author: 'Anindya Mookerjea',
    category: 'ISO 13485',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: "Most medical device startups don't fail their first audit because the product is unsafe. They fail because they built the company in the wrong order. The typical startup progression follows: build prototype, attract investors, run pilots, prepare certification — and only then, \"now let's build the QMS.\"",
      },
      { type: 'p', text: 'Regulators evaluate how decisions were made while building the product, not how exciting the product is. Auditors typically ask:' },
      {
        type: 'ul',
        items: [
          'Where did this requirement come from?',
          'Who approved this design change?',
          'Why was this risk considered acceptable?',
          'How do you know this test result was reviewed?',
        ],
      },
      { type: 'p', text: 'Common inadequate responses — "we discussed it in a meeting," "it\'s somewhere in Slack," "the engineer remembers" — are exactly where the audit trajectory becomes problematic.' },
      { type: 'h3', text: 'The Core Problem' },
      {
        type: 'p',
        text: 'Medical devices receive approval based on controlled development, not performance alone. Development history cannot be recreated retroactively — it must be captured as events unfold. Many startups document the product itself but neglect documenting the decisions behind it. Regulators essentially review decision traceability.',
      },
      { type: 'h3', text: 'The Solution' },
      {
        type: 'p',
        text: 'Start capturing decisions immediately from day one — not during certification, not after hiring a QA manager. Record, for every key development decision: what was decided, who made the decision, why, and who approved it. Simple tools work at first; the critical factor is that decision history exists at all.',
      },
      {
        type: 'p',
        text: 'A quality management system serves a broader purpose than document storage — it captures how decisions were made during development, which is precisely what auditors seek to verify.',
      },
      { type: 'h3', text: 'Conclusion' },
      { type: 'p', text: 'For medical device startups, a strong QMS implementation should begin immediately.' },
    ],
  },
]

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug)
