import { EventHandlerContext } from '../../types/contexts'
import { DemocracyTabledEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { Event } from '../../../types/support'
interface TabledEventData {
    index: number
    deposit: bigint
    depositors?: Uint8Array[]
}

function getEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): TabledEventData {
    const event = new DemocracyTabledEvent(ctx, itemEvent)
    if (event.isV200) {
        const [index, deposit, depositors] = event.asV200
        return {
            index,
            deposit,
            depositors,
        }
    }
     else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTabled(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Tabled', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getEventData(ctx,  item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.DemocracyProposal, {
        status: ProposalStatus.Tabled,
        isEnded: true,
    })
}
