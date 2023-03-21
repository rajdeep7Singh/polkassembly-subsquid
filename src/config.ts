import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'polkadex',
        prefix: 88,
    },
    dataSource: {
        archive: 'https://polkadex.archive.subsquid.io/graphql',
        chain: 'wss://polkadex.api.onfinality.io/public-ws',
    },
    typesBundle: 'polkadex',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
