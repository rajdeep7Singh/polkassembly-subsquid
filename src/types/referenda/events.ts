import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1900 from '../v1900'
import * as v2000 from '../v2000'

export const submitted =  {
    name: 'Referenda.Submitted',
    /**
     * A referendum has being submitted.
     */
    v1900: new EventType(
        'Referenda.Submitted',
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
             * The hash of the proposal up for referendum.
             */
            proposalHash: v1900.H256,
        })
    ),
    /**
     * A referendum has being submitted.
     */
    v2000: new EventType(
        'Referenda.Submitted',
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
            proposal: v2000.Bounded,
        })
    ),
}

export const decisionDepositPlaced =  {
    name: 'Referenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    v1900: new EventType(
        'Referenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: v1900.AccountId20,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionStarted =  {
    name: 'Referenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    v1900: new EventType(
        'Referenda.DecisionStarted',
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
             * The hash of the proposal up for referendum.
             */
            proposalHash: v1900.H256,
            /**
             * The current tally of votes in this referendum.
             */
            tally: v1900.Tally,
        })
    ),
    /**
     * A referendum has moved into the deciding phase.
     */
    v2000: new EventType(
        'Referenda.DecisionStarted',
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
            proposal: v2000.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: v2000.Tally,
        })
    ),
}

export const confirmStarted =  {
    name: 'Referenda.ConfirmStarted',
    v1900: new EventType(
        'Referenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted =  {
    name: 'Referenda.ConfirmAborted',
    v1900: new EventType(
        'Referenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed =  {
    name: 'Referenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    v1900: new EventType(
        'Referenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v1900.Tally,
        })
    ),
}

export const approved =  {
    name: 'Referenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    v1900: new EventType(
        'Referenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected =  {
    name: 'Referenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    v1900: new EventType(
        'Referenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v1900.Tally,
        })
    ),
}

export const timedOut =  {
    name: 'Referenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    v1900: new EventType(
        'Referenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v1900.Tally,
        })
    ),
}

export const cancelled =  {
    name: 'Referenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v1900: new EventType(
        'Referenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v1900.Tally,
        })
    ),
}

export const killed =  {
    name: 'Referenda.Killed',
    /**
     * A referendum has been killed.
     */
    v1900: new EventType(
        'Referenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: v1900.Tally,
        })
    ),
}
