'use client';
import { useState } from 'react';
import LogoutButton from './logout';
import { useUser } from "@/context/UserContext"
import Image from 'next/image';
export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const {user} =useUser()
  return (
    <div className="relative inline-block text-left">
     <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2"
      >
        <Image src="https://i.pravatar.cc/150?img=3" width={32} height={32} className="w-8 h-8 rounded-full" alt="User Avatar" />
        <span>{user? user.username:"Loading username....."}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.25 7.25L10 12.25L14.75 7.25H5.25Z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-3 w-max bg-foreground dark:bg-dark-foreground shadow-lg rounded-md z-10">
          <div className="p-4 border-b border-textPrimary dark:border-dark-textPrimary">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{user? user.username:"Loading name..."}</p>
                <p className="text-sm text-gray-500">johnson@nextadmin.com</p>
              </div>
            </div>
          </div>
          <ul className="py-2 px-4">
            <li>
              <LogoutButton />
              {/* <Link href='/login' className='flex text-red-500 gap-2 py-2'>
               <LogOut />
               <p> Log Out</p>
              </Link> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
