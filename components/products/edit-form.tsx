'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string(),
   price: z.coerce.number().min(0, { message: "Price must be a positive number." }),
  categoryId: z.string().min(1, { message: "Category is required." }),

});
export interface Category {
  _id: string;
  name: string;
}

type FormSchemaType = z.infer<typeof formSchema>;

const EditProductForm = () => {
     const router = useRouter();
  const { id } = useParams();
  const productId = id?.toString();

  const [loading, setLoading] = useState(true);
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
    if (!productId) return;

    const fetchData = async () => {
      try {
        const [categoryRes, productRes] = await Promise.all([
          fetch("/api/category").then(res => res.json()),
          axios.get(`/api/products/${productId}`),
        ]);

        setCategories(categoryRes);

        const product = productRes.data;
        form.reset({
          name: product.name,
          description: product.description || "",
          price: product.price,
          categoryId: product.categoryId,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, form]);

  const onSubmit = async (data: FormSchemaType) => {
    try {
      await axios.put(`/api/products/${productId}`, data);
      alert("Product updated!");
      router.push("/dashboard/products");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating product.");
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Name" {...field} />
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Product Description" {...field} />
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
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Product Price" {...field} />
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
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
</div>
             

              <Button type="submit">
                Update Product
              </Button>
            </form>
          </Form>
  )
}

export default EditProductForm