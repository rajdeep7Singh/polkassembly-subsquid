import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyPublicPropsStorage } from '../../types/storage'

interface DemocracyProposalStorageData {
    index: number
    hash: Uint8Array
    proposer: Uint8Array
}

async function getStorageData(ctx: BlockContext): Promise<DemocracyProposalStorageData[] | undefined> {
    const storage = new DemocracyPublicPropsStorage(ctx)
    if (storage.isV40) {
        const storageData = await storage.getAsV40()
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            return {
                index,
                hash: hash,
                proposer,
            }
        })
    } else if (storage.isV2000) {
        const storageData = await storage.getAsV2000()
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, bounded, proposer] = proposal
            if(bounded.__kind === 'Inline'){
                return {
                    index,
                    hash: bounded.value,
                    proposer,
                }
            }
            else if (bounded.__kind === 'Legacy'){
                return {
                    index,
                    hash: bounded.hash,
                    proposer,
                }
            }
            else{
                return {
                    index,
                    hash: bounded.hash,
                    proposer,
                }
            }
        })
    }else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: BlockContext) {
    return await getStorageData(ctx)
}
