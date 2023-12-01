import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9290 from '../v9290'

export const announcements =  {
    /**
     *  The current IPFS CIDs of any announcements.
     */
    v9290: new StorageType('Alliance.Announcements', 'Default', [], sts.array(() => v9290.Cid)) as AnnouncementsV9290,
}

/**
 *  The current IPFS CIDs of any announcements.
 */
export interface AnnouncementsV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9290.Cid[]
    get(block: Block): Promise<(v9290.Cid[] | undefined)>
}

export const unscrupulousAccounts =  {
    /**
     *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
     *  candidacy.
     */
    v9290: new StorageType('Alliance.UnscrupulousAccounts', 'Default', [], sts.array(() => v9290.AccountId32)) as UnscrupulousAccountsV9290,
}

/**
 *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
 *  candidacy.
 */
export interface UnscrupulousAccountsV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9290.AccountId32[]
    get(block: Block): Promise<(v9290.AccountId32[] | undefined)>
}

export const unscrupulousWebsites =  {
    /**
     *  The current list of websites deemed unscrupulous.
     */
    v9290: new StorageType('Alliance.UnscrupulousWebsites', 'Default', [], sts.array(() => sts.bytes())) as UnscrupulousWebsitesV9290,
}

/**
 *  The current list of websites deemed unscrupulous.
 */
export interface UnscrupulousWebsitesV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}
