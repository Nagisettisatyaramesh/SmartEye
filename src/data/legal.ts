export type LegalBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type LegalPageData = {
  title: string
  lastUpdated: string
  blocks: LegalBlock[]
}

export const privacyPolicy: LegalPageData = {
  title: 'Privacy Policy',
  lastUpdated: '07 May 2024',
  blocks: [
    {
      type: 'p',
      text: 'This privacy policy applies between you, the User of this Website, and S-Cube Technologies Limited, the owner and provider of this Website. S-Cube Technologies Limited takes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.',
    },
    { type: 'p', text: 'This privacy policy should be read alongside our Terms and Conditions, found at www.eqms-smarteye.com. Please read this privacy policy carefully.' },
    { type: 'h2', text: 'Definitions and Interpretation' },
    {
      type: 'ul',
      items: [
        'Data — collectively all information that you submit to S-Cube Technologies Limited via the Website, incorporating definitions provided in Data Protection Laws.',
        'Cookies — small text files placed on your computer when you visit certain parts of the Website and/or use certain features.',
        'Data Protection Laws — any applicable law relating to processing personal Data, including the Directive 96/46/EC or the GDPR, and any national implementing laws, regulations and secondary legislation.',
        'GDPR — the General Data Protection Regulation (EU) 2016/679.',
        'S-Cube Technologies Limited, we or us — a company incorporated in England and Wales with registered number 10800835, registered office at 125 Deansgate, Manchester, United Kingdom, M3 2LH.',
        'UK and EU Cookie Law — the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the 2011 Regulations.',
        'User or you — any third party that accesses the Website and is not employed by or providing services to S-Cube Technologies Limited.',
        'Website — www.eqms-smarteye.com unless expressly excluded by its own terms and conditions.',
      ],
    },
    { type: 'h2', text: 'Scope of This Privacy Policy' },
    {
      type: 'p',
      text: 'This privacy policy applies only to the actions of S-Cube Technologies Limited and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website, including any links to social media websites. For purposes of the applicable Data Protection Laws, S-Cube Technologies Limited is the "data controller".',
    },
    { type: 'h2', text: 'Controller' },
    {
      type: 'p',
      text: 'S-Cube Technologies Limited, registered in England and Wales (number 10800835), registered office at 125 Deansgate, Manchester, United Kingdom, M3 2LH, is the controller according to the GDPR and therefore responsible for the data processing explained herein.',
    },
    { type: 'h2', text: 'Person Responsible for Personal Data Protection' },
    {
      type: 'p',
      text: 'You can contact our Data Protection Officer at any time: 125 Deansgate, Manchester, United Kingdom, M3 2LH. Phone: +44-7459-153907. Email: anindya.mookerjea@scube-technologies.com',
    },
    { type: 'h2', text: 'Data Collected' },
    {
      type: 'ul',
      items: ['Name', 'Job title', 'Contact information such as email addresses and telephone numbers', 'Web browser type and version (automatically collected)'],
    },
    { type: 'h2', text: 'How We Collect Data' },
    {
      type: 'p',
      text: 'Data is given to us by you — for example when you contact us, register with us, complete surveys, make payments, elect to receive marketing communications, or use our services. Data is also collected automatically — for example your IP address, the date, times and frequency with which you access the Website, and via cookies in line with your browser settings.',
    },
    { type: 'h2', text: 'Our Use of Data' },
    {
      type: 'p',
      text: 'Data may be used for internal record keeping and improvement of our products/services, where we deem it necessary for our legitimate interests, or, where you register for our services, for the performance of a contract between you and us.',
    },
    { type: 'h2', text: 'Who We Share Data With' },
    {
      type: 'ul',
      items: [
        'Any of our group companies or affiliates',
        'Our employees, agents and/or professional advisors, to improve our services and/or to obtain advice from professional advisers',
      ],
    },
    { type: 'h2', text: 'Keeping Data Secure' },
    {
      type: 'p',
      text: 'We use technical and organisational measures to safeguard your Data — access to your account is controlled by a unique password and username, and we store your Data on secure servers. If you suspect any misuse, loss or unauthorized access to your Data, contact anindya.mookerjea@scube-technologies.com immediately.',
    },
    { type: 'h2', text: 'Data Retention' },
    {
      type: 'p',
      text: 'Unless a longer retention period is required or permitted by law, we will only hold your Data for the period necessary to fulfil the purposes outlined in this privacy policy, or until you request that it be deleted. Even after deletion, Data may persist on backup or archival media for legal, tax or regulatory purposes.',
    },
    { type: 'h2', text: 'Your Rights' },
    {
      type: 'ul',
      items: [
        'Right to access — request copies of the information we hold about you, or that we modify, update or delete it.',
        'Right to correct — have your Data rectified if inaccurate or incomplete.',
        'Right to erase — request that we delete or remove your Data from our systems.',
        'Right to restrict our use of your Data — "block" us from using it or limit how we use it.',
        'Right to data portability — request that we move, copy or transfer your Data.',
        'Right to object — object to our use of your Data, including for our legitimate interests.',
      ],
    },
    {
      type: 'p',
      text: 'To exercise any of these rights or withdraw consent, contact gdpr@scube-technologies.com. If unsatisfied with how a complaint is handled, you may refer it to the Information Commissioner\'s Office (ICO) at ico.org.uk.',
    },
    { type: 'h2', text: 'Transfers Outside the European Economic Area' },
    {
      type: 'p',
      text: 'Data may be stored, processed in, and transferred to countries outside the EEA — for example where our servers or service providers are located outside the EEA, or shared with group companies. We only transfer Data outside the EEA where compliant with data protection legislation and with adequate safeguards in place, such as standard contractual clauses.',
    },
    { type: 'h2', text: 'Links to Other Websites' },
    { type: 'p', text: 'This Website may, from time to time, provide links to other websites. We have no control over and are not responsible for the content of these websites, and this privacy policy does not extend to your use of them.' },
    { type: 'h2', text: 'Changes of Business Ownership and Control' },
    {
      type: 'p',
      text: 'S-Cube Technologies Limited may expand or reduce our business, which may involve the sale and/or transfer of control of all or part of the business. Data provided by Users will, where relevant, be transferred along with that part, and the new owner will be permitted to use the Data for the purposes for which it was originally supplied.',
    },
    { type: 'h2', text: 'Cookies' },
    {
      type: 'p',
      text: 'This Website may place and access certain Cookies on your computer, used in accordance with current UK and EU Cookie Law. Before placing Cookies, you will be presented with a message bar requesting your consent. You may deny consent, though certain features of the Website may not function fully or as intended.',
    },
    {
      type: 'ul',
      items: [
        'Strictly necessary cookies — required for the operation of our website, e.g. logging into secure areas or using e-billing services.',
        'Analytical/performance cookies — recognise and count visitors and see how they move around our website, helping us improve it.',
        'Functionality cookies — recognise you when you return, personalising content and remembering your preferences.',
      ],
    },
    { type: 'h2', text: 'General' },
    {
      type: 'p',
      text: 'You may not transfer any of your rights under this privacy policy to any other person. If any court or competent authority finds any provision invalid, illegal or unenforceable, that provision will be deemed deleted without affecting the rest. This Agreement is governed by the law of England and Wales, with disputes subject to the exclusive jurisdiction of the English and Welsh courts.',
    },
    { type: 'h2', text: 'Changes to This Privacy Policy' },
    {
      type: 'p',
      text: 'S-Cube Technologies Limited reserves the right to change this privacy policy as we may deem necessary from time to time, or as required by law. Changes will be posted on the Website, and continued use following alterations constitutes acceptance. Contact gdpr@scube-technologies.com with any questions.',
    },
  ],
}

