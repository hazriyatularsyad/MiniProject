'use client';

import { Form, Formik } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';
import PasswordInput from '../register/_components/showPass';
import Input from '@/components/Input';
import Image from 'next/image';

export interface IEo {
  username: string;
  email: string;
  password: string;
}

export default function RegisEo(data: IEo) {
  const initialValue: IEo = {
    username: '',
    email: '',
    password: '',
  };

  const validateSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('phone number is required'),
    password: yup.string().required('Password is required'),
  });

  const onRegisterEo = async (data: IEo) => {
    try {
      const res = await RegisEo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validateSchema}
      onSubmit={(value, action) => {
        onRegisterEo(value);
        alert(JSON.stringify(value));
        action.resetForm();
      }}
    >
      {() => {
        return (
          <div className="justify-center items-center flex h-screen bg-gray-100">
            {/* <div className="lg:w-1/2">
              <Image
                src="/bglogin.jpeg"
                alt="bg"
                width={900}
                height={900}
                className="object-cover w-full h-full"
              />
            </div> */}
            <Form className="">
              <div className="flex shadow-xl  w-[30vh] md:w-[50vh] lg:w-[60vh] bg-white rounded-xl gap-2 flex-col p-5 border ">
                <p className="text-3xl font-extrabold text-black">Register</p>
                <label className="text-gray-800 text-xs block ">Username</label>
                <Input
                  name="username"
                  type="text"
                  placeholder="masukkan username"
                />
                <label className="text-gray-800 text-xs block">Email</label>
                <Input name="email" type="email" placeholder="masukkan email" />
                <label className="text-gray-800 text-xs block">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="masukkan nomor hp"
                />
                <label className="text-gray-800 text-xs block">Password</label>
                <PasswordInput />

                <button
                  type="submit"
                  className="w-full py-3 mt-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
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
  );
}
