'use client';

import Image from 'next/image';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import Input from '@/components/Input';
import { FcGoogle } from 'react-icons/fc';
import { loginUser } from '@/components/libs/action/user';
import { useRouter } from 'next/navigation';
import PasswordInput from '../register/_components/showPass';

export interface ILogin {
  username: string;
  password: string;
}

export default function Singnin() {

  const router = useRouter()

  const initialValue: ILogin = {
    username: '',
    password: '',
  };

  const validateSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

   const onLoginUser = async (data: ILogin) => {
     try {
       const res = await loginUser(data);
       router.push('/')
     } catch (error) {
       console.log(error);
     }
   };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validateSchema}
      onSubmit={(values, action) => {
        onLoginUser(values);
        alert(JSON.stringify(values));
        action.resetForm();
        console.log(values);
      }}
    >
      {() => {
        return (
          <div className="bg-white h-screen flex justify-center items-center relative">
            <Image
              src="/bglogin.jpeg"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover block mx-auto"
              alt="login-image"
            />
            <Form className="z-30 justify-center items-center flex">
              <div className="flex shadow-xl w-[30vh] md:w-[50vh] lg:w-[60vh] bg-white/80 rounded-xl gap-4 flex-col p-5 border ">
                <p className="text-3xl font-extrabold text-gray-700">Sign In</p>

                <label className="text-gray-800 text-xs block">Email</label>
                <Input
                  name="username"
                  type="text"
                  placeholder="masukkan email atau username"
                />
                <label className="text-gray-800 text-xs block">Password</label>
                <PasswordInput/>
                {/* <Input
                  name="password"
                  type="password"
                  placeholder="masukkan password"
                /> */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                >
                  Log In
                </button>
                <div className="my-2 flex items-center gap-4">
                  <hr className="w-full border-gray-300" />
                  <p className="text-sm text-gray-800 text-center">or</p>
                  <hr className="w-full border-gray-300" />
                </div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-white border border-gray-300 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  <FcGoogle className="text-2xl" />
                  Continue with google
                </button>
                <p className="text-sm mt-8 text-center text-gray-800">
                  Dont have an account?
                  <Link
                    href="/register"
                    className="text-blue-600 font-semibold tracking-wide hover:underline ml-1"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
