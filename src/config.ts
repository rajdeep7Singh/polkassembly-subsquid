import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'acala',
        prefix: 'acala',
    },
    dataSource: {
        archive: lookupArchive("acala", {release: "FireSquid"}),
        chain: 'wss://acala-polkadot.api.onfinality.io/public-ws',
    },
    typesBundle: 'acala',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
