import mongoose, { Schema, Document, Types } from "mongoose";

export interface IInventory extends Document {
  productId: Types.ObjectId; // One-to-one
  availableUnits: number;
  soldUnits: number;
}

const InventorySchema: Schema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", unique: true, required: true },
  availableUnits: { type: Number, required: true },
  soldUnits: { type: Number, required: true }
});

export default mongoose.models.Inventory || mongoose.model<IInventory>("Inventory", InventorySchema);
