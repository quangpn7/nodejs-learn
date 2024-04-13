const StringArray = [{ type: String }];

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

const BOOK_COLLECTION_NAME = "Books";

export { BOOK_COLLECTION_NAME, BOOK_DEFINITION };
