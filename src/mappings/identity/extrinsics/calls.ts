
import { getOriginAccountId } from '../../../common/tools'
import { getSetIdentityData, getAddSubData, getRenameSubData, getSetSubsData, getCancelRequestData, getProvideJudgementData, getRequestJudgementData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Call } from '../../../processor'
import { addSub, cancelRequest, provideJudgement, renameSub, requestJudgement, setIdentity, setSubs } from '../../utils/proposals'

export async function handleSetIdentity(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getSetIdentityData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    await setIdentity(ctx, header, extrinsicIndex, from, data)

}

export async function handleAddSub(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getAddSubData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    await addSub(ctx, header, from, data)
}

export async function handleRenameSub(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getRenameSubData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    await renameSub(ctx, header, from, data)
}


export async function handleSetSubs(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getSetSubsData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    await setSubs(ctx, header, from, data)
}

export async function handleCancelRequest(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getCancelRequestData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    await cancelRequest(ctx, header, extrinsicIndex, from, data)
}

export async function handleProvideJudgement(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getProvideJudgementData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    await provideJudgement(ctx, header, extrinsicIndex, from, data)
}

export async function handleRequestJudgement(ctx: ProcessorContext<Store>,
    item: Call,
    header: any): Promise<void> {
    if (!(item as any).success) return
    const data = getRequestJudgementData(item)
    let from = getOriginAccountId(item.origin)
    if(!from){
        from = getOriginAccountId(item?.extrinsic?.call?.origin)
    }
    if(!from) return
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`
    await requestJudgement(ctx, header, extrinsicIndex, from, data)
}