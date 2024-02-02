import { Request } from "express";

export default interface RequestDto extends Request {
  user?: any;
}
