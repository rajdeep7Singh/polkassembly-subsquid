import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'kusama',
        prefix: 'kusama',
    },
    dataSource: {
        archive: lookupArchive("kusama", {release: "FireSquid"}),
        chain: 'wss://kusama-rpc.dwellir.com',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
