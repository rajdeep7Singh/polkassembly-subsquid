import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { referendumInfoOf } from '../../types/democracy/storage'
import * as v25 from '../../types/v25'
import * as v2800 from '../../types/v2800'
import * as v10890 from '../../types/v10890'
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
    if (referendumInfoOf.v25.is(block)) {
        const storageData = await referendumInfoOf.v25.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v25.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end: Number(end),
                delay: Number(delay),
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v25.ReferendumInfo_Finished).value
            return {
                status,
                end: Number(end),
                approved,
            }
        }
    } else if (referendumInfoOf.v2800.is(block)) {
        const storageData = await referendumInfoOf.v2800.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v2800.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end: Number(end),
                delay: Number(delay),
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v2800.ReferendumInfo_Finished
            return {
                status,
                end: Number(end),
                approved,
            }
        }
    }
    else if(referendumInfoOf.v10890.is(block)){
        const storageData = await referendumInfoOf.v10890.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposal, end, delay, threshold } = (storageData as v10890.ReferendumInfo_Ongoing).value
            if(proposal.__kind == "Inline") {
                hash = proposal.value
            }
            else{
                hash = proposal.hash
            }
            return {
                status,
                hash,
                end: Number(end),
                delay: Number(delay),
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v10890.ReferendumInfo_Finished
            return {
                status,
                end: Number(end),
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
