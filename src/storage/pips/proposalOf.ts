import { PipsProposalsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'


// eslint-disable-next-line sonarjs/cognitive-complexity
export async function getPipfromStorage(
    ctx: BatchContext<Store, unknown>, pipId: Number, block: SubstrateBlock
): Promise<any> {
    const storage = new PipsProposalsStorage(ctx, block)
    if (!storage.isExists) return undefined
    return ctx._chain.getStorage(block.hash, 'Pips', 'Proposals', pipId)
}
