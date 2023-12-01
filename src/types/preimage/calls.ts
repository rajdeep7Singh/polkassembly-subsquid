import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const notePreimage =  {
    name: 'Preimage.note_preimage',
    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    v9420: new CallType(
        'Preimage.note_preimage',
        sts.struct({
            bytes: sts.bytes(),
        })
    ),
}
