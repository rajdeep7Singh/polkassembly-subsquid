import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'westend-collecitves',
        prefix: 0,
    },
    dataSource: {
        archive: 'https://westend-collectives.archive.subsquid.io/graphql',
        chain: 'wss://westend-collectives-rpc.polkadot.io',
    },
    typesBundle: 'collectives',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
