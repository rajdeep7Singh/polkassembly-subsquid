import { TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { Call } from '../../types/v110'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

type TechnicalCommitteeProposalStorageData = Call

async function getCoucilStorageData(
    ctx: BatchContext<Store, unknown>,
    hash: Uint8Array,
    block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'TechnicalCommittee', 'ProposalOf', hash)

    // if (storage.isV9111) {
    //     return (await storage.getAsV9111(hash)) as Call
    // } else if (storage.isV9122) {
    //     return (await storage.getAsV9122(hash)) as Call
    // } else if (storage.isV9130) {
    //     return (await storage.getAsV9130(hash)) as Call
    // } else if (storage.isV9160) {
    //     return (await storage.getAsV9160(hash)) as Call
    // } else if (storage.isV9170) {
    //     return (await storage.getAsV9170(hash)) as Call
    // } else if (storage.isV9180) {
    //     return (await storage.getAsV9180(hash)) as Call
    // } else if (storage.isV9190) {
    //     return (await storage.getAsV9190(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

export async function getProposalOf(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block))
}
