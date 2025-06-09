"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from "@/components/ui/textarea"
import * as z from 'zod';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string(),
   price: z.coerce.number().min(0, { message: "Price must be a positive number." }),
  categoryId: z.string().min(1, { message: "Category is required." }),

});
type FormSchemaType = z.infer<typeof formSchema>;
interface Category {
  _id: string;
  name: string;
}
const CreateProductForm = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      categoryId: "",
    },
  });
   useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const onSubmit = async (data: FormSchemaType) => {
    try {
      const res = await axios.post("/api/products", data);
      if (res.status === 200 || res.status === 201) {
        alert("Product created!");
        form.reset();
        router.push('/dashboard/products');
      } else {
        alert("Failed to create products.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating products.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product Name" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Product Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Product Description" className="resize-none" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
           <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Enter Product Price</FormLabel>
              <FormControl>
                <Input placeholder="Enter Product Price"  {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>Enter Product Category</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category._id} value={category._id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
       

        <Button type="submit">
          Create Product
        </Button>
      </form>
    </Form>
  )
}
export default CreateProductForm