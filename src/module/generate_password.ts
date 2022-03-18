import bcrypt from 'bcrypt'

const generate_password = async (password: string) => {
  const encrypt = await bcrypt.hash(password, 8)
  return encrypt 
}

export default generate_password
