interface IPayLoad{
    id: number
    role:string
}

const secret = process.env.SECRET_KEY || ""

export const createToken = (paload: IPayLoad, expires: string = '5m') => {
    // const token = sign(paload, secret, (expireIn, expires))
    // return token
}