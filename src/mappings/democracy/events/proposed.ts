import { toHex } from '@subsquid/substrate-processor'
import { DemocracyProposedEvent } from '../../../types/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { EventHandlerContext } from '../../types/contexts'
import { createDemocracyProposal } from '../../utils/proposals'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

function getEventData(ctx: EventContext): DemocracyProposalEventData {
    const event = new DemocracyProposedEvent(ctx)
    if (event.isV40) {
        const [index, deposit] = event.asV40
        return {
            index,
            deposit,
        }
    } else if (event.isV1200) {
        const { proposalIndex: index, deposit } = event.asV1200
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, deposit } = getEventData(ctx)

    const storageData = await storage.democracy.getProposals(ctx)
    if (!storageData) {
        ctx.log.warn(`Storage doesn't exist for democracy proposals at block ${ctx.block.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.DemocracyProposal, index))
        return
    }
    const { hash, proposer } = proposalData
    const hexHash = toHex(hash)

    await createDemocracyProposal(ctx, {
        hash: hexHash,
        index,
        proposer: toHex(proposer),
        status: ProposalStatus.Proposed,
        deposit,
    })
}
