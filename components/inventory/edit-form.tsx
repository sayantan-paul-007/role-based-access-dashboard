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
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  availableUnits: z.coerce.number().min(0, { message: "Units must be a positive number." }),
  soldUnits: z.coerce.number().min(0, { message: "Units must be a positive number." }),
});

type FormSchemaType = z.infer<typeof formSchema>;

interface Product {
  _id: string;
  name: string;
}

const EditInventoryForm = () => {
  const router = useRouter();
  const { id } = useParams();
  const inventoryId = id?.toString();

  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState<string>("");

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      availableUnits: 0,
      soldUnits: 0,
    },
  });

  useEffect(() => {
    if (!inventoryId) return;

    const fetchData = async () => {
      try {
        const [inventoryRes, productRes] = await Promise.all([
          axios.get(`/api/inventory/${inventoryId}`),
          axios.get(`/api/products`),
        ]);

        const inventory = inventoryRes.data;
        const allProducts: Product[] = productRes.data.products;

        const matchedProduct = allProducts.find(
          (p) => p._id === inventory.productId
        );
        setProductName(matchedProduct?.name || "Unknown Product");

        form.reset({
          availableUnits: inventory.availableUnits,
          soldUnits: inventory.soldUnits,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("Failed to load inventory or products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [inventoryId, form]);

  const onSubmit = async (data: FormSchemaType) => {
    try {
      await axios.put(`/api/inventory/${inventoryId}`, data);
      alert("Inventory updated!");
      router.push("/dashboard/inventory");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating Inventory.");
    }
  };
  if (loading) return <div className="p-4">Loading...</div>;

  return (
    
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <FormLabel>Product</FormLabel>
                <div className="border rounded-md mt-2 px-3 py-2 bg-muted text-muted-foreground">
                  {productName}
                </div>
              </div>

              <FormField
                control={form.control}
                name="availableUnits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Units</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter Available Units" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="soldUnits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sold Units</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter Sold Units" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Update Inventory</Button>
            </form>
          </Form>
        
  );
};

export default EditInventoryForm;
