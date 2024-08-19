import { genSalt, hash  } from 'bcrypt'

export const hashPass = async (password: string) => {
    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    return hashedPassword
}