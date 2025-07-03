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
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EditIcon, Plus } from 'lucide-react';
import { useUser } from '@/context/userContext';
const CategoryPage = () => {
    const CategoryHeader = ['Category','Description']
    interface Category {
        _id: string;
        name: string;
        description:string;
        }
        const [categories, setCategories] = useState<Category[]>([]);
    
       useEffect(() => {
  axios.get('/api/category')
    .then(response => {
      setCategories(response.data);  
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
}, []);
const { user } = useUser();
  return (
    <main className='p-8'>
      <section className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold mb-4'>Categories</h1>
        
        <Link className={`${user?.role ==='master'?"":'hidden'}`} href='/dashboard/category/create'><Button><span><Plus size={24} /></span>Create Category</Button></Link>
      </section>

        <Table className='border  text-md border-border' >
  <TableHeader >
    <TableRow>
        {CategoryHeader.map((head)=>(
          <TableHead key={head} scope="col" className="px-4 h-12 font-medium whitespace-nowrap ">{head}</TableHead>))}
  </TableRow>
  </TableHeader>
  <TableBody>
    {
      categories.map((category) => (
        <TableRow key={category._id} className="border-b border-border hover:bg-muted">
          <TableCell className="p-4  w-fit whitespace-nowrap">{category.name}</TableCell>
          <TableCell className="p-4  w-fit whitespace-nowrap">{category.description}</TableCell>
          <TableCell className={`p-4  w-fit whitespace-nowrap ${user?.role ==='master'?"":'hidden'}`}>
            <Link href={`/dashboard/category/edit/${category._id}`}>
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

export default CategoryPage