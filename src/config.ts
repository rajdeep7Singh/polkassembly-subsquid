import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'robonomics',
        prefix: 32,
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/robonomics',
        chain: 'wss://kusama.rpc.robonomics.network/',
    },
    typesBundle: 'robonomics',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
