'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import ButtonLink from '../regisEo/_components/buttonLink';
import { FaRegSmile } from 'react-icons/fa';


export default function Question({
  name,
  judul,
  className,
}: {
  name: string;
  judul: string;
  className?: string;
}) {
  const [isQuestion, setQuestion] = useState(false);

  const openQuestion = () => {
    setQuestion(!isQuestion);
  };
  return (
    <div>
      <button
        onClick={openQuestion}
        className={`mr-10 hover:before:bg-yellow-500 relative overflow-hidden border-black py-3 px-3 ${className} shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full`}
      >
        <span className="relative z-10">{name}</span>
      </button>
      {isQuestion && (
        <div className="fixed h-screen w-full inset-0 z-50 bg-black/30">
          <div className="flex justify-center items-center h-screen">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <IoClose
                    onClick={openQuestion}
                    className="flex items-center"
                  />
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  
                  <FaRegSmile className='text-5xl text-center mx-auto mt-4 mb-3'/>

                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    {judul}
                  </h3>

                  <ButtonLink
                    href="/loginEo"
                    name="E0"
                    className="bg-blue-500 text-white"
                  />
                  <ButtonLink
                    href="/signin"
                    name="User"
                    className="bg-blue-800 ml-5 border  hover:bg-blue-500 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
