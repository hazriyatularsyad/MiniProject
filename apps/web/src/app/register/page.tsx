'use client';

import Input from '@/components/Input';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import { registerUser } from '@/components/libs/action/user';
import PasswordInput from './_components/showPass';

export interface IRegis {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export default function Register() {
  const initialValue: IRegis = {
    username: '',
    email: '',
    phone: '',
    password: '',
  };

  const validateSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('phone required'),

    password: yup.string().required('Password is required'),
  });

  const onRegisterUser = async (data: IRegis) => {
    try {
      const res = await registerUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={validateSchema}
        onSubmit={(value, action) => {
          onRegisterUser(value);
          alert(JSON.stringify(value));
          action.resetForm();
        }}
      >
        {() => {
          return (
            <div className="bg-white h-screen flex justify-center items-center relative">
              <Image
                src="/bglogin.jpeg"
                layout='fill'
                objectFit='cover'
                className="w-full h-full object-cover block mx-auto"
                alt="login-image"
              />
              <Form className="z-30  justify-center items-center flex">
                <div className="flex shadow-xl w-[30vh] md:w-[50vh] lg:w-[60vh] bg-white/80 rounded-xl gap-2 flex-col p-5 border ">
                  <p className="text-3xl font-extrabold text-black">Register</p>
                  <label className="text-gray-800 text-xs block ">
                    Username
                  </label>
                  <Input
                    name="username"
                    type="text"
                    placeholder="masukkan username"
                  />
                  <label className="text-gray-800 text-xs block">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="masukkan email"
                  />
                  <label className="text-gray-800 text-xs block">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="text"
                    placeholder="masukkan nomor hp"
                  />
                  <label className="text-gray-800 text-xs block">
                    Password
                  </label>
                  <PasswordInput name='password'/>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                  >
                    Create account
                  </button>
                  <div className="my-4 flex items-center justify-center gap-4">
                    <Link href="/signin">
                      <p className="text-l text-black text-center hover:text-blue-700 cursor-pointer">
                        login here
                      </p>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
