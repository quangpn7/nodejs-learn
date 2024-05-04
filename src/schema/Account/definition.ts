import { ObjectId } from "../../connectDB";

const ACCOUNT_DEFINITION = {
  username: String,
  password: String,
};

const ACCOUNT_COLLECTION_NAME = "Account";

export { ACCOUNT_DEFINITION, ACCOUNT_COLLECTION_NAME };
