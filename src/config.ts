import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'pendulum',
        prefix: 56,
    },
    dataSource: {
        archive: 'https://app.subsquid.io/archives/pendulum/subsquid',
        chain: 'wss://rpc-pendulum.prd.pendulumchain.tech:443',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
