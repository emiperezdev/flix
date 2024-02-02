import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { LoginDto } from "../schemas/login.schema";
import bcrypt from "bcrypt";
import createAccessToken from "../libs/jwt";
import authRouter from "../routes/auth.routes";
import RequestDto from "../schemas/request.schema";

const db = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as LoginDto;

  const foundUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!foundUser) return res.status(400).send("Invalid email");

  const validPassword = await bcrypt.compare(password, foundUser.password);
  if (!validPassword) return res.status(400).send("Wrong password");

  const userData = {
    id: foundUser.id,
    name: foundUser.name,
    last_name: foundUser.last_name,
    email: foundUser.email,
    isAdmin: foundUser.isAdmin,
  };

  const token = createAccessToken(userData);

  res.cookie("token", token);
  res.json(userData);
};

export const logout = (req: Request, res: Response) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  res.sendStatus(200);
};

export const verify = (req: RequestDto, res: Response) => {
  res.json(req.user);
}