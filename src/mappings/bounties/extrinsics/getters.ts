import { UnknownVersionError } from '../../../common/errors'
import { ProcessorContext } from '../../../processor'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator,
} from '../../../types/bounties/calls'

import { Store } from '@subsquid/typeorm-store'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorData(itemCall: any): AccepterCuratorData {
    if (acceptCurator.v268.is(itemCall)) {
        const { bountyId } = acceptCurator.v268.decode(itemCall)
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
    if (unassignCurator.v268.is(itemCall)) {
        const { bountyId } = unassignCurator.v268.decode(itemCall)
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
    if (proposeCurator.v268.is(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v268.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.value
        }
    }else if (proposeCurator.v268.decode(itemCall)) {
        const { bountyId, curator, fee } = proposeCurator.v268.decode(itemCall)
        return {
            index: bountyId,
            fee,
            curator: curator.__kind == "Index" ? null : curator.value
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}