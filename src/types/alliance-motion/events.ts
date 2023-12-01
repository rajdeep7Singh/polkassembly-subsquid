import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV9290 from '../collectivesV9290'
import * as collectivesV9320 from '../collectivesV9320'
import * as collectivesV9420 from '../collectivesV9420'
import * as collectivesV9430 from '../collectivesV9430'

export const proposed =  {
    name: 'AllianceMotion.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    collectivesV9290: new EventType(
        'AllianceMotion.Proposed',
        sts.struct({
            account: collectivesV9290.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: collectivesV9290.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'AllianceMotion.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    collectivesV9290: new EventType(
        'AllianceMotion.Voted',
        sts.struct({
            account: collectivesV9290.AccountId32,
            proposalHash: collectivesV9290.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'AllianceMotion.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    collectivesV9290: new EventType(
        'AllianceMotion.Approved',
        sts.struct({
            proposalHash: collectivesV9290.H256,
        })
    ),
}

export const disapproved =  {
    name: 'AllianceMotion.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    collectivesV9290: new EventType(
        'AllianceMotion.Disapproved',
        sts.struct({
            proposalHash: collectivesV9290.H256,
        })
    ),
}

export const executed =  {
    name: 'AllianceMotion.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    collectivesV9290: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: collectivesV9290.H256,
            result: sts.result(() => sts.unit(), () => collectivesV9290.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    collectivesV9320: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: collectivesV9320.H256,
            result: sts.result(() => sts.unit(), () => collectivesV9320.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    collectivesV9420: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: collectivesV9420.H256,
            result: sts.result(() => sts.unit(), () => collectivesV9420.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    collectivesV9430: new EventType(
        'AllianceMotion.Executed',
        sts.struct({
            proposalHash: collectivesV9430.H256,
            result: sts.result(() => sts.unit(), () => collectivesV9430.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'AllianceMotion.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    collectivesV9290: new EventType(
        'AllianceMotion.Closed',
        sts.struct({
            proposalHash: collectivesV9290.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
