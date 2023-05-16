import { UnknownVersionError } from '../../../common/errors'
import { TreasuryAwardedEvent, TreasuryProposedEvent, TreasuryRejectedEvent, TreasurySpendApprovedEvent } from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
interface ProposedData {
    index: number
}

export function getProposedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ProposedData {
    const event = new TreasuryProposedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { proposalIndex: index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface RejectedData {
    index: number
}

export function getRejectedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): RejectedData {
    const event = new TreasuryRejectedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { proposalIndex: index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface AwarderData {
    index: number
}

export function getAwarderData(ctx: BatchContext<Store, unknown>, itemEvent: Event): AwarderData {
    const event = new TreasuryAwardedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { proposalIndex: index } = event.asV2
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface SpendApprovedData {
    proposalIndex: number
    amount: bigint
    beneficiary: Uint8Array

}

export function getSpendApprovedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): SpendApprovedData {
    const event = new TreasurySpendApprovedEvent(ctx, itemEvent)
    if (event.isV2) {
        const { proposalIndex, amount, beneficiary}= event.asV2
        return {
            proposalIndex,
            amount,
            beneficiary
        }
    }
    else {
        throw new UnknownVersionError(event.constructor.name)
    }

}