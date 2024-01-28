import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'integritee',
        prefix: 13,
    },
    dataSource: {
        chain: 'wss://integritee-kusama.api.onfinality.io/public-ws',
        archive: lookupArchive('integritee-network',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'polkadot',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
