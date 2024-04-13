import express from "express";
import dotenv from "dotenv";
import mainRouter from "./v1/mainRouter";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use("/v1/", mainRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
