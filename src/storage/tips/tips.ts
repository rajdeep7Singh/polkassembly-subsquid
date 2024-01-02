import { UnknownVersionError } from '../../common/errors'
import { tips, reasons } from '../../types/tips/storage'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext } from '../../processor'
interface TipStorageData {
    who: string
    finder?: string
    deposit?: bigint
    reason: string
}


async function getTipsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<TipStorageData | undefined> {
    if (tips.v10700.is(block)) {
        return await tips.v10700.get(block, hash)
    } else {
        throw new UnknownVersionError("Tips.tips")
    }
}

async function getTipsReasonsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<string | undefined> {
    if (reasons.v10700.is(block)) {
        return await reasons.v10700.get(block, hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Treasury.Tips")
    }
}

async function getReason(ctx: ProcessorContext<Store>, hash: string, block: any) {
    try{
        return (await getTipsReasonsStorageData(ctx, hash, block)) 
    }catch(e) {
        ctx.log.warn(`Something wrong while getting tip reasons storage at block ${block.height}, error: ${e}`)
    }
}

export async function getTips( ctx: ProcessorContext<Store>, hash: string, block: any) {
    let tipInfo;
    try{
        tipInfo = await getTipsStorageData(ctx, hash, block)
    }catch(e){
        ctx.log.warn(`Something wrong while getting tip storage at block ${block.height}, error: ${e}`)
    }
    if (!tipInfo) return undefined

    let reason = await getReason(ctx, tipInfo.reason, block).then((r) => r || '')

    return {
        ...tipInfo,
        reason,
    }
}