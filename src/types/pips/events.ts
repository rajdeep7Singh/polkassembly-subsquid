import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v3000 from '../v3000'
import * as v5000003 from '../v5000003'

export const proposalCreated =  {
    name: 'Pips.ProposalCreated',
    /**
     *  A PIP was made with a `Balance` stake.
     * 
     *  # Parameters:
     * 
     *  Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
     */
    v3000: new EventType(
        'Pips.ProposalCreated',
        sts.tuple([v3000.IdentityId, v3000.Proposer, v3000.PipId, v3000.Balance, sts.option(() => v3000.Url), sts.option(() => v3000.PipDescription), v3000.MaybeBlock, v3000.ProposalData])
    ),
    /**
     * A PIP was made with a `Balance` stake.
     * 
     * # Parameters:
     * 
     * Caller DID, Proposer, PIP ID, deposit, URL, description, expiry time, proposal data.
     */
    v5000003: new EventType(
        'Pips.ProposalCreated',
        sts.tuple([v5000003.IdentityId, v5000003.Proposer, v5000003.PipId, sts.bigint(), sts.option(() => v5000003.Url), sts.option(() => v5000003.PipDescription), v5000003.MaybeBlock, v5000003.ProposalData])
    ),
}

export const proposalStateUpdated =  {
    name: 'Pips.ProposalStateUpdated',
    /**
     *  Triggered each time the state of a proposal is amended
     */
    v3000: new EventType(
        'Pips.ProposalStateUpdated',
        sts.tuple([v3000.IdentityId, v3000.PipId, v3000.ProposalState])
    ),
}

export const voted =  {
    name: 'Pips.Voted',
    /**
     *  `AccountId` voted `bool` on the proposal referenced by `PipId`
     */
    v3000: new EventType(
        'Pips.Voted',
        sts.tuple([v3000.IdentityId, v3000.AccountId, v3000.PipId, sts.boolean(), v3000.Balance])
    ),
}

export const pipClosed =  {
    name: 'Pips.PipClosed',
    /**
     *  Pip has been closed, bool indicates whether data is pruned
     */
    v3000: new EventType(
        'Pips.PipClosed',
        sts.tuple([v3000.IdentityId, v3000.PipId, sts.boolean()])
    ),
}

export const pipSkipped =  {
    name: 'Pips.PipSkipped',
    /**
     *  A PIP in the snapshot queue was skipped.
     *  (gc_did, pip_id, new_skip_count)
     */
    v3000: new EventType(
        'Pips.PipSkipped',
        sts.tuple([v3000.IdentityId, v3000.PipId, v3000.SkippedCount])
    ),
}
