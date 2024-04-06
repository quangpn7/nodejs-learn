import express from "express";

const middlewareRouter = express.Router();

middlewareRouter.get(
  "/",
  (_, __, next) => {
    console.log("door_1");
    next();
  },
  (_, __, next) => {
    console.log("door_2");
    next();
  },
  (_, res, next) => {
    console.log("door_3");
    res.json({
      status: "Passed all",
    });
  }
);

export default middlewareRouter;
