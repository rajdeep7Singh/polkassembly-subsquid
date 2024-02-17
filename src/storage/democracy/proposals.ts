import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'
import { publicProps } from '../../types/democracy/storage'
import { Store } from '@subsquid/typeorm-store'

interface DemocracyProposalStorageData {
    index: number
    hash: string
    proposer: string
}

async function getStorageData(ctx: ProcessorContext<Store>, block: any): Promise<DemocracyProposalStorageData[] | undefined> {
    if (publicProps.v273.is(block)) {
        const storageData = await publicProps.v273.get(block)
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            return {
                index,
                hash,
                proposer,
            }
        })
    } else if (publicProps.v283.is(block)) {
        const storageData = await publicProps.v283.get(block)
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, bounded, proposer] = proposal
            return {
                index,
                hash: bounded.__kind != "Inline" ? bounded.hash : bounded.value,
                proposer,
            }
        })
    } else {
        throw new UnknownVersionError("Democracy.publicProps")
    }
}

export async function getProposals(ctx: ProcessorContext<Store>, block: any) {
    return await getStorageData(ctx, block)
}
