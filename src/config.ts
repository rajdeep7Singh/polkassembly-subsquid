import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'myriad',
        prefix: 42,
    },
    dataSource: {
        archive: lookupArchive("myriad", {release: "FireSquid"}),
        chain: 'myriad',
    },
    typesBundle: 'myriad',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
