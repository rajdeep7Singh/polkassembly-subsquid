import { UnknownVersionError } from '../../../common/errors'
import { awarded, proposed, rejected, spendApproved } from '../../../types/treasury/events'
import { Event } from '../../../processor'
interface ProposedData {
    index: number
}

export function getProposedData(itemEvent: Event): ProposedData {
    if (proposed.v5.is(itemEvent)) {
        const index = proposed.v5.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v13.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v13.decode(itemEvent)
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
    if (rejected.v5.is(itemEvent)) {
        const [index] = rejected.v5.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v13.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v13.decode(itemEvent)
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
    if (awarded.v5.is(itemEvent)) {
        const [index] = awarded.v5.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v13.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v13.decode(itemEvent)
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
    if (spendApproved.v23.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary}= spendApproved.v23.decode(itemEvent)
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