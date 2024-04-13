import { Request, Response, NextFunction, RequestHandler } from "express";

const authenticateMiddleware: RequestHandler = (
  _,
  res: Response,
  next: NextFunction
) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    next();
  } else {
    res.json({
      status: "Un-authenticated",
    });
  }
};

const roleAssignMiddleware: RequestHandler = (
  req,
  res: Response,
  next: NextFunction
) => {};

export { authenticateMiddleware };
