/**
 * This enum matches Polkassembly BE
 *
 * @export
 * @enum {string}
 */
export enum EGovEvent {
  PROPOSAL_CREATED = "PROPOSAL_CREATED",
  PROPOSAL_ENDED = "PROPOSAL_ENDED",
  VOTED = "VOTED",
  BOUNTY_CLAIMED = "BOUNTY_CLAIMED",
  DECISION_DEPOSIT_PLACED = "DECISION_DEPOSIT_PLACED",
  REMOVED_VOTE = "REMOVED_VOTE",
  TIPPED = 'TIPPED',
}
