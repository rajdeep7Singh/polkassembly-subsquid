import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'picasso',
        prefix: 49,
    },
    dataSource: {
        archive: 'https://picasso.archive.subsquid.io/graphql',
        chain: 'wss://picasso-rpc.composable.finance',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
