import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v25 from '../v25'
import * as v2800 from '../v2800'
import * as v10400 from '../v10400'
import * as v10500 from '../v10500'
import * as v10700 from '../v10700'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    v25: new EventType(
        'Democracy.Proposed',
        sts.tuple([v25.PropIndex, v25.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v10400: new EventType(
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
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
     */
    v25: new EventType(
        'Democracy.Tabled',
        sts.tuple([v25.PropIndex, v25.Balance, sts.array(() => v25.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v10400: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v10400.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v10890: new EventType(
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
     *  A referendum has begun. \[ref_index, threshold\]
     */
    v25: new EventType(
        'Democracy.Started',
        sts.tuple([v25.ReferendumIndex, v25.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v10400: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v10400.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    v25: new EventType(
        'Democracy.Passed',
        v25.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v10400: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     *  A proposal has been rejected by referendum. \[ref_index\]
     */
    v25: new EventType(
        'Democracy.NotPassed',
        v25.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v10400: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     *  A referendum has been cancelled. \[ref_index\]
     */
    v25: new EventType(
        'Democracy.Cancelled',
        v25.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v10400: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    v25: new EventType(
        'Democracy.Executed',
        sts.tuple([v25.ReferendumIndex, v25.DispatchResult])
    ),
    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    v2800: new EventType(
        'Democracy.Executed',
        sts.tuple([sts.number(), sts.result(() => sts.unit(), () => v2800.DispatchError)])
    ),
    /**
     * A proposal has been enacted.
     */
    v10400: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v10400.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v10500: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v10500.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v10700: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v10700.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    v25: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v25.Hash, v25.AccountId, v25.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v10400: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v10400.H256,
            who: v10400.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     *  \[proposal_hash, provider, deposit\]
     */
    v25: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v25.Hash, v25.AccountId, v25.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v10400: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v10400.H256,
            provider: v10400.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     *  A proposal could not be executed because its preimage was invalid.
     *  \[proposal_hash, ref_index\]
     */
    v25: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v25.Hash, v25.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v10400: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v10400.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     *  A proposal could not be executed because its preimage was missing.
     *  \[proposal_hash, ref_index\]
     */
    v25: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v25.Hash, v25.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v10400: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v10400.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     *  A registered preimage was removed and the deposit collected by the reaper.
     *  \[proposal_hash, provider, deposit, reaper\]
     */
    v25: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v25.Hash, v25.AccountId, v25.Balance, v25.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v10400: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v10400.H256,
            provider: v10400.AccountId32,
            deposit: sts.bigint(),
            reaper: v10400.AccountId32,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v10500: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v10500.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
