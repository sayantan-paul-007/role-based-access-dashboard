import { NextResponse } from "next/server";
import Category from "@/models/Category";
import connectToDB from "@/lib/db";

export async function GET() {
   try {
    await connectToDB(); 
    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching categories", error }, { status: 500 });
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