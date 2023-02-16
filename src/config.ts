import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'snow',
        prefix: 2207,
    },
    dataSource: {
        archive: lookupArchive("snow", {release: "FireSquid"}),
        chain: 'wss://snow-rpc-1.icenetwork.io',
    },
    typesBundle: 'snow',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
