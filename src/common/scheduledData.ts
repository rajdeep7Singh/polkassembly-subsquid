import { UnknownVersionError } from '../common/errors'
import { Event } from '../processor'
import {
    dispatched
} from '../types/scheduler/events'

interface ScheduledData {
    blockNumber: number,
    result?: string
}

export function getDispatchedEventData(itemEvent: Event): ScheduledData | undefined {
    if (dispatched.v14.is(itemEvent)) {
        const { task, id, result } = dispatched.v14.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v18.is(itemEvent)) {
        const { task, id, result } = dispatched.v18.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v28.is(itemEvent)) {
        const { task, id, result } = dispatched.v28.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else if (dispatched.v35.is(itemEvent)) {
        const { task, id, result } = dispatched.v35.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v42.is(itemEvent)) {
        const { task, id, result } = dispatched.v42.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}