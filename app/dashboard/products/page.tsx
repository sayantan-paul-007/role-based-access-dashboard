'use client'
import {CreateButton, DeleteButton, EditButton} from "@/components/buttons";
import TableBody from "@/components/table-body";
import TableHeader from "@/components/table-headers";
import Table from "@/components/tables";
import { EditIcon, Plus, Trash } from "lucide-react";
import { useState, useEffect } from "react";
export default function Products(){
    const ProductsHeader = ['Products', 'Description', 'Price', 'Category']
    interface Products {
            _id: string;
            name: string;
            description:string;
            price: number;
            categoryId :string;
            }
            const [products, setProducts] = useState<Products[]>([]);
        
            useEffect(() => {
                fetch("/api/products")
                .then((res) => res.json())
                .then((data) => setProducts(data.products || []));
            }, []);

    interface Category {
    _id: string;
    name: string;
    }
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch("/api/category")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
const handleDeleteProduct = async (id: string) => {
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
       headers: {
    'Content-Type': 'application/json',
  },
    });

    if (!res.ok) {
      throw new Error('Failed to delete product');
    }
    setProducts((prev) => prev.filter((prod) => prod._id !== id));
  } catch (err) {
   if (err instanceof Error) {
    alert('Error deleting: ' + err.message);
  } else {
    alert('An unknown error occurred');
  }
  }
};



    return(
 <main className="px-16 py-4 bg-background dark:bg-dark-background h-full ">
        <div className=" flex justify-between py-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <CreateButton href="/dashboard/products/create"><span><Plus size={20} /></span> Add Products</CreateButton>
        </div>
      <Table>
              <TableHeader>
              {ProductsHeader.map((head)=>(
                <th key={head} scope="col" className="p-4 w-fit whitespace-nowrap ">{head}</th>))}
              </TableHeader>
              <TableBody>
             {Array.isArray(products) && products.map((prod) => (
          <tr key={prod._id}>
            <td className="p-4 w-fit whitespace-nowrap">{prod.name}</td>
            <td className="p-4 w-fit whitespace-nowrap">{prod.description}</td>
            <td className="p-4 w-fit whitespace-nowrap">{prod.price}</td>
            <td className="p-4 w-fit whitespace-nowrap">{categories.find((cat) => cat._id === prod.categoryId)?.name || "Unknown"}
</td>
            <td className="p-4 flex flex-row gap-5 justify-center whitespace-nowrap">
              <EditButton  href={`/dashboard/products/edit/${prod._id}`}>
                <EditIcon size={16} />

              </EditButton>
            </td>
            <td className="p-4 w-fit whitespace-nowrap">
              <DeleteButton id={prod._id} onDelete={handleDeleteProduct}>
                <Trash size={16} />
              </DeleteButton>
            </td>
          </tr>
        ))
      }
              </TableBody>
              </Table>
        </main>
    )
}