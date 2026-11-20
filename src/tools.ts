/**
 * The catalogue: the tools available now, one card each (docs/copy-review/2026-11-landing-and-role-guide.md §5, approved 2026-11-20).
 * The platform is not defined by these; the list grows and changes, so a new tool is a new entry here and nothing else on the page
 * changes. The heading says what the tool does for a person; the technology it runs on is named only on its own card. The treasury is not
 * a catalogue entry (it shows Meddleware's own funds; it is linked from the footer: FU-0169).
 */
export interface Tool {
  /** Decoration only; the heading and the text carry the meaning. */
  icon: string
  /** What the tool does for a person: the card's heading. */
  title: string
  /** The tool's own name. */
  name: string
  description: string
  /** What it runs on, named only here (e.g. "Sui"). */
  runsOn: string
  href: string
}

export const TOOLS: readonly Tool[] = [
  {
    icon: '🗄',
    title: "Keep files no one can take down",
    name: 'Walrus Storage',
    description: 'Store files where no single company can delete them, and see how long each one is kept.',
    runsOn: 'Walrus and Sui',
    href: 'https://sui-walrus-storage.meddleware.co.uk',
  },
  {
    icon: '🔒',
    title: 'Choose who can open a file',
    name: 'Sealed Storage',
    description: 'Files are encrypted in your browser; only people with the right pass, or after a time you set, can open them.',
    runsOn: 'Sui',
    href: 'https://sui-sealed-storage.meddleware.co.uk',
  },
  {
    icon: '🔐',
    title: 'Sell access to your work',
    name: 'Access Gate',
    description: 'Sell passes to your files, pages or apps. Payment goes to you, less our published fee, with no account to set up.',
    runsOn: 'Sui',
    href: 'https://sui-access-gate.meddleware.co.uk',
  },
  {
    icon: '🪙',
    title: 'Issue your own token',
    name: 'Token Issuance',
    description: 'Create a coin from your browser in about a minute; we never hold your keys.',
    runsOn: 'Sui',
    href: 'https://sui-token-issuance.meddleware.co.uk',
  },
]
