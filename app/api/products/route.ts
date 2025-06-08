import { NextResponse } from "next/server";
import Product from "@/models/Product";
import Inventory from "@/models/Inventory";
import connectToDB from "@/lib/db";

export async function POST(req: Request) {
  await connectToDB();

  const body = await req.json();
  const { name, description, price, categoryId } = body;

  try {
    // Step 1: Create the Product first
    const product = await Product.create({
      name,
      description,
      price,
      categoryId,
    });

    // Step 2: Create inventory only after product is successfully created
    const inventory = await Inventory.create({
      productId: product._id,
      availableUnits: 0,
      soldUnits: 0,
    });

    return NextResponse.json({ product, inventory });
  } catch (err) {
    console.error("Error creating product and inventory:", err);
    return NextResponse.json(
      { error: "Failed to create product and inventory" },
      { status: 500 }
    );
  }
}
export async function GET() {
   try {
    await connectToDB(); 
    const products = await Product.find();
    return NextResponse.json({products});
  } catch (error) {
    return NextResponse.json({ message: "Error fetching products", error }, { status: 500 });
  }
}
