import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9290 from '../v9290'

export const announced =  {
    name: 'Alliance.Announced',
    /**
     * A new announcement has been proposed.
     */
    v9290: new EventType(
        'Alliance.Announced',
        sts.struct({
            announcement: v9290.Cid,
        })
    ),
}

export const announcementRemoved =  {
    name: 'Alliance.AnnouncementRemoved',
    /**
     * An on-chain announcement has been removed.
     */
    v9290: new EventType(
        'Alliance.AnnouncementRemoved',
        sts.struct({
            announcement: v9290.Cid,
        })
    ),
}

export const unscrupulousItemAdded =  {
    name: 'Alliance.UnscrupulousItemAdded',
    /**
     * Accounts or websites have been added into the list of unscrupulous items.
     */
    v9290: new EventType(
        'Alliance.UnscrupulousItemAdded',
        sts.struct({
            items: sts.array(() => v9290.UnscrupulousItem),
        })
    ),
}

export const unscrupulousItemRemoved =  {
    name: 'Alliance.UnscrupulousItemRemoved',
    /**
     * Accounts or websites have been removed from the list of unscrupulous items.
     */
    v9290: new EventType(
        'Alliance.UnscrupulousItemRemoved',
        sts.struct({
            items: sts.array(() => v9290.UnscrupulousItem),
        })
    ),
}
