import BookModel from "./definition";

const getAllBook = async () => {
  const result = await BookModel.find()
    .then((data) => data)
    .catch(() => []);

  return result;
};

export { getAllBook };
