import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v2100 from '../v2100'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v2100: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v2100.DispatchError),
        })
    ),
}