export const termsAndConditions: LegalPageData = {
  title: 'Terms and Conditions',
  lastUpdated: '07 May 2024',
  blocks: [
    {
      type: 'p',
      text: 'Please read all of these terms and conditions. As we can accept your order and make a legally enforceable agreement without further reference to you, you must read these terms and conditions to make sure they contain all that you want and nothing you are not happy with.',
    },
    { type: 'h2', text: 'Application' },
    {
      type: 'p',
      text: "These Terms and Conditions apply to the purchase of services and goods by you (the Customer or you). We are S-Cube Technologies Limited, registered in England and Wales under number 10800835, registered office at 125 Deansgate, Manchester, United Kingdom, M3 2LH, email info.smarteye@scube-technologies.com (the Supplier, us or we). You can only purchase Services and Goods from the Website if you are eligible to enter into a contract and are at least 18 years old.",
    },
    { type: 'h2', text: 'Interpretation' },
    {
      type: 'ul',
      items: [
        'Consumer — an individual acting for purposes wholly or mainly outside their trade, business, craft or profession.',
        'Contract — the legally binding agreement between you and us for the supply of the Services.',
        'Goods — any goods we supply to you with the Services.',
        'Order — the Customer\'s order for the Services from the Supplier.',
        'Services — the services advertised on the Website, including any Goods.',
        'Website — www.eqms-smarteye.com.',
      ],
    },
    { type: 'h2', text: 'Services' },
    {
      type: 'p',
      text: 'Descriptions of Services and Goods on the Website, catalogues, brochures or other advertisements are for illustrative purposes only. All Services are subject to availability, and we can make changes necessary to comply with any applicable law or safety requirement, notifying you accordingly.',
    },
    { type: 'h2', text: 'Customer Responsibilities' },
    {
      type: 'p',
      text: 'You must co-operate with us in all matters relating to the Services, provide access to premises as required, provide the information required to perform the Services, and obtain necessary licences and consents. Failure to do so is a Customer default entitling us to suspend or, following notice, terminate the Contract.',
    },
    { type: 'h2', text: 'Personal Information and Registration' },
    {
      type: 'p',
      text: 'When registering to use the Website you must set up a username and password and keep them secret. We retain and use all information strictly under the Privacy Policy, and may contact you by email, other electronic means, or pre-paid post.',
    },
    { type: 'h2', text: 'Basis of Sale' },
    {
      type: 'p',
      text: 'Descriptions of Services and Goods do not constitute a contractual offer. We can reject a submitted Order for any reason. A Contract is formed only when you receive an Order Confirmation email from us. Any quotation or estimate of Fees is valid for a maximum of 30 days from its date unless withdrawn earlier.',
    },
    { type: 'h2', text: 'Fees and Payment' },
    {
      type: 'p',
      text: 'Fees for Services, and the price of any Goods, are as set out on the Website at the date we accept the Order, or as otherwise agreed in writing, and include VAT at the applicable rate. Payment is by credit or debit card, taken immediately or before delivery of the Services.',
    },
    { type: 'h2', text: 'Delivery' },
    {
      type: 'p',
      text: 'We will deliver the Services, including any Goods, within the agreed period or, failing agreement, within a reasonable time (Services) or not more than 30 days after the Contract is entered into (Goods). If we do not deliver on time you may be entitled to a reduction in Fees or to treat the Contract at an end, with any payments made returned to you.',
    },
    { type: 'h2', text: 'Risk and Title' },
    {
      type: 'p',
      text: 'Risk of damage to or loss of any Goods passes to you on delivery. You do not own the Goods until we have received payment in full.',
    },
    { type: 'h2', text: 'Right to Cancel' },
    {
      type: 'p',
      text: 'Subject to the exceptions set out in these Terms, you can cancel this contract within 14 days without giving any reason. The cancellation period expires 14 days from the day you (or a nominated third party) acquire physical possession of the last of the Goods, or, for services only, 14 days from the day the Contract was entered into. To exercise the right to cancel you must inform us of your decision by a clear statement (e.g. letter, fax or email).',
    },
    { type: 'h2', text: 'Effects of Cancellation and Reimbursement' },
    {
      type: 'p',
      text: 'If you cancel within the cancellation period, we will reimburse all payments received, including standard delivery costs, without undue delay and no later than 14 days after being informed of your decision to cancel (or after we receive back any Goods supplied, if later). We may deduct for any loss in value resulting from unnecessary handling of Goods.',
    },
    { type: 'h2', text: 'Conformity' },
    {
      type: 'p',
      text: 'We have a legal duty to supply Goods that are of satisfactory quality, fit for any particular purpose made known to us, and conforming to their description, and to supply Services with reasonable skill and care. We provide after-sales service including training and consultancy.',
    },
    { type: 'h2', text: 'Duration, Termination and Suspension' },
    {
      type: 'p',
      text: 'The Contract continues as long as it takes us to perform the Services. Either party may terminate or suspend the Contract by written notice if the other commits a serious breach that is not fixed within 30 days of notice, or becomes subject to any step towards bankruptcy or liquidation.',
    },
    { type: 'h2', text: 'Circumstances Beyond the Control of Either Party' },
    {
      type: 'p',
      text: 'Where a failure arises from something beyond a party\'s reasonable control, that party will notify the other as soon as reasonably practicable and its obligations will be suspended so far as is reasonable, without liability for the failure it could not reasonably avoid.',
    },
    { type: 'h2', text: 'Privacy' },
    {
      type: 'p',
      text: 'We respect your privacy and comply with the GDPR with regard to your personal information. These Terms should be read alongside, and are in addition to, our Privacy Policy and Cookie Policy. We are a Data Controller of the Personal Data we process in providing Services and Goods to you. Enquiries: gdpr@scube-technologies.com.',
    },
    { type: 'h2', text: 'Governing Law, Jurisdiction and Complaints' },
    {
      type: 'p',
      text: 'The Contract is governed by the law of England and Wales. Disputes are subject to the jurisdiction of the courts of England and Wales (or Scotland/Northern Ireland where the Customer lives there). If a dispute occurs, customers should contact us to find a solution; we aim to respond with an appropriate solution within ten (10) days.',
    },
    { type: 'h2', text: 'Cancellation Form' },
    {
      type: 'p',
      text: 'To S-Cube Technologies Limited, 125 Deansgate, Manchester, United Kingdom, M3 2LH, email info.smarteye@scube-technologies.com — I/We hereby give notice that I/We cancel my/our contract of sale of the following goods/for the supply of the following service, ordered on/received on (date), name and address of consumer(s), and signature (if notified on paper).',
    },
  ],
}

