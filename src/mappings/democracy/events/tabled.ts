import { tabled } from '../../../types/democracy/events'
import { UnknownVersionError } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
interface TabledEventData {
    index: number
    deposit: bigint
    depositors?: string[]
}

function getEventData(ctx: ProcessorContext<Store>, itemEvent: Event): TabledEventData {
    if (tabled.v34.is(itemEvent)) {
        const { proposalIndex: index, deposit, depositors } = tabled.v34.decode(itemEvent)
        return {
            index,
            deposit,
            depositors,
        }
    } else if (tabled.v46.is(itemEvent)) {
        const { proposalIndex: index, deposit } = tabled.v46.decode(itemEvent)
        return {
            index,
            deposit,
        }
    }
     else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export async function handleTabled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index } = getEventData(ctx,  item)

    await updateProposalStatus(ctx, header, index, ProposalType.DemocracyProposal, {
        status: ProposalStatus.Tabled,
        isEnded: true,
    })
}
