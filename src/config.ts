import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'kusama',
        prefix: 'kusama',
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/rolimec',
        chain: 'wss://kusama-rpc.dwellir.com',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
