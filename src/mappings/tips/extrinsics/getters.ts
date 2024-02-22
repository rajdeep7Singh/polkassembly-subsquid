import { UnknownVersionError } from '../../../common/errors'
import {
    tip
} from '../../../types/tips/calls'

interface AccepterCuratorData {
    hash: string,
    tipValue: bigint,
}

export function getTipsTipData(itemCall: any): AccepterCuratorData {
    if (tip.v9300.is(itemCall)) {
        const { hash, tipValue } = tip.v9300.decode(itemCall)
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}