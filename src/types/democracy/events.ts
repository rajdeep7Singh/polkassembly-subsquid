import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v266 from '../v266'
import * as v293 from '../v293'
import * as v295 from '../v295'
import * as v297 from '../v297'
import * as v299 from '../v299'
import * as v300 from '../v300'
import * as v302 from '../v302'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    v266: new EventType(
        'Democracy.Proposed',
        sts.tuple([v266.PropIndex, v266.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v297: new EventType(
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
    v266: new EventType(
        'Democracy.Tabled',
        sts.tuple([v266.PropIndex, v266.Balance, sts.array(() => v266.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v297: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v297.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v48300: new EventType(
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
    v266: new EventType(
        'Democracy.Started',
        sts.tuple([v266.ReferendumIndex, v266.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v297: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v297.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    v266: new EventType(
        'Democracy.Passed',
        v266.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v297: new EventType(
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
    v266: new EventType(
        'Democracy.NotPassed',
        v266.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v297: new EventType(
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
    v266: new EventType(
        'Democracy.Cancelled',
        v266.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v297: new EventType(
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
    v266: new EventType(
        'Democracy.Executed',
        sts.tuple([v266.ReferendumIndex, sts.boolean()])
    ),
    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    v293: new EventType(
        'Democracy.Executed',
        sts.tuple([v293.ReferendumIndex, v293.DispatchResult])
    ),
    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    v295: new EventType(
        'Democracy.Executed',
        sts.tuple([sts.number(), sts.result(() => sts.unit(), () => v295.DispatchError)])
    ),
    /**
     * A proposal has been enacted.
     */
    v297: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v297.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v299: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v299.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v300: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v300.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v302: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v302.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    v266: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v266.Hash, v266.AccountId, v266.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v297: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v297.H256,
            who: v297.AccountId32,
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
    v266: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v266.Hash, v266.AccountId, v266.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v297: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v297.H256,
            provider: v297.AccountId32,
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
    v266: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v266.Hash, v266.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v297: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v297.H256,
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
    v266: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v266.Hash, v266.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v297: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v297.H256,
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
    v266: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v266.Hash, v266.AccountId, v266.Balance, v266.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v297: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v297.H256,
            provider: v297.AccountId32,
            deposit: sts.bigint(),
            reaper: v297.AccountId32,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v299: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v299.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
