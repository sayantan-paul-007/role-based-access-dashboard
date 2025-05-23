import { EditIcon, Plus, Trash } from "lucide-react";
export default function Category(){
    return(
       <main className="px-16 pt-4 bg-background dark:bg-dark-background h-full">
        <div className=" flex justify-between py-4">
        <h2 className="text-2xl font-bold">Category</h2>
        <button className="rounded-md flex items-center bg-accent px-4 py-2 gap-2 text-sm text-white">
            <span><Plus size={20} /></span> Add Category
        </button>
        </div>
        <table className="hidden md:table bg-foreground dark:bg-dark-foreground  rounded-xl w-full ">
            <thead className=" text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="p-4 w-fit whitespace-nowrap ">Category</th>
                    <th scope="col" className="p-4 w-fit whitespace-nowrap ">Description</th>
                   
                    <th scope="col" className="p-4 w-fit whitespace-nowrap "></th>
                </tr>
            </thead>
            <tbody className="w-full border-b text-textPrimary dark:text-dark-textPrimary border-red-100 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                <tr>
                    <td className="p-4 w-fit whitespace-nowrap">fdfskjhj</td>
                    <td className="p-4 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="p-4 flex flex-row gap-5 justify-center whitespace-nowrap">   
                    <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
                        <EditIcon size={16}/>
                    </button>
                    <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
                            <Trash size={16} />
                    </button> 
                    
                    
                    </td>
                </tr>
                <tr>
                    <td className="p-4 w-fit whitespace-nowrap">fdfskjhj</td>
                    <td className="p-4 w-fit whitespace-nowrap">fjhkjsdh</td>
                    <td className="p-4 flex flex-row gap-5 justify-center whitespace-nowrap">   
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