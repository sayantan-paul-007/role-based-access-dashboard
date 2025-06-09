"use client"
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
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Category name must be at least 2 characters.",
  }),   
  description: z.string(),
});
type FormSchemaType = z.infer<typeof formSchema>;
const CreateCategoryForm = () =>  {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const onSubmit = async (data: FormSchemaType) => {
    try {
      const res = await axios.post("/api/category", data);
      if (res.status === 200 || res.status === 201) {
        alert("Category created!");
        form.reset();
        router.push('/dashboard/category');
      } else {
        alert("Failed to create category.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating category.");
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
                    <FormLabel>Enter Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Category Name" {...field} required />
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
                    <FormLabel>Enter Category Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Category Description" className="resize-none" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                Create Category
              </Button>
            </form>
          </Form>
  )
}
export default CreateCategoryForm