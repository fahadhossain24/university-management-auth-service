import mongoose, { Model } from 'mongoose'
import { IUser } from './user.interface'

type UserModel = Model<IUser, object>

const userSchema = new mongoose.Schema<IUser>(
  {
    id: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  },
)

export const User = mongoose.model<IUser, UserModel>('User', userSchema)
