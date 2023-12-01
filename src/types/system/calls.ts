import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const remark =  {
    name: 'System.remark',
    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    collectivesV9290: new CallType(
        'System.remark',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const remarkWithEvent =  {
    name: 'System.remark_with_event',
    /**
     * Make some on-chain remark and emit event.
     */
    collectivesV9290: new CallType(
        'System.remark_with_event',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}
