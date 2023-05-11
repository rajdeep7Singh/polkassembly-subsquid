import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'cere',
        prefix: 54,
    },
    dataSource: {
        archive: 'https://cere.archive.subsquid.io/graphql',
        chain: 'wss://archive.mainnet.cere.network/ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
