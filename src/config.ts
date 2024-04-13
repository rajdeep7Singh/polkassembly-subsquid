import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'westend',
        prefix: 42,
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/westend',
        chain: 'wss://westend-rpc.polkadot.io',
    },
    typesBundle: 'westend',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
