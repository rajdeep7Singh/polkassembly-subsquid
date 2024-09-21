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
    if (dispatched.v5.is(itemEvent)) {
        const [[block, number], hash, result] = dispatched.v5.decode(itemEvent)
        return {
            blockNumber: block,
            result: result.__kind
        }
    }  else if (dispatched.v13.is(itemEvent)) {
        const { task, id, result } = dispatched.v13.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v20.is(itemEvent)) {
        const { task, id, result } = dispatched.v20.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v32.is(itemEvent)) {
        const { task, id, result } = dispatched.v32.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}