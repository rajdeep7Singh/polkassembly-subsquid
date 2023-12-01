import { UnknownVersionError } from '../../../common/errors'
import {  Event } from '../../../processor'
import {
    cycleStarted, 
    inducted, 
    paid, 
    registered,
} from '../../../types/fellowship-salary/events'


interface cycleStartedData {
    cycleIndex: number
}

export function getCycleStartedData(itemEvent: Event): cycleStartedData  {
    if (cycleStarted.v1000000.is(itemEvent)) {
        return {
            cycleIndex: cycleStarted.v1000000.decode(itemEvent).index
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface inductedData {
    who: string
}

export function getMemberInductedIntoPaymasterData(itemEvent: Event): inductedData  {
    if (inducted.v1000000.is(itemEvent)) {
        return {
            who: inducted.v1000000.decode(itemEvent).who
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface memberRegisteredData {
    who: string
    amount: bigint
}

export function getMemberRegisteredIntoSalaryCycleData(itemEvent: Event): memberRegisteredData  {
    if (registered.v1000000.is(itemEvent)) {
        const {who, amount} =  registered.v1000000.decode(itemEvent)
        return {
            who,
            amount
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface memberPaidData {
    who: string
    amount: bigint
    beneficiary: string
    id: bigint
}

export function getMemberPayoutData(itemEvent: Event): memberPaidData  {
    if (paid.v1000000.is(itemEvent)) {
        const {who, amount, beneficiary, id} =  paid.v1000000.decode(itemEvent)
        return {
            who,
            amount,
            beneficiary,
            id
        }

    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}