import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { SignJWT } from 'jose';
import { getJwtSecretKey } from "@/lib/auth";
export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const { username, password } = body;
  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
 const token = await new SignJWT({ username, role: user.role, imageURL: user.imageURL || "" })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .setIssuedAt()
    .sign(getJwtSecretKey());
  const response = NextResponse.json(
    { message: 'Login successful', user: { role: user.role,imageURL: user.imageURL || "" } }, 
    { status: 200 }
  );
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  return response;
}
