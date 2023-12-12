
// type Parameters<T> = T extends (...args: infer R) => unknown ? R : never

// enum HandlerParams {
//     NAME,
//     OPTIONS,
//     FUNC,
// }

// export type ChainConfig = Readonly<{
//     name: string
//     prefix: number | string
// }>

// export type ProcessorConfig<S> = Readonly<{
//     chain: ChainConfig
//     dataSource: Parameters<any<S>['setDataSource']>[HandlerParams.NAME]
//     typesBundle: Parameters<any<S>['setTypesBundle']>[HandlerParams.NAME]
//     batchSize?: Parameters<any<S>['setBatchSize']>[HandlerParams.NAME]
//     port?: Parameters<any<S>['setPrometheusPort']>[HandlerParams.NAME]
//     blockRange?: Parameters<SubstrateProcessor<S>['setBlockRange']>[HandlerParams.NAME]
// }>
