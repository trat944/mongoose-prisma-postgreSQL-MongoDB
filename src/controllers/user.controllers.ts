import { Request, Response } from "express";
import UserModel from "../model/user.model";
import prisma from "../db/client";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    console.log('new user')
    const newUser = await prisma.user.create({
      data:{ name, email, password }
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.find().populate("movies");
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};