import { LayoutDashboard } from "lucide-react";

export default function Logo(){
    return(
        <div className="flex flex-row items-center gap-2 px-4 py-6">
            <LayoutDashboard size={36} className="text-orange-400" />
            <p className="text-2xl font-bold">ByteBoard</p>

        </div>
    )
}