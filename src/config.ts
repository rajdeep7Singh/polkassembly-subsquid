import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'equilibrium',
        prefix: 'equilibrium',
    },
    dataSource: {
        archive: lookupArchive("equilibrium", {release: "FireSquid"}),
        chain: 'wss://history.pol.equilibrium.io/',
    },
    typesBundle: 'equilibrium',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
