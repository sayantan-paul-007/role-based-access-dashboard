'use client'
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface LogoProps{
  size: number
}
export default function Logo({size}:LogoProps){
    const pathname = usePathname();
    return(
    <Link href='/'>
        <div className={`flex flex-row items-center justify-start pt-6 pb-4 ${pathname.startsWith('/dashboard') ? 'px-2' : ''}   gap-2 `}>
             <LayoutDashboard size={size} className="text-primary" />
            <h1 className="text-[28px] font-bold">SpectraPanel</h1> 
        </div> 
        </Link>
    )
}