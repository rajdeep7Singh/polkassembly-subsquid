import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'amplitude',
        prefix: 57,
    },
    dataSource: {
        chain: 'wss://rpc-amplitude.pendulumchain.tech',
        archive: lookupArchive('amplitude',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'amplitude',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
