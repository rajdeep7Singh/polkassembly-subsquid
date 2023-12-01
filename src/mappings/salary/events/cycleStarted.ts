import { getCycleStartedData } from './getters'
import { ProcessorContext, Event, Block } from '../../../processor'
import { Store } from '@subsquid/typeorm-store'
import { getSalaryCycleData } from '../../../storage/salary/status'
import { createSalaryCycleData } from '../../utils/proposals'

export async function handleCycleStarted(ctx: ProcessorContext<Store>, item: Event, header: Block) {
    const { cycleIndex } = getCycleStartedData(item)
    const storageData = await getSalaryCycleData(ctx, header)
    const extrinsicIndex = `${header.height}-${item.extrinsicIndex}`

    if(cycleIndex == undefined || cycleIndex == null || !storageData){
        return;
    }

    await createSalaryCycleData(ctx, header, extrinsicIndex, {
        cycleIndex,
        cycleStart: storageData.cycleStart,
        totalRegistrations: storageData.totalRegistrations,
        totalUnregisteredPaid: storageData.totalUnregisteredPaid,
        budget: storageData.budget,
    })
}