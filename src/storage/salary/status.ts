import { Store } from '@subsquid/typeorm-store'
import { Block, ProcessorContext} from '../../processor'
import { StatusType } from '../../types/v1000000'

export async function getSalaryCycleData(
    ctx: ProcessorContext<Store>, block: Block
    ): Promise< StatusType | undefined> {

    return await block._runtime.getStorage(block.hash, 'FellowshipSalary.Status') || undefined
}