import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'moonriver',
        prefix: 42,
    },
    dataSource: {
        archive: lookupArchive("moonriver", {release: "FireSquid"}),
        chain: 'wss://wss.moonriver.moonbeam.network',
    },
    typesBundle: 'moonriver',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
