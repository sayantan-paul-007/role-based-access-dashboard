import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Category from "@/models/Category";
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();

  const { name, description } = await req.json();

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      params.id,
      { name, description },
      { new: true }
    );

    if (!updatedCategory) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Category updated", category: updatedCategory });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
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