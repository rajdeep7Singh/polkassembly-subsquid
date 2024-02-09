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
    if (dispatched.v100.is(itemEvent)) {
        const { task, id, result } = dispatched.v100.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.v1030.is(itemEvent)) {
        const { task, id, result } = dispatched.v1030.decode(itemEvent)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }else {
        throw new UnknownVersionError("Scheduler.Dispatched")
    }
}