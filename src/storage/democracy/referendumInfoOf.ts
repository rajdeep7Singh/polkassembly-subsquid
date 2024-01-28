import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { referendumInfoOf } from '../../types/democracy/storage'
import * as v266 from '../../types/v266'
import * as v295 from '../../types/v295'
import * as v48300 from '../../types/v48300'
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
    if (referendumInfoOf.v266.is(block)) {
        const storageData = await referendumInfoOf.v266.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v266.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v266.ReferendumInfo_Finished).value
            return {
                status,
                end,
                approved,
            }
        }
    } else if (referendumInfoOf.v295.is(block)) {
        const storageData = await referendumInfoOf.v295.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v295.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v295.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    }
    else if(referendumInfoOf.v48300.is(block)){
        const storageData = await referendumInfoOf.v48300.get(block, index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposal, end, delay, threshold } = (storageData as v48300.ReferendumInfo_Ongoing).value
            if(proposal.__kind == "Inline") {
                hash = proposal.value
            }
            else{
                hash = proposal.hash
            }
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v48300.ReferendumInfo_Finished
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
