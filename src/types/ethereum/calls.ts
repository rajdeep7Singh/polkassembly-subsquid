import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v40 from '../v40'
import * as v1200 from '../v1200'

export const transact =  {
    name: 'Ethereum.transact',
    /**
     *  Transact an Ethereum transaction.
     */
    v40: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v40.EthTransaction,
        })
    ),
    /**
     * Transact an Ethereum transaction.
     */
    v1200: new CallType(
        'Ethereum.transact',
        sts.struct({
            transaction: v1200.TransactionV2,
        })
    ),
}
