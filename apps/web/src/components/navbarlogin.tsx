import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Avatar from './avatar';

export default function NavbarLogin() {
  return (
    <div className="bg-white border flex justify-between h-15 items-center ">
      <div className="flex pl-10 w-1/3">
        <Link href="/">
          <Image src="/ticoncert.png" width={100} height={100} alt="logo" />
        </Link>
      </div>
      <div className="py-3 flex justify-end w-1/3 gap-2">
        <FaSearch className="text-black h-10 w-7" />
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          className="border-black text-gray-950 h-[40px] w-75 pr-10 p-3"
        />
      </div>

      <div className="text-black flex gap-28 w-1/3 justify-center ">
        <div className="flex items-center  font-light gap-8 ">
          <p className="hover:scale-125">Explore</p>
          <p className="hover:scale-125">Sell</p>
          <p className="hover:scale-125">Favorites</p>
          <p className="hover:scale-125">My Tickets</p>
          <Avatar />
        </div>
      </div>
    </div>
  );
}
