'use client';

import Input from '@/components/Input';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';

interface IRegis {
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const initialValue: IRegis = {
    username: '',
    email: '',
    password: '',
  };

  const validateSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={validateSchema}
        onSubmit={(value, action) => {
          alert(JSON.stringify(value));
          action.resetForm();
        }}
      >
        {() => {
          return (
            <div className="bg-white h-screen flex justify-center items-center">
              <Image
                src="/bglogin.jpeg"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover block mx-auto"
                alt="login-image"
              />
              <Form className="z-30 justify-center items-center flex">
                <div className="flex shadow-xl w-[60vh] bg-white/80 rounded-xl gap-4 flex-col p-5 border ">
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
                    Password
                  </label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="masukkan password"
                  />
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
