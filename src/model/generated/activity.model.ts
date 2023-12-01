import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {ActivityType} from "./_activityType"
import {Proposal} from "./proposal.model"
import {Announcements} from "./announcements.model"
import {SalaryCycle} from "./salaryCycle.model"
import {Payout} from "./payout.model"
import {MetaActions} from "./metaActions.model"
import {Vote} from "./vote.model"

@Entity_()
export class Activity {
    constructor(props?: Partial<Activity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("varchar", {length: 17, nullable: false})
    type!: ActivityType

    @Index_()
    @Column_("text", {nullable: true})
    who!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal | undefined | null

    @Index_()
    @ManyToOne_(() => Announcements, {nullable: true})
    announcement!: Announcements | undefined | null

    @Index_()
    @ManyToOne_(() => SalaryCycle, {nullable: true})
    salaryCycle!: SalaryCycle | undefined | null

    @Index_()
    @ManyToOne_(() => Payout, {nullable: true})
    payout!: Payout | undefined | null

    @Index_()
    @ManyToOne_(() => MetaActions, {nullable: true})
    otherActions!: MetaActions | undefined | null

    @Index_()
    @ManyToOne_(() => Vote, {nullable: true})
    vote!: Vote | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("int4", {nullable: false})
    createdAtBlock!: number
}
