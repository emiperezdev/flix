import { User } from "@prisma/client";
import Joi from "joi";

const validateUser = (user: User) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    last_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().min(13).max(50).required(),
    password: Joi.string().min(4).max(50).required(),
    isAdmin: Joi.boolean().optional(),
  });

  return schema.validate(user);
};

export default validateUser;
