import { NextResponse, NextRequest } from "next/server";
import connectToDB from "@/lib/db";
import Product from "@/models/Product";
import Inventory from "@/models/Inventory";

export async function GET(req: Request,
  { params }: { params: Promise<{ id: string }> }) {
  await connectToDB();
  const { id } = await params;
  try {
    const product = await Product.findById(id);
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
}
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await connectToDB();
  const { id } = await params;

  try {
    const data = await request.json();

    // Separate product and inventory data
    const { inventoryData, ...productData } = data;

    // Update product
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
      new: true,
    });

    // Update inventory
    let updatedInventory = null;
    if (inventoryData) {
      updatedInventory = await Inventory.findOneAndUpdate(
        { productId: id },
        inventoryData,
        { new: true, upsert: true } // upsert creates inventory if it doesn't exist
      );
    }

    return NextResponse.json({
      message: "Product and Inventory updated successfully",
      product: updatedProduct,
      inventory: updatedInventory,
    });
  } catch (err) {
    console.error("Update error:", err);
    return NextResponse.json(
      { error: "Error updating product or inventory" },
      { status: 500 }
    );
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectToDB();
  
    const { id } = await params;
  
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
    await Inventory.findOneAndDelete({ productId: id });
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Server error deleting product" },
      { status: 500 }
    );
  }
}