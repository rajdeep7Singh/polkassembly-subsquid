/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTechCommitteeMotion } from '../../utils/proposals'
import { getProposedData } from './getters'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, proposer, hash, threshold } = getProposedData(ctx, item)

    const storageData = await storage.techCommittee.getProposalOf(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TechCommitteeProposal, index))
        return
    }

    const section = storageData.__kind as string
    const method = storageData.value.__kind as string
    const desc = (item.block._runtime.calls.get(`${section}.${method}`).docs as string[]).join('\n');

    const { __kind, ...argsValue } = storageData.value;
    
    const decodedCall = {
        section,
        method,
        description: desc,
        args: argsValue,
    }    
    
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    await createTechCommitteeMotion(ctx, header, {
        index,
        hash: hash,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        threshold,
        call: decodedCall,
        extrinsicIndex
    })
}