import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { roleRoutes } from '@/lib/accessControl'; 
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      if (typeof payload.role !== 'string') {
         throw new Error('Invalid role type');
        }
      const userRole = payload.role;

      // Check if route is protected by role
      for (const route in roleRoutes) {
        if (pathname.startsWith(route)) {
          const allowedRoles = roleRoutes[route];
          if (!allowedRoles.includes(userRole)) {
           return NextResponse.redirect(new URL('/not-found', request.url)); // or /404
          }
        }
      }

      return NextResponse.next();
    } catch (error) {
      console.error('JWT verification failed:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/dashboard/:path*'], // protect everything under /dashboard
};

// import { NextRequest, NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';
// import { roleRoutes } from '@/lib/accessControl';

// const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// export async function middleware(req: NextRequest) {
//     const { pathname } = req.nextUrl;
//    if (pathname.startsWith('/dashboard')) {
//   const token = req.cookies.get('token')?.value;
//   console.log('🔐 Token from cookie:', token); // <-- Add this

//   if (!token) {
//     console.log('❌ No token found, redirecting to /login');
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   try {
//     const { payload } = await jwtVerify(token, secret);
//     console.log('✅ Verified token payload:', payload);
//     return NextResponse.next();
//   } catch (err) {
//     console.error('❌ JWT verification failed:', err);
//     return NextResponse.redirect(new URL('/login', req.url));
//   }
// }

// export const config = {
//   matcher: ['/dashboard/:path*'], // protect everything under /dashboard
// };
