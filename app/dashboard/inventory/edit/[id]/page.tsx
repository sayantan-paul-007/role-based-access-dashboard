'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const EditInventory = () => {
  const router = useRouter();
  const { id } = useParams(); // This is your inventoryId or productId based on routing
  const inventoryId = id?.toString();

  const [formData, setFormData] = useState({
    availableUnits: "",
    soldUnits: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!inventoryId) return;

    const fetchInventory = async () => {
      try {
        const { data } = await axios.get(`/api/inventory/${inventoryId}`);
        setFormData({
          availableUnits: data.availableUnits.toString(),
          soldUnits: data.soldUnits.toString(),
        });
      } catch (err) {
        console.error("Failed to fetch inventory:", err);
        alert("Inventory not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, [inventoryId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        availableUnits: parseInt(formData.availableUnits),
        soldUnits: parseInt(formData.soldUnits),
      };
      await axios.put(`/api/inventory/${inventoryId}`, payload);
      alert("Inventory updated!");
      router.push("/dashboard/inventory");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating inventory.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Inventory</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="availableUnits"
          type="number"
          value={formData.availableUnits}
          onChange={handleChange}
          placeholder="Available Units"
          className="border w-full p-2"
        />
        <input
          name="soldUnits"
          type="number"
          value={formData.soldUnits}
          onChange={handleChange}
          placeholder="Sold Units"
          className="border w-full p-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Inventory
        </button>
      </form>
    </div>
  );
};

export default EditInventory;
