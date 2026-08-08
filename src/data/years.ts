export interface Achievement {
  title: string
  description?: string
  technologies?: string[]
  impact?: string
}

export interface ProjectAttachment {
  label: string
  url: string
}

export interface QuarterHighlight {
  quarter: string
  focus: string
  projects: {
    title: string
    description: string
    features: string[]
    impact: string
    tag?: string
    images?: string[]
    attachments?: ProjectAttachment[]
  }[]
}

export interface KeyContribution {
  title: string
  description: string
  category: string
  icon?: string
}

export interface Learning {
  category: string
  title: string
  description: string
  tag?: string
}

export interface SelfAssessment {
  category: string
  score: number
  maxScore: number
  strengths: string[]
  areasForGrowth: string[]
}

export interface TechDebt {
  title: string
  version?: string
  items: string[]
}

export interface Initiative {
  title: string
  description: string
  status: string
}

export interface TeamFeedback {
  team: string
  subtitle: string
  feedback: string
  tag: string
}

export interface Goal {
  category: string
  title: string
  items: string[]
}

export interface YearData {
  description?: string
  role?: string
  focusAreas?: string[]
  context?: string
  achievements: Achievement[]
  yearOverview?: {
    statement: string
    highlights: string[]
  }
  keyContributions?: KeyContribution[]
  quarterlyHighlights?: QuarterHighlight[]
  overallImpact?: {
    revenue?: string
    efficiency?: string[]
    riskReduction?: string[]
    visibility?: string[]
    platformReadiness?: string[]
  }
  technicalLearnings?: Learning[]
  softSkills?: Learning[]
  selfAssessment?: SelfAssessment[]
  techDebt?: TechDebt[]
  initiatives?: Initiative[]
  teamFeedback?: TeamFeedback[]
  individualGoals?: Goal[]
  teamGoals?: Goal[]
}

