import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'collecitves',
        prefix: 'collectives',
    },
    dataSource: {
        archive: lookupArchive("collectives", {release: "FireSquid"}),
        chain: 'wss://polkadot-collectives-rpc.polkadot.io',
    },
    typesBundle: 'collectives',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
