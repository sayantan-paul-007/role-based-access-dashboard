import { NextResponse } from "next/server";
import Category from "@/models/Category";
import connectToDB from "@/lib/db";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  try {
    await connectToDB();
    const category = await Category.findById(params.id);

    if (!category) {
      return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json({ message: "Error fetching category" }, { status: 500 });
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