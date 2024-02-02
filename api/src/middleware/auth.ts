import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import RequestDto from "../schemas/request.schema";
import { SECRET } from "../start/config";

const auth = (req: RequestDto, res: Response, next: NextFunction) => {
  const {token} = req.cookies;
  if (!token) return res.status(401).json('Access denied. No token provided.');

  try {
    const user = jwt.verify(token, SECRET as string);
    req.user = user;
    next();
  } catch(e) {
    return res.status(400).json('Invalid token');
  }
};

export default auth;