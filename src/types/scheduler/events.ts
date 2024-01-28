import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v14 from '../v14'
import * as v18 from '../v18'
import * as v28 from '../v28'
import * as v35 from '../v35'
import * as v42 from '../v42'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v14: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v14.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v18: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v18.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v28: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v28.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v35: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v35.DispatchError),
        })
    ),
    /**
     * Dispatched some task.
     */
    v42: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
}
