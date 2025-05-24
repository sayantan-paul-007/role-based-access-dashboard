    'use client';

    import { useState, useEffect } from "react";
    import axios from "axios";
    import { useRouter } from "next/navigation";
    const CreateProduct = () => {
        const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        categoryId: "",
    });
    interface Category {
    _id: string;
    name: string;
    }
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch("/api/category")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        const payload = {
            ...formData,
            price: parseFloat(formData.price),
        };
        const res = await axios.post("/api/products", payload);
        if (res.status === 200 || res.status === 201) {
        alert("Product created!");
        setFormData({
          name: "",
          description: "",
          price: "",
          categoryId: "",
        });
         router.push('/dashboard/products')
      } else {
        alert("Failed to create product.");
      }
        } catch (err) {
        console.error(err);
        alert("Error creating product.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3">
            <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border w-full p-2"
            required
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
            required
            />
        <select
    name="categoryId"
    value={formData.categoryId}
    onChange={(e) => {
        if (e.target.value === "new") {
        router.push("/dashboard/category/create");
        } else {
        setFormData({ ...formData, categoryId: e.target.value });
        }
    }}
    className="border w-full p-2"
    >
    <option value="">Select a Category</option>
    {categories.map((cat) => (
        <option key={cat._id} value={cat._id}>
        {cat.name}
        </option>
    ))}
    <option value="new">+ Create New Category</option>
    </select>

            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            Submit
            </button>
        </form>
        </div>
    );
    };

    export default CreateProduct;
