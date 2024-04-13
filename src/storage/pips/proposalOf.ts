import { ProcessorContext } from '../../processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'


// eslint-disable-next-line sonarjs/cognitive-complexity
export async function getPipfromStorage(
    ctx: ProcessorContext<Store>, pipId: Number, block: any
): Promise<any> {
    return block._runtime.getStorage(block.hash, 'Pips.Proposals', pipId)
}
