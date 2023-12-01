import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const inducted =  {
    name: 'FellowshipSalary.Inducted',
    /**
     * A member is inducted into the payroll.
     */
    v1000000: new EventType(
        'FellowshipSalary.Inducted',
        sts.struct({
            who: v1000000.AccountId32,
        })
    ),
}

export const registered =  {
    name: 'FellowshipSalary.Registered',
    /**
     * A member registered for a payout.
     */
    v1000000: new EventType(
        'FellowshipSalary.Registered',
        sts.struct({
            who: v1000000.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const paid =  {
    name: 'FellowshipSalary.Paid',
    /**
     * A payment happened.
     */
    v1000000: new EventType(
        'FellowshipSalary.Paid',
        sts.struct({
            who: v1000000.AccountId32,
            beneficiary: v1000000.AccountId32,
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
    v1000000: new EventType(
        'FellowshipSalary.CycleStarted',
        sts.struct({
            index: sts.number(),
        })
    ),
}
