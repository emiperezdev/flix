import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const db = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await db.user.findMany();
  res.json(users);
};