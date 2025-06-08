import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; 
import { getJwtSecretKey } from '@/lib/auth';
export async function GET(request: Request) {
  const cookie = request.headers.get('cookie') || '';
  const tokenMatch = cookie.match(/token=([^;]+)/);

  if (!tokenMatch) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const token = tokenMatch[1];

  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey()); 
    const user = {
      username: payload.username,
      role: payload.role,
      imageURL: payload.imageURL,
    };

    return NextResponse.json({ user });
  } catch (err) {
    console.error('JWT verification failed:', err);
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
