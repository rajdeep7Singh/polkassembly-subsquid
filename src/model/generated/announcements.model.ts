import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {AnnouncementType} from "./_announcementType"
import {Proposal} from "./proposal.model"
import {ProposalStatus} from "./_proposalStatus"
import {StatusHistory} from "./statusHistory.model"

@Entity_()
export class Announcements {
    constructor(props?: Partial<Announcements>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    hash!: string

    @Index_()
    @Column_("int4", {nullable: true})
    index!: number | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    proposer!: string | undefined | null

    @Index_()
    @Column_("varchar", {length: 12, nullable: true})
    type!: AnnouncementType | undefined | null

    @Column_("text", {nullable: true})
    version!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    codec!: bigint | undefined | null

    @Column_("text", {nullable: true})
    cid!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal | undefined | null

    @Column_("jsonb", {nullable: true})
    announcement!: unknown | undefined | null

    @Column_("text", {nullable: true})
    digest!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    code!: bigint | undefined | null

    @Column_("bool", {nullable: true})
    isRemoved!: boolean | undefined | null

    @Column_("varchar", {length: 11, nullable: false})
    status!: ProposalStatus

    @OneToMany_(() => StatusHistory, e => e.announcement)
    statusHistory!: StatusHistory[]

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Index_()
    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    updatedAt!: Date | undefined | null

    @Index_()
    @Column_("int4", {nullable: true})
    updatedAtBlock!: number | undefined | null
}
