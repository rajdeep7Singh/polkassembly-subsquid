import { UnknownVersionError } from '../../../common/errors'
import { TreasuryAwardedEvent, TreasuryProposedEvent, TreasuryRejectedEvent } from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ProposedData {
    index: number
}

export function getProposedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ProposedData {
    const event = new TreasuryProposedEvent(ctx, itemEvent)
    if (event.isV110) {
        const index = event.asV110.proposalIndex
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
    if (event.isV110) {
        const { proposalIndex } = event.asV110
        return {
            index: proposalIndex,
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
    if (event.isV110) {
        const { proposalIndex } = event.asV110
        return {
            index: proposalIndex,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
