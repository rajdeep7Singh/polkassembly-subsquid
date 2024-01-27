import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'picasso',
        prefix: 49,
    },
    dataSource: {
        chain: 'wss://picasso-rpc.composable.finance',
        archive: lookupArchive('picasso',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
