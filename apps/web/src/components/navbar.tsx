import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="bg-slate-500 flex justify-between px-32 h-36 items-center">
      <div className="text-gray-600 text-4xl font-extrabold">
        <p>
          Vi<span className="text-green-800">go</span>go
        </p>
        {/* <Image src="/logo.png" width={500} height={500} alt="vigogo" /> */}
      </div>

      <div className="text-white flex gap-28">
        <div className="flex gap-8">
          <p>Gift Cards</p>
          <p>Explore</p>
          <p>Sell</p>
          <p>Favourites</p>
          <p>My Tickets</p>
        </div>
        <div className="flex gap-3">
          <p>Sign in</p>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
}
