
import { getOriginAccountId } from '../../../common/tools'
import { Store } from '@subsquid/typeorm-store'
import { ProposalStatus } from '../../../model';
import { createAdvisoryCommitteeMotion, getMarketMetadata } from '../../utils/proposals';
import { ProcessorContext, Call } from '../../../processor';
import { toHex } from '@subsquid/substrate-processor';
import { blake2AsHex } from '@polkadot/util-crypto';

export async function handleProposed(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return

    let args = item.block._runtime.decodeJsonCallRecordArguments(item)
    const bytes = item.block._runtime.encodeCall(args?.proposal)

    const hash = blake2AsHex(toHex(bytes))
    let from = getOriginAccountId(item.origin)
    if(!from){
        return
    }

    const section = args.proposal?.__kind as string
    const method = args.proposal?.value.__kind as string
    const threshold = args.threshold
    
    const name = `${section}.${method}`
    const description = (item.block._runtime.calls.get(name).docs as string[]).join('\n')
    const { __kind, ...argsValue } = args?.proposal?.value;

    const decodedCall = {
        section,
        method,
        description: description,
        args: argsValue,
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const marketId = argsValue?.marketId || argsValue?.market_Id

    await createAdvisoryCommitteeMotion(ctx, header, {
        hash,
        proposer: from,
        status: ProposalStatus.Proposed,
        threshold,
        marketMetadata: marketId || marketId == 0 ? await getMarketMetadata(ctx, Number(marketId), header) : null,
        call: decodedCall,
        extrinsicIndex
    })

}