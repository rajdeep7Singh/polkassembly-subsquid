import { UnknownVersionError } from '../common/errors'
import { ProcessorContext, Event } from '../processor'
import {
    scheduled,
    dispatched
} from '../types/scheduler/events'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: bigint | number,
    result?: string
}

export function getScheduledEventData(ctx: ProcessorContext<Store>, itemEvent: Event): ScheduledData {
    if (scheduled.v34.is(itemEvent)) {
        const { when, index} = scheduled.v34.decode(itemEvent)
        return {
            blockNumber: index
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

export function getDispatchedEventData(ctx: ProcessorContext<Store>, itemEvent: Event): ScheduledData | undefined {
    if (dispatched.v34.is(itemEvent)) {
        const { task, id, result } = dispatched.v34.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v34.is(itemEvent)) {
        const { task, id, result } = dispatched.v34.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else if (dispatched.v34.is(itemEvent)) {
        const { task, id, result } = dispatched.v34.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v34.is(itemEvent)) {
        const { task, id, result } = dispatched.v34.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError('Scheduler.Dispatched')
    }
}