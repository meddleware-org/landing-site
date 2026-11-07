import { afterEach, describe, expect, it, vi } from 'vitest'

// The page's wording about where the tools run follows src/network.json, which `mw-network-status` writes from the deployment records.
async function wording(mainnet: 'live' | 'partial' | 'coming') {
  vi.resetModules()
  vi.doMock('../src/network.json', () => ({ default: { testnet: { status: 'live' }, mainnet: { status: mainnet } } }))
  return import('../src/network')
}
afterEach(() => vi.doUnmock('../src/network.json'))

describe('where the tools run', () => {
  it('says mainnet is coming until every record has a mainnet key', async () => {
    for (const status of ['coming', 'partial'] as const) {
      const n = await wording(status)
      expect(n.mainnetLive).toBe(false)
      expect(n.liveOn).toBe('Live on Sui testnet; mainnet is coming.')
    }
  })
  it('names mainnet only when the records have it', async () => {
    const n = await wording('live')
    expect(n.mainnetLive).toBe(true)
    expect(n.liveOn).toBe('Live on Sui testnet and mainnet.')
  })
})
