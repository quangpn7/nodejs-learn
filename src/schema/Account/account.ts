import mongoose, { InferSchemaType } from "mongoose";
import { AppSchema } from "../../connectDB";
import { ACCOUNT_COLLECTION_NAME, ACCOUNT_DEFINITION } from "./definition";

const AccountSchema = new AppSchema(ACCOUNT_DEFINITION, {
  collection: ACCOUNT_COLLECTION_NAME,
});

export type UserAuthType = InferSchemaType<typeof AccountSchema>;

const AccountModel = mongoose.model("AccountSchema", AccountSchema);

export { AccountModel };
