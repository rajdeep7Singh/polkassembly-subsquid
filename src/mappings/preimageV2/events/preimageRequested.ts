import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatusV2 } from '../../utils/proposals'
import { getPreimageRequestedData } from './getters'

export async function handlePreimageV2Requested(ctx: EventHandlerContext) {
    const { hash } = getPreimageRequestedData(ctx)

    const hexHash = toHex(hash)

    await updatePreimageStatusV2(ctx, hexHash, {
        status: ProposalStatus.Requested,
    })
}