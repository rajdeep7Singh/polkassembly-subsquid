import { UnknownVersionError } from '../common/errors'
import {
    SchedulerDispatchedEvent
} from '../types/events'
import { Event } from '../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: number
    result?: string
}

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV9420) {
        const { task, id, result } = event.asV9420
        return {
            blockNumber: task[0],
            result: result.__kind
        }
        return undefined
    } else if (event.isV9430) {
        const { task, id, result } = event.asV9430
        return {
            blockNumber: task[0],
            result: result.__kind
        }
        return undefined
    }  else {
        throw new UnknownVersionError(event.constructor.name)
    }
}