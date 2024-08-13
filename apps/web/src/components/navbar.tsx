'use client'

import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';

interface SearchForm{
  search: string;
}

export default function Navbar() {

  const data = [
    {
      text: 'Tentang Kami'
    },
    {
      text: 'Hubungi Kami'
    }
  ]

  const [isMenu, setMenu] = useState(false)
  const [closeMenu, setCloseMenu] = useState(false)

  const openMenu = () => {
    setMenu(!isMenu)
  }

  const handleCloseMenu = () => {
    
  }

  return (
    <div className="bg-white sm:w-full overflow-hidden border flex justify-between h-15 items-center ">
      <p className="text-black text-4xl font-extrabold ml-10">
        Ticket<span className=" text-yellow-500">Zone.</span>
      </p>

      <div className="text-black lg:flex gap-28 hidden ">
        <div className="flex items-center  font-light gap-8 ">
          <p className="hover:scale-125">Explore</p>
          <p className="hover:scale-125">Sell</p>
          <p className="hover:scale-125">Favorites</p>
          <p className="hover:scale-125">My Tickets</p>

          <Link href="/signin">
            <button className="mr-10 hover:before:bg-yellow-500 relative overflow-hidden border-black bg-black px-3 py-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">L O G I N</span>
            </button>
          </Link>
        </div>
      </div>
      <GiHamburgerMenu onClick={openMenu} className='lg:hidden'/>
      {isMenu && (
        <div className="fixed h-screen w-full inset-0 z-50 bg-white/30">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100 text-black">
              <p>Login</p>
              <p>Register</p>
              <IoClose onClick={openMenu} className=''/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
