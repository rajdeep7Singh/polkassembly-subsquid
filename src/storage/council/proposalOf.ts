import { ProcessorContext } from '../../processor'
import { proposalOf } from '../../types/council/storage'

import { Call } from '../../types/v51'
import { Store } from '@subsquid/typeorm-store'

type CouncilProposalStorageData = Call

async function getCoucilStorageData(
    ctx: ProcessorContext<Store>,
    hash: string,
    block: any
): Promise<CouncilProposalStorageData | undefined> {
    return block._runtime.getStorage(block.hash, 'Council.ProposalOf', hash)
}

export async function getProposalOf
    (ctx: ProcessorContext<Store>, hash: string, block: any
): Promise<CouncilProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block))
}