import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesAcceptCuratorCall,
    BountiesUnassignCuratorCall
} from '../../../types/calls'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new BountiesAcceptCuratorCall(ctx, itemCall)
    if (call.isV2) {
        const { bountyId } = call.asV2
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

interface UnassingCuratorData {
    index: number
}

export function getUnassingCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): UnassingCuratorData {
    const call = new BountiesUnassignCuratorCall(ctx, itemCall)
    if (call.isV2) {
        const { bountyId } = call.asV2
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
