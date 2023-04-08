import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'centrifuge',
        prefix: 36,
    },
    dataSource: {
        archive: 'https://centrifuge.archive.subsquid.io/graphql',
        chain: 'wss://centrifuge-parachain.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
