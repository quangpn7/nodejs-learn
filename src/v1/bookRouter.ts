import express from "express";
import { getAllBook } from "../schema/Books";

const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
  console.log(req.query);
  const bookResult = await getAllBook();
  res.json(bookResult);
});

export default bookRouter;
