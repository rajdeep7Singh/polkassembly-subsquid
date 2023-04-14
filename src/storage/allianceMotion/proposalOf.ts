import { AllianceMotionProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v9370'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'

type AllianceMotionStorageData = Call

async function getAllanceMotionStorageData(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<AllianceMotionStorageData | undefined> {
    const storage = new AllianceMotionProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'AllianceMotion', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<AllianceMotionStorageData | undefined> {
    return (await getAllanceMotionStorageData(ctx, hash, block))
}