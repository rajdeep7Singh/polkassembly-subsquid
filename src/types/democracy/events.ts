import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v34 from '../v34'
import * as v35 from '../v35'
import * as v36 from '../v36'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    v34: new EventType(
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
    v34: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v34.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v46: new EventType(
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
    v34: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v34.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    v34: new EventType(
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
    v34: new EventType(
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
    v34: new EventType(
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
    v34: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v34.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v35: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v35.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v36: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v36.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v34: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v34.H256,
            who: v34.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v34: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v34.H256,
            provider: v34.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v34: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v34.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v34: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v34.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v34: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v34.H256,
            provider: v34.AccountId32,
            deposit: sts.bigint(),
            reaper: v34.AccountId32,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    v34: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: v34.AccountId32,
            refIndex: sts.number(),
            vote: v34.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v34: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v34.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
