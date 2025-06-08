import { NextResponse } from "next/server"; 
import Inventory from "@/models/Inventory";
import connectToDB from "@/lib/db";

export async function POST(req: Request) {
  await connectToDB();

  const body = await req.json();

  try {
    const inventory = await Inventory.create(body);
    return NextResponse.json({ inventory });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Failed to create inventory" }, { status: 500 });
  }
}
export async function GET() {
   try {
    await connectToDB(); 
    const inventory = await Inventory.find();
    return NextResponse.json({inventory});
  } catch (error) {
    return NextResponse.json({ message: "Error fetching inventory", error }, { status: 500 });
  }
}
