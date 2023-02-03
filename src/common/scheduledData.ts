import { UnknownVersionError } from '../common/errors'
import {
    SchedulerDispatchedEvent
} from '../types/events'
import { EventHandlerContext } from '../mappings/types/contexts'

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

export function getDispatchedEventData(ctx: EventHandlerContext): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx)
    if (event.isV1300) {
        const { task, id, result } = event.asV1300
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[1]
            }
        }
        return undefined
    } else if (event.isV1400) {
        const { task, id, result } = event.asV1400
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV1603) {
        const { task, id, result } = event.asV1603
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV2000) {
        const { task, id, result } = event.asV2000
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}