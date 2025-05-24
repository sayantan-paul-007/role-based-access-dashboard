import {CreateButton} from "@/components/buttons";
import { EditIcon, Plus, Trash } from "lucide-react";
export default function Products(){
    return(
 <main className="px-16 pt-4 bg-background dark:bg-dark-background h-full">
        <div className=" flex justify-between py-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <CreateButton href="/dashboard/products/create"><span><Plus size={20} /></span> Add Products</CreateButton>
        </div>
        <table className="hidden md:table bg-foreground dark:bg-dark-foreground  rounded-xl w-full ">
            <thead className=" text-left text-sm font-normal">
                <tr className="border-b border-gray-300 dark:border-gray-600 ">
                    <th scope="col" className="py-4 px-6 w-fit whitespace-nowrap ">Products</th>
                    <th scope="col" className="py-4 px-6 w-fit whitespace-nowrap ">Description</th>
                    <th scope="col" className="py-4 px-6 w-fit whitespace-nowrap ">Price</th>
                    <th scope="col" className="py-4 px-6 w-fit whitespace-nowrap ">Stock</th>
                    <th scope="col" className="py-4 px-6 w-fit whitespace-nowrap ">Categories</th>
                    <th scope="col" className="py-4 px-6 w-fit whitespace-nowrap "></th>
                </tr>
            </thead>
            <tbody className="w-full border-b text-textPrimary dark:text-dark-textPrimary border-red-100 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                <tr >
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fdfskjhj</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fdfskjhj</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="py-4 px-6 flex flex-row gap-5 justify-center whitespace-nowrap">   
                    <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
                        <EditIcon size={16}/>
                    </button>
                    <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
                            <Trash size={16} />
                    </button> 
                    
                    
                    </td>
                </tr>
                <tr>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fdfskjhj</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fdfskjhj</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="py-4 px-6 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="py-4 px-6 flex flex-row gap-5 justify-center whitespace-nowrap">   
                    <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
                        <EditIcon size={16}/>
                    </button>
                    <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
                            <Trash size={16} />
                    </button> 
                    
                    
                    </td>
                </tr>
            </tbody>

        </table>
        </main>
    )
}