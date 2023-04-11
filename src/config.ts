import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'hydradx',
        prefix: 63,
    },
    dataSource: {
        archive: lookupArchive("hydradx", {release: "FireSquid"}),
        chain: 'wss://rpc.hydradx.cloud',
    },
    typesBundle: 'hydradx',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
