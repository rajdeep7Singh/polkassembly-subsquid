import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9290 from '../v9290'

export const vote =  {
    name: 'Alliance.vote',
    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a founder or fellow.
     */
    v9290: new CallType(
        'Alliance.vote',
        sts.struct({
            proposal: v9290.H256,
            index: sts.number(),
            approve: sts.boolean(),
        })
    ),
}

export const announce =  {
    name: 'Alliance.announce',
    /**
     * Make an announcement of a new IPFS CID about alliance issues.
     */
    v9290: new CallType(
        'Alliance.announce',
        sts.struct({
            announcement: v9290.Cid,
        })
    ),
}
