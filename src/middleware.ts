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
      if (session.isAuthorized) {
        return NextResponse.redirect(new URL('/curso', request.url));
      } else {
        return NextResponse.redirect(new URL('/vendas', request.url));
      }
    }
    return NextResponse.next();
  }

  if (isProtectedPage) {
    if (!session) {
      const from = pathname;
      return NextResponse.redirect(new URL(`/login?from=${from}`, request.url));
    }
    if (!session.isAuthorized) {
      return NextResponse.redirect(new URL('/vendas', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/curso/:path*', '/login', '/register', '/vendas'],
};
