import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'hashed',
        prefix: 42,
    },
    dataSource: {
        chain: 'wss://c1.hashed.live',
        archive: 'https://hashed.archive.subsquid.io/graphql',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
