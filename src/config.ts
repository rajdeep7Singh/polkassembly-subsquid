import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'moonbeam',
        prefix: 1287,
    },
    dataSource: {
        archive: lookupArchive("moonbeam", {release: "FireSquid"}),
        chain: 'wss://wss.api.moonbeam.network',
    },
    typesBundle: 'moonbeam',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
