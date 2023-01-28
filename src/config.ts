import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'moonbase',
        prefix: 42,
    },
    dataSource: {
        archive: lookupArchive("moonbase", {release: "FireSquid"}),
        chain: 'wss://wss.api.moonbase.moonbeam.network',
    },
    typesBundle: 'moonbase',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
