import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'
import * as v25 from '../../types/v25'
import * as v2800 from '../../types/v2800'
import * as v10890 from '../../types/v10890'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

type Threshold = 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority'

type FinishedReferendumData = {
    status: 'Finished'
    approved: boolean
    end: bigint
}

type OngoingReferendumData = {
    status: 'Ongoing'
    end: bigint
    hash: Uint8Array
    threshold: Threshold
    delay: bigint
}

type ReferendumStorageData = FinishedReferendumData | OngoingReferendumData

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<ReferendumStorageData | undefined> {
    const storage = new DemocracyReferendumInfoOfStorage(ctx, block)
    if (storage.isV25) {
        const storageData = await storage.asV25.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v25.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v25.ReferendumInfo_Finished).value
            return {
                status,
                end,
                approved,
            }
        }
    } else if (storage.isV2800) {
        const storageData = await storage.asV2800.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v2800.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v2800.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    } else if (storage.isV10890) {
        const storageData = await storage.asV10890.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposal, end, delay, threshold } = (storageData as v10890.ReferendumInfo_Ongoing).value
            let hash;
            if(proposal.__kind == 'Inline'){
                hash = proposal.value
            }
            else {
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
            const { end, approved } = storageData as v10890.ReferendumInfo_Finished
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
