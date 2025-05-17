import Logo from "./logo";
import Navlinks from "./navlinks";

export default function Sidebar(){
    return(
        <aside className="border-r border-slate-200 dark:border-gray-800 flex h-screen flex-col gap-2 md:px-2 bg-foreground dark:bg-dark-foreground">
          <div className="flex pr-12 justify-self-start" >
            <Logo /> 
          </div>
           <div>
            <Navlinks />
           </div>
          
        </aside>
    )
}