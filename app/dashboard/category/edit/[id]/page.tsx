'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const EditCategory = () => {
  const router = useRouter();
  const { id } = useParams(); 
  const categoryId = id?.toString();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) return;

    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(`/api/category/${categoryId}`);
        setFormData({
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
  }, [categoryId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/category/${categoryId}`, formData);
      alert("Category updated!");
      router.push("/dashboard/category"); 
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating category.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Category Name"
          className="border w-full p-2"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Category Description"
          className="border w-full p-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
