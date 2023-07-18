import { UnknownVersionError } from '../common/errors'
import {
    SchedulerScheduledEvent,
    SchedulerDispatchedEvent
} from '../types/events'
import { Event } from '../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: number,
    result?: string
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
    if (event.isV0) {
        const [[block, number], hash, result] = event.asV0
        return {
            blockNumber: block,
            result: result.__kind
        }
    }else if (event.isV9110) {
        const [[block, number], hash, result] = event.asV9110
        return {
            blockNumber: block,
            result: result.__kind
        }
    }    else if (event.isV9170) {
        const { task, id, result } = event.asV9170
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV9190) {
        const { task, id, result } = event.asV9190
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV9340) {
        const { task, id, result } = event.asV9340
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else if (event.isV9420) {
        const { task, id, result } = event.asV9420
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV9430) {
        const { task, id, result } = event.asV9430
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}