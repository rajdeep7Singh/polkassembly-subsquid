import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTip } from '../../utils/proposals'
import { getNewTipData, getNewTipDataOld } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleNewTipOld(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getNewTipDataOld(item)
    const storageData = await storage.tips.getTips(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const { who, deposit, finder, reason } = storageData

    await createTip(ctx, header, extrinsicIndex, {
        hash: hash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Opened,
        reason: reason,
    })
}

export async function handleNewTip(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { hash } = getNewTipData(item)
    const storageData = await storage.tips.getTips(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hash))
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const { who, deposit, finder, reason } = storageData

    await createTip(ctx, header, extrinsicIndex, {
        hash: hash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Opened,
        reason: reason,
    })
}