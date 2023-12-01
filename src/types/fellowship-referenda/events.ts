import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV9420 from '../collectivesV9420'

export const submitted =  {
    name: 'FellowshipReferenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    collectivesV9420: new EventType(
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
            proposal: collectivesV9420.Bounded,
        })
    ),
}

export const decisionDepositPlaced =  {
    name: 'FellowshipReferenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    collectivesV9420: new EventType(
        'FellowshipReferenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: collectivesV9420.AccountId32,
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
    collectivesV9420: new EventType(
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
            proposal: collectivesV9420.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: collectivesV9420.Tally,
        })
    ),
}

export const confirmStarted =  {
    name: 'FellowshipReferenda.ConfirmStarted',
    collectivesV9420: new EventType(
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
    collectivesV9420: new EventType(
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
    collectivesV9420: new EventType(
        'FellowshipReferenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: collectivesV9420.Tally,
        })
    ),
}

export const approved =  {
    name: 'FellowshipReferenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    collectivesV9420: new EventType(
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
    collectivesV9420: new EventType(
        'FellowshipReferenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: collectivesV9420.Tally,
        })
    ),
}

export const timedOut =  {
    name: 'FellowshipReferenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    collectivesV9420: new EventType(
        'FellowshipReferenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: collectivesV9420.Tally,
        })
    ),
}

export const cancelled =  {
    name: 'FellowshipReferenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    collectivesV9420: new EventType(
        'FellowshipReferenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: collectivesV9420.Tally,
        })
    ),
}

export const killed =  {
    name: 'FellowshipReferenda.Killed',
    /**
     * A referendum has been killed.
     */
    collectivesV9420: new EventType(
        'FellowshipReferenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: collectivesV9420.Tally,
        })
    ),
}

export const metadataSet =  {
    name: 'FellowshipReferenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    collectivesV9420: new EventType(
        'FellowshipReferenda.MetadataSet',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: collectivesV9420.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'FellowshipReferenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    collectivesV9420: new EventType(
        'FellowshipReferenda.MetadataCleared',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: collectivesV9420.H256,
        })
    ),
}
