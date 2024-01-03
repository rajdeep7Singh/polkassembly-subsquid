import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'vara',
        prefix: 137,
    },
    dataSource: {
        chain: 'wss://archive-rpc.vara-network.io',
        archive: lookupArchive('vara',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'vara',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
