import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  console.log('🔐 Token from cookie:', token); // <-- Add this

  if (!token) {
    console.log('❌ No token found, redirecting to /login');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    console.log('✅ Verified token payload:', payload);
    return NextResponse.next();
  } catch (err) {
    console.error('❌ JWT verification failed:', err);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // protect everything under /dashboard
};
