import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, OneToOne as OneToOne_} from "@subsquid/typeorm-store"
import {Identity} from "./identity.model"
import {IdentitySub} from "./identitySub.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    publicKey!: string

    @OneToOne_(() => Identity, e => e.account)
    identity!: Identity | undefined | null

    @OneToOne_(() => IdentitySub, e => e.account)
    sub!: IdentitySub | undefined | null
}
