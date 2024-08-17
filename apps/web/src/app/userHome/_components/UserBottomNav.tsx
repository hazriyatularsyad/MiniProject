'use client';

import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlinePayments } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { RxAvatar } from 'react-icons/rx';
import { BsTicketPerforated } from 'react-icons/bs';
import Link from 'next/link';
import ProfileUser from '@/components/profileUser';

export default function UserBottomNav() {
  const [loginModal, setLoginModal] = useState(false);

  const handleLogin = () => {
    setLoginModal(!loginModal);
  };

  return (
    <div>
      <div className="w-full fixed z-50 bottom-0 bg-white shadow-lg md:hidden">
        <div className="flex justify-around  items-center py-2 text-black">
          <div className="flex flex-col items-center">
            <Link href="/">
              <IoHomeOutline className="flex ml-3 text-xl" />
              <p className="text-xs">Beranda</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlinePayments className="text-xl" />
            <p className="text-xs">Transaksi</p>
            
          </div>
          <div className="flex flex-col items-center">
            <BsTicketPerforated onClick={handleLogin} className="text-xl" />
            <p className="text-xs">Tiket</p>
            
          </div>
          <div className="flex flex-col items-center">
            <GoSearch className="text-xl" />
            <p className="text-xs">Cari</p>
          </div>
          <div className="flex flex-col items-center">
            <ProfileUser/>
          </div>
        </div>
      </div>
    </div>
  );
}
