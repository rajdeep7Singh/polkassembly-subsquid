import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v21 from '../v21'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    v21: new EventType(
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
    v21: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v21.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v28: new EventType(
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
    v21: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v21.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    v21: new EventType(
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
    v21: new EventType(
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
    v21: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     * A proposal has been enacted.
     */
    v21: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v21.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v21: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v21.H256,
            who: v21.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v21: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v21.H256,
            provider: v21.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v21: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v21.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v21: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v21.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v21: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v21.H256,
            provider: v21.AccountId32,
            deposit: sts.bigint(),
            reaper: v21.AccountId32,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v21: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v21.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
