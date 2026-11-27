// Which networks the platform is deployed on, from src/network.json (written by `mw-network-status` from the clients' deployment records, and
// checked in CI). Nothing on the page names a network that file does not: the day every record has a `mainnet` key, the wording changes with it.
// The data `mw-network-status` writes from the clients' deployment records.
import network from './network.json'

/** True once every product has a mainnet deployment record. */
export const mainnetLive = network.mainnet.status === 'live'

/** The one sentence the page uses for where the tools run. */
export const liveOn = mainnetLive ? 'Live on Sui testnet and mainnet.' : 'Live on Sui testnet; mainnet is coming.'

/** The networks a tool card says it runs on (from the same data, never prose): "test network" until every product is on mainnet. */
export const networkLabel = mainnetLive ? 'test and main networks' : 'test network'
