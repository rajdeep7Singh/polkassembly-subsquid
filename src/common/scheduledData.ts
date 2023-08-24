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
    if (event.isV16) {
        const [ when, index ] = event.asV16
        return {
            blockNumber: index
        }
    } else if (event.isV38) {
        const { when, index} = event.asV38
        return {
            blockNumber: index
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getDispatchedEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ScheduledData | undefined {
    const event = new SchedulerDispatchedEvent(ctx, itemEvent)
    if (event.isV16) {
        const [ task, id, result ] = event.asV16
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV25) {
        const [ task, id, result ] = event.asV25
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV38) {
        const { task, id, result } = event.asV38
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV43) {
        const { task, id, result } = event.asV43
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    } else if (event.isV81) {
        const { task, id, result } = event.asV81
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    }else if (event.isV101) {
        const { task, id, result } = event.asV101
        if(result.__kind == 'Ok'){
            return {
                blockNumber: task[0]
            }
        }
        return undefined
    }  else {
        throw new UnknownVersionError(event.constructor.name)
    }
}