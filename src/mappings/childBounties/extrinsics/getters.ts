import { UnknownVersionError } from '../../../common/errors'
import {
    ChildBountiesAcceptCuratorCall,
    ChildBountiesUnassignCuratorCall,
} from '../../../types/calls'
import { CallContext } from '../../types/contexts'

interface AccepterCuratorData {
    parentBountyId: number,
    childBountyId: number,
}

export function getAccepterCuratorData(ctx: CallContext): AccepterCuratorData {
    const call = new ChildBountiesAcceptCuratorCall(ctx)
    if (call.isV110) {
        const { parentBountyId, childBountyId } = call.asV110
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

export function getUnassingCuratorData(ctx: CallContext): UnassingCuratorData {
    const call = new ChildBountiesUnassignCuratorCall(ctx)
    if (call.isV110) {
        const {parentBountyId, childBountyId} = call.asV110
        return {
            parentBountyId,
            childBountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
