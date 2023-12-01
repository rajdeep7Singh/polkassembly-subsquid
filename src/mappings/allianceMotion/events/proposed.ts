import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { createAllianceMotion } from '../../utils/proposals'
import { getProposedData } from './getters'
import { Call } from '../../../types/v1000000'
import { storage } from '../../../storage'
import { Block, ProcessorContext, Event} from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { parseProposalCall, ss58codec } from '../../../common/tools'

type ProposalCall = Call

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: Block) {
    const { account, proposalIndex, proposalHash, threshold} = getProposedData(ctx, item)
    if(!item.call) return;
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    let decodedCall:
        | {
              section: string
              method: string
              description: string
              args: Record<string, unknown>
          }
        | undefined
    let args;
    try {
        const callData = await storage.allianceMotion.getProposalOf(ctx, proposalHash, header)
        if(callData){
            const section = callData.__kind as string
            const method = callData.value.__kind as string
            const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join('\n');

        const { __kind, ...argsValue } = callData.value;
            decodedCall = {
                section,
                method,
                description: desc,
                args: argsValue,
            }
        }
    } catch (e) {
        ctx.log.warn(`Failed to decode ProposedCall of AllianceMotion ${proposalIndex} at block ${header.height}:\n ${e}`)
    }
    await createAllianceMotion(ctx, header, {
        index: proposalIndex,
        status: ProposalStatus.Proposed,
        hash: proposalHash,
        threshold: threshold,
        proposer: ss58codec.encode(account),
        callData: decodedCall,
        extrinsicIndex
    })
}
