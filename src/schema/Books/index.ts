import { BookModel } from "./books";

BookModel.find({})
  .then((data) => {
    console.log({ data });
  })
  .catch((e) => {
    console.log(e);
  });