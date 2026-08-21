/**
 * Week-by-week work log. Appended by the weekly-recap skill / Friday automation.
 * Rolled into `years.ts` quarterlyHighlights for the polished year page.
 * Not rendered on the site by default — source material for Recap updates.
 */

export interface WeeklyShippedItem {
  summary: string
  jiraKeys?: string[]
  prUrls?: string[]
}

export interface WeeklyLogEntry {
  /** ISO week id, e.g. 2026-W32 */
  weekId: string
  /** Inclusive range labels YYYY-MM-DD */
  range: { start: string; end: string }
  year: number
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4'
  highlights: string[]
  shipped: WeeklyShippedItem[]
  inProgress: string[]
  notes?: string
}

export const weeklyLog: WeeklyLogEntry[] = [
  {
    weekId: '2026-W34',
    range: { start: '2026-08-14', end: '2026-08-21' },
    year: 2026,
    quarter: 'Q3',
    highlights: [
      'STAS urgent picking: Get Allocations contract wires is_urgent_enforced / urgent_window_hours',
      'App Center: pending queue collapse + URL-persisted filters + cache warm; MDM Publish → Google Chat',
      'FMS repackaging as dedicated /repackaging tab (in Testing Frontend)',
    ],
    shipped: [
      {
        summary: 'STAS Get Allocations urgent-picking contract on FE',
        jiraKeys: ['SCWR-10106'],
      },
      {
        summary: 'App Center: pending collapse, filter persistence, cache warm',
        jiraKeys: ['SCWR-9948'],
        prUrls: ['https://github.com/fastfishio/fn-appcenter/pull/2'],
      },
      {
        summary: 'App Center: MDM release tickets → Google Chat Publish',
        jiraKeys: ['SCWR-10194'],
        prUrls: ['https://github.com/fastfishio/fn-appcenter/pull/4'],
      },
      {
        summary: 'FMS repackaging dedicated tab + routing',
        jiraKeys: ['SCWR-9973'],
        prUrls: ['https://github.com/fastfishio/sc-fms-team/pull/109'],
      },
    ],
    inProgress: [
      'SCWR-9948 — App Center epic (RELEASE_NOTES upload/backfill and remaining children)',
      'SCWR-10004 — Noon Tray / in-house QZ cert migration',
      'SCWR-9286 — AWB printing experience parent',
      'SCWR-9973 — Repackaging FE in Testing Frontend',
    ],
    notes:
      'GitHub org PR search unavailable; PR URLs from Jira comments. Backfilled missing 2026-W33 entry below (prior automation could not push). Atlassian MCP unavailable on this publish pass — shipped set from same-day Jira-backed draft.',
  },
  {
    weekId: '2026-W33',
    range: { start: '2026-08-08', end: '2026-08-14' },
    year: 2026,
    quarter: 'Q3',
    highlights: [
      'Closed outbound raw ZPL live ZT411 test and production rollout tickets',
      'Finished App Center shareable build URLs, RELEASE_NOTES, and pending Cloud Builds',
      'Shipped HRV lid tote FE, FMS QC mandatory scan, Ops duplicate-fetch fix; Noon Tray installer + station validation',
    ],
    shipped: [
      {
        summary: 'Outbound ZPL live warehouse test + production rollout closed',
        jiraKeys: ['SCWR-9998', 'SCWR-9999', 'SCWR-10059'],
      },
      {
        summary: 'App Center: shareable URLs, RELEASE_NOTES, pending Cloud Builds, upload notes',
        jiraKeys: ['SCWR-9988', 'SCWR-9989', 'SCWR-10001', 'SCWR-9992'],
        prUrls: ['https://github.com/fastfishio/fn-appcenter/commit/bafc827'],
      },
      {
        summary: 'HRV lid tote FE + Telemetry Dashboard FE↔BE integration',
        jiraKeys: ['SCWR-9901', 'SCWR-9746'],
      },
      {
        summary: 'FMS QC mandatory barcode scan during picking',
        jiraKeys: ['SCWR-9708'],
      },
      {
        summary: 'Ops Dashboard duplicate initial report-request fix',
        jiraKeys: ['SCWR-9945'],
        prUrls: ['https://github.com/fastfishio/sc-webtools/pull/282'],
      },
      {
        summary: 'AWB printing performance R&D (post PDF→ZPL latency map)',
        jiraKeys: ['SCWR-10000'],
      },
      {
        summary: 'Noon Tray: installer build, warehouse silent-print validation, GitHub push',
        jiraKeys: ['SCWR-10005', 'SCWR-10006', 'SCWR-10007'],
      },
    ],
    inProgress: [
      'SCWR-10106 — Get Allocations contract update for urgent picking (STAS)',
      'SCWR-10004 — Noon Tray / in-house QZ cert migration (self-host, Ansible, FMS re-vendor open)',
      'SCWR-9948 — App Center epic still open after core + shareable/notes slices',
      'SCWR-9286 — AWB printing experience parent (perf R&D closed; broader epic open)',
    ],
    notes:
      'Backfill: 2026-W33 draft from prior Friday run never reached GitHub (missing GH_TOKEN). Excludes W32-credited App Center core and ZPL path tickets that were only re-touched in bulk closes.',
  },
  {
    weekId: '2026-W32',
    range: { start: '2026-08-04', end: '2026-08-08' },
    year: 2026,
    quarter: 'Q3',
    highlights: [
      'Shipped core App Center catalog/home/detail + fn tech unit deploy',
      'Shipped outbound raw ZPL print path (fetch, QZ forceRaw, ZT411 orientation, offsets, duration)',
      'QZ certificate in-house upgrade R&D and Telemetry Dashboard UI completed',
    ],
    shipped: [
      {
        summary: 'App Center: catalog, home live build, build detail, GCS errors, deploy',
        jiraKeys: ['SCWR-9948', 'SCWR-9985', 'SCWR-9986', 'SCWR-9987', 'SCWR-9990', 'SCWR-9991'],
      },
      {
        summary: 'Outbound AWB PDF → raw ZPL via QZ Tray',
        jiraKeys: ['SCWR-9944', 'SCWR-9993', 'SCWR-9994', 'SCWR-9995', 'SCWR-9996', 'SCWR-9997'],
      },
      {
        summary: 'QZ certificate R&D + Telemetry Dashboard UI',
        jiraKeys: ['SCWR-9607', 'SCWR-9667'],
      },
    ],
    inProgress: [
      'SCWR-9998 / SCWR-9999 — ZPL live test on ZT411 then prod rollout',
      'SCWR-9988 / SCWR-9989 — App Center shareable URLs + RELEASE_NOTES',
      'SCWR-9901 — HRV lid tote FE pushed; blocked on BE SCWR-9791 for stg',
    ],
    notes: 'Catch-up sync: Recap had only Q1 2026 (Jan–Feb) before this update.',
  },
  {
    weekId: '2026-Q3-Jul',
    range: { start: '2026-07-01', end: '2026-07-31' },
    year: 2026,
    quarter: 'Q3',
    highlights: [
      'Mandatory barcode scanning in picking and sortation',
      'FT2/FT3 customer outbound services merge; STASS job assignment performance',
      'Packman inner separation + 3D suggestions; React Native upgrade on fbn-mobile-web',
    ],
    shipped: [
      {
        summary: 'Mandatory barcode scan — picking & sortation',
        jiraKeys: ['SCWR-9488', 'SCWR-9292'],
      },
      {
        summary: 'Merge FT2/FT3 COS; STASS assignment slowness; queue type filter',
        jiraKeys: ['SCWR-9450', 'SCWR-9126', 'SCWR-9571'],
      },
      {
        summary: 'Packman inner separation + 3D suggestions; RN upgrade',
        jiraKeys: ['SCWR-9118', 'SCWR-9557', 'SCWR-6388'],
      },
    ],
    inProgress: [
      'SCWR-9708 — FMS QC mandatory scan (carryover)',
      'SCWR-9286 — AWB printing experience parent',
    ],
    notes: 'Monthly rollup for July catch-up (no prior weeklyLog entries).',
  },
  {
    weekId: '2026-Q2',
    range: { start: '2026-04-01', end: '2026-06-30' },
    year: 2026,
    quarter: 'Q2',
    highlights: [
      'Close-job approval for RTV/Transfers; transfer packing & eligibility reports',
      'STAS OB picking UI; AWB printing speed/rescans/unified returns+transfers path',
      'Packman international bigger-box warning + 3D packaging R&D',
    ],
    shipped: [
      {
        summary: 'Close job approval RTV + Transfers; Namshi/Supermall fixes',
        jiraKeys: ['SCWR-8555', 'SCWR-8611', 'SCWR-8741', 'SCWR-8785'],
      },
      {
        summary: 'Transfer job UX (redirect, regenerate) + packing/eligibility reports',
        jiraKeys: ['SCWR-8791', 'SCWR-8787', 'SCWR-8986', 'SCWR-8919'],
      },
      {
        summary: 'AWB printing improvements + deprecate old RTV tool',
        jiraKeys: ['SCWR-9011', 'SCWR-9210', 'SCWR-9028', 'SCWR-9284', 'SCWR-9240'],
      },
      {
        summary: 'STAS OB picking UI; Packman 3D R&D + international box warning',
        jiraKeys: ['SCWR-8861', 'SCWR-8935', 'SCWR-9199'],
      },
    ],
    inProgress: [],
    notes: 'Quarterly rollup catch-up after Q1-only Recap.',
  },
  {
    weekId: '2026-Q1-Mar',
    range: { start: '2026-03-01', end: '2026-03-31' },
    year: 2026,
    quarter: 'Q1',
    highlights: [
      'SDD-as-a-service frontend dashboard and tote status SDD labeling',
      'Picking screen navigation bugfix (return to first item)',
    ],
    shipped: [
      {
        summary: 'SDD as a service FE + tote status SDD',
        jiraKeys: ['SCWR-7658', 'SCWR-7705', 'SCWR-7832'],
      },
      {
        summary: 'Picking screen first-item navigation bug',
        jiraKeys: ['SCWR-8525'],
      },
    ],
    inProgress: [],
    notes: 'March work after Jan–Feb Q1 portfolio write-up.',
  },
]
