// import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'vara',
        prefix: 'vara',
    },
    dataSource: {
        archive: 'https://squid-archive.vara-network.io/graphql',
        chain: 'wss://archive-rpc.vara-network.io',
    },
    typesBundle: 'kusama',
    batchSize: 1000,
    blockRange: {
        from: 0,
    },
}

export default config
