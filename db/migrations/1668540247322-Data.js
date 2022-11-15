module.exports = class Data1668540247322 {
  name = 'Data1668540247322'

  async up(db) {
    await db.query(`CREATE TABLE "preimage" ("id" character varying NOT NULL, "proposer" text, "hash" text NOT NULL, "proposed_call" jsonb, "section" text, "method" text, "status" character varying(11) NOT NULL, "created_at_block" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at_block" integer, "updated_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_dff8526c5d16d71afbefb55b286" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_c6e9bc6f69c924e85a44174d35" ON "preimage" ("hash") `)
    await db.query(`CREATE INDEX "IDX_8961b767f111466724025930b0" ON "preimage" ("created_at_block") `)
    await db.query(`CREATE INDEX "IDX_146c48e4f4bf54acb708686897" ON "preimage" ("created_at") `)
    await db.query(`CREATE TABLE "vote" ("id" character varying NOT NULL, "voter" text, "proposal_id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "decision" character varying(7), "balance" jsonb, "lock_period" integer, "type" character varying(10), CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_db85a3f8526cbaa2865faf8637" ON "vote" ("proposal_id") `)
    await db.query(`CREATE INDEX "IDX_6d54f04fc9dd3a4c15cb607c9e" ON "vote" ("block_number") `)
    await db.query(`CREATE INDEX "IDX_8d701dbd422ac5e3e1d7a9a0d1" ON "vote" ("timestamp") `)
    await db.query(`CREATE TABLE "status_history" ("id" character varying NOT NULL, "status" character varying(11) NOT NULL, "block" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "proposal_id" character varying, CONSTRAINT "PK_271a5228edb4eeb41bc01d58fac" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_6ecfec106cbaabdc5ac1bb4fbf" ON "status_history" ("proposal_id") `)
    await db.query(`CREATE TABLE "proposal" ("id" character varying NOT NULL, "type" character varying(21) NOT NULL, "hash" text, "index" integer, "proposer" text, "deposit" numeric, "threshold" jsonb, "curator" text, "payee" text, "reward" numeric, "status" character varying(11) NOT NULL, "created_at_block" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "ended_at_block" integer, "ended_at" TIMESTAMP WITH TIME ZONE, "updated_at_block" integer, "updated_at" TIMESTAMP WITH TIME ZONE, "preimage_id" character varying, CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_788a2da76636d59b8803d21968" ON "proposal" ("type") `)
    await db.query(`CREATE INDEX "IDX_8a5d128863df341f83f7ae4974" ON "proposal" ("hash") `)
    await db.query(`CREATE INDEX "IDX_081891a0598db72dd59758cfae" ON "proposal" ("index") `)
    await db.query(`CREATE INDEX "IDX_73ae2cd51401d164204182bd69" ON "proposal" ("preimage_id") `)
    await db.query(`CREATE INDEX "IDX_f165403894de704708157f7cdb" ON "proposal" ("created_at_block") `)
    await db.query(`CREATE INDEX "IDX_92d4592195fbffd27d2079c0d5" ON "proposal" ("created_at") `)
    await db.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_db85a3f8526cbaa2865faf8637f" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "status_history" ADD CONSTRAINT "FK_6ecfec106cbaabdc5ac1bb4fbf4" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "proposal" ADD CONSTRAINT "FK_73ae2cd51401d164204182bd690" FOREIGN KEY ("preimage_id") REFERENCES "preimage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "preimage"`)
    await db.query(`DROP INDEX "public"."IDX_c6e9bc6f69c924e85a44174d35"`)
    await db.query(`DROP INDEX "public"."IDX_8961b767f111466724025930b0"`)
    await db.query(`DROP INDEX "public"."IDX_146c48e4f4bf54acb708686897"`)
    await db.query(`DROP TABLE "vote"`)
    await db.query(`DROP INDEX "public"."IDX_db85a3f8526cbaa2865faf8637"`)
    await db.query(`DROP INDEX "public"."IDX_6d54f04fc9dd3a4c15cb607c9e"`)
    await db.query(`DROP INDEX "public"."IDX_8d701dbd422ac5e3e1d7a9a0d1"`)
    await db.query(`DROP TABLE "status_history"`)
    await db.query(`DROP INDEX "public"."IDX_6ecfec106cbaabdc5ac1bb4fbf"`)
    await db.query(`DROP TABLE "proposal"`)
    await db.query(`DROP INDEX "public"."IDX_788a2da76636d59b8803d21968"`)
    await db.query(`DROP INDEX "public"."IDX_8a5d128863df341f83f7ae4974"`)
    await db.query(`DROP INDEX "public"."IDX_081891a0598db72dd59758cfae"`)
    await db.query(`DROP INDEX "public"."IDX_73ae2cd51401d164204182bd69"`)
    await db.query(`DROP INDEX "public"."IDX_f165403894de704708157f7cdb"`)
    await db.query(`DROP INDEX "public"."IDX_92d4592195fbffd27d2079c0d5"`)
    await db.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_db85a3f8526cbaa2865faf8637f"`)
    await db.query(`ALTER TABLE "status_history" DROP CONSTRAINT "FK_6ecfec106cbaabdc5ac1bb4fbf4"`)
    await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_73ae2cd51401d164204182bd690"`)
  }
}
