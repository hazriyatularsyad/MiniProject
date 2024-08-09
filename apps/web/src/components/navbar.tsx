import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="bg-white border flex justify-between h-15 items-center ">
      
        <p className="text-black text-4xl font-extrabold ml-10">
          Ticket<span className=" text-yellow-500">Zone.</span>
        </p>
      

      <div className="text-black flex gap-28 ">
        <div className="flex items-center  font-light gap-8 ">
          <p>Explore</p>
          <p>Sell</p>
          <p>Favorites</p>
          <p>My Tickets</p>
          <button className="mr-10 hover:before:bg-yellow-500 relative overflow-hidden border-black bg-black px-3 py-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">L O G I N</span>
          </button>
        </div>
      </div>
    </div>
  );
}
