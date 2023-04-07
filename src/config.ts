import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'integritee',
        prefix: 13,
    },
    dataSource: {
        chain: 'wss://integritee-kusama.api.onfinality.io/public-ws',
        archive: lookupArchive('integritee-network', { release: 'FireSquid' }),
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
