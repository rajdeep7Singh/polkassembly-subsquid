import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatusV2 } from '../../utils/proposals'
import { getPreimageClearedData } from './getters'

export async function handlePreimageV2Cleared(ctx: EventHandlerContext) {
    const { hash } = getPreimageClearedData(ctx)

    const hexHash = toHex(hash)

    await updatePreimageStatusV2(ctx, hexHash, {
        status: ProposalStatus.Cleared,
    })
}