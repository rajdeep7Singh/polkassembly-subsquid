import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'rococo',
        prefix: 42,
    },
    dataSource: {
        chain: 'wss://rococo-rpc.polkadot.io',
        archive: lookupArchive('rococo', { release: 'FireSquid' }),
    },
    typesBundle: 'rococo',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
