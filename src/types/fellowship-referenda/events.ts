import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9320 from '../v9320'
import * as v9420 from '../v9420'

export const submitted =  {
    name: 'FellowshipReferenda.Submitted',
    /**
     * A referendum has being submitted.
     */
    v9320: new EventType(
        'FellowshipReferenda.Submitted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: v9320.Bounded,
        })
    ),
}

export const decisionDepositPlaced =  {
    name: 'FellowshipReferenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    v9320: new EventType(
        'FellowshipReferenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: v9320.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionStarted =  {
    name: 'FellowshipReferenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    v9320: new EventType(
        'FellowshipReferenda.DecisionStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: v9320.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: v9320.Type_441,
        })
    ),
}

export const confirmStarted =  {
    name: 'FellowshipReferenda.ConfirmStarted',
    v9320: new EventType(
        'FellowshipReferenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted =  {
    name: 'FellowshipReferenda.ConfirmAborted',
    v9320: new EventType(
        'FellowshipReferenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed =  {
    name: 'FellowshipReferenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    v9320: new EventType(
        'FellowshipReferenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9320.Type_441,
        })
    ),
}

export const approved =  {
    name: 'FellowshipReferenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    v9320: new EventType(
        'FellowshipReferenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected =  {
    name: 'FellowshipReferenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    v9320: new EventType(
        'FellowshipReferenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9320.Type_441,
        })
    ),
}

export const timedOut =  {
    name: 'FellowshipReferenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    v9320: new EventType(
        'FellowshipReferenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9320.Type_441,
        })
    ),
}

export const cancelled =  {
    name: 'FellowshipReferenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v9320: new EventType(
        'FellowshipReferenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9320.Type_441,
        })
    ),
}

export const killed =  {
    name: 'FellowshipReferenda.Killed',
    /**
     * A referendum has been killed.
     */
    v9320: new EventType(
        'FellowshipReferenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v9320.Type_441,
        })
    ),
}

export const metadataSet =  {
    name: 'FellowshipReferenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    v9420: new EventType(
        'FellowshipReferenda.MetadataSet',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'FellowshipReferenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    v9420: new EventType(
        'FellowshipReferenda.MetadataCleared',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: v9420.H256,
        })
    ),
}
