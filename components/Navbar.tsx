'use client'
import React from 'react'
import Logo from '@/components/logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Themetoggle from '@/components/theme-toggle'
import { usePathname } from 'next/navigation'
const Navbar = () => {
   const pathname = usePathname();
  return (
    <section className={`px-4 md:px-8 bg-background ${pathname==='/login'?'fixed':'sticky'} top-0 w-full`}>
       <div className="container flex items-center justify-between">
          <div>
            <Logo size={34} />
        </div>
        <div className="flex flex-row gap-4 items-center">
            <Themetoggle />
            <div className={`flex flex-row gap-4 items-center ${pathname === '/login' ? 'hidden' : ''}  `}>
              <Link href="/login">
            <Button className='md:text-lg md:px-6 md:h-10 rounded-lg bg-primary/85 '>Login</Button>
      </Link>
            </div> 
        </div>
       </div>
    </section>
  )
}

export default Navbar