import { Instance2CollectiveProposalOfStorage, TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { Call } from '../../types/v2080'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'

type TechnicalCommitteeProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx, block)
    console.log(await ctx._chain.getStorage(block.hash, 'Instance2Collective', 'ProposalOf', hash))
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'Instance2Collective', 'ProposalOf', hash)
    // console.log('storageV1000', storage.isV1000, await storage.asV1000.get(hash))

    // if (storage.isV1000) {
    //     return (await storage.asV1000.get(hash)) as Call
    // } else if (storage.isV1001) {
    //     return (await storage.asV1001.get(hash)) as Call
    // } else if (storage.isV1002) {
    //     return (await storage.asV1002.get(hash)) as Call
    // } else if (storage.isV1003) {
    //     return (await storage.asV1003.get(hash)) as Call
    // }else if (storage.isV1005) {
    //     return (await storage.asV1005.get(hash)) as Call
    // }else if (storage.isV1007) {
    //     return (await storage.asV1007.get(hash)) as Call
    // }else if (storage.isV1008) {
    //     return (await storage.asV1008.get(hash)) as Call
    // }else if (storage.isV1009) {
    //     return (await storage.asV1009.get(hash)) as Call
    // }else if (storage.isV1010) {
    //     return (await storage.asV1010.get(hash)) as Call
    // }else if (storage.isV1011) {
    //     return (await storage.asV1011.get(hash)) as Call
    // }else if (storage.isV1014) {
    //     return (await storage.asV1014.get(hash)) as Call
    // }else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

async function getCoucilStorageData(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx, block)
    // console.log('new councilstorage', storage, storage.isExists)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'TechnicalCommittee', 'ProposalOf', hash)

    // if (storage.isV9111) {
    //     return (await storage.getAsV9111(hash)) as Call
    // } else if (storage.isV9122) {
    //     return (await storage.getAsV9122(hash)) as Call
    // } else if (storage.isV9130) {
    //     return (await storage.getAsV9130(hash)) as Call
    // } else if (storage.isV9160) {
    //     return (await storage.getAsV9160(hash)) as Call
    // } else if (storage.isV9170) {
    //     return (await storage.getAsV9170(hash)) as Call
    // } else if (storage.isV9180) {
    //     return (await storage.getAsV9180(hash)) as Call
    // } else if (storage.isV9190) {
    //     return (await storage.getAsV9190(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

export async function getProposalOf(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block)) || (await getInstanceStorageData(ctx, hash, block))
}
