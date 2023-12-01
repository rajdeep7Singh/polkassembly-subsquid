import {lookupArchive} from "@subsquid/archive-registry"
import { Store } from '@subsquid/typeorm-store'

const config: any = {
    chain: {
        name: 'westend-collecitves',
        prefix: 0,
    },
    dataSource: {
        chain: 'wss://westend-collectives-rpc.polkadot.io',
        archive: lookupArchive('collectives-westend',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'collectives',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
