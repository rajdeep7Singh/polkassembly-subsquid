import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV1000000 from '../collectivesV1000000'

export const inducted =  {
    name: 'FellowshipSalary.Inducted',
    /**
     * A member is inducted into the payroll.
     */
    collectivesV1000000: new EventType(
        'FellowshipSalary.Inducted',
        sts.struct({
            who: collectivesV1000000.AccountId32,
        })
    ),
}

export const registered =  {
    name: 'FellowshipSalary.Registered',
    /**
     * A member registered for a payout.
     */
    collectivesV1000000: new EventType(
        'FellowshipSalary.Registered',
        sts.struct({
            who: collectivesV1000000.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const paid =  {
    name: 'FellowshipSalary.Paid',
    /**
     * A payment happened.
     */
    collectivesV1000000: new EventType(
        'FellowshipSalary.Paid',
        sts.struct({
            who: collectivesV1000000.AccountId32,
            beneficiary: collectivesV1000000.AccountId32,
            amount: sts.bigint(),
            id: sts.bigint(),
        })
    ),
}

export const cycleStarted =  {
    name: 'FellowshipSalary.CycleStarted',
    /**
     * The next cycle begins.
     */
    collectivesV1000000: new EventType(
        'FellowshipSalary.CycleStarted',
        sts.struct({
            index: sts.number(),
        })
    ),
}
