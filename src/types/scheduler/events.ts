import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v100 from '../v100'

export const dispatched =  {
    name: 'Scheduler.Dispatched',
    /**
     * Dispatched some task.
     */
    v100: new EventType(
        'Scheduler.Dispatched',
        sts.struct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => v100.DispatchError),
        })
    ),
}
