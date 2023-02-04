import { UnknownVersionError } from '../common/errors'
import {
    SchedulerDispatchedEvent
} from '../types/events'
import { Event } from '../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: number
}

// export function getScheduledEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData {
//     const event = new SchedulerScheduledEvent(ctx, itemEvent)
//     if (event.isV1058) {
//         const number = event.asV1058
//         return {
//             blockNumber: number
//         }
//     } else if (event.isV2005) {
//         const [index, number] = event.asV2005
//         return {
//             blockNumber: number
//         }
//     } else if (event.isV9160) {
//         const { when, index} = event.asV9160
//         return {
//             blockNumber: index
//         }
//     } else {
//         throw new UnknownVersionError(event.constructor.name)
//     }
// }

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV110) {
        const { task, id, result } = event.asV110
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[1]
            }
        }
        return undefined
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}