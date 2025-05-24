'use client'
import { CreateButton } from "@/components/buttons";
import TableBody from "@/components/table-body";
import TableHeader from "@/components/table-headers";
import Table from "@/components/tables";
import { EditIcon, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
export default function Category(){
    const CategoryHeader = ['Category','Description']
    interface Category {
        _id: string;
        name: string;
        description:string;
        }
        const [categories, setCategories] = useState<Category[]>([]);
    
        useEffect(() => {
            fetch("/api/category")
            .then((res) => res.json())
            .then((data) => setCategories(data));
        }, []);
    return(
       <main className="px-16 pt-4 bg-background dark:bg-dark-background h-full overflow-y-auto ">
        <div className=" flex justify-between py-4">
        <h2 className="text-2xl font-bold">Category</h2>
        <CreateButton href="/dashboard/category/create"> <span><Plus size={20} /></span> Add Category</CreateButton>
        
        </div>
        <Table>
        <TableHeader>
        {CategoryHeader.map((head)=>(
          <th key={head} scope="col" className="p-4 w-fit whitespace-nowrap ">{head}</th>))}
        </TableHeader>
        <TableBody>
       {
  categories.map((cat) => (
    <tr key={cat._id}>
      <td className="p-4 w-fit whitespace-nowrap">{cat.name}</td>
      <td className="p-4 w-fit whitespace-nowrap">{cat.description}</td>
      <td className="p-4 flex flex-row gap-5 justify-center whitespace-nowrap">
        <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
          <EditIcon size={16} />
        </button>
      </td>
      <td className="p-4 w-fit whitespace-nowrap">
        <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
          <Trash size={16} />
        </button>
      </td>
    </tr>
  ))
}
        </TableBody>
        </Table>
       
        </main>
    )
}