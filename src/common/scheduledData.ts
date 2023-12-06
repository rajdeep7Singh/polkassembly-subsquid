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
    if (event.isV9300) {
        const { when, index} = event.asV9300
        return {
            blockNumber: index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV9300) {
        const { task, id, result } = event.asV9300
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (event.isV9310) {
        const { task, id, result } = event.asV9310
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
    }else if (event.isV9430) {
        const { task, id, result } = event.asV9430
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}