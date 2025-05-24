import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  categoryId: Types.ObjectId; 
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true } 
});

export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
