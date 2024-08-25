'use client'

import Navbar from '@/components/navbar';
import { FileInput, Label } from 'flowbite-react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import { DatePickers } from '@/components/datePicker';
import * as yup from 'yup';
import { DateSchema } from 'yup';
import { Formik } from 'formik';
import Input from '@/components/Input';
import NavbarLogin from '../userHome/_components/navbarlogin';


interface ICreate{
    name: String
    // date
    description: String
}

export default function CreateEvent() {
    const initialValue: ICreate = {
        name:'',
        // eventDate: DateSchema,
        description:'',

    }
    const validateSchema = yup.object().shape({
        eventName:yup.string().required('Masukkan Nama Event'),
        eventDate:yup.string().required('Masukkan Tanggal Event'),
        description:yup.string().required('Masukkan Deskripsi Event')
    })

    return (
      <div className="">
        <NavbarLogin/>
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
                <div className="flex flex-col container mx-auto w-3/4 items-center justify-center">
                    <div className='w-[50vh] h-full gap-4 '>
                        <Input name='name' type='text' placeholder='masukkan nama event'/>
                        <Input name='description' type='text' placeholder='masukkan nama deskripsi'/>
                    </div>
                    
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <IoCloudUploadOutline className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />

                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            );
          }}
        </Formik>
      </div>
    );
}
