import Logo from "@/components/logo";
import Navlinks from "@/components/dashboard/navlinks";

export default function Sidebar(){
    return(
        <aside className="border-r sticky top-0 border-slate-200 dark:border-gray-800 w-3/12 flex h-screen flex-col gap-2 md:px-2 bg-foreground dark:bg-dark-foreground">
          <div className="flex px-4 py-8 align-items-start" >
            <Logo /> 
          </div>
           <div className="px-4 ">
            <Navlinks />
           </div>
          
        </aside>
    )
}