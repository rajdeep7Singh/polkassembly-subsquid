// import { EventHandlerContext } from '../../types/contexts'
// import { DemocracyTabledEvent } from '../../../types/events'
// import { UnknownVersionError } from '../../../common/errors'
// import { EventContext } from '../../../types/support'
// import { ProposalStatus, ProposalType } from '../../../model'
// import { updateProposalStatus } from '../../utils/proposals'

// interface TabledEventData {
//     index: number
//     deposit: bigint
//     depositors?: Uint8Array[]
// }

// function getEventData(ctx: EventContext): TabledEventData {
//     const event = new DemocracyTabledEvent(ctx)
//     if (event.isV1020) {
//         const [index, deposit, depositors] = event.asV1020
//         return {
//             index,
//             deposit,
//             depositors,
//         }
//     } else if (event.isV9130) {
//         const { proposalIndex: index, deposit, depositors } = event.asV9130
//         return {
//             index,
//             deposit,
//             depositors,
//         }
//     } else if (event.isV9320) {
//         const { proposalIndex: index, deposit } = event.asV9320
//         return {
//             index,
//             deposit,
//         }
//     }
//      else {
//         throw new UnknownVersionError(event.constructor.name)
//     }
// }

// export async function handleTabled(ctx: EventHandlerContext) {
//     const { index } = getEventData(ctx)

//     await updateProposalStatus(ctx, index, ProposalType.DemocracyProposal, {
//         status: ProposalStatus.Tabled,
//         isEnded: true,
//     })
// }
