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

export function getScheduledEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData {
    const event = new SchedulerScheduledEvent(ctx, itemEvent)
    if (event.isV200) {
        const [index, number] = event.asV200
        return {
            blockNumber: number
        }
    } else if (event.isV1000) {
        const { when, index} = event.asV1000
        return {
            blockNumber: index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV200) {
        const [[block, number], hash, result] = event.asV200
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (event.isV1000) {
        const { task, id, result } = event.asV1000
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else if (event.isV1200) {
        const { task, id, result } = event.asV1200
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }else if (event.isV10009) {
        const { task, id, result } = event.asV10009
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }else if (event.isV10040) {
        const { task, id, result } = event.asV10040
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else {
        throw new UnknownVersionError(event.constructor.name)
    }
}