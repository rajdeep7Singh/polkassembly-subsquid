import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v10038: new StorageType('OpenGovBalances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV10038,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV10038  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v10038: new StorageType('OpenGovBalances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV10038,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV10038  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
