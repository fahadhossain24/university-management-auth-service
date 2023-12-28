import fromService from './user.services'

type GeneratedUserId = () => Promise<string>

export const generateUserId: GeneratedUserId = async () => {
  const currentUserId = await fromService.getLastUserIdService()
  const newUserId: string = currentUserId || '00000' // 00000

  return String(parseInt(newUserId) + 1).padStart(5, '0')
}
