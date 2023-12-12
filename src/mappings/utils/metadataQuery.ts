export const marketMetadataQuery = `query MyQuery($marketId: [Int!]!) {
    marketMetadata(marketId: $marketId) {
      decoded
      marketId
      encoded
    }
}`