import mongoose from "mongoose";
import { AppSchema } from "../../connectDB";
import { ACCOUNT_COLLECTION_NAME, ACCOUNT_DEFINITION } from "./definition";

const AccountSchema = new AppSchema(ACCOUNT_DEFINITION, {
  collection: ACCOUNT_COLLECTION_NAME,
});

const AccountModel = mongoose.model("AccountSchema", AccountSchema);

export { AccountModel };
