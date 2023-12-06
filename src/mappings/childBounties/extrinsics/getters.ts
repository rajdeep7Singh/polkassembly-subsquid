import { UnknownVersionError } from '../../../common/errors'
import {
    ChildBountiesAcceptCuratorCall,
    ChildBountiesProposeCuratorCall,
    ChildBountiesUnassignCuratorCall,
} from '../../../types/calls'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallContext } from '../../types/contexts'
import { Index } from 'typeorm'

interface AccepterCuratorData {
    parentBountyId: number,
    childBountyId: number,
}

export function getAccepterCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new ChildBountiesAcceptCuratorCall(ctx, itemCall)
    if (call.isV9190) {
        const { parentBountyId, childBountyId } = call.asV9190
        return {
            childBountyId,
            parentBountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

interface UnassingCuratorData {
    parentBountyId: number
    childBountyId: number
}

export function getUnassingCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): UnassingCuratorData {
    const call = new ChildBountiesUnassignCuratorCall(ctx, itemCall)
    if (call.isV9190) {
        const {parentBountyId, childBountyId} = call.asV9190
        return {
            parentBountyId,
            childBountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

interface ProposeCuratorData {
    parentBountyId: number
    childBountyId: number
    fee: bigint
    curator?: Uint8Array | number | undefined | null
}

export function getProposeCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): ProposeCuratorData {
    const call = new ChildBountiesProposeCuratorCall(ctx, itemCall)
    if (call.isV9190) {
        const { parentBountyId, childBountyId, fee, curator } = call.asV9190
        return {
            parentBountyId,
            childBountyId,
            fee,
            curator: curator.value
        }
    }else {
        throw new UnknownVersionError(call.constructor.name)
    }
}