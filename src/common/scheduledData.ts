import { UnknownVersionError } from '../common/errors'
import { ProcessorContext, Event } from '../processor'
import {
    dispatched,
} from '../types/scheduler/events'
import { Store } from '@subsquid/typeorm-store'

interface ScheduledData {
    blockNumber: number
    result?: string
}

export function getDispatchedEventData(ctx: ProcessorContext<Store>, item: Event): ScheduledData | undefined {
    if (dispatched.collectivesV9420.is(item)) {
        const { task, id, result } = dispatched.collectivesV9420.decode(item)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    } else if (dispatched.collectivesV9430.is(item)) {
        const { task, id, result } = dispatched.collectivesV9430.decode(item)
        return {
            blockNumber: task[0],
            result: result.__kind
        }
    }  else {
        throw new UnknownVersionError(item.name)
    }
}