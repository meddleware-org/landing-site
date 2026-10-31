/** The tools shown on the page: one card each. The icon is decoration; the title and description carry the meaning. */
export interface Tool {
  icon: string
  title: string
  description: string
  href: string
}

export const TOOLS: readonly Tool[] = [
  {
    icon: '🗄',
    title: 'Walrus Storage',
    description: 'Decentralised, tamper-proof blob storage on Sui. Upload, manage, and extend the lifetime of blobs — no backend required.',
    href: 'https://sui-walrus-storage.meddleware.co.uk',
  },
  {
    icon: '🔒',
    title: 'Sealed Storage',
    description: 'End-to-end encrypted blobs with Sui-based access control. Only holders of the matching on-chain NFT can decrypt.',
    href: 'https://sui-sealed-storage.meddleware.co.uk',
  },
  {
    icon: '🔐',
    title: 'Access Gate',
    description: 'NFT-based access control for any HTTP service. Gate uploads, APIs, and content behind a soulbound Sui NFT.',
    href: 'https://sui-access-gate.meddleware.co.uk',
  },
  {
    icon: '🪙',
    title: 'Token Issuance',
    description: 'Deploy your own Sui coin fully client-side in under a minute. Your wallet signs, your keys — no intermediaries.',
    href: 'https://sui-token-issuance.meddleware.co.uk',
  },
  {
    icon: '📊',
    title: 'Treasury',
    description: 'A read-only view of the organisation treasury: platform commission, balances and recent access-pass activity.',
    href: 'https://treasury.meddleware.co.uk',
  },
]
