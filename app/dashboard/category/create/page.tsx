    'use client';

    import { useState} from "react";
    import axios from "axios";
    import { useRouter } from "next/navigation";
    const CreateCategory = () => {
        const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    });
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        const payload = {
            ...formData,
        };
        const res = await axios.post("/api/category", payload);
        if (res.status === 200 || res.status === 201) {
        alert("Category created!");
        setFormData({
          name: "",
          description: "",
        });
        router.push('/dashboard/category')
      } else {
        alert("Failed to create category.");
      }
        } catch (err) {
        console.error(err);
        alert("Error creating category.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Create Category</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3">
            <input
            name="name"
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
            />
            

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

    export default CreateCategory;
