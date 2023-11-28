import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'parallel',
        prefix: 172,
    },
    dataSource: {
        chain: 'wss://rpc.parallel.fi',
        archive: 'https://parallel.archive.subsquid.io/graphql',
    },
    typesBundle: 'parallel',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
