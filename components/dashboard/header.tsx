'use client'
import Themetoggle from "@/components/theme-toggle"
import Avatar from "@/components/dashboard/avatar"
import { useUser } from "@/context/UserContext"
export default function Header(){
    const { user } = useUser();
    return(
        <div className="px-8  flex flex-row justify-between items-center w-full border-b bg-foreground dark:bg-dark-foreground border-slate-200 dark:border-gray-800">
           <div className="flex flex-row  justify-between items-center w-full py-8">
            
          
           
            <div>
                <h1 className="text-2xl font-bold ">{user ? `Welcome to ${user.role.toUpperCase()} Dashboard` : 'Loading user...'}</h1>
            </div>
            <div className="flex gap-5">
                <Themetoggle />
                <Avatar />
            </div>
           
             </div>
           
        </div>
    )
}