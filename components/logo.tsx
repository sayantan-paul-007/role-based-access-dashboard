import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Logo(){
    return(
    <Link href='/'>
        <div className="flex flex-row items-center justify-start pt-6 pb-4 px-2 gap-2 ">
             <LayoutDashboard size={34} className="text-primary" />
            <h1 className="text-[28px] font-bold">SpectraPanel</h1> 
        </div> 
        </Link>
    )
}