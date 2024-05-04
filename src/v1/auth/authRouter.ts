import express from "express";
import { AccountModel } from "../../schema/Account/account";
import { isExistedUser } from "./utils/routerUtils";
import { responseFail, responseSuccess } from "../../utils/utils";

const authRouter = express.Router();

authRouter.get("/", async (request, response) => {
  const { username, password } = request.body;
  const data = await AccountModel.findOne({
    username,
    password,
  });

  if (data) {
    return responseSuccess(response, { data });
  }

  return responseFail(response);
});

authRouter.post("/", async (request, response) => {
  const { username, password } = request.body;
  if (username && password) {
    const isExisted = await isExistedUser({ username, password });
    if (!isExisted) {
      const data = await AccountModel.create({
        username,
        password,
      });

      return response.status(200).json({
        message: "GENERATED",
        data,
      });
    }
  }
  return response.status(500).json({
    message: "GENERATED FAILED",
    data: {},
  });
});

authRouter.put("/", (request, response) => {
  return response.json({ mes: "PUT" });
});

authRouter.delete("/", (request, response) => {
  return response.json({ mes: "DELETE" });
});

export default authRouter;
