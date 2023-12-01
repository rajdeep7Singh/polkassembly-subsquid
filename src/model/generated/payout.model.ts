import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {SalaryCycle} from "./salaryCycle.model"

@Entity_()
export class Payout {
    constructor(props?: Partial<Payout>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => SalaryCycle, {nullable: true})
    cycleIndex!: SalaryCycle | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    who!: string

    @Index_()
    @Column_("text", {nullable: false})
    beneficiary!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amount!: bigint | undefined | null

    @Column_("int4", {nullable: true})
    rank!: number | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Column_("text", {nullable: false})
    extrinsicIndex!: string
}
