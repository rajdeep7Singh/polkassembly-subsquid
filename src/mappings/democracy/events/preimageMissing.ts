import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageMissingData } from './getters'

export async function handlePreimageMissing(ctx: EventHandlerContext) {
    const { hash } = getPreimageMissingData(ctx)

    const hexHash = toHex(hash)

    await updatePreimageStatus(ctx, hexHash, {
        status: ProposalStatus.Missing,
    })
}
