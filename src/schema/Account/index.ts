import { AccountModel } from "./account";

AccountModel.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
