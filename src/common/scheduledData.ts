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
    if (dispatched.v200.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v200.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    } else if (dispatched.v1000.is(itemEvent)) {
        const { task, id, result } = dispatched.v1000.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }   else if (dispatched.v1200.is(itemEvent)) {
        const { task, id, result } = dispatched.v1200.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else if (dispatched.v10009.is(itemEvent)) {
        const { task, id, result } = dispatched.v10009.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }else if (dispatched.v10040.is(itemEvent)) {
        const { task, id, result } = dispatched.v10040.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}