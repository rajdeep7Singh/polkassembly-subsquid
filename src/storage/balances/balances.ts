import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'
import { bigint } from '../../model/generated/marshal'
import { BalancesTotalIssuanceStorage } from '../../types/storage'


export async function getTotalIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new BalancesTotalIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV2) {
        return await storage.asV2.get()
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

// export async function getTotalInactiveIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
//     const storage = new BalancesInactiveIssuanceStorage(ctx, block)
//     if (!storage.isExists) return BigInt(0)

//     if (storage.isV9340) {
//         return BigInt(await storage.asV9340.get())
//     } else {
//         throw new UnknownVersionError(storage.constructor.name)
//     }
// }