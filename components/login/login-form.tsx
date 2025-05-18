'use client'
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm(){
const [showPassword, setShowPassword] = useState(false)
 const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    return(
        <form action="/dashboard" className="rounded-xl bg-foreground dark:bg-dark-foreground border border-gray-300 dark:border-gray-500 flex flex-col px-8 py-12 w-[450px] gap-8">
            <h4 className="font-bold text-2xl text-center">Login</h4>
            <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="rounded-md bg-gray-100 dark:bg-gray-700 p-2 w-full" />
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <div className="relative flex items-center">
            <input type={showPassword?"text":'password'} name="password" id="password" className="w-full rounded-md bg-gray-100 dark:bg-gray-700 py-2 pl-3 pr-12" />
            <button type="button" className="absolute right-1 mr-1  p-1 rounded-md" onClick={togglePasswordVisibility}>
               {
                showPassword?(<Eye size={20} />): (<EyeOff size={20} />)
               }
                
               
            </button>
            </div>
           
           </div>
            
            <input type="submit" className="bg-accent py-4 mt-4 rounded-lg cursor-pointer text-lg text-white"/>
        </form>
    )
}