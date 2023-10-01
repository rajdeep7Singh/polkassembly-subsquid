import { UnknownVersionError } from '../common/errors'
import {
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
    if (event.isV900) {
        const [[block, number], hash, result] = event.asV900
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (event.isV1300) {
        const { task, id, result } = event.asV1300
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV1401) {
        const { task, id, result } = event.asV1401
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV1606) {
        const { task, id, result } = event.asV1606
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV2000) {
        const { task, id, result } = event.asV2000
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else if (event.isV2501) {
        const { task, id, result } = event.asV2501
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}