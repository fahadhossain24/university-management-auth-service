import { Request, Response } from 'express'
import userService from './user.services'

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const createdUser = await userService.createUserService(req.body)
    if (!createdUser) {
      res.status(400).json({
        success: false,
        message: 'User creation failed',
      })
    }
    res.status(200).json({
      success: true,
      message: 'User successfully created',
      data: createdUser,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}

export default {
  createUser,
}
