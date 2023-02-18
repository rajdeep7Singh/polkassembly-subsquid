import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'kilt',
        prefix: 38,
    },
    dataSource: {
        archive: 'https://kilt.archive.subsquid.io/graphql',
        chain: 'wss://spiritnet.kilt.io/',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
