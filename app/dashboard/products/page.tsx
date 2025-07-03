'use client';
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EditIcon, Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from "@/context/userContext";
const ProductPage = () => {
  const { user } = useUser();
     const ProductsHeader = ['Products', 'Description', 'Category','Price']
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
  return (
     <main className='p-8'>
      <section className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold mb-4'>Products</h1>
        <Link className={`p-4  w-fit whitespace-nowrap ${user?.role ==='master'?"":'hidden'}`} href='/dashboard/products/create'><Button><span><Plus size={24} /></span>Add Product</Button></Link>
      </section>

        <Table className='border  text-md border-border' >
  <TableHeader >
    <TableRow>
        {ProductsHeader.map((head, index)=>(
          <TableHead key={head} scope="col" className={`px-4 h-12 font-medium whitespace-nowrap ${index !== ProductsHeader.length-1 ? 'text-left' : 'text-center'}`}>{head}</TableHead>))}
  </TableRow>
  </TableHeader>
  <TableBody>
    {
      products.map((product) => (
        <TableRow key={product._id} className="border-b border-border hover:bg-muted">
          <TableCell className="p-4  w-fit whitespace-nowrap">{product.name}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap">{product.description}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap">
            {categories.find((cat) => cat._id === product.categoryId)?.name || "Unknown"}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap text-center">{product.price}</TableCell>
          <TableCell className={`p-4  w-fit whitespace-nowrap ${user?.role ==='master'?"":'hidden'}`}>
            <div className="flex justify-center gap-4">
            <Link href={`/dashboard/products/edit/${product._id}`}>
              <Button variant='outline' className='hover:bg-primary hover:text-primary-foreground text-primary shadow-none'><EditIcon size={16} /></Button>  
            </Link> 
              <Button onClick={() => handleDeleteProduct(product._id)} variant='outline' className='hover:bg-destructive hover:text-destructive-foreground text-destructive shadow-none'><Trash size={16} /></Button>  
            </div>
            </TableCell>
        </TableRow>
      ))  
    }
  </TableBody>
</Table>
    </main>
  )
}

export default ProductPage