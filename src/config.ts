import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'robonomics',
        prefix: 32,
    },
    dataSource: {
        archive: 'https://robonomics.archive.subsquid.io/graphql',
        chain: 'wss://robonomics.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
