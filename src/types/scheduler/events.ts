import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v13 from '../v13'
import * as v20 from '../v20'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task. \[task, id, result\]
     */
    v5: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => v5.DispatchError)])
    ),
    /**
     * Dispatched some task.
     */
    v13: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v13.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v20: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v20.DispatchError),
        })
    ),
}
