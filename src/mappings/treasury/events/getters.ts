import { UnknownVersionError } from '../../../common/errors'
import { awarded, proposed, rejected, spendApproved } from '../../../types/treasury/events'
import { Event } from '../../../processor'
interface ProposedData {
    index: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v25.is(itemEvent)) {
        const index = proposed.v25.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v10500.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v10500.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface RejectedData {
    index: number
}

export function getRejectedData(itemEvent: Event): RejectedData {
    if (rejected.v25.is(itemEvent)) {
        const [index] = rejected.v25.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v10500.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v10500.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface AwarderData {
    index: number
}

export function getAwarderData(itemEvent: Event): AwarderData {
    if (awarded.v25.is(itemEvent)) {
        const [index] = awarded.v25.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v10500.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v10500.decode(itemEvent)
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(itemEvent.name)
    }
}

interface SpendApprovedData {
    proposalIndex: number
    amount: bigint
    beneficiary: string

}

export function getSpendApprovedData(itemEvent: Event): SpendApprovedData {
    if (spendApproved.v10720.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary}= spendApproved.v10720.decode(itemEvent)
        return {
            proposalIndex,
            amount,
            beneficiary
        }
    }
    else {
        throw new UnknownVersionError(itemEvent.name)
    }

}