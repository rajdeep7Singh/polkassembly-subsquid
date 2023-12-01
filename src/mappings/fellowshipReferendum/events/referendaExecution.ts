import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDispatchedEventData } from '../../../common/scheduledData'
import { Store } from '@subsquid/typeorm-store'
import { toHex } from '@subsquid/substrate-processor'
import { ProcessorContext, Event } from '../../../processor'

// export async function handleFellowshipExecutionSchedule(ctx: BatchContext<Store, unknown>,
//     item: EventItem<'Scheduler.Scheduled', { event: { args: true; extrinsic: { hash: true } } }>,
//     header: SubstrateBlock) {
//     console.log('item', item)
//     const { blockNumber } = getScheduledEventData(ctx, item.event)

//     const proposal = await ctx.store.get(Proposal, {
//         where: {
//                     type: ProposalType.FellowshipReferendum,
//                     updatedAtBlock: header.height,
//                     status: ProposalStatus.Confirmed
//                 },
//         order: {
//             id: 'DESC',
//         },
//     })

//     if(!proposal || !proposal.index){
//         ctx.log.warn(NoReferendaFoundForExecution(ProposalType.FellowshipReferendum, header.height))
//         return;
//     }

//     await updateProposalStatus(ctx, header, proposal.index, ProposalType.FellowshipReferendum, {
//         isEnded: true,
//         status: ProposalStatus.Confirmed,
//         data: {
//             executeAtBlockNumber: blockNumber
//         }
//     })
// }

export async function handleFellowshipExecution(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const eventData = getDispatchedEventData(ctx, item)
    if(!eventData){
        return null
    }

    try{
        const storageData = await header._runtime.getStorage(header.parentHash, 'Scheduler.Agenda', eventData.blockNumber)
        if (!storageData || !storageData[0]) return null

        const callData = storageData[0]?.call

        let preimageHash = null

        if(callData.__kind == 'Inline'){
            preimageHash = callData.value
        }
        else {
            preimageHash = callData.hash
        }

        if(!preimageHash) return null

        const proposal = await ctx.store.get(Proposal, {
            where: {
                        type: ProposalType.FellowshipReferendum,
                        status: ProposalStatus.Confirmed,
                        hash: preimageHash
                    },
            order: {
                id: 'DESC',
            },
        })

        if(!proposal || !proposal.index){
            return;
        }
        const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`


        await updateProposalStatus(ctx, header, proposal.index, ProposalType.FellowshipReferendum, {
            isEnded: true,
            status: eventData.result == 'Ok' ? ProposalStatus.Executed : ProposalStatus.ExecutionFailed,
            extrinsicIndex,
            data: {
                executedAt: new Date(header.timestamp),
                executeAtBlockNumber: eventData.blockNumber
            }
        })

    }catch(e){
        console.error('error',e)
    }

}