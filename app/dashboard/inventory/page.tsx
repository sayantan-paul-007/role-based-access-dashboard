'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EditIcon } from 'lucide-react';
const InventoryPage = () => {
  const InventoryHeader = ['Product Name','Available Units', 'Sold Units','']
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
  return (
    <main className='p-8'>
      <section className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold mb-4'>Inventory</h1>
      </section>

        <Table className='border  text-md border-border' >
  <TableHeader >
    <TableRow className='hover:bg-muted'>
        {InventoryHeader.map((head)=>(
          <TableHead key={head} scope="col" className="px-4 h-12 font-medium whitespace-nowrap ">{head}</TableHead>))}
  </TableRow>
  </TableHeader>
  <TableBody>
    {
      inventory.map((inven) => (
        <TableRow key={inven._id} className="border-b border-border hover:bg-muted">
          <TableCell className="p-4  w-fit whitespace-nowrap">{products.find((prod) => prod._id === inven.productId)?.name || "Unknown"}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap">{inven.availableUnits}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap">{inven.soldUnits}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap">
            <Link href={`/dashboard/inventory/edit/${inven._id}`}>
               <Button variant='outline' className='hover:bg-primary hover:text-primary-foreground text-primary shadow-none'><EditIcon size={16} /></Button>  
            </Link>
          </TableCell>
        </TableRow>
      ))  
    }
  </TableBody>
</Table>
    </main>
  )
}

export default InventoryPage