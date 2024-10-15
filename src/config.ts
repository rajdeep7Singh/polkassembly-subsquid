
const config: any = {
    chain: {
        name: 'kusama',
        prefix: 'kusama',
    },
    dataSource: {
        archive: 'https://v2.archive.subsquid.io/network/kusama',
        chain: 'wss://rpc.ibp.network/kusama',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
