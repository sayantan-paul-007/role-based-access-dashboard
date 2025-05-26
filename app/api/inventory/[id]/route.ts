import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Inventory from "@/models/Inventory";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }>}) {
  await connectToDB();
const { id } = await params;
  try {
    const inventory = await Inventory.findById(id);
    if (!inventory) {
      return NextResponse.json({ error: "Inventory not found" }, { status: 404 });
    }
    return NextResponse.json(inventory);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await connectToDB();
  const { id } = await params;

  try {
    const data = await request.json();

    // Update inventory by its _id
    const updatedInventory = await Inventory.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedInventory) {
      return NextResponse.json(
        { error: "Inventory not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Inventory updated successfully",
      inventory: updatedInventory,
    });
  } catch (err) {
    console.error("Inventory update error:", err);
    return NextResponse.json(
      { error: "Error updating inventory" },
      { status: 500 }
    );
  }
}