import { clearIdentity, killIdentity, removeSub } from '../../utils/proposals'
import { getIdentityClearedData, getIdentityKilledData, getIdentitySubRemovedData, getIdentitySubRevokedData } from './getters'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'

export async function handleIdentityCleared(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { who } = getIdentityClearedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await clearIdentity(ctx, header, extrinsicIndex, who)
}

export async function handleIdentityKilled(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { who } = getIdentityKilledData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await killIdentity(ctx, header, extrinsicIndex, who)
}

export async function handleIdentitySubRemoved(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { who } = getIdentitySubRemovedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await removeSub(ctx, header, extrinsicIndex, who)
}

export async function handleIdentitySubRevoked(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { who } = getIdentitySubRevokedData(item)
    const extrinsicIndex = `${header.height}-${item.index}`

    await removeSub(ctx, header, extrinsicIndex, who)
}
