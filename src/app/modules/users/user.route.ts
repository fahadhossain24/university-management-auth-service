import express from 'express'
import userController from './user.controller'

const userRouter = express.Router()

userRouter.post('/createUser', userController.createUser)

export default userRouter
