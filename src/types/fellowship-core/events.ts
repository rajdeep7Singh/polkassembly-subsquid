import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const activeChanged =  {
    name: 'FellowshipCore.ActiveChanged',
    /**
     * Member activity flag has been set.
     */
    v1000000: new EventType(
        'FellowshipCore.ActiveChanged',
        sts.struct({
            who: v1000000.AccountId32,
            isActive: sts.boolean(),
        })
    ),
}

export const inducted =  {
    name: 'FellowshipCore.Inducted',
    /**
     * Member has begun being tracked in this pallet.
     */
    v1000000: new EventType(
        'FellowshipCore.Inducted',
        sts.struct({
            who: v1000000.AccountId32,
        })
    ),
}

export const offboarded =  {
    name: 'FellowshipCore.Offboarded',
    /**
     * Member has been removed from being tracked in this pallet (i.e. because rank is now
     * zero).
     */
    v1000000: new EventType(
        'FellowshipCore.Offboarded',
        sts.struct({
            who: v1000000.AccountId32,
        })
    ),
}

export const promoted =  {
    name: 'FellowshipCore.Promoted',
    /**
     * Member has been promoted to the given rank.
     */
    v1000000: new EventType(
        'FellowshipCore.Promoted',
        sts.struct({
            who: v1000000.AccountId32,
            toRank: sts.number(),
        })
    ),
}

export const demoted =  {
    name: 'FellowshipCore.Demoted',
    /**
     * Member has been demoted to the given (non-zero) rank.
     */
    v1000000: new EventType(
        'FellowshipCore.Demoted',
        sts.struct({
            who: v1000000.AccountId32,
            toRank: sts.number(),
        })
    ),
}

export const proven =  {
    name: 'FellowshipCore.Proven',
    /**
     * Member has been proven at their current rank, postponing auto-demotion.
     */
    v1000000: new EventType(
        'FellowshipCore.Proven',
        sts.struct({
            who: v1000000.AccountId32,
            atRank: sts.number(),
        })
    ),
}

export const evidenceJudged =  {
    name: 'FellowshipCore.EvidenceJudged',
    /**
     * Some submitted evidence was judged and removed. There may or may not have been a change
     * to the rank, but in any case, `last_proof` is reset.
     */
    v1000000: new EventType(
        'FellowshipCore.EvidenceJudged',
        sts.struct({
            /**
             * The member/candidate.
             */
            who: v1000000.AccountId32,
            /**
             * The desired outcome for which the evidence was presented.
             */
            wish: v1000000.Wish,
            /**
             * The evidence of efforts.
             */
            evidence: sts.bytes(),
            /**
             * The old rank, prior to this change.
             */
            oldRank: sts.number(),
            /**
             * New rank. If `None` then candidate record was removed entirely.
             */
            newRank: sts.option(() => sts.number()),
        })
    ),
}

export const imported =  {
    name: 'FellowshipCore.Imported',
    /**
     * Pre-ranked account has been inducted at their current rank.
     */
    v1000000: new EventType(
        'FellowshipCore.Imported',
        sts.struct({
            who: v1000000.AccountId32,
            rank: sts.number(),
        })
    ),
}
