import {lookupArchive} from "@subsquid/archive-registry"
import { Store } from '@subsquid/typeorm-store'

const config: any = {
    chain: {
        name: 'collecitves',
        prefix: 0,
    },
    dataSource: {
        chain: 'wss://polkadot-collectives-rpc.dwellir.com/',
        archive: lookupArchive('collectives-polkadot',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'collectives',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
