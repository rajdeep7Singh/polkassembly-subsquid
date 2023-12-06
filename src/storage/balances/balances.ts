import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'
import { BalancesInactiveIssuanceStorage, BalancesTotalIssuanceStorage, OpenGovBalancesInactiveIssuanceStorage, OpenGovBalancesTotalIssuanceStorage } from '../../types/storage'


export async function getTotalIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new BalancesTotalIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV200) {
        return await storage.asV200.get()
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTotalInactiveIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new BalancesInactiveIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV10009) {
        return BigInt(await storage.asV10009.get())
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getOpenGovTotalIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new OpenGovBalancesTotalIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV10038) {
        return await storage.asV10038.get()
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getOpenGovTotalInactiveIssuanceStorageData(ctx: BatchContext<Store, unknown>, block: SubstrateBlock): Promise<bigint> {
    const storage = new OpenGovBalancesInactiveIssuanceStorage(ctx, block)
    if (!storage.isExists) return BigInt(0)

    if (storage.isV10038) {
        return BigInt(await storage.asV10038.get())
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}