import { PrismaClient, User } from "@prisma/client";
import e, { Request, Response } from "express";
import bcrypt from "bcrypt";
import createAccessToken from "../libs/jwt";

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
  if (!foundUser) return userNotFound(res);

  res.json(foundUser);
};

export const postUser = async (req: Request, res: Response) => {
  const { name, last_name, email, password, isAdmin } = req.body as User;

  const foundUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });
  if (foundUser) return res.status(400).json("Email is already in use");

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

  const userData = {
    id: newUser.id,
    name: name,
    last_name: last_name,
    email: email,
    isAdmin: isAdmin,
  };

  const token = createAccessToken(userData);

  res.cookie("token", token);
  res.json(userData);
};

export const updatedUser = async (req: Request, res: Response) => {
  const { name, last_name, email, password, isAdmin } = req.body as User;

  const foundUser = await db.user.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!foundUser) return userNotFound(res);

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const updatedUser = await db.user.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: name,
      last_name: last_name,
      email: email,
      password: encryptedPassword,
      isAdmin: isAdmin,
    },
  });

  res.json({
    id: updatedUser.id,
    name: updatedUser.name,
    last_name: updatedUser.last_name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await db.user.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.json(deletedUser);
  } catch (e: any) {
    if (e.code === "P2025") return res.sendStatus(204);
  }
};

const userNotFound = (res: Response) => {
  return res.status(404).json("User not found");
};
