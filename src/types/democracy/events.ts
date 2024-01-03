import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    v1: new EventType(
        'Democracy.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const tabled =  {
    name: 'Democracy.Tabled',
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v1: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     * A referendum has begun.
     */
    v1: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v1.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    v1: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     * A proposal has been rejected by referendum.
     */
    v1: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v1: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v1: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v1.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
