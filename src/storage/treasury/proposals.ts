import { UnknownVersionError } from '../../common/errors'
import { TreasuryProposalsStorage } from '../../types/storage'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface TreasuryProposalStorageData {
    proposer: Uint8Array
    value: bigint
    beneficiary: Uint8Array
    bond: bigint
}

async function getStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<TreasuryProposalStorageData | undefined> {
    const storage = new TreasuryProposalsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV100) {
        return await storage.asV100.get(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock) {
    return await getStorageData(ctx, index, block)
}
