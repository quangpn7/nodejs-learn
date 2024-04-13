import mongoose from "mongoose";
import { AppSchema } from "../../connectDB";
import { BOOK_COLLECTION_NAME, BOOK_DEFINITION } from "./definition";

const BookSchema = new AppSchema(BOOK_DEFINITION, {
  collection: BOOK_COLLECTION_NAME,
});

const BookModel = mongoose.model("BookSchema", BookSchema);

export { BookModel };
