import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { createAllianceMotion } from '../../utils/proposals'
import { getProposedData } from './getters'
import { Call } from '../../../types/v9370'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { parseProposalCall, ss58codec } from '../../../common/tools'

type ProposalCall = Call

function decodeProposal(chain: Chain, data: Uint8Array): ProposalCall {
    // @ts-ignore
    return chain.scaleCodec.decodeBinary(chain.description.call, data)
}

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
        const proposal = decodeProposal(ctx._chain as Chain, proposalHash)

        const { section, method, args, description } = parseProposalCall(ctx._chain, proposal)

        decodedCall = {
            section,
            method,
            description,
            args: args as Record<string, unknown>,
        }
    } catch (e) {
        ctx.log.warn(`Failed to decode ProposedCall of Preimage ${hexHash} at block ${header.height}:\n ${e}`)
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