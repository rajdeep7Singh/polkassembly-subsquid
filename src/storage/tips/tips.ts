import { UnknownVersionError } from '../../common/errors'
import { TipsTipsStorage, TipsReasonsStorage, TreasuryReasonsStorage, TreasuryTipsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
    reason: Uint8Array
}


async function getTipsStorageData(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock): Promise<TipStorageData | undefined> {
    const storage = new TipsTipsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV1019) {
        return await storage.asV1019.get(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock): Promise<TipStorageData | undefined> {
    const storage = new TreasuryTipsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV1000) {
        const storageData = await storage.asV1000.get(hash)
        if (!storageData) return undefined

        const { who, finder, reason, deposit } = storageData
        return {
            who,
            finder,
            deposit,
            reason,
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTipsReasonsStorageData(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock): Promise<string | undefined> {
    const storage = new TipsReasonsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV1019) {
        return await storage.asV1019.get(hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryReasonsStorageData(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock): Promise<string | undefined> {
    const storage = new TreasuryReasonsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV1000) {
        return await storage.asV1000.get(hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getReason(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock) {
    return (await getTipsReasonsStorageData(ctx, hash, block)) || (await getTreasuryReasonsStorageData(ctx, hash, block))
}

export async function getTips( ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock) {
    let tipInfo = (await getTipsStorageData(ctx, hash, block)) || (await getTreasuryStorageData(ctx, hash, block))
    if (!tipInfo) return undefined

    let reason = await getReason(ctx, tipInfo.reason, block).then((r) => r || '')

    return {
        ...tipInfo,
        reason,
    }
}