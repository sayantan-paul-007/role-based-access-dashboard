'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from '@/context/userContext';
import { Plus } from 'lucide-react';
import CategoryTable from '@/components/category/category-table';
const CategoryPage = () => {
  const { user } = useUser();
  return (
    <main className='p-8'>
      <section className='flex flex-col '>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-2xl font-bold mb-4 '>Categories</h1>
          <Link className={`${user?.role === 'master' ? "" : 'hidden'}`} href='/dashboard/category/create'><Button><span><Plus size={24} /></span>Create Category</Button></Link>
        </div>
        <CategoryTable />
      </section>
    </main>
  )
}

export default CategoryPage