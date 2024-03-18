import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'polkadex',
        prefix: 88,
    },
    dataSource: {
        chain: 'wss://polkadex-rpc.dwellir.com',
        archive: lookupArchive('polkadex',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'polkadex',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
