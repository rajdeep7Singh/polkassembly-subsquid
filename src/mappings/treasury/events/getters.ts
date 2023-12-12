import { UnknownVersionError } from '../../../common/errors'
import { awarded, proposed, rejected, spendApproved } from '../../../types/treasury/events'
import { Store } from '@subsquid/typeorm-store'
import { ProcessorContext, Event } from '../../../processor'
interface ProposedData {
    index: number
}

export function getProposedData(ctx: ProcessorContext<Store>, itemEvent: Event): ProposedData {
    if (proposed.v26.is(itemEvent)) {
        const index = proposed.v26.decode(itemEvent)
        return {
            index,
        }
    } else if (proposed.v34.is(itemEvent)) {
        const { proposalIndex: index } = proposed.v34.decode(itemEvent)
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

export function getRejectedData(ctx: ProcessorContext<Store>, itemEvent: Event): RejectedData {
    if (rejected.v26.is(itemEvent)) {
        const [index] = rejected.v26.decode(itemEvent)
        return {
            index,
        }
    } else if (rejected.v34.is(itemEvent)) {
        const { proposalIndex: index } = rejected.v34.decode(itemEvent)
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

export function getAwarderData(ctx: ProcessorContext<Store>, itemEvent: Event): AwarderData {
    if (awarded.v26.is(itemEvent)) {
        const [index] = awarded.v26.decode(itemEvent)
        return {
            index,
        }
    } else if (awarded.v34.is(itemEvent)) {
        const { proposalIndex: index } = awarded.v34.decode(itemEvent)
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

export function getSpendApprovedData(ctx: ProcessorContext<Store>, itemEvent: Event): SpendApprovedData {
    if (spendApproved.v41.is(itemEvent)) {
        const { proposalIndex, amount, beneficiary}= spendApproved.v41.decode(itemEvent)
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