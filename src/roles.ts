import type { RoleGuideRole } from '@meddleware/ui'

/**
 * The role guide's paths ("I'm here to…"), approved 2026-11-20 (docs/copy-review/2026-11-landing-and-role-guide.md §4). About the
 * platform, never one tool or technology. Links go only to pages that exist. "Run my own" links to the source code until the lean
 * self-hosting guide exists (workspace FU-0170).
 */
export const ROLES: RoleGuideRole[] = [
  {
    id: 'people',
    title: 'Use the tools',
    summary: 'Get things done without being kept.',
    steps: [
      'Pick a tool from the ones available now.',
      'Use it in your browser. Each tool says what it needs before you start, and none needs an account with us.',
      'Take your data with you whenever you like.',
    ],
    need: 'Only what the tool says (some use a wallet).',
    get: 'The tool, without the lock-in.',
    links: [
      { text: 'Available now', href: '#available' },
      { text: 'How we treat your data ↗', href: 'https://docs.meddleware.co.uk/blockchain/sui/security-and-privacy' },
    ],
  },
  {
    id: 'developers',
    title: 'Build with them',
    summary: 'Connect your work to open tools and APIs.',
    steps: ['Read the open APIs and packages.', 'Build on the same open standards we use.', 'Ship your work beside ours, or on top of it.'],
    need: 'Whatever you build with.',
    get: 'Open-source code and documented interfaces you can rely on.',
    links: [
      { text: 'Developer guide ↗', href: 'https://meddleware.dev/getting-started/' },
      { text: 'Standards we use ↗', href: 'https://meddleware.dev/platform/standards' },
    ],
  },
  {
    id: 'platforms',
    title: 'Run my own',
    summary: 'Host the tools under your own name.',
    steps: ['Choose the tools you want to offer.', 'Host them on your own server.', 'Run them under your own name.'],
    need: 'A server and a domain.',
    get: 'The same tools, yours to run.',
    links: [{ text: 'Source code ↗', href: 'https://github.com/meddleware-org' }],
  },
]
