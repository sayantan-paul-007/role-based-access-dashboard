import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Category from "@/models/Category";
import Product from "@/models/Product";
import Inventory from "@/models/Inventory";

export async function GET() {
  try {
    await connectToDB();

    // Count categories and products
    const totalCategories = await Category.countDocuments();
    const totalProducts = await Product.countDocuments();

    // Aggregate available and sold units
    const [availableAgg, soldAgg] = await Promise.all([
      Inventory.aggregate([
        { $group: { _id: null, totalAvailableUnits: { $sum: "$availableUnits" } } }
      ]),
      Inventory.aggregate([
        { $group: { _id: null, totalSoldUnits: { $sum: "$soldUnits" } } }
      ])
    ]);

    const totalAvailableUnits = availableAgg[0]?.totalAvailableUnits ?? 0;
    const totalSoldUnits = soldAgg[0]?.totalSoldUnits ?? 0;

    return NextResponse.json({
      totalCategories,
      totalProducts,
      totalAvailableUnits,
      totalSoldUnits
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
