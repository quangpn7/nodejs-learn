const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const app = express();

// watcher
app.use(morgan("combined"));

// engine

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
