import express, { Router } from 'express'
import { createUser, getAllUsers } from '../controllers/user.controllers';

const userRouter = Router();

userRouter.get('/', getAllUsers)
userRouter.post('/', createUser)

export default userRouter;