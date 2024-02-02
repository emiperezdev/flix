import { NextFunction, Request, Response } from "express";

const error = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  res.status(500).json('SOMETHING FAILED :/');
};

export default error;
