import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { referendumInfoOf } from '../../types/democracy/storage'
import * as v273 from '../../types/v273'
import * as v274 from '../../types/v274'
import * as v283 from '../../types/v283'

import { Store } from '@subsquid/typeorm-store'

type Threshold = 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority'

type FinishedReferendumData = {
    status: 'Finished'
    approved: boolean
    end: number
}

type OngoingReferendumData = {
    status: 'Ongoing'
    end: number
    hash: string
    threshold: Threshold
    delay: number
}

type ReferendumStorageData = FinishedReferendumData | OngoingReferendumData

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: ProcessorContext<Store>, index: number, block: any): Promise<ReferendumStorageData | undefined> {
    if (referendumInfoOf.v273.is(block)) {
        const storageData = await referendumInfoOf.v273.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v273.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v273.ReferendumInfo_Finished).value
            return {
                status,
                end,
                approved,
            }
        }
    } else if (referendumInfoOf.v274.is(block)) {
        const storageData = await referendumInfoOf.v274.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v274.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v274.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    }else if (referendumInfoOf.v283.is(block)) {
        const storageData = await referendumInfoOf.v283.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposal, end, delay, threshold } = (storageData as v283.ReferendumInfo_Ongoing).value
            return {
                status,
                hash: proposal.__kind != "Inline" ? proposal.hash : proposal.value,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v283.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    }
     else {
        throw new UnknownVersionError("Democracy.ReferendumInfoOf")
    }
}

export async function getReferendumInfoOf(ctx: ProcessorContext<Store>, index: number, block: any) {
    return await getStorageData(ctx, index, block)
}
