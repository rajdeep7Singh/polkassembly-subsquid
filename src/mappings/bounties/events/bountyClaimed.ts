import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyClaimedData } from './getters'
import { ProcessorContext, Block, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleClaimed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, payout, beneficiary } = getBountyClaimedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
            extrinsicIndex
        },
    })
}