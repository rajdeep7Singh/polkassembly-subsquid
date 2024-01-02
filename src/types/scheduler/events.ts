import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v25 from '../v25'
import * as v2800 from '../v2800'
import * as v10500 from '../v10500'
import * as v10700 from '../v10700'
import * as v10890 from '../v10890'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     *  Dispatched some task. \[task, id, result\]
     */
    v25: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v25.TaskAddress, sts.option(() => sts.bytes()), v25.DispatchResult])
    ),
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v2800: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.bigint(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v2800.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v10500: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v10500.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v10700: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v10700.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v10890: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.bigint(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v10890.DispatchError),
        })
    ),
}
