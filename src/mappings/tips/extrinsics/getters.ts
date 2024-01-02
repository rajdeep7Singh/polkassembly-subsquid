import { UnknownVersionError } from '../../../common/errors'
import {
    tip
} from '../../../types/tips/calls'

interface AccepterCuratorData {
    hash: string,
    tipValue: bigint,
}

export function getTipsTipData(itemCall: any): AccepterCuratorData {
    if (tip.v10700.is(itemCall)) {
        const { hash, tipValue } = tip.v10700.decode(itemCall)
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}
