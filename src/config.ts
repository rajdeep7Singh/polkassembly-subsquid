
const config = {
    chain: {
        name: 'polymesh-test',
        prefix: 12,
    },
    dataSource: {
        chain: 'wss://testnet-rpc.polymesh.live',
    },
    typesBundle: 'polymesh-test',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
