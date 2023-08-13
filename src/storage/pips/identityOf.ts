import { IdentityDidKeysStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'


// eslint-disable-next-line sonarjs/cognitive-complexity
export async function getSubstrateAddressOfDid(
    ctx: BatchContext<Store, unknown>, did: Uint8Array, block: SubstrateBlock
): Promise<Uint8Array | undefined> {
    const storage = new IdentityDidKeysStorage(ctx, block)
    if (!storage.isExists) return undefined
    if(storage.isV5000003){
        const data = await storage.asV5000003.getKeys(did)
        return data[0][1]
    }
    else{
        throw new UnknownVersionError(storage.constructor.name)
    }
}
