import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'amplitude',
        prefix: 'amplitude',
    },
    dataSource: {
        archive: lookupArchive("amplitude", {release: "FireSquid"}),
        chain: 'wss://rpc-pendulum.prd.pendulumchain.tech:443',
    },
    typesBundle: 'amplitude',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
