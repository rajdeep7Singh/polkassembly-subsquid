import {lookupArchive} from "@subsquid/archive-registry"

const config: any = {
    chain: {
        name: 'pendulum',
        prefix: 56,
    },
    dataSource: {
        chain: 'wss://rpc-pendulum.prd.pendulumchain.tech:443',
        archive: lookupArchive('pendulum',  {type: 'Substrate', release: 'ArrowSquid' }),
    },
    typesBundle: 'pendulum',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
