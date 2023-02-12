import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'
import * as v1001 from '../../types/v1001'
import * as v1019 from '../../types/v1019'
import * as v2110 from '../../types/v2110'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
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
    hash: Uint8Array
    threshold: Threshold
    delay: number
}

type ReferendumStorageData = FinishedReferendumData | OngoingReferendumData

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<ReferendumStorageData | undefined> {
    const storage = new DemocracyReferendumInfoOfStorage(ctx, block)
    if(storage.isV1001){
        const storageData = await storage.asV1001.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposalHash, end, delay, threshold } = (storageData as v1001.ReferendumInfo_Ongoing).value
            return {
                status,
                hash: proposalHash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v1001.ReferendumInfo_Finished).value
            return {
                status,
                end,
                approved,
            }
        }

    }else if(storage.isV1019){
        const storageData = await storage.asV1019.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposalHash, end, delay, threshold } = (storageData as v1019.ReferendumInfo_Ongoing).value
            return {
                status,
                hash: proposalHash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v1019.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }

    }
    else if(storage.isV2110){
        const storageData = await storage.asV2110.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            let hash
            const { proposal, end, delay, threshold } = (storageData as v2110.ReferendumInfo_Ongoing).value
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
            const { end, approved } = storageData as v2110.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }

    }
     else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getReferendumInfoOf(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock) {
    return await getStorageData(ctx, index, block)
}
