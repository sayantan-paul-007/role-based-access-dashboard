'use client'
import React from 'react'
import { useUser } from "@/context/userContext"
import AvatarDropdown from './AvatarDropdown'
import Themetoggle from '../theme-toggle'
const Header = () => {
      const { user } = useUser();
    return (
        <section className='flex justify-between border-b border-border sticky top-0 z-30 py-8  px-8 bg-sidebar'>
             <div>
                <h1 className="text-[28px] font-bold ">{user ? `Welcome to ${user?.role} Dashboard` : 'Loading user...'}</h1>
            </div>
            <div className='flex items-center gap-4'>
                 <Themetoggle />
            <AvatarDropdown />
            </div>
           
           
        </section>
    )
}

export default Header