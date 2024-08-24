import { IRegis } from "@/app/register/page";
import { ILogin } from "@/app/signin/page";

export const registerUser = async (data: IRegis) => {
    const res = await fetch('http://localhost:8000/api/auth/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('failed regis user')
    return res.json()
}

export const loginUser = async (data: ILogin) => {
    const res = await fetch('http://localhost:8000/api/auth/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('failed login user')
    return res.json()
}