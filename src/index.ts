import express from "express";
import dotenv from "dotenv";
import mainRouter from "./v1/mainRouter";
import bookRouter from "./v1/bookRouter";
import bodyParser from "body-parser";
import authRouter from "./v1/auth/authRouter";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1/", mainRouter);
app.use("/books", bookRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
