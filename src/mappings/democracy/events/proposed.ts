import { proposed } from '../../../types/democracy/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createDemocracyProposal } from '../../utils/proposals'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

function getEventData(ctx: ProcessorContext<Store>, item: Event): DemocracyProposalEventData {
    if (proposed.v34.is(item)) {
        const { proposalIndex: index, deposit } = proposed.v34.decode(item)
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(item.name)
    }
}

export async function handleProposed(ctx: ProcessorContext<Store>, item: Event,
    header: any) {
    const { index, deposit } = getEventData(ctx, item)

    const storageData = await storage.democracy.getProposals(ctx, header)
    if (!storageData) {
        ctx.log.warn(`Storage doesn't exist for democracy proposals at block ${header.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.DemocracyProposal, index))
        return
    }
    const { hash, proposer } = proposalData
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`


    await createDemocracyProposal(ctx, header, {
        hash: hash,
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        deposit,
        extrinsicIndex
    })
}
