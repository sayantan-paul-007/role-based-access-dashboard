import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // or your preferred method
import { getJwtSecretKey } from '@/lib/auth';
export async function GET(request: Request) {
  const cookie = request.headers.get('cookie') || '';
  const tokenMatch = cookie.match(/token=([^;]+)/);

  if (!tokenMatch) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const token = tokenMatch[1];

  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey()); // your key function
    const user = {
      username: payload.username,
      role: payload.role,
    };

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
