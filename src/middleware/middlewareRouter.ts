import express from "express";
import { authenticateMiddleware } from "./auth/auth";

const authRouter = express.Router();

authRouter.get("/");

export default authRouter;
