import { ProcessorContext } from '../../processor'
import { Call } from '../../types/v51'
import { Store } from '@subsquid/typeorm-store'

type TechnicalCommitteeProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity

async function getCoucilStorageData(
    ctx: ProcessorContext<Store>, hash: string, block: any
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return block._runtime.getStorage(block.hash, 'TechnicalCommittee.ProposalOf', hash)
}

export async function getProposalOf(
    ctx: ProcessorContext<Store>, hash: string, block: any
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block))
}
