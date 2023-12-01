import { Call } from '../../types/v1000000'
import { Store } from '@subsquid/typeorm-store'
import { Block, ProcessorContext} from '../../processor'

type AllianceMotionStorageData = Call

async function getAllanceMotionStorageData(
    ctx: ProcessorContext<Store>, hash: string, block: Block
    ): Promise<AllianceMotionStorageData | undefined> {

    return await block._runtime.getStorage(block.hash, 'AllianceMotion.ProposalOf', hash) || undefined
}

export async function getProposalOf(
    ctx: ProcessorContext<Store>, hash: string, block: Block
    ): Promise<AllianceMotionStorageData | undefined> {
    return (await getAllanceMotionStorageData(ctx, hash, block))
}