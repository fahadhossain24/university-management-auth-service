import { IUser } from './user.interface'
import { User } from './user.model'
import config from '../../../config'
import { generateUserId } from './user.util'

// get last user id
const getLastUserIdService = async (): Promise<string | null> => {
  const user: { id: string } = await User.findOne({})
    .sort({ createdAt: -1 })
    .select({ id: 1 })
  return user ? user.id : null
}

// create a new user
const createUserService = async (user: IUser): Promise<IUser | null> => {
  // we need auto-generated incremental id
  const userId = await generateUserId()
  user.id = userId

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Error! user not created')
  }
  return createdUser
}

export default {
  getLastUserIdService,
  createUserService,
}
