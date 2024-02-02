import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const db = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await db.user.findMany();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const foundUser = await db.user.findFirst({
    where: {
      id: parseInt(req.params.id)
    }
  });
  if (!foundUser) return res.status(404).json('User not found');

  res.json(foundUser);
};