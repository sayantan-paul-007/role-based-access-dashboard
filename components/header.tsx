import Themetoggle from "./theme-toggle";

export default function Header(){
    return(
        <div className="px-8 pt-4 flex flex-row justify-between items-center w-full border-b bg-foreground dark:bg-dark-foreground border-slate-200">
           <div className="flex flex-row  justify-between items-center w-full py-6 ">
            
          
           
            <div>
                <h1 className="text-3xl font-bold ">Admin/Master Dashboard</h1>
            </div>
            <div>
                <Themetoggle />
            </div>
           
             </div>
           
        </div>
    )
}