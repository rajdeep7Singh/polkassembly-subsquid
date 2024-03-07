import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'rolimec',
        prefix: 41,
    },
    typesBundle: 'polkadot',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
