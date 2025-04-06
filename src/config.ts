import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'polkadot',
        prefix: 'polkadot',
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/polkadot',
        chain: 'wss://rpc.polkadot.io',
    },
    typesBundle: 'polkadot',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
