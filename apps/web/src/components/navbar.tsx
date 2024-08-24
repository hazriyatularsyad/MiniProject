'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Question from '@/app/modal/question';
import QuestionRegis from '@/app/modal/questionRegis';

export default function Navbar() {
  // const [isQuestion, setQuestion] = useState(false)

  // const openQuestion = () => {
  //   setQuestion(!isQuestion)
  // }

  return (
    <div className="bg-white sm:w-full overflow-hidden border flex justify-between h-15 items-center ">
      <p className="text-black text-4xl font-extrabold ml-10">
        TiC<span className=" text-yellow-500">oncert.</span>
      </p>
      <div className="text-black lg:flex gap-28 hidden ">
        <div className="flex items-center  font-light gap-8 ">
          <Link href="/detailTicket">
            <p className="hover:scale-125 cursor-pointer">Explore</p>
          </Link>
          <Link href="/createEvent">
            <p className="hover:scale-125">Create Event</p>
          </Link>

          <QuestionRegis
            name="REGISTER"
            judul="Regis Sebagai"
            className="bg-white text-black border"
          />

          <Question
            name="L O G I N"
            judul="Login Sebagai"
            className="bg-black text-white"
          />

          {/* {isQuestion && <Question />} */}
          {/* </Link> */}
          {/* <GiHamburgerMenu onClick={openMenu} className=''/> */}
          {/* {isMenu && (
        <div className="fixed h-screen w-full inset-0 z-50 bg-black/30">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100 text-black">
              <p>Masuk</p>
              <p>Daftar</p>
              <IoClose onClick={openMenu} className='flex items-center'/>
            </div>
          </div>
        </div>
      )} */}
        </div>
      </div>
    </div>
  );
}
