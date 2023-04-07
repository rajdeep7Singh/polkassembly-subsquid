import { UnknownVersionError } from '../common/errors'
import {
    SchedulerScheduledEvent,
    SchedulerDispatchedEvent
} from '../types/events'
import { Event } from '../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: number
}

export function getScheduledEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData {
    const event = new SchedulerScheduledEvent(ctx, itemEvent)
    if (event.isV14) {
        const { when, index} = event.asV14
        return {
            blockNumber: index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV14) {
        const { task, id, result } = event.asV14
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV18) {
        const { task, id, result } = event.asV18
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV28) {
        const { task, id, result } = event.asV28
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