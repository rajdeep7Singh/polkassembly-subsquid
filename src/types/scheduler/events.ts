import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v5000 from '../v5000'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v5000: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v5000.DispatchError),
        })
    ),
}
