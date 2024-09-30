import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, OneToMany as OneToMany_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Judgement} from "./_judgement"
import {JudgementRequest} from "./judgementRequest.model"
import {IdentitySub} from "./identitySub.model"
import {IdentityAdditionalField} from "./_identityAdditionalField"

@Entity_()
export class Identity {
    constructor(props?: Partial<Identity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: true})
    @JoinColumn_()
    account!: Account

    @Column_("varchar", {length: 10, nullable: false})
    judgement!: Judgement

    @OneToMany_(() => JudgementRequest, e => e.identity)
    judgementRequests!: JudgementRequest[]

    @OneToMany_(() => IdentitySub, e => e.super)
    subs!: IdentitySub[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new IdentityAdditionalField(undefined, marshal.nonNull(val)))}, nullable: true})
    additional!: (IdentityAdditionalField)[] | undefined | null

    @StringColumn_({nullable: true})
    display!: string | undefined | null

    @StringColumn_({nullable: true})
    legal!: string | undefined | null

    @StringColumn_({nullable: true})
    web!: string | undefined | null

    @StringColumn_({nullable: true})
    riot!: string | undefined | null

    @StringColumn_({nullable: true})
    email!: string | undefined | null

    @StringColumn_({nullable: true})
    pgpFingerprint!: string | undefined | null

    @StringColumn_({nullable: true})
    image!: string | undefined | null

    @StringColumn_({nullable: true})
    twitter!: string | undefined | null

    @BooleanColumn_({nullable: false})
    isKilled!: boolean

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
