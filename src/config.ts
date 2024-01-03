import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'frequency',
        prefix: 90,
    },
    dataSource: {
        chain: 'wss://0.rpc.frequency.xyz',
        archive: lookupArchive('frequency',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'frequency',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
