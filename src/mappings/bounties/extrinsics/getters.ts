import { UnknownVersionError } from '../../../common/errors'
import { ProcessorContext } from '../../../processor'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator,
} from '../../../types/bounties/calls'
import {
    acceptCurator as TreasuryAcceptCuratorCall,
    unassignCurator as TreasuryUnassignCuratorCall,
} from '../../../types/treasury/calls'
import { Store } from '@subsquid/typeorm-store'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorDataOld(itemCall: any): AccepterCuratorData {
    if (TreasuryAcceptCuratorCall.v266.is(itemCall)) {
        const { bountyId } = TreasuryAcceptCuratorCall.v266.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.v283.is(itemCall)) {
        const { bountyId } = acceptCurator.v283.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

interface UnassingCuratorData {
    index: number
}

export function getUnassingCuratorDataOld(itemCall: any): UnassingCuratorData {
    if (TreasuryUnassignCuratorCall.v266.is(itemCall)) {
        const { bountyId } = TreasuryUnassignCuratorCall.v266.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getUnassingCuratorData(itemCall: any): UnassingCuratorData {
    if (unassignCurator.v283.is(itemCall)) {
        const { bountyId } = unassignCurator.v283.decode(itemCall)
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

interface ProposeCuratorData {
    index: number
    fee: bigint
    curator?: string | number | undefined | null
}

export function getProposeCuratorData(itemCall: any): ProposeCuratorData {
    if (proposeCurator.v283.is(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v283.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.value
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}