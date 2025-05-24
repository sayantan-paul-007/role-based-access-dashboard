import { NextResponse } from "next/server"; 
import Product from "@/models/Product";
import connectToDB from "@/lib/db";

export async function POST(req: Request) {
  await connectToDB();

  const body = await req.json();

  try {
    const product = await Product.create(body);
    return NextResponse.json({ product });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
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
