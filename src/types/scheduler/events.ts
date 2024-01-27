import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v200 from '../v200'
import * as v1000 from '../v1000'
import * as v1200 from '../v1200'
import * as v10009 from '../v10009'
import * as v10040 from '../v10040'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v200: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v200.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v1000: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1000.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v1200: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v1200.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v10009: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v10009.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v10040: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v10040.DispatchError),
        })
    ),
}
