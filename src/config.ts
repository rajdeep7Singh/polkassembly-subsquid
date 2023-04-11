import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'basilisk',
        prefix: 10041,
    },
    dataSource: {
        archive: "https://basilisk.archive.subsquid.io/graphql",
        chain: 'wss://rpc.basilisk.cloud',
    },
    typesBundle: 'basilisk',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
