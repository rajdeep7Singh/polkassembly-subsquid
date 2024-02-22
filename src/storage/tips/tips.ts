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
    if (tips.v9300.is(block)) {
        return await tips.v9300.get(block, hash)
    } else {
        throw new UnknownVersionError("Tips.tips")
    }
}

async function getTipsReasonsStorageData(ctx: ProcessorContext<Store>, hash: string, block: any): Promise<string | undefined> {
    if (reasons.v9300.is(block)) {
        return await reasons.v9300.get(block, hash).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError("Treasury.Tips")
    }
}

async function getReason(ctx: ProcessorContext<Store>, hash: string, block: any) {
    try{
        return (await getTipsReasonsStorageData(ctx, hash, block)) 
    }catch {
    }
}

export async function getTips( ctx: ProcessorContext<Store>, hash: string, block: any) {
    let tipInfo;
    try{
        tipInfo = await getTipsStorageData(ctx, hash, block)
    }catch(e){
    }
    if (!tipInfo) return undefined

    let reason = await getReason(ctx, tipInfo.reason, block).then((r) => r || '')

    return {
        ...tipInfo,
        reason,
    }
}