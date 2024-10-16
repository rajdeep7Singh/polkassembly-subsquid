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
    if (tip.v28.is(itemCall)) {
        const { hash, tipValue } = tip.v28.decode(itemCall)
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}

export function getTreasuryTipData(itemCall: any): AccepterCuratorData {
    if (TreasuryTipCall.v0.is(itemCall)) {
        const { hash, tipValue } = TreasuryTipCall.v0.decode(itemCall)
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(itemCall.name)
    }
}