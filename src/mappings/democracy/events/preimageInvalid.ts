import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageInvalidData } from './getters'

export async function handlePreimageInvalid(ctx: EventHandlerContext) {
    const { hash } = getPreimageInvalidData(ctx)

    const hexHash = toHex(hash)

    await updatePreimageStatus(ctx, hexHash,{
        status: ProposalStatus.Invalid,
    })
}