export const cookiePolicy: LegalPageData = {
  title: 'Website Cookie Policy',
  lastUpdated: '07 May 2024',
  blocks: [
    { type: 'h2', text: 'Introduction' },
    { type: 'p', text: 'eQMS SmartEye uses cookies to distinguish users and improve website experience. This policy describes cookie types and the purposes for their use.' },
    { type: 'h2', text: 'Cookie Definitions' },
    {
      type: 'p',
      text: 'A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your device. First-party cookies are set by the website being visited; third-party cookies are set by a different domain. Persistent cookies remain on a device for a specified period and activate each visit. Session cookies are created temporarily during a browser session and deleted when it closes.',
    },
    { type: 'h2', text: 'What Cookies Do We Use and Why?' },
    {
      type: 'ul',
      items: [
        'Strictly Necessary — identify logged-in users and authenticate them, ensure proper service connection after website changes, and provide security purposes.',
        'Performance — collect usage information without identifying users, conduct web analytics and affiliate tracking, and measure errors and test website designs.',
        'Functionality — remember user settings like layout and preferences, track survey engagement, and display login status and embedded video content.',
        'Targeting — track visits across websites for targeted advertising and measure ad campaign success.',
      ],
    },
    { type: 'h2', text: 'When Consent is Required' },
    { type: 'p', text: 'All cookies require your consent. You can consent via banner buttons, or manage settings through your browser controls.' },
    { type: 'h2', text: 'How to Delete and Block Cookies' },
    { type: 'p', text: 'Browser settings allow cookie control for Internet Explorer, Firefox, Chrome and Safari. Disabling cookies may prevent access to some website features.' },
    { type: 'h2', text: 'Contact Information' },
    { type: 'p', text: 'Email: gdpr@scube-technologies.com. Address: S-Cube Technologies Limited, 125 Deansgate, Manchester M3 2LH, United Kingdom.' },
  ],
}

