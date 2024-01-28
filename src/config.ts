import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'cere',
        prefix: 54,
    },
    dataSource: {
        chain: 'wss://archive.mainnet.cere.network/ws',
        archive: lookupArchive('cere',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'polkadot',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
