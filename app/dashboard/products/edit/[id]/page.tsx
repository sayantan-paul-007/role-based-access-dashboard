'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

interface Category {
  _id: string;
  name: string;
}

const EditProduct = () => {
  const router = useRouter();
  const params = useParams();

  const productId = params?.id?.toString(); 

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const fetchData = async () => {
      try {
        const [categoryRes, productRes] = await Promise.all([
          fetch("/api/category").then(res => res.json()),
          axios.get(`/api/products/${productId}`)
        ]);

        setCategories(categoryRes);

        const product = productRes.data;
        setFormData({
          name: product.name,
          description: product.description || "",
          price: product.price.toString(),
          categoryId: product.categoryId,
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
      };
      await axios.put(`/api/products/${productId}`, payload);
      alert("Product updated!");
      router.push("/dashboard/products");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating product.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border w-full p-2"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="border w-full p-2"
        />
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border w-full p-2"
        />
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          className="border w-full p-2"
        >
          <option value="">Select a Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
