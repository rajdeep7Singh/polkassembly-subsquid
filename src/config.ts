
const config = {
    chain: {
        name: 'polymesh',
        prefix: 12,
    },
    dataSource: {
        archive: "https://polymesh.archive.subsquid.io/graphql",
        chain: 'wss://mainnet-rpc.polymesh.network',
    },
    typesBundle: 'polymesh',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
