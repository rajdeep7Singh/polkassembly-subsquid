import { UnknownVersionError } from '../../../common/errors'
import {
    tip
} from '../../../types/tips/calls'
import {
    tip as TreasuryTipCall
} from '../../../types/treasury/calls'

interface AccepterCuratorData {
    hash: string,
    tipValue: bigint,
}

export function getTipsTipData(itemCall: any): AccepterCuratorData {
    if (tip.v2028.is(itemCall)) {
        const { hash, tipValue } = tip.v2028.decode(itemCall)
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getTreasuryTipData(itemCall: any): AccepterCuratorData {
    if (TreasuryTipCall.v1038.is(itemCall)) {
        const { hash, tipValue } = TreasuryTipCall.v1038.decode(itemCall)
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}