"use client"

import Input from '@/components/Input';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup"

interface IInit {
    eventName: string;
    email: string;
    // Tambah
}

export default function page() {
    const initialValue : IInit= {
        eventName: '',
        email: ''
        // Tambah
    }

    const validateSchema = yup.object().shape({
        eventName: yup.string().required('Event Name is required'),
        email: yup.string().email('Invalid email').required('Email is required')
    })
  return (
    <div>
          <Formik
              initialValues={initialValue}
              validationSchema={validateSchema}
              onSubmit={(value, action) => {
                  alert(JSON.stringify(value))
                  action.resetForm()
              }}
          >
              {() => {
                  return (
                      <Form>
                          <div>
                              <Field
                                  type="text"
                                  name="eventName"
                                  placeholder="Masukkan username"
                                  className=""
                              />
                              <ErrorMessage
                                  name='eventName'
                                  component='div'
                                  className='text-xs text-red-700'
                              />

                              <Input name='email' type='email' placeholder='masukkan email' />
                              
                              <Input as='select' type='select' name='eventName'>
                                  <option value="">Bandung</option>
                                  <option value="">JKt</option>
                              </Input>
                          </div>
                          <button type='submit'>Submit</button>
                      </Form>
                  )
              }}
          </Formik>   
    </div>
  )
}
