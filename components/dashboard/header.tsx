import Themetoggle from "@/components/theme-toggle"
import Avatar from "@/components/dashboard/avatar"
export default function Header(){
    return(
        <div className="px-8  flex flex-row justify-between items-center w-full border-b bg-foreground dark:bg-dark-foreground border-slate-200 dark:border-gray-800">
           <div className="flex flex-row  justify-between items-center w-full py-8">
            
          
           
            <div>
                <h1 className="text-2xl font-bold ">Welcome to Admin/Master Dashboard</h1>
            </div>
            <div className="flex gap-5">
                <Themetoggle />
                <Avatar />
            </div>
           
             </div>
           
        </div>
    )
}