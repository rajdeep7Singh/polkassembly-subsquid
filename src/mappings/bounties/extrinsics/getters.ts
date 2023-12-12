import { UnknownVersionError } from '../../../common/errors'
import {
    acceptCurator,
    unassignCurator,
    proposeCurator
} from '../../../types/bounties/calls'
import { ProcessorContext } from '../../../processor'

import { Store } from '@subsquid/typeorm-store'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorData(ctx: ProcessorContext<Store>, itemCall: any): AccepterCuratorData {
    if (acceptCurator.v40.is(itemCall)) {
        const { bountyId } = acceptCurator.v40.decode(itemCall)
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

export function getUnassingCuratorData(ctx: ProcessorContext<Store>, itemCall: any): UnassingCuratorData {
    if (unassignCurator.v40.is(itemCall)) {
        const { bountyId } = unassignCurator.v40.decode(itemCall)
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

export function getProposeCuratorData(ctx: ProcessorContext<Store>, itemCall: any): ProposeCuratorData {
    if (proposeCurator.v40.is(itemCall)) {
        const { bountyId, fee, curator } = proposeCurator.v40.decode(itemCall)

        return {
            index: bountyId,
            fee,
            curator: curator.__kind != "Index" ? curator.value : undefined
        }
    }else {
        throw new UnknownVersionError(itemCall.name)
    }
}
