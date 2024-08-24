'use client'

import { deleteCookie, navigate } from "@/libs/action/server";

export default function NavbarLogin() {

   const logOut = () => {
     deleteCookie('token');
     navigate('/');
    //  toast.info('Logout success');
   };

  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <p className="text-black text-4xl font-extrabold ml-10">
          TiC<span className=" text-yellow-500">oncert.</span>
        </p>
      </div>
      <div className="flex-none gap-2 mr-8">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={logOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
