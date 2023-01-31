// import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'vara',
        prefix: 'vara',
    },
    dataSource: {
        archive: 'https://app.subsquid.io/archives/vara/subsquid',
        chain: 'wss://archive-rpc.vara-network.io',
    },
    typesBundle: '',
    batchSize: 1000,
    blockRange: {
        from: 0,
    },
}

export default config
