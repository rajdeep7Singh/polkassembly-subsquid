import { started } from '../../../types/democracy/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { ProposalStatus, ProposalType, ReferendumThresholdType } from '../../../model'
import { storage } from '../../../storage'
import { createReferendum } from '../../utils/proposals'
import { ProcessorContext, Event } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
interface ReferendumEventData {
    index: number
    threshold: string
}

function getEventData(ctx: ProcessorContext<Store>, itemEvent: Event): ReferendumEventData {
    if (started.v34.is(itemEvent)) {
        const { refIndex: index, threshold } = started.v34.decode(itemEvent)
        return {
            index,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export async function handleStarted(ctx: ProcessorContext<Store>,
    item: Event,
    header: any) {
    const { index, threshold } = getEventData(ctx, item)

    const storageData = await storage.democracy.getReferendumInfoOf(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Referendum, index))
        return
    }

    if (storageData.status === 'Finished') {
        ctx.log.warn(`Referendum with index ${index} has already finished at block ${header.height}`)
        return
    }
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    const { hash, end, delay } = storageData

    await createReferendum(ctx, header, {
        index,
        threshold: threshold as ReferendumThresholdType,
        status: ProposalStatus.Started,
        hash,
        end: Number(end),
        delay: Number(delay),
        extrinsicIndex
    })
}
