import {lookupArchive} from "@subsquid/archive-registry"
// import { ProcessorConfig } from './common/processorConfig'
// import { Store } from '@subsquid/typeorm-store'

const config: any = {
    chain: {
        name: 'moonbase',
        prefix: 42,
    },
    dataSource: {
        archive: lookupArchive('moonbase', {type: 'Substrate', release: 'ArrowSquid' }),
        chain: 'wss://wss.api.moonbase.moonbeam.network',
    },
    typesBundle: 'moonbase',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
