import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { createAllianceMotion } from '../../utils/proposals'
import { getProposedData } from './getters'
import { Call } from '../../../types/v9370'
import { storage } from '../../../storage'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { parseProposalCall, ss58codec } from '../../../common/tools'

type ProposalCall = Call

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'AllianceMotion.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { account, proposalIndex, proposalHash, threshold} = getProposedData(ctx, item.event)

    const hexHash = toHex(proposalHash)

    let decodedCall:
        | {
              section: string
              method: string
              description: string
              args: Record<string, unknown>
          }
        | undefined
    try {
        const callData = await storage.allianceMotion.getProposalOf(ctx, proposalHash, header)
        const { section, method, args, description } = parseProposalCall(ctx._chain, callData as ProposalCall)
        decodedCall = {
            section,
            method,
            description,
            args: args as Record<string, unknown>,
        }
    } catch (e) {
        ctx.log.warn(`Failed to decode ProposedCall of AllianceMotion ${proposalIndex} at block ${header.height}:\n ${e}`)
    }
    await createAllianceMotion(ctx, header, {
        index: proposalIndex,
        status: ProposalStatus.Proposed,
        hash: hexHash,
        threshold: threshold,
        proposer: ss58codec.encode(account),
        callData: decodedCall,
    })
}
