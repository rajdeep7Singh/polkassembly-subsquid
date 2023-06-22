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
    if (event.isV108) {
        const { when, index} = event.asV108
        return {
            blockNumber: index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV108) {
        const { task, id, result } = event.asV108
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV115) {
        const { task, id, result } = event.asV115
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV160) {
        const { task, id, result } = event.asV160
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