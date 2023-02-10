import { UnknownVersionError } from '../../../common/errors'
import {
    EthereumExecutedEvent
} from '../../../types/events'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface EthExecuted {
    success: boolean
    txnHash: Uint8Array
}

export function getExecutedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): EthExecuted {
    const event = new EthereumExecutedEvent(ctx, itemEvent)
    if (event.isV49) {
        const [from, to, transactionHash, exitReason] = event.asV49
        if (exitReason.__kind == 'Succeed') {
            return {
                success: true,
                txnHash: transactionHash
            }
        }
        else {
            return {
                success: false,
                txnHash: transactionHash
            }
        }
    } else if (event.isV1201) {
        const [from, to, transactionHash, exitReason] = event.asV1201
        if (exitReason.__kind == 'Succeed') {
            return {
                success: true,
                txnHash: transactionHash
            }
        }
        else {
            return {
                success: false,
                txnHash: transactionHash
            }
        }
    } else if (event.isV1401) {
        const [from, to, transactionHash, exitReason] = event.asV1401
        if (exitReason.__kind == 'Succeed') {
            return {
                success: true,
                txnHash: transactionHash
            }
        }
        else {
            return {
                success: false,
                txnHash: transactionHash
            }
        }
    } else if (event.isV1701) {
        const [from, to, transactionHash, exitReason] = event.asV1701
        if (exitReason.__kind == 'Succeed') {
            return {
                success: true,
                txnHash: transactionHash
            }
        }
        else {
            return {
                success: false,
                txnHash: transactionHash
            }
        }
    } else if (event.isV1801) {
        const { from, to, transactionHash, exitReason } = event.asV1801
        if (exitReason.__kind == 'Succeed') {
            return {
                success: true,
                txnHash: transactionHash
            }
        }
        else {
            return {
                success: false,
                txnHash: transactionHash
            }
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)

    }
}