import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'polkadex',
        prefix: 89,
    },
    dataSource: {
        chain: 'wss://polkadex-rpc.dwellir.com',
        archive: 'https://v2.archive.subsquid.io/metadata/polkadex',
    },
    typesBundle: 'polkadex',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
