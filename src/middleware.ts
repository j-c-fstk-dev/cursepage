import { NextResponse, type NextRequest } from 'next/server';
import { verifySession } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('session')?.value;
  const session = await verifySession(cookie);
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');
  const isProtectedPage = pathname.startsWith('/curso');

  if (isAuthPage) {
    if (session) {
      return NextResponse.redirect(new URL('/curso', request.url));
    }
    return NextResponse.next();
  }

  if (isProtectedPage) {
    if (!session) {
      const from = pathname;
      return NextResponse.redirect(new URL(`/login?from=${from}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/curso/:path*', '/login', '/register'],
};
