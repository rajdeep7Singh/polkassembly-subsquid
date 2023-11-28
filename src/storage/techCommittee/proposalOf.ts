import { TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v201'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'

type TechnicalCommitteeProposalStorageData = Call

async function getCoucilStorageData(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'TechnicalCommittee', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block))
}
