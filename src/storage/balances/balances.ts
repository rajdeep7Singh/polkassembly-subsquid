import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'
import { bigint } from '../../model/generated/marshal'
import { BalancesInactiveIssuanceStorage, BalancesTotalIssuanceStorage } from '../../types/storage'


export async function getTotalIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new BalancesTotalIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV49) {
        return await storage.asV49.get()
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTotalInactiveIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new BalancesInactiveIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV2201) {
        return BigInt(await storage.asV2201.get())
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}