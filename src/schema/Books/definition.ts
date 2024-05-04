import mongoose, { InferSchemaType } from "mongoose";
import { AppSchema } from "../../connectDB";

// export type BookSchema = {
//   _id: number;
//   title: string;
//   isbn: string;
//   pageCount: number;
//   publishedDate: PublishedDate;
//   thumbnailUrl: string;
//   shortDescription: string;
//   longDescription: string;
//   status: string;
//   authors: string[];
//   categories: string[];
// };

// export type PublishedDate = {
//   $date: Date;
// };
const StringArray = [{ type: String }];
const BOOK_COLLECTION_NAME = "Books";

const BOOK_DEFINITION = {
  _id: String,
  title: String,
  isbn: String,
  pageCount: Number,
  publishDate: Date,
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: StringArray,
  categories: StringArray,
};
const BookSchema = new AppSchema(BOOK_DEFINITION, {
  collection: BOOK_COLLECTION_NAME,
});

export type BookType = InferSchemaType<typeof BookSchema>;

const BookModel = mongoose.model("BookType", BookSchema);

export default BookModel;

// export { BOOK_COLLECTION_NAME, BOOK_DEFINITION };
