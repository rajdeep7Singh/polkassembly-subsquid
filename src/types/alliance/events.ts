import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as collectivesV9290 from '../collectivesV9290'

export const announced =  {
    name: 'Alliance.Announced',
    /**
     * A new announcement has been proposed.
     */
    collectivesV9290: new EventType(
        'Alliance.Announced',
        sts.struct({
            announcement: collectivesV9290.Cid,
        })
    ),
}

export const announcementRemoved =  {
    name: 'Alliance.AnnouncementRemoved',
    /**
     * An on-chain announcement has been removed.
     */
    collectivesV9290: new EventType(
        'Alliance.AnnouncementRemoved',
        sts.struct({
            announcement: collectivesV9290.Cid,
        })
    ),
}

export const unscrupulousItemAdded =  {
    name: 'Alliance.UnscrupulousItemAdded',
    /**
     * Accounts or websites have been added into the list of unscrupulous items.
     */
    collectivesV9290: new EventType(
        'Alliance.UnscrupulousItemAdded',
        sts.struct({
            items: sts.array(() => collectivesV9290.UnscrupulousItem),
        })
    ),
}

export const unscrupulousItemRemoved =  {
    name: 'Alliance.UnscrupulousItemRemoved',
    /**
     * Accounts or websites have been removed from the list of unscrupulous items.
     */
    collectivesV9290: new EventType(
        'Alliance.UnscrupulousItemRemoved',
        sts.struct({
            items: sts.array(() => collectivesV9290.UnscrupulousItem),
        })
    ),
}
