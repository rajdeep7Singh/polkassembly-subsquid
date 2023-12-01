import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class SalaryCycle {
    constructor(props?: Partial<SalaryCycle>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    cycleIndex!: number

    @Index_()
    @Column_("int4", {nullable: false})
    cycleStart!: number

    @Column_("timestamp with time zone", {nullable: true})
    cycleStartDatetime!: Date | undefined | null

    @Column_("text", {nullable: true})
    extrinsicIndex!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    totalRegistrations!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    budget!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    totalUnregisteredPaid!: bigint | undefined | null
}
