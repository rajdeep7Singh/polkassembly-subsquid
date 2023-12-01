import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'
import * as collectivesV9430 from '../collectivesV9430'

export const scheduled =  {
    name: 'Scheduler.Scheduled',
    /**
     * Scheduled some task.
     */
    collectivesV9420: new EventType(
        'Scheduler.Scheduled',
        sts.struct({
            when: sts.number(),
            index: sts.number(),
        })
    ),
}

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    collectivesV9420: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => collectivesV9420.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    collectivesV9430: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => collectivesV9430.DispatchError),
        })
    ),
}
