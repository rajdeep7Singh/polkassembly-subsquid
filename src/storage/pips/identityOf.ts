import { didKeys } from '../../types/identity/storage'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'
import { ProcessorContext } from '../../processor'


// eslint-disable-next-line sonarjs/cognitive-complexity
export async function getSubstrateAddressOfDid(
    ctx: ProcessorContext<Store>, did: string, block: any
): Promise<string | undefined> {
    if(didKeys.v5000003.is(block)){
        const data = await didKeys.v5000003.getKeys(block, did)
        return data[0][1]
    }
    else{
        console.log("no relevant version for Identity.DidKeys")
    }
}
