module.exports = class Data1727706299706 {
    name = 'Data1727706299706'

    async up(db) {
        await db.query(`CREATE TABLE "judgement_request" ("id" character varying NOT NULL, "registrar_index" integer NOT NULL, "status" character varying(9) NOT NULL, "extrinsic_index" text, "created_at_block" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at_block" integer NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "identity_id" character varying, CONSTRAINT "PK_2e648d09e0e92d43ae1f99fa9c7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b6603e9e1129fedebd3f7b6276" ON "judgement_request" ("identity_id") `)
        await db.query(`CREATE INDEX "IDX_79c2e44edd0efd5244a8623a2e" ON "judgement_request" ("registrar_index") `)
        await db.query(`CREATE INDEX "IDX_0a213f2e22550459c5ff525160" ON "judgement_request" ("created_at_block") `)
        await db.query(`CREATE INDEX "IDX_8a5d7fee868353fb4e34b4dc3e" ON "judgement_request" ("created_at") `)
        await db.query(`CREATE TABLE "identity_sub" ("id" character varying NOT NULL, "name" text, "extrinsic_index" text, "created_at_block" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at_block" integer NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "super_id" character varying, "account_id" character varying, CONSTRAINT "REL_20df08516f386a2d403fe66150" UNIQUE ("account_id"), CONSTRAINT "PK_56b60575c4d8f8fa3caa1fbe92a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b3110339d38dddff279f6f7712" ON "identity_sub" ("super_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_20df08516f386a2d403fe66150" ON "identity_sub" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_bc520abebacc52b49591ec9536" ON "identity_sub" ("created_at_block") `)
        await db.query(`CREATE INDEX "IDX_49d3631ea4dbbff6d94c52d514" ON "identity_sub" ("created_at") `)
        await db.query(`CREATE TABLE "identity" ("id" character varying NOT NULL, "judgement" character varying(10) NOT NULL, "additional" jsonb, "display" text, "legal" text, "web" text, "riot" text, "email" text, "pgp_fingerprint" text, "image" text, "twitter" text, "is_killed" boolean NOT NULL, "extrinsic_index" text, "created_at_block" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at_block" integer NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, CONSTRAINT "REL_bafa9e6c71c3f69cef6602a809" UNIQUE ("account_id"), CONSTRAINT "PK_ff16a44186b286d5e626178f726" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_bafa9e6c71c3f69cef6602a809" ON "identity" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_95d65267120c275a3073d905cd" ON "identity" ("created_at_block") `)
        await db.query(`CREATE INDEX "IDX_eda2ef8b1da50af259877271db" ON "identity" ("created_at") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "public_key" text NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_34e5683537bbd7627b0e9469b8" ON "account" ("public_key") `)
        await db.query(`ALTER TABLE "judgement_request" ADD CONSTRAINT "FK_b6603e9e1129fedebd3f7b62764" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "identity_sub" ADD CONSTRAINT "FK_b3110339d38dddff279f6f77127" FOREIGN KEY ("super_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "identity_sub" ADD CONSTRAINT "FK_20df08516f386a2d403fe66150a" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "identity" ADD CONSTRAINT "FK_bafa9e6c71c3f69cef6602a8095" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "judgement_request"`)
        await db.query(`DROP INDEX "public"."IDX_b6603e9e1129fedebd3f7b6276"`)
        await db.query(`DROP INDEX "public"."IDX_79c2e44edd0efd5244a8623a2e"`)
        await db.query(`DROP INDEX "public"."IDX_0a213f2e22550459c5ff525160"`)
        await db.query(`DROP INDEX "public"."IDX_8a5d7fee868353fb4e34b4dc3e"`)
        await db.query(`DROP TABLE "identity_sub"`)
        await db.query(`DROP INDEX "public"."IDX_b3110339d38dddff279f6f7712"`)
        await db.query(`DROP INDEX "public"."IDX_20df08516f386a2d403fe66150"`)
        await db.query(`DROP INDEX "public"."IDX_bc520abebacc52b49591ec9536"`)
        await db.query(`DROP INDEX "public"."IDX_49d3631ea4dbbff6d94c52d514"`)
        await db.query(`DROP TABLE "identity"`)
        await db.query(`DROP INDEX "public"."IDX_bafa9e6c71c3f69cef6602a809"`)
        await db.query(`DROP INDEX "public"."IDX_95d65267120c275a3073d905cd"`)
        await db.query(`DROP INDEX "public"."IDX_eda2ef8b1da50af259877271db"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_34e5683537bbd7627b0e9469b8"`)
        await db.query(`ALTER TABLE "judgement_request" DROP CONSTRAINT "FK_b6603e9e1129fedebd3f7b62764"`)
        await db.query(`ALTER TABLE "identity_sub" DROP CONSTRAINT "FK_b3110339d38dddff279f6f77127"`)
        await db.query(`ALTER TABLE "identity_sub" DROP CONSTRAINT "FK_20df08516f386a2d403fe66150a"`)
        await db.query(`ALTER TABLE "identity" DROP CONSTRAINT "FK_bafa9e6c71c3f69cef6602a8095"`)
    }
}
