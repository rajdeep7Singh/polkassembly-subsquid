import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'frequency',
        prefix: 90,
    },
    dataSource: {
        chain: 'wss://0.rpc.frequency.xyz',
        archive: 'https://frequency.archive.subsquid.io/graphql',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
