import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDecisionDepositPlacedData } from './getters'
import {createDecisionDeposit} from '../../utils/proposals'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event, Block } from '../../../processor'

export async function handleDecisionDepositPlaced(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { index, who, amount } = getDecisionDepositPlacedData(item)

    const decisionDeposit = createDecisionDeposit({who: who, amount})

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, {
        status: ProposalStatus.DecisionDepositPlaced,
        data: {
            decisionDeposit: decisionDeposit
        }
    })
}