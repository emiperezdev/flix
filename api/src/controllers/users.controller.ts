import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const db = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await db.user.findMany();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const foundUser = await db.user.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!foundUser) return res.status(404).json("User not found");

  res.json(foundUser);
};

export const postUser = async (req: Request, res: Response) => {
  const { name, last_name, email, password, isAdmin } = req.body as User;

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const newUser = await db.user.create({
    data: {
      name: name,
      last_name: last_name,
      email: email,
      password: encryptedPassword,
      isAdmin: isAdmin,
    },
  });

  res.json({
    id: newUser.id,
    name: name,
    last_name: last_name,
    email: email,
    isAdmin: isAdmin,
  });
};
