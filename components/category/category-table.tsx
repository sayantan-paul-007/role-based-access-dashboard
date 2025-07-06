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
import { EditIcon } from 'lucide-react';
import { useUser } from '@/context/userContext';
import { Skeleton } from '@/components/ui/skeleton';
const CategoryTable = () => {
  const CategoryHeader = ['Category', 'Description']
  
  interface Category {
    _id: string
    name: string
    description: string
  }

  const [categories, setCategories] = useState<Category[] | null>(null) 
  const { user } = useUser()

  useEffect(() => {
    axios.get('/api/category')
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error('Error fetching categories:', error)
        setCategories([]) 
      })
  }, [])

  return (
    <Table className='border text-md border-border '>
      <TableHeader>
        <TableRow>
          {CategoryHeader.map((head) => (
            <TableHead key={head} scope="col" className="px-4 h-12 font-medium whitespace-nowrap">
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {!categories ? (
          Array.from({ length: 3 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="p-4 w-2/6 whitespace-nowrap">
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell className={`p-4  ${user?.role==='master'?'w-1/2':'w-fit'} whitespace-nowrap`}>
                <Skeleton className="h-4 w-32" />
              </TableCell>
              { user?.role === 'master' && (
                <TableCell className="p-4 w-fit whitespace-nowrap">
                  <Skeleton className="h-4 w-8" />
                </TableCell>
                )}
            </TableRow>
          ))
        ) : categories.length > 0 ? (
          categories.map((category) => (
            <TableRow key={category._id} className="border-b border-border hover:bg-muted">
              <TableCell className="p-4 w-2/6 whitespace-nowrap">{category.name}</TableCell>
              <TableCell className={`p-4  ${user?.role==='master'?'w-1/2':'w-fit'} whitespace-nowrap`}>{category.description}</TableCell>
              <TableCell className={`p-4 w-fit whitespace-nowrap ${user?.role === 'master' ? '' : 'hidden'}`}>
                <Link href={`/dashboard/category/edit/${category._id}`}>
                  <Button variant='outline' className='hover:bg-primary hover:text-primary-foreground text-primary shadow-none'>
                    <EditIcon size={16} />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="text-center text-sm text-muted-foreground py-6">
              No categories found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}


export default CategoryTable