import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyAwardedData } from './getters'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleAwarded(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, beneficiary } = getBountyAwardedData(ctx, item)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
            extrinsicIndex
        },
    })
}
