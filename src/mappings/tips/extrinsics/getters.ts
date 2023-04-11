import { UnknownVersionError } from '../../../common/errors'
import {
    TipsTipCall
} from '../../../types/calls'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

interface AccepterCuratorData {
    hash: Uint8Array,
    tipValue: bigint,
}

export function getTipsTipData(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new TipsTipCall(ctx, itemCall)
    if (call.isV108) {
        const { hash, tipValue } = call.asV108
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}