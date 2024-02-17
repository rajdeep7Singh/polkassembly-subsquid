import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v268 from '../v268'
import * as v274 from '../v274'
import * as v283 from '../v283'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     *  Dispatched some task. \[task, id, result\]
     */
    v268: new EventType(
        'Scheduler.Dispatched',
        sts.tuple([v268.TaskAddress, sts.option(() => sts.bytes()), v268.DispatchResult])
    ),
    /**
     * Dispatched some task.
     */
    v274: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v274.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v283: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v283.DispatchError),
        })
    ),
}
