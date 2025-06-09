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

// Zod schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Category name must be at least 2 characters.",
  }),
  description: z.string().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const EditCategoryForm = () => {
     const router = useRouter();
  const { id } = useParams();
  const categoryId = id?.toString();

  const [loading, setLoading] = useState(true);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
useEffect(() => {
    if (!categoryId) return;

    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(`/api/category/${categoryId}`);
        form.reset({
          name: data.name,
          description: data.description,
        });
      } catch (err) {
        console.error("Failed to fetch category:", err);
        alert("Category not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId, form]);
  const onSubmit = async (data: FormSchemaType) => {
    try {
      await axios.put(`/api/category/${categoryId}`, data);
      alert("Category updated!");
      router.push("/dashboard/category");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating category.");
    }
  };

  if (loading) {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category name" {...field} />
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
                    <FormLabel>Category Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter description" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                Update Category
              </Button>
            </form>
          </Form>
  )
}

export default EditCategoryForm