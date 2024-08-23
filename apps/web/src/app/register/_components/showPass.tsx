import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Field } from 'formik';

export default function PasswordInput ()  {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Field
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        className="form-input w-full rounded-md"
      />
      <span
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-2 cursor-pointer"
      >
        {showPassword ? (
          <AiFillEyeInvisible size={24} />
        ) : (
          <AiFillEye size={24} />
        )}
      </span>
    </div>
  );
};

