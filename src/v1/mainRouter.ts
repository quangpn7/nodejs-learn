import express from "express";
const router = express.Router();

router.get("/", (_, res) => {
  res.json("Home Router");
});

router.get("/product", (_, res) => {
  res.json({
    name: "iPhone",
  });
});

router.get("/cart", (_, res) => {
  res.json("Cart Router");
});

export default router;
