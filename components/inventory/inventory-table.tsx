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
import { useUser } from '@/context/userContext';
import axios from 'axios';
import { Skeleton } from '../ui/skeleton';
const InventoryTable = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Products[]>([]);
  const [inventory, setInventory] = useState<Inventory[]>([]);
  const InventoryHeader = ['Product Name', 'Available Units', 'Sold Units']
  interface Products {
    _id: string;
    name: string;
  }

  interface Inventory {
    _id: string;
    productId: string;
    availableUnits: number;
    soldUnits: number;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await fetch("/api/products").then(res => res.json());
        await axios.get("/api/inventory").then(
          response => { setInventory(Array.isArray(response.data.inventory) ? response.data.inventory : []); }
        );

        setProducts(productRes.products || []);

      } catch (err) {
        console.error("Error fetching data:", err);
        setInventory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (

    <Table className='border  text-md border-border' >
      <TableHeader >
        <TableRow>
          {InventoryHeader.map((head, index) => (
            <TableHead key={head} scope="col" className={`px-4 h-12 font-medium whitespace-nowrap ${index === 0 ? 'text-left' : 'text-center'}`}>{head}</TableHead>))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="p-4 w-2/6 whitespace-nowrap">
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell className="p-4 w-1/6 whitespace-nowrap text-center">
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableCell>
              <TableCell className="p-4 w-1/6 whitespace-nowrap text-center">
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableCell>
              {user?.role === 'master' && (
                <TableCell className="p-4 w-fit whitespace-nowrap text-center">
                  <Skeleton className="h-4 w-8 mx-auto" />
                </TableCell>
              )}
            </TableRow>
          ))
        ) : inventory.length > 0 ? (
          inventory.map((inven) => (
            <TableRow key={inven._id} className="border-b border-border hover:bg-muted">
              <TableCell className="p-4 w-2/6 whitespace-nowrap">
                {products.find((prod) => prod._id === inven.productId)?.name || "Unknown"}
              </TableCell>
              <TableCell className="p-4 w-1/6 whitespace-nowrap text-center">{inven.availableUnits}</TableCell>
              <TableCell className="p-4 w-1/6 whitespace-nowrap text-center">{inven.soldUnits}</TableCell>
              {user?.role === 'master' && (
                <TableCell className="p-4 w-fit whitespace-nowrap text-center">
                  <Link href={`/dashboard/inventory/edit/${inven._id}`}>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground text-primary shadow-none">
                      <EditIcon size={16} />
                    </Button>
                  </Link>
                </TableCell>
              )}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={user?.role === 'master' ? 4 : 3} className="text-center text-sm text-muted-foreground py-6">
              No Inventory found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>

    </Table>



  )
}

export default InventoryTable