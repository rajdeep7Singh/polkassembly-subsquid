import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'rococo',
        prefix: 42,
    },
    dataSource: {
        archive: lookupArchive("kusama", {release: "FireSquid"}),
        chain: 'wss://rococo-rpc.polkadot.io',
    },
    typesBundle: 'rococo',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