export const years: Record<number, YearData> = {
  2025: {
    description: 'Owning end-to-end operational workflows and critical front-end architecture for Outbound, Platform, and JUMP squads.',
    role: 'Front-End Engineer',
    focusAreas: ['Outbound', 'Platform', 'JUMP'],
    context: 'FBN / WMS Systems',
    yearOverview: {
      statement: 'This year, my focus shifted from shipping individual screens to owning end-to-end Front-End workflows in highly operational systems.',
      highlights: [
        'Workflow Engine Approach: Treated Front-End as a control layer for complex business rules rather than just a UI, specifically for FMS and Namshi flows.',
        'Cross-Squad Impact: Worked across Outbound, Platform, and JUMP squads to unify operational experiences.',
        'System Modernization: Replaced legacy manual processes with state-driven, configurable interfaces designed for reliability in real warehouse conditions.',
      ],
    },
    keyContributions: [
      {
        title: 'Dynamic QC & Packing',
        description: 'Built flows that automatically adapt interface behavior based on SKU family, complex expiry rules, affinity constraints, and specific client requirements.',
        category: 'Workflow',
      },
      {
        title: 'Strong FE Guardrails',
        description: 'Implemented mandatory scans, validation gates, and guided packaging steps to proactively prevent downstream errors rather than reacting to them.',
        category: 'Reliability',
      },
      {
        title: 'Enhanced Visibility',
        description: 'Developed tools like container journey visualizations and aging filters that enable operations teams to reason about system state and debug issues instantly.',
        category: 'Insights',
      },
      {
        title: 'JUMP Enablement',
        description: 'Architected FE support for non-noon branding, external sellers, and multi-tenant behavior, enabling the platform to scale as a 3PL service.',
        category: 'Expansion',
      },
    ],
    quarterlyHighlights: [
      {
        quarter: 'Q1 2025',
        focus: 'Workflow Revamps & Premium Features',
        projects: [
          {
            title: 'PDA QC Revamp',
            description: 'Decoupled Quality Check from Packaging for parallel processing speed.',
            features: [
              'Process Separation: Decoupled Quality Check from Packaging for parallel processing speed.',
              'Dynamic Attributes: Item prompts change automatically based on SKU family rules.',
              'Mandatory Validation: Enforced IMEI/Serial scans to eliminate bypass errors.',
            ],
            impact: 'Reduced theft and counterfeits through mandatory serialization; increased throughput via specialized workflows.',
            tag: 'Operational Efficiency',
            images: [
              '/images/q1-2025/pda-qc-1.svg',
              '/images/q1-2025/pda-qc-2.svg',
              '/images/q1-2025/pda-qc-3.svg',
              '/images/q1-2025/pda-qc-4.svg',
              '/images/q1-2025/pda-qc-5.svg',
              '/images/q1-2025/pda-qc-6.svg',
              '/images/q1-2025/pda-qc-7.svg',
              '/images/q1-2025/pda-qc-8.svg',
            ],
          },
          {
            title: 'Namshi Gifting Flow',
            description: 'Added "Namshi Gift Box" workflow to standard outbound fulfillment.',
            features: [
              'Premium Integration: Added "Namshi Gift Box" workflow to standard outbound fulfillment.',
              'Seasonal Launch: Targeted go-live before Ramadan to maximize market capture.',
              'Client Capability: Proved FBN systems can handle external client-specific packing rules.',
            ],
            impact: '~30K AED/mo Revenue. New revenue stream during Ramadan & enhanced Namshi brand positioning.',
            tag: 'Revenue & CX',
            images: [
              '/images/q1-2025/namshi-gifting-1.svg',
              '/images/q1-2025/namshi-gifting-2.svg',
              '/images/q1-2025/namshi-gifting-3.svg',
              '/images/q1-2025/namshi-gifting-4.svg',
              '/images/q1-2025/namshi-gifting-5.svg',
              '/images/q1-2025/namshi-gifting-6.svg',
              '/images/q1-2025/namshi-gifting-7.svg',
            ],
          },
        ],
      },
      {
        quarter: 'Q2 2025',
        focus: 'Compliance & Platform Visibility',
        projects: [
          {
            title: 'Affinity Matrix',
            description: 'System defines permissible (O) and prohibited (X) packing combinations.',
            features: [
              'Compatibility Logic: System defines permissible (O) and prohibited (X) packing combinations.',
              'Active Prevention: Blocks users from co-packing incompatible items like chemicals and food.',
              'Visual Guidance: UI flags and logos guide packers on correct sub-grouping separation.',
            ],
            impact: 'Ensured regulatory compliance and reduced safety risks by preventing cross-contamination in shipments.',
            tag: 'Safety & Compliance',
            images: [
              '/images/q2-2025/affinity-matrix-1.svg',
              '/images/q2-2025/affinity-matrix-2.svg',
            ],
          },
          {
            title: 'Container Journey',
            description: 'Full lifecycle tracking via box barcode across all warehouses.',
            features: [
              'End-to-End Trace: Full lifecycle tracking via box barcode across all warehouses.',
              'Detailed Logs: Time-sorted history of Pack, Unpack, Transfer, and Missing events.',
              'Global Lookup: Universal search capability across countries and facility codes.',
            ],
            impact: 'Improved operational accountability for lost inventory and enabled faster debugging of complex platform flows.',
            tag: 'Platform Capability',
            images: [
              '/images/q2-2025/container-journey-1.svg',
              '/images/q2-2025/container-journey-2.svg',
              '/images/q2-2025/container-journey-3.svg',
              '/images/q2-2025/container-journey-4.svg',
              '/images/q2-2025/container-journey-5.svg',
              '/images/q2-2025/container-journey-6.svg',
              '/images/q2-2025/container-journey-7.svg',
              '/images/q2-2025/container-journey-8.svg',
              '/images/q2-2025/container-journey-9.svg',
            ],
          },
        ],
      },
      {
        quarter: 'Q3 2025',
        focus: 'JUMP Store Deep Dive',
        projects: [
          {
            title: 'JUMP Store',
            description: 'An initiative to open noon\'s fulfillment infrastructure to external e-commerce marketplaces like Zid, Salla, and Shopify, acting as a central integration layer.',
            features: [
              'Client Interface: Built a non-noon branded interface on Seller Lab allowing external sellers to manage inventory, orders, and finances independently.',
              'Integration Engine: Orchestrates end-to-end sync: Catalog ingestion from clients, FMS order creation, SMS stock updates, and RMS logistics for forward/reverse flows.',
              'Finance & Billing: Developed models for service charging, invoicing, and payment collection/disbursement to support 3PL operations.',
            ],
            impact: 'Transforms internal cost centers into a revenue-generating 3PL Service Provider business model.',
            tag: 'Strategic Value',
            images: [
              '/images/q3-2025/jump-1.svg',
              '/images/q3-2025/jump-2.svg',
              '/images/q3-2025/jump-3.svg',
              '/images/q3-2025/jump-4.svg',
              '/images/q3-2025/jump-5.svg',
              '/images/q3-2025/jump-6.svg',
              '/images/q3-2025/jump-7.svg',
            ],
          },
        ],
      },
      {
        quarter: 'Q4 2025',
        focus: 'Efficiency, Data Integrity, and Operational Speed',
        projects: [
          {
            title: 'Wireless Printing',
            description: 'Introducing wireless, Bluetooth mobile printers to Non-Sort and Bulky warehouses to print Airway Bills (AWBs) directly from the PDA after Quality Check (QC).',
            features: [
              'Bluetooth Pairing: Enabled PDA devices to connect instantly and securely to mobile printers (TSC Alpha series or Zebra ZQ521) via Bluetooth pairing.',
              'Automated Print Trigger: Added "Print AWB" API that is triggered automatically once the QC process is complete and the pre-generated AWB is scanned.',
              'Backend Centralization: Centralized the print trigger on the backend to prevent duplicate prints and ensure print job accuracy.',
              'Warehouse Integration: Deployed wireless printing solution specifically for Non-Sort and Bulky warehouses to eliminate walking time for AWB generation.',
            ],
            impact: 'This ensures instant, secure, and accurate AWB printing by centralizing the print trigger on the backend, preventing duplicate prints, and significantly reducing manual effort to improve warehouse efficiency. It also sets the foundation for future end-to-end automation of the AWB printing step.',
            tag: 'Efficiency',
            images: [
              '/images/q4-2025/wireless-printing-1.svg',
              '/images/q4-2025/wireless-printing-2.svg',
              '/images/q4-2025/wireless-printing-3.svg',
              '/images/q4-2025/wireless-printing-4.svg',
            ],
          },
          {
            title: 'FMS QC - Revamp Expiry flow',
            description: 'Moved from static checks to configurable, data-driven thresholds per SKU/Type. Captures actual expiry dates at QC.',
            features: [],
            impact: 'Reduced audit escalations. Better control over product shelf-life.',
            tag: 'Data Integrity',
            images: [
              '/images/q4-2025/fms-qc-expiry-1.svg',
              '/images/q4-2025/fms-qc-expiry-2.svg',
              '/images/q4-2025/fms-qc-expiry-3.svg',
              '/images/q4-2025/fms-qc-expiry-4.svg',
              '/images/q4-2025/fms-qc-expiry-5.svg',
              '/images/q4-2025/fms-qc-expiry-6.svg',
              '/images/q4-2025/fms-qc-expiry-7.svg',
            ],
          },
          {
            title: 'Jump Catalog Integration',
            description: 'Created a unified master catalog (Jump SKU) mapping products across multiple sales channels to prevent inventory mismatches.',
            features: [],
            impact: 'Prevents overselling risks. Clean, consistent fulfillment data.',
            tag: 'Platform',
            images: [
              '/images/q4-2025/jump-catalog-1.svg',
              '/images/q4-2025/jump-catalog-2.svg',
              '/images/q4-2025/jump-catalog-3.svg',
              '/images/q4-2025/jump-catalog-4.svg',
            ],
          },
          {
            title: 'Urgent Picking by Aging',
            description: 'Implemented new prioritization filters allowing Operations to target items lingering in the system based on aging thresholds.',
            features: [],
            impact: 'Reduced internal TAT. Improved efficiency for pending items.',
            tag: 'Operational Speed',
            images: [
              '/images/q4-2025/urgent-picking-1.svg',
              '/images/q4-2025/urgent-picking-2.svg',
              '/images/q4-2025/urgent-picking-3.svg',
              '/images/q4-2025/urgent-picking-4.svg',
              '/images/q4-2025/urgent-picking-5.svg',
              '/images/q4-2025/urgent-picking-6.svg',
              '/images/q4-2025/urgent-picking-7.svg',
              '/images/q4-2025/urgent-picking-8.svg',
              '/images/q4-2025/urgent-picking-9.svg',
            ],
          },
        ],
      },
    ],
    overallImpact: {
      revenue: '~30K AED/mo . Enabled FBN to operate as a 3PL service provider via premium Namshi Gifting flows.',
      efficiency: [
        'Wireless Printing: Eliminated walking time for AWB generation in Non-Sort/Bulky.',
        'Specialized Flows: Dedicated QC/Pack workflows reduced context switching.',
        'Aging Logic: Prioritized long-pending items to reduce internal TAT.',
      ],
      riskReduction: [
        'Mandatory Serialization: Scans enforced at QC reduced theft & counterfeits.',
        'Affinity Matrix: System-level blocking of incompatible item co-packing.',
      ],
      visibility: [
        'Container Journey: Full transaction history UI enables faster debugging.',
        'Data Capture: Persisting actual expiry dates for auditability & analytics.',
      ],
      platformReadiness: [
        'Multi-Tenant: Foundations for supporting external sellers (JUMP).',
        'Reconciliation: Inventory data structured for future financial reporting.',
      ],
    },
    technicalLearnings: [
      {
        category: 'Architecture & State',
        title: 'Config-Driven UI Design',
        description: 'Shifted from hardcoded logic to designing generic UIs where field behavior, validation, and flow steps are controlled entirely by backend configuration rules.',
        tag: 'Generic Components',
      },
      {
        category: 'Architecture & State',
        title: 'Cross-Layer Reasoning',
        description: 'Improved ability to debug and reason about system state across the stack (FE ↔ BE ↔ Ops), crucial for handling complex state transitions in warehouse flows.',
        tag: 'End-to-End Ownership',
      },
      {
        category: 'UX & Reliability',
        title: 'PDA-First Flow Optimization',
        description: 'Reinforced the importance of performance, visual clarity, and error prevention specifically for handheld scanners used in high-speed environments.',
        tag: 'Operational Speed',
      },
      {
        category: 'UX & Reliability',
        title: 'Fail-Safe UX Approach',
        description: 'Became intentional about building "Pit of Success" interfaces that guide users safely through processes instead of relying on reactive error messages after mistakes occur.',
        tag: 'Proactive Validation',
      },
    ],
    softSkills: [
      {
        category: 'Communication & Leadership',
        title: 'Strategic Communication',
        description: 'Improved articulation of Front-End tradeoffs to BE, Product, and Ops teams, focusing specifically on validation constraints, edge cases, and UX implications.',
        tag: 'Stakeholder Management',
      },
      {
        category: 'Communication & Leadership',
        title: 'Informal Ownership',
        description: 'Took proactive ownership of FE quality for high-risk and ops-critical flows, moving beyond ticket execution to ensuring end-to-end system reliability.',
        tag: 'Quality Ownership',
      },
      {
        category: 'Collaboration & Ops',
        title: 'Bridging Ops & Tech',
        description: 'Acted as a bridge between operational realities (warehouse speed, scanner limitations) and technical implementation, translating usage patterns into better UI decisions.',
        tag: 'Ops Translation',
      },
      {
        category: 'Collaboration & Ops',
        title: 'Cross-Squad Synergy',
        description: 'Collaborated effectively across multiple squads (Outbound, Platform, JUMP) with different contexts while maintaining consistent Front-End patterns and standards.',
        tag: 'Team Alignment',
      },
    ],
    selfAssessment: [
      {
        category: 'Communication',
        score: 7.5,
        maxScore: 10,
        strengths: ['Effective at bridging operational realities with UI decisions.'],
        areasForGrowth: ['Need to voice architectural tradeoffs & reasoning earlier in the process.'],
      },
      {
        category: 'Participation',
        score: 8.5,
        maxScore: 10,
        strengths: ['Consistently involved in high-impact, cross-squad work (Outbound/Platform).'],
        areasForGrowth: ['Shift from reactive participation (being pulled in) to proactive shaping.'],
      },
      {
        category: 'Learning',
        score: 8.5,
        maxScore: 10,
        strengths: ['Mastered complex state-heavy systems and cross-layer debugging.'],
        areasForGrowth: ['Make learning more intentional (architecture patterns) rather than just project-driven.'],
      },
    ],
    techDebt: [
      {
        title: 'PDA App',
        version: 'RN v0.68',
        items: [
          'Heavy use of Context API causing re-renders',
          'Redundant logic across flows needs modularization',
          'State management should migrate to Store/Props pattern',
        ],
      },
      {
        title: 'Webtools Operations dashboard',
        version: 'Node v16',
        items: [
          'Approaching End-of-Life maintenance window',
          'Dependencies require security updates',
        ],
      },
      {
        title: 'QZ-Tray Service',
        version: 'Target v2.2.5',
        items: [
          'Missing critical patches for modern browser support',
          'Inconsistent behavior with newer Zebra drivers',
        ],
      },
    ],
    initiatives: [
      {
        title: 'React-native upgrade',
        description: 'Upgrading the React-native version to 0.73 to stay up to date with the latest features and bug fixes.',
        status: 'Started',
      },
      {
        title: 'Internal App Center',
        description: 'Creating a centralized hub for sharing and managing internal tool deployments. Aims to streamline access control and version distribution across operations teams.',
        status: 'Started',
      },
    ],
    teamFeedback: [
      {
        team: 'Backend',
        subtitle: 'DATA & APIS',
        feedback: 'Would like a ready testing data set that covers all edge cases, or a standardized way to generate it for any new feature. This would significantly reduce setup time during development.',
        tag: 'Testing Efficiency',
      },
      {
        team: 'Product',
        subtitle: 'REQUIREMENTS',
        feedback: 'It would be helpful if tickets always included full context, detailed descriptions, and external links before development starts. This clarity prevents mid-sprint churn.',
        tag: 'Documentation',
      },
      {
        team: 'Design',
        subtitle: 'UI/UX SYSTEM',
        feedback: 'We should aim to use our design system more strictly. Sticking to established patterns reduces FE rework and ensures visual consistency across the platform.',
        tag: 'Consistency',
      },
    ],
    individualGoals: [
      {
        category: 'Technical',
        title: 'FE Architectural Ownership',
        items: [
          'Take full ownership of Front-End architecture for 1–2 critical operational flows.',
          'Push for config-driven, scalable patterns to reduce hardcoded logic.',
          'Make state management & failure handling explicit and robust.',
          'Design FE components with operability and debuggability in mind.',
        ],
      },
      {
        category: 'Leadership',
        title: 'Go-to FE Owner',
        items: [
          'Serve as the primary FE owner for complex, cross-squad flows.',
          'Mentor 1–2 FE engineers, sharing knowledge on state-heavy systems.',
          'Speak up earlier in planning & design phases to shape requirements.',
          'Set clear FE scope and technical constraints upfront.',
        ],
      },
    ],
    teamGoals: [
      {
        category: 'Delivery Speed',
        title: 'Faster FE Delivery',
        items: [
          'Clarify FE-ready requirements upfront to avoid mid-sprint churn.',
          'Break large flows into smaller, shippable milestones.',
          'Prioritize pattern reuse over rebuilding components.',
        ],
      },
      {
        category: 'Quality',
        title: 'System-Level Quality',
        items: [
          'Standardize validation & error handling across all flows.',
          'Raise PR bar for state clarity and flow logic.',
          'Catch edge cases earlier in the dev cycle, not in production.',
        ],
      },
      {
        category: 'Documentation',
        title: 'Reuse Knowledge',
        items: [
          'Document key workflows & state models for future reference.',
          'Capture design decisions and tradeoffs explicitly.',
          'Treat documentation as a mandatory part of "Definition of Done".',
        ],
      },
    ],
    achievements: [
      {
        title: '2025 Work Summary',
        description: 'Comprehensive year of delivering impact through intelligent workflows, safety mechanisms, and platform scalability.',
        technologies: ['React', 'TypeScript', 'React Native', 'Node.js'],
      },
    ],
  },
  2026: {
    description: 'Owning end-to-end operational workflows and critical front-end architecture for Outbound, Platform, and JUMP squads.',
    role: 'Front-End Engineer',
    focusAreas: ['Outbound', 'Platform', 'JUMP', 'Internal tooling'],
    context: 'FBN / WMS Systems',
    yearOverview: {
      statement: 'Through Q3: platform migration and outbound reliability early year, then transfer/AWB/Packman depth in Q2, and in Q3 scanning enforcement, App Center, and raw ZPL printing toward warehouse rollout.',
      highlights: [
        'Platform & QC (Q1): Partners-domain fulfillment, inventory visibility, picking performance, outbound QC tooling, PDA brand R&D.',
        'Transfers & AWB (Q2): Close-job approvals, STAS OB picking UI, faster/safer AWB printing, Packman packaging safeguards.',
        'Scanning & services (Q3): Mandatory barcode scans in pick/sort, FT2/FT3 COS merge, Packman 3D + RN upgrade.',
        'Platform tooling (Q3): Internal App Center for APK distribution; Telemetry dashboard; QZ certificate R&D.',
        'Printing (Q3): Outbound AWB PDF → raw ZPL via QZ Tray (orientation, offsets, duration) — live ZT411 validation next.',
      ],
    },
    keyContributions: [
      {
        title: 'Platform Domain Migration',
        description: 'Moved platform fulfillment box journey to .partners domain with role-based access; maintained compatibility with .team.',
        category: 'Platform',
      },
      {
        title: 'Outbound Printing Reliability',
        description: 'Reduced AWB print latency, blocked rescans mid-print, unified returns/transfers printing, then delivered raw ZPL path for Zebra/QZ.',
        category: 'Reliability',
      },
      {
        title: 'Scan Enforcement',
        description: 'Mandatory barcode scanning in picking and sortation to prevent bypass and strengthen warehouse data integrity.',
        category: 'Operational Efficiency',
      },
      {
        title: 'Internal App Center',
        description: 'Built catalog, live production build home, build detail with QR/Jira links, and deployed under fn tech unit on noon.team.',
        category: 'Platform',
      },
      {
        title: 'Packman Packaging Intelligence',
        description: 'Inner separation enforcement, international bigger-box warnings, and 3D packaging suggestion rendering.',
        category: 'Expansion',
      },
    ],
    quarterlyHighlights: [
      {
        quarter: 'Q1 2026 (Jan–Mar)',
        focus: 'Platform Migration, Visibility, Performance & QC',
        projects: [
          {
            title: 'Platform Fulfillment Migration to Partners Domain',
            description: 'Migrated the platform fulfillment box journey dashboard to .partners and added role-based checks, supporting both .team and .partners domains.',
            features: [
              'Domain Migration: Moved box journey dashboard to .partners with consistent UX.',
              'Role-Based Access: Added checks so only authorized users can access platform fulfillment flows.',
              'Dual Domain Support: Application works on both .team and .partners during and after transition.',
            ],
            impact: 'Unified platform fulfillment under partners domain; clearer access control and rollout path.',
            tag: 'Platform',
            images: [],
            attachments: [
              { label: 'Jira (FPL-720)', url: '#' },
            ],
          },
          {
            title: 'Inventory Visibility (Platform Team)',
            description: 'Added Inventory Visibility to the platform fulfillment partners domain web app so operations can see and reason about platform inventory.',
            features: [
              'Platform Inventory Interface: New visibility layer in the partners domain web app.',
              'Integration: Wired to backend for real-time inventory data and filters.',
            ],
            impact: 'Better visibility into platform inventory for operations and reduced blind spots in fulfillment.',
            tag: 'Insights',
            images: [],
            attachments: [
              { label: 'Figma', url: '#' },
              { label: 'SOP / Google Docs', url: '#' },
            ],
          },
          {
            title: 'Picking App Performance Optimization',
            description: 'Addressed user-reported slowness by removing dependency on the heavy /status API and updating local state from the /move_item response instead.',
            features: [
              'Bottleneck Analysis: Identified /status and /move_item as slow endpoints (1s+).',
              'State Strategy: Replaced post-action /status polling with local state updates driven by /move_item response.',
              'Fewer Round Trips: Item move (pending → picked/rejected) no longer triggers a separate /status call.',
            ],
            impact: 'Faster, more responsive picking experience; MDM release planned.',
            tag: 'Performance',
            images: [],
            attachments: [],
          },
          {
            title: 'Outbound QC Tool Enhancements',
            description: 'Station tracking, duplicate station prevention, QC/AWB landing page updates, BE-generated pending_qc reports, and removal of duplicate message errors.',
            features: [
              'Station Tracking: Track QC/AWB stations and prevent duplicate station registration.',
              'Landing Page: Updated to support both QC and AWB stations with clear entry points.',
              'Reports: Ops dashboard pending_qc report now uses BE-generated reports for faster downloads.',
              'Stability: Removed duplicate message errors in OB QC flows.',
            ],
            impact: 'Cleaner operations, faster report generation, and fewer user-facing errors.',
            tag: 'Operational Efficiency',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-8041)', url: 'https://next-square.atlassian.net/browse/SCWR-8041' },
              { label: 'Jira (SCWR-8326)', url: 'https://next-square.atlassian.net/browse/SCWR-8326' },
              { label: 'Jira (SCWR-7947)', url: 'https://next-square.atlassian.net/browse/SCWR-7947' },
              { label: 'Jira (SCWR-8081)', url: 'https://next-square.atlassian.net/browse/SCWR-8081' },
            ],
          },
          {
            title: 'Generalize Support for Any PDA Brand (R&D)',
            description: 'R&D to evaluate Zebra PDAs (faster, modern vs. current Honeywell) and generalize FBN External apps to support any PDA brand, including printer compatibility.',
            features: [
              'Device Evaluation: Assessing Zebra PDAs already used by Minutes SC team for speed and updates.',
              'Printer Compatibility: Checking Zebra printer compatibility across FBN External apps.',
              'Generalization: Defining changes needed to support any PDA brand in the future.',
            ],
            impact: 'Cost optimization and device refresh path; foundation for multi-brand PDA support.',
            tag: 'R&D',
            images: [],
            attachments: [],
          },
          {
            title: 'SDD as a Service (Frontend)',
            description: 'Dashboard and tote-status frontend for SDD-as-a-service, including SDD labeling on tote status.',
            features: [
              'Dashboard Changes: Frontend updates for SDD-as-a-service operational views.',
              'Tote Status: Surface SDD on tote status app.',
              'Testing Support: Frontend coverage for SDD-as-a-service validation.',
            ],
            impact: 'Enabled SDD-as-a-service visibility and testing on the FE side.',
            tag: 'Platform',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-7658)', url: 'https://next-square.atlassian.net/browse/SCWR-7658' },
              { label: 'Jira (SCWR-7705)', url: 'https://next-square.atlassian.net/browse/SCWR-7705' },
              { label: 'Jira (SCWR-7832)', url: 'https://next-square.atlassian.net/browse/SCWR-7832' },
            ],
          },
        ],
      },
      {
        quarter: 'Q2 2026 (Apr–Jun)',
        focus: 'Transfers, STAS Picking, AWB Printing & Packman',
        projects: [
          {
            title: 'Transfer Close-Job Approvals & Client Fixes',
            description: 'Close-job approval flows for RTV and Transfers, plus Namshi client code and Supermall (Rocket) transfer close-job fixes.',
            features: [
              'RTV Close Job Approval: FE for close-job approval path.',
              'Transfers Close Job Approval: Parallel FE for transfer close jobs.',
              'Client Fixes: Namshi client code; Supermall Rocket picking transfer close-job flow.',
            ],
            impact: 'Safer job closure for high-risk transfer/RTV paths; fewer client-specific close-job failures.',
            tag: 'Operational Efficiency',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-8555)', url: 'https://next-square.atlassian.net/browse/SCWR-8555' },
              { label: 'Jira (SCWR-8611)', url: 'https://next-square.atlassian.net/browse/SCWR-8611' },
              { label: 'Jira (SCWR-8741)', url: 'https://next-square.atlassian.net/browse/SCWR-8741' },
              { label: 'Jira (SCWR-8785)', url: 'https://next-square.atlassian.net/browse/SCWR-8785' },
            ],
          },
          {
            title: 'Transfer Job UX & Ops Reports',
            description: 'End-of-job redirect home, same-zone job regenerate for transfers, packing report move to Ops dashboard, and not-eligible-to-pick report updates.',
            features: [
              'Job Lifecycle UX: Redirect to home at end of job; regenerate job in same zone for transfers.',
              'Packing Report: Transfer packing report moved from HTML to Ops dashboard.',
              'Eligibility Report: FE updates to not-eligible-to-pick report for transfers.',
            ],
            impact: 'Clearer transfer job completion loops and faster ops reporting.',
            tag: 'Insights',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-8791)', url: 'https://next-square.atlassian.net/browse/SCWR-8791' },
              { label: 'Jira (SCWR-8787)', url: 'https://next-square.atlassian.net/browse/SCWR-8787' },
              { label: 'Jira (SCWR-8986)', url: 'https://next-square.atlassian.net/browse/SCWR-8986' },
              { label: 'Jira (SCWR-8919)', url: 'https://next-square.atlassian.net/browse/SCWR-8919' },
            ],
          },
          {
            title: 'STAS Outbound Picking UI',
            description: 'UI updates for STAS outbound picking to align warehouse operators with the STAS job model.',
            features: [
              'STAS OB Picking: Frontend updates for outbound picking under STAS.',
            ],
            impact: 'Aligned picking UX with STAS outbound assignment model.',
            tag: 'Outbound',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-8861)', url: 'https://next-square.atlassian.net/browse/SCWR-8861' },
            ],
          },
          {
            title: 'AWB Printing Experience Improvements',
            description: 'Faster AWB printing, block rescanning while printing, unified returns/transfers AWB path, deprecate old RTV tool, and QC completion reload cleanup.',
            features: [
              'Latency: Reduced AWB printing time.',
              'Safety: Block AWB rescanning while a print is in flight.',
              'Unification: Same AWB printing path for returns and transfers; deprecate legacy RTV tool from infra.',
              'QC UX: Remove reload confirmation on outbound QC completion screen.',
            ],
            impact: 'Faster, safer warehouse printing with less tool sprawl.',
            tag: 'Reliability',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9011)', url: 'https://next-square.atlassian.net/browse/SCWR-9011' },
              { label: 'Jira (SCWR-9210)', url: 'https://next-square.atlassian.net/browse/SCWR-9210' },
              { label: 'Jira (SCWR-9028)', url: 'https://next-square.atlassian.net/browse/SCWR-9028' },
              { label: 'Jira (SCWR-9284)', url: 'https://next-square.atlassian.net/browse/SCWR-9284' },
              { label: 'Jira (SCWR-9240)', url: 'https://next-square.atlassian.net/browse/SCWR-9240' },
              { label: 'Parent (SCWR-9286)', url: 'https://next-square.atlassian.net/browse/SCWR-9286' },
            ],
          },
          {
            title: 'Packman Packaging Suggestions',
            description: 'R&D for 3D packaging suggestion rendering and bigger-box warning for international orders.',
            features: [
              '3D R&D: Explored 3D rendering for Packman packaging suggestions.',
              'International: Bigger-box warning for international orders.',
            ],
            impact: 'Clearer packaging guidance and fewer wrong-size boxes on international flows.',
            tag: 'R&D',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-8935)', url: 'https://next-square.atlassian.net/browse/SCWR-8935' },
              { label: 'Jira (SCWR-9199)', url: 'https://next-square.atlassian.net/browse/SCWR-9199' },
            ],
          },
        ],
      },
      {
        quarter: 'Q3 2026 (Jul–Aug)',
        focus: 'Scan Enforcement, App Center, Raw ZPL & Platform Tooling',
        projects: [
          {
            title: 'Mandatory Barcode Scanning (Pick & Sort)',
            description: 'Enforced mandatory barcode scanning during picking and sortation across systems to prevent skip/bypass.',
            features: [
              'Picking: Mandatory barcode scan enforcement in picking flows.',
              'Sortation: Mandatory barcode scan enforcement in sortation flows.',
              'Sortation Filter: Queue type filter on Sortation Outbound screen.',
            ],
            impact: 'Stronger scan discipline and cleaner warehouse event data.',
            tag: 'Operational Efficiency',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9488)', url: 'https://next-square.atlassian.net/browse/SCWR-9488' },
              { label: 'Jira (SCWR-9292)', url: 'https://next-square.atlassian.net/browse/SCWR-9292' },
              { label: 'Jira (SCWR-9571)', url: 'https://next-square.atlassian.net/browse/SCWR-9571' },
            ],
          },
          {
            title: 'Outbound Services & STASS Performance',
            description: 'Merged FT2/FT3 customer outbound services on FE and addressed STASS job assignment slowness.',
            features: [
              'COS Merge: Frontend merge of FT2 and FT3 customer outbound services.',
              'STASS: Investigated/fixed slowness in STASS jobs assignment.',
            ],
            impact: 'Simpler outbound service surface and more responsive job assignment.',
            tag: 'Performance',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9450)', url: 'https://next-square.atlassian.net/browse/SCWR-9450' },
              { label: 'Jira (SCWR-9126)', url: 'https://next-square.atlassian.net/browse/SCWR-9126' },
            ],
          },
          {
            title: 'Packman Inner Separation & 3D Suggestions',
            description: 'Inner separation packing enforcement in Packman and shipped 3D rendering for packaging suggestions; React Native upgrade on fbn-mobile-web.',
            features: [
              'Inner Separation: FE enforcement for inner separation packing rules.',
              '3D Suggestions: 3D rendering for Packman packaging suggestions.',
              'RN Upgrade: Upgraded React Native on fbn-mobile-web toward current platform.',
            ],
            impact: 'Better packaging compliance and modernized mobile platform baseline.',
            tag: 'Expansion',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9118)', url: 'https://next-square.atlassian.net/browse/SCWR-9118' },
              { label: 'Jira (SCWR-9557)', url: 'https://next-square.atlassian.net/browse/SCWR-9557' },
              { label: 'Jira (SCWR-6388)', url: 'https://next-square.atlassian.net/browse/SCWR-6388' },
            ],
          },
          {
            title: 'Internal App Center',
            description: 'Centralized APK catalog for internal tools: list/filter/search, live production build home, build detail with download/QR/Jira links, clearer GCS errors, deployed under fn tech unit.',
            features: [
              'Catalog: List, filter, search, and sort APKs.',
              'Home: Show live production build from latest/config.json.',
              'Build Detail: Download, QR, branch and Jira links.',
              'Ops: Surface GCS permission/catalog errors; deploy on noon.team fn tech unit.',
            ],
            impact: 'Faster, safer internal APK distribution with clearer ownership under fn tech.',
            tag: 'Platform',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9948)', url: 'https://next-square.atlassian.net/browse/SCWR-9948' },
              { label: 'Jira (SCWR-9985)', url: 'https://next-square.atlassian.net/browse/SCWR-9985' },
              { label: 'Jira (SCWR-9986)', url: 'https://next-square.atlassian.net/browse/SCWR-9986' },
              { label: 'Jira (SCWR-9987)', url: 'https://next-square.atlassian.net/browse/SCWR-9987' },
              { label: 'Jira (SCWR-9990)', url: 'https://next-square.atlassian.net/browse/SCWR-9990' },
              { label: 'Jira (SCWR-9991)', url: 'https://next-square.atlassian.net/browse/SCWR-9991' },
            ],
          },
          {
            title: 'Outbound Raw ZPL AWB Printing',
            description: 'Replaced PDF AWB path with raw ZPL: ZPL fetch, QZ Tray forceRaw, ZT411 orientation fixes, Offset X/Y via ^LH, and print-duration feedback. Live warehouse validation and prod rollout remaining.',
            features: [
              'Fetch: Switch outbound AWB from PDF to ZPL endpoint.',
              'Print: Raw ZPL via QZ Tray (forceRaw).',
              'Hardware: ZT411 orientation (^GFA 90° CW + ^POI); Offset X/Y via ^LH.',
              'UX: Show send-to-printer duration on success.',
            ],
            impact: 'Warehouse-ready raw label path; pending ZT411 live test then production rollout.',
            tag: 'Reliability',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9944)', url: 'https://next-square.atlassian.net/browse/SCWR-9944' },
              { label: 'Jira (SCWR-9993)', url: 'https://next-square.atlassian.net/browse/SCWR-9993' },
              { label: 'Jira (SCWR-9994)', url: 'https://next-square.atlassian.net/browse/SCWR-9994' },
              { label: 'Jira (SCWR-9995)', url: 'https://next-square.atlassian.net/browse/SCWR-9995' },
              { label: 'Jira (SCWR-9996)', url: 'https://next-square.atlassian.net/browse/SCWR-9996' },
              { label: 'Jira (SCWR-9997)', url: 'https://next-square.atlassian.net/browse/SCWR-9997' },
              { label: 'Live test (SCWR-9998)', url: 'https://next-square.atlassian.net/browse/SCWR-9998' },
              { label: 'Rollout (SCWR-9999)', url: 'https://next-square.atlassian.net/browse/SCWR-9999' },
            ],
          },
          {
            title: 'Telemetry Dashboard & QZ Certificate R&D',
            description: 'Built Telemetry Dashboard UI and completed FE R&D for in-house QZ certificate upgrade.',
            features: [
              'Telemetry: Dashboard UI for operational telemetry views.',
              'QZ R&D: In-house QZ certificate upgrade exploration on FE.',
            ],
            impact: 'Better observability surface and path to owned QZ certificate lifecycle.',
            tag: 'Platform',
            images: [],
            attachments: [
              { label: 'Jira (SCWR-9667)', url: 'https://next-square.atlassian.net/browse/SCWR-9667' },
              { label: 'Jira (SCWR-9607)', url: 'https://next-square.atlassian.net/browse/SCWR-9607' },
            ],
          },
        ],
      },
    ],
    achievements: [
      {
        title: '2026 YTD Work Summary (through early Aug)',
        description: 'Platform migration, transfer/AWB reliability, scan enforcement, App Center, Packman packaging, and raw ZPL printing toward warehouse rollout.',
        technologies: ['React', 'TypeScript', 'React Native', 'QZ Tray', 'ZPL'],
      },
    ],
  },
}
