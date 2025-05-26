'use client'
import { EditIcon} from "lucide-react";
import TableBody from "@/components/table-body";
import TableHeader from "@/components/table-headers";
import Table from "@/components/tables";
import { useState, useEffect } from "react";
import { EditButton } from "@/components/buttons";
export default function Inventory(){
    const InventoryHeader = ['Product Name','Available Units', 'Sold Units']
    interface Products {
                _id: string;
                name: string;
                }
                const [products, setProducts] = useState<Products[]>([]);
            
                useEffect(() => {
                    fetch("/api/products")
                    .then((res) => res.json())
                    .then((data) => setProducts(data.products || []));
                }, []);
    
        interface Inventory {
        _id: string;
        productId: string;
        availableUnits: number;
        soldUnits: number;
        }
        const [inventory, setInventory] = useState<Inventory[]>([]);
    
        useEffect(() => {
            fetch("/api/inventory")
            .then((res) => res.json())
            .then((data) => setInventory(data.inventory || []));
        }, []);
    return(
       <main className="px-16 py-4 bg-background dark:bg-dark-background  h-full">
        <div className=" flex justify-between py-4">
        <h2 className="text-2xl font-bold">Inventory</h2>
        </div>
        <Table>
                      <TableHeader>
                      {InventoryHeader.map((head)=>(
                        <th key={head} scope="col" className="p-4 w-fit whitespace-nowrap ">{head}</th>))}
                      </TableHeader>
                      <TableBody>
                     {Array.isArray(inventory) && inventory.map((inv) => (
                  <tr key={inv._id}>
                    <td className="p-4 w-fit whitespace-nowrap">{products.find((prod) => prod._id === inv.productId)?.name || "Unknown"}</td>
                    <td className="p-4 w-fit whitespace-nowrap">{inv.availableUnits}</td>
                    <td className="p-4 w-fit whitespace-nowrap">{inv.soldUnits}</td>
                    <td className="p-4 flex flex-row gap-5 justify-center whitespace-nowrap">
                        <EditButton  href={`/dashboard/inventory/edit/${inv._id}`}>
                            <EditIcon size={16} />
                        </EditButton>
                    </td>
                    
                  </tr>
                ))
              }
                      </TableBody>
                      </Table>
       
        </main>
    )
}