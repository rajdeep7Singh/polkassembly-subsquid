import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Identity} from "./identity.model"
import {JudgementRequestStatus} from "./_judgementRequestStatus"

@Entity_()
export class JudgementRequest {
    constructor(props?: Partial<JudgementRequest>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Identity, {nullable: true})
    identity!: Identity

    @Index_()
    @IntColumn_({nullable: false})
    registrarIndex!: number

    @Column_("varchar", {length: 9, nullable: false})
    status!: JudgementRequestStatus

    @StringColumn_({nullable: true})
    extrinsicIndex!: string | undefined | null

    @Index_()
    @IntColumn_({nullable: false})
    createdAtBlock!: number

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: false})
    updatedAtBlock!: number

    @DateTimeColumn_({nullable: false})
    updatedAt!: Date
}
