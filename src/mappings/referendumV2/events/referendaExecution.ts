

import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
// import { getDispatchedEventData } from '../../../common/scheduledData'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor';

export async function handleReferendumV2Execution(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    // const eventData = getDispatchedEventData(item)
    const eventData = null;
    if(!eventData){
        return null
    }

    const proposal = await ctx.store.get(Proposal, {
        where: {
                    type: ProposalType.ReferendumV2,
                    executeAtBlockNumber:  0,
                    status: ProposalStatus.Confirmed
                },
        order: {
            id: 'DESC',
        },
    })

    if(!proposal || !proposal.index){
        return;
    }

    await updateProposalStatus(ctx, header, proposal.index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.Executed,
        data: {
            executedAt: new Date(header.timestamp)
        }
    })
}