import mongoose, { Document, Model, Schema } from "mongoose";
export interface IUser extends Document {
  username: string;
  password: string;
  role: string;
  imageURL:string;
}
const UserSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  imageURL: { type: String, required: true },
});
export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
