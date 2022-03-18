import User from '../model/User'

export const find_by_email = async(email: string) => {
  const user = await User.findOne({ email })
  return user
}
export const find_by_uid = async (uid: string) => {
  const user = await User.findOne({ uid })
  return user
}
