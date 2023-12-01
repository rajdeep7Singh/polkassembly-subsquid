import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as collectivesV9290 from '../collectivesV9290'

export const vote =  {
    name: 'Alliance.vote',
    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a founder or fellow.
     */
    collectivesV9290: new CallType(
        'Alliance.vote',
        sts.struct({
            proposal: collectivesV9290.H256,
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
    collectivesV9290: new CallType(
        'Alliance.announce',
        sts.struct({
            announcement: collectivesV9290.Cid,
        })
    ),
}
