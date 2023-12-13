import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {FellowshipParams} from "./_fellowshipParams"

@Entity_()
export class MetaActions {
    constructor(props?: Partial<MetaActions>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: true})
    who!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amount!: bigint | undefined | null

    @Column_("bool", {nullable: true})
    isActive!: boolean | undefined | null

    @Column_("text", {nullable: true})
    evidence!: string | undefined | null

    @Column_("int4", {nullable: true})
    rank!: number | undefined | null

    @Column_("int4", {nullable: true})
    toRank!: number | undefined | null

    @Column_("bool", {nullable: true})
    showClaimButton!: boolean | undefined | null

    @Column_("bool", {nullable: true})
    evidenceJudged!: boolean | undefined | null

    @Column_("text", {nullable: true})
    wish!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new FellowshipParams(undefined, obj)}, nullable: true})
    params!: FellowshipParams | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    createdAt!: Date | undefined | null

    @Column_("int4", {nullable: true})
    createdAtBlock!: number | undefined | null

    @Column_("text", {nullable: true})
    extrinsicIndex!: string | undefined | null
}
