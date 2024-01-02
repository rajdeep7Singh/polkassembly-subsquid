import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v273 from '../v273'
import * as v274 from '../v274'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    v273: new EventType(
        'Democracy.Proposed',
        sts.tuple([v273.PropIndex, v273.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v274: new EventType(
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
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
     *  depositors\]
     */
    v273: new EventType(
        'Democracy.Tabled',
        sts.tuple([v273.PropIndex, v273.Balance, sts.array(() => v273.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v274: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v274.AccountId32),
        })
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     *  A referendum has begun. \[ref_index, threshold\]
     */
    v273: new EventType(
        'Democracy.Started',
        sts.tuple([v273.ReferendumIndex, v273.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v274: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v274.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    v273: new EventType(
        'Democracy.Passed',
        v273.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v274: new EventType(
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
    v273: new EventType(
        'Democracy.NotPassed',
        v273.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v274: new EventType(
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
    v273: new EventType(
        'Democracy.Cancelled',
        v273.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v274: new EventType(
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
    v273: new EventType(
        'Democracy.Executed',
        sts.tuple([v273.ReferendumIndex, v273.DispatchResult])
    ),
    /**
     * A proposal has been enacted.
     */
    v274: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v274.DispatchError),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    v273: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v273.Hash, v273.AccountId, v273.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v274: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v274.H256,
            who: v274.AccountId32,
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
    v273: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v273.Hash, v273.AccountId, v273.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v274: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v274.H256,
            provider: v274.AccountId32,
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
    v273: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v273.Hash, v273.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v274: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v274.H256,
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
    v273: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v273.Hash, v273.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v274: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v274.H256,
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
    v273: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v273.Hash, v273.AccountId, v273.Balance, v273.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v274: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v274.H256,
            provider: v274.AccountId32,
            deposit: sts.bigint(),
            reaper: v274.AccountId32,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v274: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v274.AccountId32,
            propIndex: sts.number(),
        })
    ),
}
