import { NextResponse } from "next/server";
import Category from "@/models/Category";
import connectToDB from "@/lib/db";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const { id } = await params;
    const category = await Category.findById(id);
    
    if (!category) {
      return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching category", error }, { status: 500 });
  }
}
export async function POST(req: Request) {
  await connectToDB();

  const body = await req.json();

  try {
    const categories = await Category.create(body);
    return NextResponse.json({ categories });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Failed to create categories" }, { status: 500 });
  }
}