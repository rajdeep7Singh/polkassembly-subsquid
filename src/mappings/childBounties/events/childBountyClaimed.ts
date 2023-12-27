import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getChildBountyClaimedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleClaimed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { parentIndex, childIndex, payout, beneficiary } = getChildBountyClaimedData(item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, extrinsicIndex, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}
