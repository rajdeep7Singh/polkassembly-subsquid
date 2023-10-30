import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v40 from '../v40'
import * as v701 from '../v701'
import * as v900 from '../v900'
import * as v1001 from '../v1001'
import * as v1200 from '../v1200'
import * as v1300 from '../v1300'
import * as v1400 from '../v1400'
import * as v1603 from '../v1603'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    v40: new EventType(
        'Democracy.Proposed',
        sts.tuple([v40.PropIndex, v40.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v1200: new EventType(
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
    v40: new EventType(
        'Democracy.Tabled',
        sts.tuple([v40.PropIndex, v40.Balance, sts.array(() => v40.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v1200: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v1200.AccountId20),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v2000: new EventType(
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
    v40: new EventType(
        'Democracy.Started',
        sts.tuple([v40.ReferendumIndex, v40.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v1200: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v1200.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    v40: new EventType(
        'Democracy.Passed',
        v40.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v1200: new EventType(
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
    v40: new EventType(
        'Democracy.NotPassed',
        v40.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v1200: new EventType(
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
    v40: new EventType(
        'Democracy.Cancelled',
        v40.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v1200: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     *  A proposal has been enacted. \[ref_index, is_ok\]
     */
    v40: new EventType(
        'Democracy.Executed',
        sts.tuple([v40.ReferendumIndex, sts.boolean()])
    ),
    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    v701: new EventType(
        'Democracy.Executed',
        sts.tuple([v701.ReferendumIndex, v701.DispatchResult])
    ),
    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    v900: new EventType(
        'Democracy.Executed',
        sts.tuple([sts.number(), sts.result(() => sts.unit(), () => v900.DispatchError)])
    ),
    /**
     * A proposal has been enacted.
     */
    v1200: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v1200.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v1300: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v1300.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v1400: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v1400.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v1603: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v1603.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    v40: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v40.Hash, v40.AccountId, v40.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v1200: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v1200.H256,
            who: v1200.AccountId20,
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
    v40: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v40.Hash, v40.AccountId, v40.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v1200: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v1200.H256,
            provider: v1200.AccountId20,
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
    v40: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v40.Hash, v40.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v1200: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v1200.H256,
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
    v40: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v40.Hash, v40.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v1200: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v1200.H256,
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
    v40: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v40.Hash, v40.AccountId, v40.Balance, v40.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v1200: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v1200.H256,
            provider: v1200.AccountId20,
            deposit: sts.bigint(),
            reaper: v1200.AccountId20,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v1001: new EventType(
        'Democracy.Seconded',
        sts.tuple([v1001.AccountId20, sts.number()])
    ),
    /**
     * An account has secconded a proposal
     */
    v1200: new EventType(
        'Democracy.Seconded',
        sts.struct({
            who: v1200.AccountId20,
            proposalIndex: sts.number(),
        })
    ),
    /**
     * An account has secconded a proposal
     */
    v1300: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v1300.AccountId20,
            propIndex: sts.number(),
        })
    ),
}
