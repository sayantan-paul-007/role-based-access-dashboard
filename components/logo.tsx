import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Logo(){
    return(
    <Link href='/'>
        <div className="flex flex-row items-center gap-2 ">
             <LayoutDashboard size={36} className="text-orange-400" />
            <p className="text-2xl font-bold">ByteBoard</p> 
        </div> 
        </Link>
    )
}