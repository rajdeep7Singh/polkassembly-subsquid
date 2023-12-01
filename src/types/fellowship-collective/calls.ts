import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9420 from '../v9420'

export const addMember =  {
    name: 'FellowshipCollective.add_member',
    /**
     * Introduce a new member.
     * 
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of non-member which will become a member.
     * - `rank`: The rank to give the new member.
     * 
     * Weight: `O(1)`
     */
    v9420: new CallType(
        'FellowshipCollective.add_member',
        sts.struct({
            who: v9420.MultiAddress,
        })
    ),
}

export const promoteMember =  {
    name: 'FellowshipCollective.promote_member',
    /**
     * Increment the rank of an existing member by one.
     * 
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of existing member.
     * 
     * Weight: `O(1)`
     */
    v9420: new CallType(
        'FellowshipCollective.promote_member',
        sts.struct({
            who: v9420.MultiAddress,
        })
    ),
}

export const demoteMember =  {
    name: 'FellowshipCollective.demote_member',
    /**
     * Decrement the rank of an existing member by one. If the member is already at rank zero,
     * then they are removed entirely.
     * 
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of existing member of rank greater than zero.
     * 
     * Weight: `O(1)`, less if the member's index is highest in its rank.
     */
    v9420: new CallType(
        'FellowshipCollective.demote_member',
        sts.struct({
            who: v9420.MultiAddress,
        })
    ),
}

export const removeMember =  {
    name: 'FellowshipCollective.remove_member',
    /**
     * Remove the member entirely.
     * 
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of existing member of rank greater than zero.
     * - `min_rank`: The rank of the member or greater.
     * 
     * Weight: `O(min_rank)`.
     */
    v9420: new CallType(
        'FellowshipCollective.remove_member',
        sts.struct({
            who: v9420.MultiAddress,
            minRank: sts.number(),
        })
    ),
}

export const vote =  {
    name: 'FellowshipCollective.vote',
    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * - `origin`: Must be `Signed` by a member account.
     * - `poll`: Index of a poll which is ongoing.
     * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
     * 
     * Transaction fees are be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * 
     * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
     */
    v9420: new CallType(
        'FellowshipCollective.vote',
        sts.struct({
            poll: sts.number(),
            aye: sts.boolean(),
        })
    ),
}
