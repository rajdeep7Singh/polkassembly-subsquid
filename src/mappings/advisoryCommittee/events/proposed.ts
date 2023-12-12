/* eslint-disable @typescript-eslint/ban-ts-comment */
import { toHex } from '@subsquid/substrate-processor'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { createAdvisoryCommitteeMotion, getMarketMetadata } from '../../utils/proposals'
import { getProposedData } from './getters'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposed(ctx: ProcessorContext<Store>, item: Event, header: any) {
    const { index, proposer, hash, threshold } = getProposedData(ctx, item)
    const storageData  = await header._runtime.getStorage(header.hash, 'AdvisoryCommittee.ProposalOf', hash)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.AdvisoryCommittee, index))
        return
    }
    const section = storageData.__kind
    const method = storageData.value.__kind

    const name = `${section}.${method}`
    const description = (item.block._runtime.calls.get(name).docs as string[]).join('\n');
    const args = storageData.value

    const decodedCall = {
        section,
        method,
        description: description,
        args,
    }

    const marketId = args?.marketId || args?.market_Id
    await createAdvisoryCommitteeMotion(ctx, header, {
        index,
        hash: hash,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        threshold,
        marketMetadata: marketId || marketId == 0 ? await getMarketMetadata(ctx, Number(marketId), header) : null,
        call: decodedCall,
        extrinsicIndex
    })
}