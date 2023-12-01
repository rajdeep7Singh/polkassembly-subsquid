import { ProposalStatus, ProposalType } from '../../../model'
import { ProcessorContext, Event, Block } from '../../../processor'
import { updateProposalStatus } from '../../utils/proposals'
import { getDecisionDepositPlacedData } from './getters'
import {createDecisionDeposit} from '../../utils/proposals'
import { ss58codec } from '../../../common/tools'
import { Store } from '@subsquid/typeorm-store'

export async function handleDecisionDepositPlaced(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index, who, amount } = getDecisionDepositPlacedData(ctx, item)

    const decisionDeposit = createDecisionDeposit({who: ss58codec.encode(who), amount})
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.DecisionDepositPlaced,
        extrinsicIndex,
        data: {
            decisionDeposit: decisionDeposit
        }
    })
}