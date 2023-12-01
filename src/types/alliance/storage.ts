import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as collectivesV9290 from '../collectivesV9290'

export const announcements =  {
    /**
     *  The current IPFS CIDs of any announcements.
     */
    collectivesV9290: new StorageType('Alliance.Announcements', 'Default', [], sts.array(() => collectivesV9290.Cid)) as AnnouncementsCollectivesV9290,
}

/**
 *  The current IPFS CIDs of any announcements.
 */
export interface AnnouncementsCollectivesV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): collectivesV9290.Cid[]
    get(block: Block): Promise<(collectivesV9290.Cid[] | undefined)>
}

export const unscrupulousAccounts =  {
    /**
     *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
     *  candidacy.
     */
    collectivesV9290: new StorageType('Alliance.UnscrupulousAccounts', 'Default', [], sts.array(() => collectivesV9290.AccountId32)) as UnscrupulousAccountsCollectivesV9290,
}

/**
 *  The current list of accounts deemed unscrupulous. These accounts non grata cannot submit
 *  candidacy.
 */
export interface UnscrupulousAccountsCollectivesV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): collectivesV9290.AccountId32[]
    get(block: Block): Promise<(collectivesV9290.AccountId32[] | undefined)>
}

export const unscrupulousWebsites =  {
    /**
     *  The current list of websites deemed unscrupulous.
     */
    collectivesV9290: new StorageType('Alliance.UnscrupulousWebsites', 'Default', [], sts.array(() => sts.bytes())) as UnscrupulousWebsitesCollectivesV9290,
}

/**
 *  The current list of websites deemed unscrupulous.
 */
export interface UnscrupulousWebsitesCollectivesV9290  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}
