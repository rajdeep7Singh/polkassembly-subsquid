import { UnknownVersionError } from '../../../common/errors'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator,
} from '../../../types/bounties/calls'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.v310.is(itemCall)) {
        const { bountyId } = acceptCurator.v310.decode(itemCall)
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

export function getUnassingCuratorData(itemCall: any): UnassingCuratorData {
    if (unassignCurator.v310.is(itemCall)) {
        const { bountyId } = unassignCurator.v310.decode(itemCall)
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
    if (proposeCurator.v310.decode(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v310.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.__kind == "Index" ? null : curator.value
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}