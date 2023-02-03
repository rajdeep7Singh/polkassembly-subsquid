import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getDispatchedEventData } from '../../../common/scheduledData'

export async function handleReferendumV2Execution(ctx: EventHandlerContext) {
    const eventData = getDispatchedEventData(ctx)
    // if(!eventData){
    //     return null
    // }
    let proposal = null;
    if(eventData){
        proposal = await ctx.store.get(Proposal, {
            where: {
                        type: ProposalType.ReferendumV2,
                        executeAtBlockNumber: eventData.blockNumber,
                        status: ProposalStatus.Confirmed
                    },
            order: {
                id: 'DESC',
            },
        })
    }

    if(proposal && proposal.index){
        await updateProposalStatus(ctx, proposal.index, ProposalType.ReferendumV2, {
            isEnded: true,
            status: ProposalStatus.Executed,
            data: {
                executedAt: new Date(ctx.block.timestamp)
            }
        })
    }

}