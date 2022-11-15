import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageReapedData } from './getters'

export async function handlePreimageReaped(ctx: EventHandlerContext) {
    const { hash } = getPreimageReapedData(ctx)

    const hexHash = toHex(hash)

    await updatePreimageStatus(ctx, hexHash, {
        isEnded: true,
        status: ProposalStatus.Missing,
    })
}
