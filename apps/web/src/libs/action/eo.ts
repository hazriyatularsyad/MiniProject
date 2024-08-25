import { ILoginEo } from "@/app/loginEo/page";
import { IEo } from "@/app/regisEo/page";

export const registerEo = async (data: IEo) => {
  const res = await fetch('http://localhost:8000/api/eo/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('failed regis EO');
  return res.json();
};

export const loginEo = async (data: ILoginEo) => {
  const res = await fetch('http://localhost:8000/api/eo/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('failed login EO');
  return res.json();
};