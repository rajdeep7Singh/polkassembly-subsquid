import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'laossigma',
        prefix: 42,
    },
    dataSource: {
        chain: 'wss://rpc.laossigma.laosfoundation.io',
    },
    typesBundle: 'laossigma',
    batchSize: 500,
    blockRange: {
        from: 380411,
    },
}

export default config
