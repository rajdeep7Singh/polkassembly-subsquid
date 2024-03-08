import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'polimec',
        prefix: 41,
    },
    typesBundle: 'polkadot',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
