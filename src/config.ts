import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'xxnetwork',
        prefix: 55,
    },
    dataSource: {
        archive: 'https://xx-network.archive.subsquid.io/graphql',
        chain: 'wss://xx.api.onfinality.io/public-w',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
