import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'rococo',
        prefix: 42,
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/rococo',
        chain: 'wss://rococo-rpc.polkadot.io',
    },
    typesBundle: 'rococo',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
