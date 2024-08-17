import { ErrorMessage, Field, Form } from 'formik';
import React, { ReactNode } from 'react';

interface IPropsInput {
  name: string;
  placeholder?: string;
  type?: string;
  as?: string;
  children?: ReactNode;
}

const Input: React.FC<IPropsInput> = ({
  name,
  placeholder,
  type,
  as,
  children,
}) => {
  return (
    <div>
      <Form>
        <Field
          className="w-full rounded-md "
          name={name}
          type={type}
          as={as}
          placeholder={placeholder}
        >
          {children}
        </Field>

        <ErrorMessage
          name={name}
          className="text-xs text-red-700"
          component="div"
        />
      </Form>
    </div>
  );
};

export default Input;
