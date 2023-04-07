import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'tanganika',
        prefix: 33,
    },
    dataSource: {
        chain: 'wss://tanganika-archive.datahighway.com',
        archive: 'https://tanganika.archive.subsquid.io/graphql',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
