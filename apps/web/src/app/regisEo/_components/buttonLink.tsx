import Link from 'next/link';
import React from 'react'

export default function ButtonLink({href, name, className}:{href:string, name:string, className:string}) {
  return (
    <Link href={`${href}`}>
      <button
        data-modal-hide="popup-modal"
        type="button"
              className={` hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
         ${className}`}
      >
        {name}
      </button>
    </Link>
  );
}
