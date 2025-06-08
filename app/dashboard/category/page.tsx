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
  return (
    <main className='p-8'>
      <section className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold mb-4'>Categories</h1>
        <Link href='/dashboard/category/create'><Button>Add Categories</Button></Link>
      </section>

        <Table className='border  text-md border-border' >
  <TableHeader >
    <TableRow className='hover:bg-muted'>
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
        </TableRow>
      ))  
    }
  </TableBody>
</Table>
    </main>
  )
}

export default CategoryPage