import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Proposal} from "./proposal.model"
import {VoteDecision} from "./_voteDecision"
import {VoteBalance, fromJsonVoteBalance} from "./_voteBalance"
import {ConvictionDelegatedVotes} from "./convictionDelegatedVotes.model"
import {VoteType} from "./_voteType"

@Entity_()
export class ConvictionVote {
    constructor(props?: Partial<ConvictionVote>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    voter!: string | undefined | null

    @Column_("text", {nullable: false})
    proposalId!: string

    @Index_()
    @Column_("int4", {nullable: false})
    proposalIndex!: number

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @Index_()
    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Index_()
    @Column_("int4", {nullable: true})
    removedAtBlock!: number | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    removedAt!: Date | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    selfVotingPower!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    delegatedVotingPower!: bigint | undefined | null

    @Column_("text", {nullable: true})
    extrinsicIndex!: string | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    totalVotingPower!: bigint | undefined | null

    @Index_()
    @Column_("varchar", {length: 12, nullable: false})
    decision!: VoteDecision

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : fromJsonVoteBalance(obj)}, nullable: false})
    balance!: VoteBalance

    @Column_("int4", {nullable: true})
    lockPeriod!: number | undefined | null

    @OneToMany_(() => ConvictionDelegatedVotes, e => e.delegatedTo)
    delegatedVotes!: ConvictionDelegatedVotes[]

    @Column_("varchar", {length: 17, nullable: false})
    type!: VoteType
}