export const qualityPolicy: LegalPageData = {
  title: 'Quality Policy',
  lastUpdated: '30 June 2026',
  blocks: [
    {
      type: 'p',
      text: 'S-Cube Technologies provides technology and regulatory solutions for the medical-device sector. We are committed to delivering reliable, compliant and customer-focused products and services that support customers in bringing safe and effective medical-device solutions to market.',
    },
    { type: 'h2', text: 'To fulfil this commitment, S-Cube Technologies will:' },
    {
      type: 'ul',
      items: [
        'Maintain a Quality Management System that is appropriate to our purpose and context and supports our strategic direction.',
        'Understand and meet applicable customer, statutory, regulatory, contractual and other requirements relevant to our products, services and Quality Management System.',
        'Establish and review measurable quality objectives at relevant functions and levels, supported by clear responsibilities and appropriate resources.',
        'Strengthen customer satisfaction by delivering dependable solutions, responsive support and an effective customer experience.',
        'Select, monitor and collaborate with suppliers and external providers using criteria proportionate to their effect on the quality of our products and services.',
        'Promote competence, accountability, risk-based thinking and employee involvement so that everyone understands how their work contributes to quality.',
        'Consider whether climate change is a relevant issue when evaluating the context, risks and opportunities affecting the Quality Management System.',
        'Carefully select suppliers for software design and development following strict criteria to provide the best quality of products and services.',
        'Commit to increasing the quality of products by carrying out plans to reduce the number of product defects and complaints, to exceed customers\' expectations.',
        'Continually improve the suitability, adequacy and effectiveness of the Quality Management System and the performance of our products, services and processes.',
      ],
    },
    { type: 'h2', text: 'Framework for Objectives' },
    { type: 'p', text: 'This policy provides the framework for establishing and reviewing quality objectives, with supporting arrangements defined in the Quality Manual and relevant QMS processes.' },
    { type: 'h2', text: 'Communication and Availability' },
    { type: 'p', text: 'The CEO shall ensure that this policy is maintained as documented information; communicated, understood and applied throughout the organisation; and made available to relevant interested parties, as appropriate.' },
  ],
}

export const securityPolicy: LegalPageData = {
  title: 'Security Policy',
  lastUpdated: '10 October 2025',
  blocks: [
    {
      type: 'p',
      text: 'The Information Security Management System implemented by S-Cube, and this policy, are used to ensure that all information managed by the organization is protected from internal and external threats. The policy applies to all employees of S-Cube, and also to our main interested parties, and it is available to all people for review.',
    },
    { type: 'h2', text: 'Our Information Security Objectives' },
    {
      type: 'ul',
      items: [
        'Confidentiality — only authorized persons can access the information.',
        'Integrity — the information must be accurate, ensuring it has not been corrupted or degraded.',
        'Availability — information must be available to those who need it, when they need it.',
      ],
    },
    { type: 'p', text: 'It is the responsibility of the CEO to ensure that appropriate resources are provided to implement this policy, ensuring that it is properly communicated and understood.' },
  ],
}
