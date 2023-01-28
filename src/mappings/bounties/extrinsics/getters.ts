import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesAcceptCuratorCall,
    BountiesUnassignCuratorCall,
} from '../../../types/calls'
import { CallContext } from '../../types/contexts'

interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorData(ctx: CallContext): AccepterCuratorData {
    const call = new BountiesAcceptCuratorCall(ctx)
    if (call.isV110) {
        const { bountyId } = call.asV110
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

export function getUnassingCuratorData(ctx: CallContext): UnassingCuratorData {
    const call = new BountiesUnassignCuratorCall(ctx)
    if (call.isV110) {
        const { bountyId } = call.asV110
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
